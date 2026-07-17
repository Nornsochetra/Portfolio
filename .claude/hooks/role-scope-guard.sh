#!/usr/bin/env bash
# Role-scope guard (PreToolUse on Edit/Write/MultiEdit/NotebookEdit).
# Non-blocking: WARNS when a write lands outside the user's role scope.
# Source of truth for scopes: CLAUDE.md §2. Configured role: Dev / Tech Lead.
#
# Dev/Tech Lead writes: docs/specs/, backend/, frontend/, root configs + meta.
# Foreign zones (warn): docs/po/, docs/qa/ (except docs/qa/bugs/), docs/devops/,
#                       docs/pm/.
# Bug files are the universal exception — any role may file a bug.
#
# Exit 0 = silent allow. Exit 1 = non-blocking warning (tool still runs).

input=$(cat)

rel=$(CLAUDE_PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$PWD}" python3 - "$input" <<'PY'
import json, os, sys
try:
    data = json.loads(sys.argv[1])
except Exception:
    print("")
    sys.exit(0)
fp = (data.get("tool_input") or {}).get("file_path", "")
if not fp:
    print("")
    sys.exit(0)
root = os.environ.get("CLAUDE_PROJECT_DIR", os.getcwd())
try:
    rel = os.path.relpath(fp, root)
except Exception:
    rel = fp
print(rel.replace(os.sep, "/"))
PY
)

[ -z "$rel" ] && exit 0
case "$rel" in
  ../*) exit 0 ;;  # outside project — let the harness handle it
esac

# Bug files: universal exception.
case "$rel" in
  docs/qa/bugs/*) exit 0 ;;
esac

zone=""
case "$rel" in
  docs/po/*)     zone="PO (docs/po/)" ;;
  docs/qa/*)     zone="QA (docs/qa/)" ;;
  docs/devops/*) zone="DevOps (docs/devops/)" ;;
  docs/pm/*)     zone="PM (docs/pm/)" ;;
esac

if [ -n "$zone" ]; then
  echo "⚠️  role-scope guard: '$rel' is in $zone's zone, not Dev/Tech Lead's." >&2
  echo "   Per CLAUDE.md §2/§3, file a change-request instead of writing here" >&2
  echo "   (e.g. docs/po/change-requests.md or docs/devops/change-requests.md)." >&2
  echo "   Bugs are the one exception — those go in docs/qa/bugs/." >&2
  exit 1
fi

exit 0
