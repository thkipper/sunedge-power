# Team Architect MCP

Architectural design and decision-making using Sequential Thinking + Serena + Memory.

## Workflow

### 1. Understand Requirements (Sequential Thinking)
```
mcp__sequential_thinking__sequentialthinking(
  "Analyze architectural requirements for: [feature/system]"
)
```
- Break down the problem systematically
- Identify key architectural decisions
- Consider trade-offs

### 2. Analyze Current Architecture (Serena)
```
mcp__serena__get_symbols_overview()
mcp__serena__search_for_pattern("[relevant_patterns]")
```
- Understand existing structure
- Find similar implementations
- Identify integration points

### 3. Research Best Practices (Context7)
```
mcp__context7__search("[technology] best practices")
```
- Look up current architectural patterns
- Review framework recommendations
- Check industry standards

### 4. Design Architecture (Sequential Thinking)
```
Systematic design process:
1. Define components and responsibilities
2. Design data flow
3. Plan API contracts
4. Consider error handling
5. Think about scalability
```

### 5. Document Decision (Memory)
```
mcp__memory__create_entities({
  "type": "architectural_decision",
  "feature": "...",
  "decision": "...",
  "rationale": "...",
  "alternatives_considered": [...]
})
```

## Output Format

```markdown
# Architecture Design: [Feature Name]

## Problem Statement
[Clear description of what we're architecting]

## Requirements
- Functional requirement 1
- Functional requirement 2
- Non-functional requirements

## Proposed Architecture

### Components
1. Component A - Responsibility
2. Component B - Responsibility

### Data Flow
[Describe how data flows through the system]

### API Design
```typescript
// Key interfaces/types
interface Example {
  ...
}
```

### Technology Choices
- Choice 1: [Technology] - Rationale
- Choice 2: [Technology] - Rationale

## Alternatives Considered
- Alternative A - Why not chosen
- Alternative B - Why not chosen

## Implementation Plan
1. Step 1
2. Step 2
3. Step 3

## Saved to Memory ✅
```

Use **task-orchestrator** to run this architectural process.
