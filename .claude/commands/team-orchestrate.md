# Team Orchestrate

Full MCP orchestration for complex multi-step feature implementation.

## Orchestration Flow

### Phase 1: Planning (Sequential Thinking + Context7)
1. Use Sequential Thinking to break down the feature
2. Use Context7 to research best practices
3. Use Memory to recall similar past implementations

### Phase 2: Analysis (Serena + TaskMaster AI)
4. Use Serena to analyze existing codebase structure
5. Use TaskMaster AI to create structured task breakdown
6. Use Shrimp to plan verification criteria

### Phase 3: Execution (Desktop Commander + Serena)
7. Use task-executor agent with Desktop Commander
8. Use Serena for code navigation and editing
9. Update Memory with implementation patterns

### Phase 4: Verification (Shrimp + Desktop Commander)
10. Use task-checker agent with Shrimp verification
11. Use Desktop Commander to run tests
12. Final quality check before git commit

## Example Usage

**User:** "Implement contact form with Convex integration"

**Orchestration:**
1. **Sequential Thinking**: Break down into subtasks (UI, validation, Convex mutation, testing)
2. **Context7**: Look up Convex form best practices
3. **Serena**: Find existing form patterns in codebase
4. **TaskMaster AI**: Create task hierarchy
5. **Desktop Commander**: Create files, run commands
6. **Shrimp**: Verify each subtask completion
7. **Memory**: Save contact form pattern

## Agent Coordination

- **Primary Agent**: task-orchestrator
- **Execution Agent**: task-executor
- **Verification Agent**: task-checker

## Output

The orchestrator will report progress at each phase and coordinate all MCP servers to deliver a complete, tested, verified feature ready for git commit.
