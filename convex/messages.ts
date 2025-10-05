import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

/**
 * Chat Message Functions
 *
 * Basic chat functionality for the AI widget:
 * - List messages for a session
 * - Send user message
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

    // TODO: Trigger AI response
    // For now, just echo back
    await ctx.db.insert("messages", {
      sessionId,
      isViewer: false,
      text: `Thanks for your message! I'm Sunny, your solar assistant. How can I help you learn about solar power today?`,
      timestamp: Date.now(),
    });
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
