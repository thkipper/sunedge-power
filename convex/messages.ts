import { v } from "convex/values";
import { mutation, query, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";

/**
 * Chat Message Functions
 *
 * AI-powered chat functionality for the solar assistant widget:
 * - List messages for a session
 * - Send user message and trigger AI response
 * - Clear chat history
 */

// Get all messages for a session
export const list = query({
  args: {
    sessionId: v.string(),
  },
  handler: async (ctx, { sessionId }) => {
    return await ctx.db
      .query("messages")
      .withIndex("bySessionId", (q) => q.eq("sessionId", sessionId))
      .collect();
  },
});

// Send a new message
export const send = mutation({
  args: {
    sessionId: v.string(),
    text: v.string(),
  },
  handler: async (ctx, { sessionId, text }) => {
    // Save user message
    await ctx.db.insert("messages", {
      sessionId,
      isViewer: true,
      text,
      timestamp: Date.now(),
    });

    // Trigger AI response asynchronously
    await ctx.scheduler.runAfter(0, internal.messages.generateAIResponse, {
      sessionId,
      userMessage: text,
    });
  },
});

// Internal action to generate and save AI response (called by scheduler)
export const generateAIResponse = internalMutation({
  args: {
    sessionId: v.string(),
    userMessage: v.string(),
  },
  handler: async (ctx, { sessionId, userMessage }) => {
    try {
      // For now, use a simple response until we connect AI
      // TODO: Call AI action once Gemini API key is configured
      const aiResponse = `Thanks for your message about "${userMessage.substring(0, 50)}${userMessage.length > 50 ? '...' : ''}"! I'm Sunny, your solar assistant. How can I help you learn about solar power today?`;

      // Save AI response to database
      await ctx.db.insert("messages", {
        sessionId,
        isViewer: false,
        text: aiResponse,
        timestamp: Date.now(),
      });
    } catch (error) {
      console.error("Failed to generate AI response:", error);

      // Fallback error message
      await ctx.db.insert("messages", {
        sessionId,
        isViewer: false,
        text: "Hi! I'm Sunny. I'm having trouble connecting right now. Please try again in a moment, or contact SunEdge Power directly for immediate assistance!",
        timestamp: Date.now(),
      });
    }
  },
});

// Clear chat history
export const clear = mutation({
  args: {
    sessionId: v.string(),
  },
  handler: async (ctx, { sessionId }) => {
    const messages = await ctx.db
      .query("messages")
      .withIndex("bySessionId", (q) => q.eq("sessionId", sessionId))
      .collect();

    await Promise.all(messages.map((msg) => ctx.db.delete(msg._id)));
  },
});
