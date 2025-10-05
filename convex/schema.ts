import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

/**
 * Database Schema for SunEdge Power
 *
 * Simple schema for:
 * - Chat messages (AI chatbot)
 * - Lead submissions (contact forms)
 * - Customer profiles (for personalization)
 */

export default defineSchema({
  // Chat messages for AI chatbot
  messages: defineTable({
    sessionId: v.string(),        // Browser session ID
    isViewer: v.boolean(),         // true = user, false = AI
    text: v.string(),              // Message content
    timestamp: v.number(),         // When message was sent
  }).index("bySessionId", ["sessionId"]),

  // Contact form / lead submissions
  leads: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    message: v.string(),
    source: v.optional(v.string()),  // Where they came from (homepage, chat, etc.)
    status: v.optional(v.string()),   // new, contacted, qualified, etc.
    createdAt: v.number(),
  }).index("byEmail", ["email"])
    .index("byStatus", ["status"])
    .index("byCreatedAt", ["createdAt"]),

  // Customer profiles for personalization (MCP-style memory)
  customerProfiles: defineTable({
    sessionId: v.string(),
    electricBill: v.optional(v.number()),        // Monthly average
    homeOwnership: v.optional(v.boolean()),
    roofCondition: v.optional(v.string()),
    timeframe: v.optional(v.string()),           // When looking to install
    motivation: v.optional(v.string()),          // Why interested in solar
    zipCode: v.optional(v.string()),
    preferences: v.optional(v.any()),            // JSON object for any other data
    lastUpdated: v.number(),
  }).index("bySessionId", ["sessionId"]),
});
