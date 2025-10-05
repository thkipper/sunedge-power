# SunEdge Power

A clean, modern website for SunEdge Power solar company with an AI-powered chatbot built on Convex.

## Tech Stack

- **Frontend:** Vite + React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Convex (serverless, real-time database)
- **AI:** Google Gemini Flash 2.0 (planned)
- **Deploy:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server (starts both Vite and Convex)
npm run dev
```

This will:
1. Start the Vite dev server (frontend) at http://localhost:5173
2. Start Convex dev server (backend)
3. Open your browser automatically

### Convex Setup

On first run, Convex will ask you to:
1. Log in or create a Convex account
2. Create a new project
3. Set up your deployment

The Convex dashboard will open automatically where you can:
- View your database in real-time
- Set environment variables
- Monitor functions

### Environment Variables

Set these in the Convex dashboard (Settings → Environment Variables):

- `GEMINI_API_KEY` - Google AI API key (when ready to add AI)

## Project Structure

```
sunedge-power/
├── .claude/agents/          # Claude Code AI agents
├── convex/                  # Convex backend
│   ├── schema.ts           # Database schema
│   ├── messages.ts         # Chat functions
│   ├── leads.ts            # Lead management
│   └── actions/            # External API calls (future)
├── src/
│   ├── components/         # React components
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── public/                # Static assets
└── package.json
```

## Features

### Current
- ✅ Homepage with solar info
- ✅ Basic navigation
- ✅ Convex database setup
- ✅ Chat message schema
- ✅ Lead capture schema

### Planned
- 🚧 AI chatbot (Convex + Gemini)
- 🚧 Contact form integration
- 🚧 About page (two partners)
- 🚧 Services page
- 🚧 MCP-style features (memory, fetch, tools)

## Development

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build           # Build for production
npm run preview         # Preview production build

# Linting
npm run lint            # Run ESLint
```

## Convex CLI Commands

```bash
npx convex dev          # Start dev server
npx convex deploy       # Deploy to production
npx convex dashboard    # Open web dashboard
npx convex env set      # Set environment variables
```

## Learning Resources

- [Convex Docs](https://docs.convex.dev)
- [Convex AI Chat Example](https://github.com/get-convex/convex-ai-chat) - The reference we're learning from
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)

## Deployment

### Frontend (Vercel)
```bash
# Connect to Vercel
vercel

# Deploy
vercel --prod
```

### Backend (Convex)
```bash
# Deploy Convex functions
npx convex deploy
```

## License

MIT

## Contact

SunEdge Power - Solar Energy Solutions
