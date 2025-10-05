# API Keys Setup Guide

## 🔐 Security First

**IMPORTANT:** All API keys are stored in Convex Dashboard Environment Variables (encrypted, server-side). They are NEVER stored in files, code, or git.

## Required API Keys

### 1. Google Gemini (Primary AI - Required)

**Get your key:** https://aistudio.google.com/app/apikey

**Set in Convex Dashboard:**
- Name: `GEMINI_API_KEY`
- Value: Your Gemini API key
- Deployment: Production

**Model used:** `gemini-2.0-flash-exp`
**Cost:** $0.075 per 1M tokens (very affordable)
**Free tier:** 15 requests/min

---

### 2. Anthropic Claude (Optional - Premium AI)

**Get your key:** https://console.anthropic.com/settings/keys

**Set in Convex Dashboard:**
- Name: `ANTHROPIC_API_KEY`
- Value: Your Anthropic API key
- Deployment: Production

**Model used:** `claude-3-5-sonnet-20241022`
**Cost:** ~$3 input / $15 output per 1M tokens
**Use case:** Complex calculations, detailed consultations

---

### 3. DeepSeek (Optional - Budget AI)

**Get your key:** https://platform.deepseek.com/api_keys

**Set in Convex Dashboard:**
- Name: `DEEPSEEK_API_KEY`
- Value: Your DeepSeek API key
- Deployment: Production

**Model used:** `deepseek-chat`
**Cost:** $0.27 per 1M tokens (ultra-cheap)
**Use case:** Simple FAQs, high-volume queries

---

### 4. Resend (Optional - Email Notifications)

**Get your key:** https://resend.com/api-keys

**Set in Convex Dashboard:**
- Name: `RESEND_API_KEY`
- Value: Your Resend API key
- Deployment: Production

**Free tier:** 3,000 emails/month
**Use case:** Get notified when leads submit contact forms

---

## How to Set Environment Variables

### Option 1: Convex Dashboard (Recommended)

1. Open dashboard: `npx convex dashboard`
2. Click **"Environment Variables"** in left sidebar
3. Click **"Add Environment Variable"**
4. Enter name (e.g., `GEMINI_API_KEY`) and value
5. Select **"Production"** deployment
6. Click **"Save"**

### Option 2: Convex CLI

```bash
npx convex env set GEMINI_API_KEY "your-key-here"
npx convex env set ANTHROPIC_API_KEY "your-key-here"
npx convex env set DEEPSEEK_API_KEY "your-key-here"
npx convex env set RESEND_API_KEY "your-key-here"
```

---

## How the AI Provider Selection Works

The chatbot automatically chooses the best AI provider:

**Simple questions → Gemini** (fast, cheap)
```
"How do solar panels work?"
"What's the federal tax credit?"
```

**Complex questions → Claude** (better reasoning)
```
"Calculate my ROI for a 10kW system"
"Compare different financing options"
```

**Manual override:**
```typescript
// In convex/actions/ai.ts, you can force a specific provider
provider: "gemini"  // or "claude" or "deepseek"
```

---

## Security Best Practices

✅ **DO:**
- Store keys in Convex Dashboard only
- Rotate keys periodically
- Use different keys for dev/production
- Never share keys in chat, email, or Slack

❌ **DON'T:**
- Hardcode keys in any file
- Commit keys to git
- Share keys with anyone
- Store keys in .env files (we use Convex instead)

---

## Verifying Your Setup

After adding keys to Convex Dashboard:

1. Run `npx convex dev`
2. Visit http://localhost:5173
3. Open the chat widget
4. Send a test message: "How do solar panels work?"
5. You should get an AI-powered response from Sunny!

If you see errors, check:
- Keys are set in Convex dashboard (not just locally)
- Key names match exactly (case-sensitive)
- Keys have proper permissions/aren't expired
- Convex dev server is running

---

## Cost Management

**Estimated costs for 1,000 chat messages:**

| Provider | Cost | Best For |
|----------|------|----------|
| Gemini | ~$0.08 | General use (recommended) |
| Claude | ~$1.50 | Complex queries only |
| DeepSeek | ~$0.03 | High-volume simple FAQs |

**Recommended strategy:** Start with Gemini only. Add Claude later if you need better reasoning for complex solar calculations.
