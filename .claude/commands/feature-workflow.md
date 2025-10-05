# Feature Workflow

Complete end-to-end workflow for feature development with MCP orchestration.

## Full Feature Development Pipeline

### Stage 1: Architecture (5-10 min)
```
/team-architect-mcp
```
- Use Sequential Thinking to design
- Use Serena to analyze codebase
- Use Context7 for best practices
- Save decision to Memory

### Stage 2: Task Planning (3-5 min)
```
/team-shrimp-plan
```
- Create task breakdown with TaskMaster AI
- Define verification criteria with Shrimp
- Set priorities and dependencies

### Stage 3: Implementation (20-40 min)
```
/team-orchestrate
```
- Execute with task-executor agent
- Use Desktop Commander for file ops
- Use Serena for code navigation
- Update Memory with patterns

### Stage 4: Verification (5-10 min)
```
Use task-checker agent
```
- Verify with Shrimp Task Manager
- Run tests with Desktop Commander
- Quality check with Serena
- Ensure Memory updated

### Stage 5: Git Commit (2-3 min)
```
Desktop Commander:
- git add -A
- git commit -m "message"
- git push origin main
```

## Example: "Add About Page"

**1. Architecture (6 min)**
- Sequential Thinking: Break down page structure
- Serena: Find similar page patterns
- Context7: React Router best practices
- Memory: Save About page architecture

**2. Task Planning (4 min)**
- TaskMaster: Create tasks (route, component, content, images)
- Shrimp: Define completion criteria

**3. Implementation (25 min)**
- Desktop Commander: Create AboutPage.tsx
- Serena: Copy patterns from existing pages
- Desktop Commander: Add route to App.tsx
- Memory: Save About page component pattern

**4. Verification (7 min)**
- Shrimp: Verify route works
- Desktop Commander: npm run build → passes ✅
- Serena: Check imports correct
- Memory: Confirm pattern saved

**5. Commit (3 min)**
- git add, commit, push

**Total: ~45 minutes** for complete feature ✅

## Quality Gates

Each stage must pass before proceeding:
- ✅ Architecture documented and saved
- ✅ Tasks created with clear criteria
- ✅ Implementation complete and working
- ✅ All verifications passed
- ✅ Committed to git

Use **task-orchestrator** to coordinate this entire workflow.
