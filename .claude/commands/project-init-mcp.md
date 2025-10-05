# Project Init MCP

Initialize a new project with full MCP integration from scratch.

## Initialization Steps

### 1. Project Setup (Desktop Commander)
```bash
# Create project directory
mcp__desktop_commander__execute_command("mkdir [project-name]")
mcp__desktop_commander__execute_command("cd [project-name]")

# Initialize git
mcp__desktop_commander__execute_command("git init")
mcp__desktop_commander__execute_command("git branch -M main")

# Create Vite + React + TypeScript project
mcp__desktop_commander__execute_command("npm create vite@latest . -- --template react-ts")

# Install dependencies
mcp__desktop_commander__execute_command("npm install")
```

### 2. Add Convex (Desktop Commander)
```bash
mcp__desktop_commander__execute_command("npm install convex")
mcp__desktop_commander__execute_command("npx convex dev")
```

### 3. Add Tailwind CSS (Desktop Commander)
```bash
mcp__desktop_commander__execute_command("npm install -D tailwindcss postcss autoprefixer")
mcp__desktop_commander__execute_command("npx tailwindcss init -p")
```

### 4. Create .mcp.json (Desktop Commander)
```bash
mcp__desktop_commander__write_file(".mcp.json", {
  "mcpServers": {
    "taskmaster-ai": {
      "command": "npx",
      "args": ["-y", "@eyaltoledano/claude-task-master"],
      "env": {"ANTHROPIC_API_KEY": "${ANTHROPIC_API_KEY}"}
    }
  }
})
```

### 5. Create Project Structure (Desktop Commander)
```bash
mkdir -p convex/actions
mkdir -p src/components
mkdir -p .claude/agents
mkdir -p .claude/commands
```

### 6. Initialize Convex Schema (Desktop Commander)
Create basic schema.ts, messages.ts, leads.ts

### 7. Create Claude Agents (Memory + Context7)
- Use Memory to recall agent templates
- Create website-developer.md
- Create domain-expert.md (customize for project type)

### 8. Create Slash Commands (Memory)
- Use Memory to recall command templates
- Create /team-start-advanced
- Create /daily-standup-mcp
- Create /team-orchestrate

### 9. Save Project Template (Memory)
```bash
mcp__memory__create_entities({
  "type": "project_template",
  "name": "[project-name]",
  "tech_stack": ["Vite", "React", "TypeScript", "Convex", "Tailwind"],
  "mcp_servers": ["all_standard_mcps"],
  "initialized_date": "[date]"
})
```

### 10. Initial Git Commit (Desktop Commander)
```bash
git add -A
git commit -m "Initial project setup with MCP integration"
```

## Output

```
✅ Project Initialized: [project-name]

📦 Installed:
- Vite + React 18 + TypeScript
- Convex (backend)
- Tailwind CSS (styling)

🔧 MCP Configuration:
- .mcp.json created
- TaskMaster AI configured
- Global MCPs available

🤖 Claude Agents Created:
- website-developer.md
- [domain]-expert.md

⚡ Slash Commands Created:
- /team-start-advanced
- /daily-standup-mcp
- /team-orchestrate
- [8 more...]

💾 Saved to Memory:
- Project template
- Agent patterns
- Configuration templates

🎯 Next Steps:
1. Run: npx convex dev
2. Run: npm run dev
3. Start building!
```

Use **task-orchestrator** to run this initialization workflow.
