#!/usr/bin/env bash
# Commit-message guard (PreToolUse on Bash).
# BLOCKS `git commit -m "..."` when the message doesn't match the
# Conventional-Commit prefixes from CLAUDE.md §8:
#   <prefix>(<scope>): <summary>
#   prefixes: feat fix spec brief qa infra chore refactor docs
#
# Only inspects commits made via -m / -F-less inline messages. Editor-based
# commits (no -m) are passed through (validate via commit-msg git hook instead).
#
# Exit 0 = allow. Exit 2 = block, stderr fed back to Claude.

input=$(cat)

python3 - "$input" <<'PY'
import json, re, sys
try:
    data = json.loads(sys.argv[1])
except Exception:
    sys.exit(0)

cmd = (data.get("tool_input") or {}).get("command", "")
if not cmd:
    sys.exit(0)

# Only care about git commit invocations.
if not re.search(r"\bgit\s+commit\b", cmd):
    sys.exit(0)

# Extract the -m / --message value (single or double quoted, or bare).
m = re.search(r"(?:-m|--message)[=\s]+(['\"])(.*?)\1", cmd, re.DOTALL)
if not m:
    m = re.search(r"(?:-m|--message)[=\s]+(\S+)", cmd)
    msg = m.group(1) if m else None
else:
    msg = m.group(2)

# No inline message (editor commit) — let it through.
if msg is None:
    sys.exit(0)

pattern = r"^(feat|fix|spec|brief|qa|infra|chore|refactor|docs)(\([^)]+\))?: .+"
if re.match(pattern, msg.strip()):
    sys.exit(0)

sys.stderr.write(
    "❌ commit-msg guard: message does not follow CLAUDE.md §8 convention.\n"
    f"   Got:      {msg.strip()[:80]}\n"
    "   Expected: <prefix>(<scope>): <summary>\n"
    "   Prefixes: feat fix spec brief qa infra chore refactor docs\n"
    "   Example:  feat(employees): add deployment history timeline\n"
)
sys.exit(2)
PY
