# Team Health Check

Check status of all MCP servers and project health.

## MCP Server Status Check

### 1. Desktop Commander
```bash
mcp__desktop_commander__execute_command("echo 'Desktop Commander: OK'")
```
- ✅ Running
- ❌ Not responding

### 2. Sequential Thinking
```bash
mcp__sequential_thinking__sequentialthinking("test")
```
- ✅ Running
- ❌ Not responding

### 3. Serena
```bash
mcp__serena__get_symbols_overview()
```
- ✅ Running
- ❌ Not responding

### 4. Context7
```bash
mcp__context7__search("test")
```
- ✅ Running
- ❌ Not responding

### 5. Memory
```bash
mcp__memory__read_graph()
```
- ✅ Running
- ❌ Not responding

### 6. Shrimp Task Manager
```bash
mcp__shrimp_task_manager__list_tasks()
```
- ✅ Running
- ❌ Not responding

### 7. TaskMaster AI (Project-Specific)
```bash
mcp__taskmaster_ai__get_tasks()
```
- ✅ Running
- ❌ Not configured

## Project Health Checks

### Build Status
```bash
mcp__desktop_commander__execute_command("npm run build")
```
- ✅ Build passes
- ❌ Build errors

### Git Status
```bash
mcp__desktop_commander__execute_command("git status")
```
- Uncommitted changes: [count]
- Branch: [branch_name]
- Clean working directory: [yes/no]

### Dependencies
```bash
mcp__desktop_commander__execute_command("npm outdated")
```
- Outdated packages: [list]
- Security vulnerabilities: [count]

### Convex Status
```bash
mcp__desktop_commander__execute_command("npx convex dev --once")
```
- ✅ Convex functions deployed
- ❌ Deployment errors

## Output Format

```
# MCP & Project Health Check

## 🟢 MCP Servers (7/7 Running)
- Desktop Commander: ✅
- Sequential Thinking: ✅
- Serena: ✅
- Context7: ✅
- Memory: ✅
- Shrimp Task Manager: ✅
- TaskMaster AI: ✅

## 📊 Project Status
- Build: ✅ Passing
- Tests: ⚠️ 2 warnings
- Git: ✅ Clean
- Dependencies: ✅ Up to date
- Convex: ✅ Deployed

## ⚠️ Issues
- None

## 💡 Recommendations
- All systems healthy, ready for development!
```
