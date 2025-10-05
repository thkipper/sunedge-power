# MCP Foundation Setup - SunEdge Power

Complete documentation for the Model Context Protocol (MCP) integration in the SunEdge Power project.

## 📋 Table of Contents

1. [Overview](#overview)
2. [Installed MCP Servers](#installed-mcp-servers)
3. [Personal Agents](#personal-agents)
4. [Project Agents](#project-agents)
5. [Slash Commands](#slash-commands)
6. [Daily Workflows](#daily-workflows)
7. [Troubleshooting](#troubleshooting)

---

## Overview

This project uses Model Context Protocol (MCP) to enhance Claude Code with specialized tools for development, task management, and code intelligence.

**What is MCP?**
MCP is an open standard that connects AI applications to external tools and data sources, enabling capabilities like semantic code search, task management, and persistent memory.

**Our MCP Architecture:**
- **Global MCPs** (6 servers): Available for all Claude Code projects
- **Project MCPs** (1 server): Specific to SunEdge Power project
- **Personal Agents** (3 agents): System-wide orchestration agents
- **Project Agents** (2 agents): SunEdge-specific development agents
- **Slash Commands** (8+ commands): Quick workflow triggers

---

## Installed MCP Servers

### Global MCPs (All Projects)

#### 1. Desktop Commander
**Purpose:** Terminal control and file system operations
**Command:** `npx @wonderwhy-er/desktop-commander`
**Use for:**
- Execute terminal commands
- Create, read, edit files
- Process management
- Background task monitoring

**Example:**
```typescript
mcp__desktop_commander__execute_command("npm run build")
mcp__desktop_commander__write_file("src/NewComponent.tsx", content)
```

#### 2. Sequential Thinking
**Purpose:** Step-by-step problem analysis and decision making
**Command:** `npx @modelcontextprotocol/server-sequential-thinking`
**Use for:**
- Complex architectural decisions
- Systematic debugging
- Feature planning
- ROI calculations

**Example:**
```typescript
mcp__sequential_thinking__sequentialthinking(
  "Design the authentication system architecture"
)
```

#### 3. Serena
**Purpose:** Semantic code search and intelligent navigation
**Command:** `uvx serena start-mcp-server`
**Use for:**
- Find functions/components by meaning
- Navigate codebase intelligently
- Symbol lookup
- Pattern matching

**Example:**
```typescript
mcp__serena__find_symbol("ContactForm")
mcp__serena__search_for_pattern("useQuery")
```

#### 4. Context7
**Purpose:** Real-time documentation and API references
**Transport:** SSE
**URL:** `https://mcp.context7.com/sse`
**Use for:**
- Up-to-date library documentation
- Current best practices
- API reference lookup
- Framework updates

**Example:**
```typescript
mcp__context7__search("React 18 useTransition hook")
mcp__context7__search("Convex mutations best practices")
```

#### 5. Memory
**Purpose:** Persistent knowledge across sessions
**Command:** `npx @modelcontextprotocol/server-memory`
**Use for:**
- Save architectural decisions
- Recall component patterns
- Remember bug fixes
- Store reusable templates

**Example:**
```typescript
mcp__memory__create_entities({
  "type": "component_pattern",
  "name": "ContactForm",
  "pattern": "..."
})

mcp__memory__search_nodes("ContactForm")
```

#### 6. Shrimp Task Manager
**Purpose:** Task verification and quality assurance
**Command:** `npx @cjo4m06/mcp-shrimp-task-manager`
**Use for:**
- Verify task completion
- Quality checks
- Split complex tasks
- Task reflection and refinement

**Example:**
```typescript
mcp__shrimp_task_manager__verify_task({
  task_id: "feature-001",
  status: "complete"
})
```

### Project MCP (SunEdge Power Only)

#### 7. TaskMaster AI
**Purpose:** Project-level task management and coordination
**Config:** `.mcp.json` in project root
**Requires:** `ANTHROPIC_API_KEY` environment variable
**Use for:**
- Break down features into tasks
- Manage task dependencies
- Track project progress
- Coordinate complex workflows

**Example:**
```typescript
mcp__taskmaster_ai__get_tasks()
mcp__taskmaster_ai__next_task()
mcp__taskmaster_ai__set_task_status(task_id, "completed")
```

---

## Personal Agents

Located in: `/Users/maiakipper/.claude/agents/`

### 1. task-orchestrator.md
**Purpose:** Master coordinator of all MCP servers
**Model:** Sonnet
**Color:** Purple
**Tools:** All MCPs (`mcp__*`)

**Responsibilities:**
- Coordinate complex multi-step tasks
- Route work to appropriate MCPs
- Ensure quality across all phases
- Maintain context and progress

**When to use:**
- Complex features requiring multiple MCPs
- Architectural decisions
- Full feature workflows

### 2. task-executor.md
**Purpose:** Rapid implementation specialist
**Model:** Sonnet
**Color:** Blue
**Tools:** Desktop Commander, Serena, Sequential Thinking, Context7, Memory

**Responsibilities:**
- Execute well-defined tasks quickly
- Write code with precision
- Document patterns in Memory
- Follow established architecture

**When to use:**
- Implementing planned features
- Creating new components
- File operations and commands

### 3. task-checker.md
**Purpose:** Quality assurance and verification
**Model:** Sonnet
**Color:** Green
**Tools:** Shrimp, Serena, Sequential Thinking, Desktop Commander, Memory

**Responsibilities:**
- Verify task completion
- Run quality checks
- Ensure tests pass
- Validate before git commits

**When to use:**
- Before committing code
- After feature completion
- Quality gates

---

## Project Agents

Located in: `.claude/agents/`

### 1. website-developer.md
**Purpose:** SunEdge Power website development
**Model:** Sonnet
**Color:** Blue
**Expertise:** Vite, React, TypeScript, Tailwind, Convex
**MCPs:** Desktop Commander, Serena, Context7, Memory

**Responsibilities:**
- Build website features
- Convex integration
- Chat widget development
- Responsive design with Tailwind

### 2. solar-content-expert.md
**Purpose:** Solar industry content and expertise
**Model:** Sonnet
**Color:** Green
**Expertise:** Residential, C&I, Utility solar, Power brokering, ISOs
**MCPs:** Context7, Memory, Sequential Thinking

**Responsibilities:**
- Website content creation
- Chatbot response design
- Solar education materials
- Lead qualification strategies

---

## Slash Commands

Located in: `.claude/commands/`

### Core Team Commands

#### /team-start-advanced
Initialize all MCP servers and perform morning health check.
- Verify all 7 MCP servers running
- Load context from Memory
- Check project build status
- Report blockers and recommend first task

#### /daily-standup-mcp
MCP-powered morning standup.
- Review yesterday's work (Memory)
- Check current state (Serena)
- Load tasks (TaskMaster + Shrimp)
- Plan today (Sequential Thinking)
- Verify environment (Desktop Commander)

#### /team-orchestrate
Full multi-MCP orchestration for complex features.
- **Phase 1:** Planning (Sequential Thinking + Context7)
- **Phase 2:** Analysis (Serena + TaskMaster AI)
- **Phase 3:** Execution (Desktop Commander + Serena)
- **Phase 4:** Verification (Shrimp + Desktop Commander)

### Specialized Commands

#### /team-architect-mcp
Architectural design and decision-making.
1. Understand requirements (Sequential Thinking)
2. Analyze current architecture (Serena)
3. Research best practices (Context7)
4. Design architecture (Sequential Thinking)
5. Document decision (Memory)

#### /team-health-check
Check status of all MCP servers and project health.
- Test each MCP server
- Check build status
- Verify git status
- Check dependencies
- Test Convex deployment

#### /project-init-mcp
Initialize new project with full MCP integration.
- Set up Vite + React + TypeScript
- Add Convex backend
- Configure Tailwind CSS
- Create .mcp.json
- Initialize agents and commands

### Workflow Commands

#### /feature-workflow
End-to-end feature development pipeline.
1. Architecture (5-10 min)
2. Task Planning (3-5 min)
3. Implementation (20-40 min)
4. Verification (5-10 min)
5. Git Commit (2-3 min)

#### /debug-workflow
Systematic debugging with MCPs.
1. Problem Analysis (Sequential Thinking)
2. Code Investigation (Serena)
3. Research (Context7)
4. Reproduce & Diagnose (Desktop Commander)
5. Implement Fix (Desktop Commander + Serena)
6. Document (Memory)

---

## Daily Workflows

### Morning Routine (10 min)
```bash
1. /team-start-advanced          # Boot and health check
2. /daily-standup-mcp            # Plan today's work
3. Review output and priorities
```

### Feature Development (45-60 min)
```bash
1. /feature-workflow             # Full pipeline
   - Or manually:
   - /team-architect-mcp         # Design (10 min)
   - /team-orchestrate           # Implement (30 min)
   - Use task-checker            # Verify (10 min)
   - git commit & push           # Ship (5 min)
```

### Bug Fixing (20-30 min)
```bash
1. /debug-workflow               # Systematic debugging
2. Use task-checker              # Verify fix
3. git commit & push             # Ship fix
```

### End of Day (5 min)
```bash
1. /team-health-check            # Verify everything working
2. Save important insights to Memory manually if needed
3. Commit any WIP code
```

---

## Troubleshooting

### MCP Server Not Responding

**Problem:** `mcp__[server]__*` commands fail

**Solution:**
```bash
# Check if server is configured
claude mcp list

# Try restarting Claude Code
# Or restart the specific server

# Check logs
claude mcp get [server-name]
```

### TaskMaster AI Not Working

**Problem:** Project-specific MCP not loading

**Solution:**
```bash
# Verify .mcp.json exists in project root
cat .mcp.json

# Check ANTHROPIC_API_KEY is set (in Convex dashboard or environment)
# Restart Claude Code to reload project config
```

### Serena Can't Find Code

**Problem:** `mcp__serena__find_symbol` returns no results

**Solution:**
```bash
# Serena needs to index the project first
# Make sure you're in the project directory
cd /Users/maiakipper/Desktop/sunedge-power

# Try using search_for_pattern instead
mcp__serena__search_for_pattern("component_name")
```

### Memory Not Persisting

**Problem:** Saved entities don't appear in later sessions

**Solution:**
```bash
# Check memory storage location
# Memory is stored in ~/.mcp/memory/ by default

# Verify entities were saved
mcp__memory__read_graph()

# Try explicit save
mcp__memory__create_entities({...})
```

### Context7 Rate Limited

**Problem:** Too many documentation requests

**Solution:**
```bash
# Context7 has rate limits on free tier
# Space out documentation lookups
# Cache results in Memory for reuse
```

---

## Configuration Files

### Global MCP Config
**Location:** `~/.claude.json` (macOS/Linux)
**Contains:** Global MCP servers (Desktop Commander, Sequential Thinking, etc.)

### Project MCP Config
**Location:** `.mcp.json` (project root)
**Contains:** Project-specific MCPs (TaskMaster AI)
**Committed to git:** ✅ Yes (so team can use same MCPs)

### Personal Agents
**Location:** `~/.claude/agents/`
**Contains:** task-orchestrator, task-executor, task-checker
**Committed to git:** ❌ No (personal, not project-specific)

### Project Agents
**Location:** `.claude/agents/`
**Contains:** website-developer, solar-content-expert
**Committed to git:** ✅ Yes (team collaboration)

### Slash Commands
**Location:** `.claude/commands/`
**Contains:** All team workflow commands
**Committed to git:** ✅ Yes (team can use same workflows)

---

## Best Practices

### When to Use Which MCP

**Desktop Commander:**
- File operations (create, read, edit)
- Running terminal commands (npm, git)
- Background processes

**Serena:**
- Finding existing code before writing new
- Understanding codebase structure
- Navigating large codebases

**Sequential Thinking:**
- Complex decisions (architecture, debugging)
- Breaking down problems systematically
- When you need to "think step-by-step"

**Context7:**
- Learning new libraries/frameworks
- Checking current best practices
- API documentation lookup

**Memory:**
- Saving important decisions for later
- Storing reusable patterns
- Building team knowledge base

**Shrimp:**
- Verifying work is actually complete
- Quality assurance before commits
- Task complexity analysis

**TaskMaster AI:**
- Managing project-level tasks
- Breaking features into subtasks
- Tracking overall progress

### MCP Combinations

**For Architecture:** Sequential Thinking + Context7 + Memory
**For Implementation:** Desktop Commander + Serena + Memory
**For Debugging:** Sequential Thinking + Serena + Context7
**For Verification:** Shrimp + Desktop Commander + Serena
**For Project Management:** TaskMaster AI + Shrimp + Memory

---

## Security Notes

- ✅ MCP servers run locally (except Context7 SSE)
- ✅ API keys stored in environment variables (not in code)
- ✅ `.mcp.json` uses `${ANTHROPIC_API_KEY}` reference
- ✅ No secrets committed to git
- ✅ Desktop Commander restricted to project directory

---

## Next Steps

1. **Learn the commands**: Try `/team-start-advanced` to boot everything
2. **Run daily standup**: Use `/daily-standup-mcp` each morning
3. **Try a workflow**: Use `/feature-workflow` for your next feature
4. **Explore MCPs**: Experiment with each MCP server's capabilities
5. **Build knowledge**: Save patterns to Memory as you discover them

---

## Resources

- [MCP Official Docs](https://modelcontextprotocol.io)
- [Claude Code MCP Guide](https://docs.claude.com/en/docs/claude-code/mcp)
- [Desktop Commander](https://github.com/wonderwhy-er/DesktopCommanderMCP)
- [Serena](https://github.com/oraios/serena)
- [Shrimp Task Manager](https://github.com/cjo4m06/mcp-shrimp-task-manager)
- [TaskMaster AI](https://task-master.dev)

---

**Generated:** 2025-10-05
**Project:** SunEdge Power
**MCP Version:** 1.0.0
