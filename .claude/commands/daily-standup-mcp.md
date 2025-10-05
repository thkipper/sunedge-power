# Daily Standup MCP

MCP-powered morning standup for planning today's work.

## Workflow

### 1. Review Yesterday (via Memory MCP)
```
mcp__memory__search_nodes("yesterday", "completed_tasks")
```
- What was completed?
- What patterns were saved?
- Any decisions made?

### 2. Check Current State (via Serena MCP)
```
mcp__serena__get_symbols_overview()
```
- Codebase structure
- Recent changes
- Work in progress

### 3. Load Tasks (via TaskMaster AI & Shrimp)
```
mcp__taskmaster_ai__get_tasks()
mcp__shrimp_task_manager__list_tasks()
```
- Open tasks
- Priorities
- Dependencies

### 4. Plan Today (via Sequential Thinking)
```
mcp__sequential_thinking__sequentialthinking(
  "Plan today's development priorities based on open tasks"
)
```

### 5. Verify Environment (via Desktop Commander)
```bash
mcp__desktop_commander__execute_command("git status")
mcp__desktop_commander__execute_command("npm run build")
```

## Output Format

```
# Daily Standup - [Date]

## ✅ Completed Yesterday
- Task 1
- Task 2

## 🎯 Today's Focus
1. Priority task
2. Secondary task
3. If time permits

## 🚧 Blockers
- None / List blockers

## 📊 Project Health
- Build: ✅ Passing
- Tests: ✅ 95% coverage
- MCP Servers: ✅ All running

## 💡 Recommendations
- Suggestion 1
- Suggestion 2
```

Use **task-orchestrator** to run this standup efficiently.
