import { v } from "convex/values";
import { mutation, query, internalMutation, internalAction } from "./_generated/server";
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
    await ctx.scheduler.runAfter(0, internal.messages.generateAIResponseAction, {
      sessionId,
      userMessage: text,
    });
  },
});

// Internal action to call AI and generate response
export const generateAIResponseAction = internalAction({
  args: {
    sessionId: v.string(),
    userMessage: v.string(),
  },
  handler: async (ctx, { sessionId, userMessage }) => {
    try {
      // Call Gemini AI to generate response
      const aiResponse = await ctx.runAction(internal.actions.ai.generateResponse, {
        message: userMessage,
        provider: "auto",
      });

      // Save AI response to database via mutation
      await ctx.runMutation(internal.messages.saveAIResponse, {
        sessionId,
        text: aiResponse,
      });
    } catch (error) {
      console.error("Failed to generate AI response:", error);

      // Save fallback error message
      await ctx.runMutation(internal.messages.saveAIResponse, {
        sessionId,
        text: "Hi! I'm Sunny. I'm having trouble connecting right now. Please try again in a moment, or contact SunEdge Power directly for immediate assistance!",
      });
    }
  },
});

// Internal mutation to save AI response to database
export const saveAIResponse = internalMutation({
  args: {
    sessionId: v.string(),
    text: v.string(),
  },
  handler: async (ctx, { sessionId, text }) => {
    await ctx.db.insert("messages", {
      sessionId,
      isViewer: false,
      text,
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
