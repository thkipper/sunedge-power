"use node";

import { internalAction } from "../_generated/server";
import { v } from "convex/values";

/**
 * AI Integration for SunEdge Power Chatbot
 *
 * Multi-Provider Strategy:
 * - Gemini: Primary (fast, cost-effective)
 * - Claude: Fallback for complex queries
 * - DeepSeek: Budget option for simple FAQs
 *
 * Security: All API keys are stored in Convex Dashboard Environment Variables
 * and accessed via process.env - NEVER hardcoded
 */

/**
 * Generate AI response using Gemini Flash 2.0
 */
async function generateWithGemini(prompt: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY not set in Convex dashboard");
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
        }
      })
    }
  );

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm having trouble responding right now.";
}

/**
 * Generate AI response using Claude (fallback/premium option)
 */
async function generateWithClaude(prompt: string): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY not set in Convex dashboard");
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      messages: [
        { role: "user", content: prompt }
      ]
    })
  });

  if (!response.ok) {
    throw new Error(`Claude API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.content?.[0]?.text || "I'm having trouble responding right now.";
}

/**
 * Generate AI response using DeepSeek (ultra-budget option)
 */
async function generateWithDeepSeek(prompt: string): Promise<string> {
  const apiKey = process.env.DEEPSEEK_API_KEY;

  if (!apiKey) {
    throw new Error("DEEPSEEK_API_KEY not set in Convex dashboard");
  }

  const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "user", content: prompt }
      ],
      max_tokens: 1024,
      temperature: 0.7
    })
  });

  if (!response.ok) {
    throw new Error(`DeepSeek API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "I'm having trouble responding right now.";
}

/**
 * Build the system prompt for solar assistant
 */
function buildSolarPrompt(userMessage: string): string {
  return `You are Sunny, a friendly and knowledgeable solar energy assistant for SunEdge Power, a residential solar installation company.

Your role:
- Help homeowners understand solar panel benefits
- Answer questions about costs, savings, and ROI
- Explain the 30% federal tax credit (ITC)
- Discuss net metering and how it works
- Qualify leads by asking about electric bills, home ownership, roof condition
- Be warm, helpful, and educational
- Keep responses concise (2-3 paragraphs max)

Important facts:
- Average savings: $100-$200+ per month on electric bills
- Federal tax credit: 30% of total installation cost
- Typical ROI: 6-10 years
- Solar panels increase home value
- SunEdge Power serves residential customers

User message: ${userMessage}

Respond as Sunny:`;
}

/**
 * Main AI action - intelligently routes to best provider
 */
export const generateResponse = internalAction({
  args: {
    message: v.string(),
    provider: v.optional(v.union(
      v.literal("gemini"),
      v.literal("claude"),
      v.literal("deepseek"),
      v.literal("auto")
    ))
  },
  handler: async (_ctx, { message, provider = "auto" }) => {
    const prompt = buildSolarPrompt(message);

    try {
      // Auto-select provider based on message complexity
      if (provider === "auto") {
        const isComplex =
          message.length > 200 ||
          message.includes("calculate") ||
          message.includes("compare") ||
          message.toLowerCase().includes("roi");

        provider = isComplex ? "claude" : "gemini";
      }

      // Try primary provider
      switch (provider) {
        case "gemini":
          return await generateWithGemini(prompt);
        case "claude":
          return await generateWithClaude(prompt);
        case "deepseek":
          return await generateWithDeepSeek(prompt);
        default:
          return await generateWithGemini(prompt);
      }
    } catch (error) {
      console.error("AI generation error:", error);

      // Fallback to Gemini if primary fails
      if (provider !== "gemini") {
        try {
          return await generateWithGemini(prompt);
        } catch (fallbackError) {
          console.error("Fallback to Gemini failed:", fallbackError);
        }
      }

      // Final fallback - friendly error message
      return "Hi! I'm Sunny, your solar assistant. I'm having a brief technical issue, but I'm here to help you learn about solar power. Could you rephrase your question, or feel free to contact us directly at SunEdge Power for immediate assistance!";
    }
  }
});
