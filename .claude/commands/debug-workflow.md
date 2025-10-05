# Debug Workflow

Systematic debugging workflow using MCP servers.

## Debugging Pipeline

### Stage 1: Problem Analysis (Sequential Thinking)
```
mcp__sequential_thinking__sequentialthinking(
  "Analyze the bug: [description]"
)
```
- Break down the problem
- Form hypotheses
- Plan investigation approach

### Stage 2: Code Investigation (Serena)
```
mcp__serena__find_symbol("[buggy_function]")
mcp__serena__search_for_pattern("[error_pattern]")
```
- Locate relevant code
- Trace execution path
- Find similar patterns

### Stage 3: Research (Context7)
```
mcp__context7__search("[error_message] [technology]")
```
- Look up error documentation
- Find known issues
- Check best practices

### Stage 4: Reproduce & Diagnose (Desktop Commander)
```
mcp__desktop_commander__execute_command("[test_command]")
mcp__desktop_commander__read_file("[log_file]")
```
- Reproduce the bug
- Examine logs
- Test edge cases

### Stage 5: Implement Fix (Desktop Commander + Serena)
```
1. Serena: Navigate to buggy code
2. Desktop Commander: Apply fix
3. Desktop Commander: Run tests
4. Desktop Commander: Verify fix works
```

### Stage 6: Document (Memory)
```
mcp__memory__create_entities({
  "type": "bug_fix",
  "bug": "...",
  "root_cause": "...",
  "solution": "...",
  "prevention": "..."
})
```

## Example: "Chat widget not updating"

**1. Analyze (Sequential Thinking)**
- Hypothesis: Convex subscription issue
- Plan: Check useQuery, check sessionId

**2. Investigate (Serena)**
- find_symbol("ChatWidget")
- find_symbol("useQuery")
- Spot: sessionId is undefined

**3. Research (Context7)**
- Search: "Convex useQuery not updating"
- Find: Need proper dependency array

**4. Diagnose (Desktop Commander)**
- Read ChatWidget.tsx
- Check console logs
- Confirm sessionId issue

**5. Fix (Desktop Commander + Serena)**
- Edit ChatWidget.tsx
- Fix sessionId initialization
- Test in browser → works ✅

**6. Document (Memory)**
- Save bug pattern: "Convex hooks require stable sessionId"

## Quality Checks

Before marking bug as fixed:
- ✅ Bug no longer reproduces
- ✅ Tests pass (if applicable)
- ✅ No new bugs introduced
- ✅ Root cause documented in Memory
- ✅ Prevention strategy identified

Use **task-orchestrator** to run this debugging workflow.
