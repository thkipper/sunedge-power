import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

/**
 * Database Schema for SunEdge Power
 *
 * Simple schema for:
 * - Lead submissions (contact forms)
 */

export default defineSchema({
  // Contact form / lead submissions
  leads: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    message: v.string(),
    source: v.optional(v.string()),  // Where they came from (homepage, etc.)
    status: v.optional(v.string()),   // new, contacted, qualified, etc.
    createdAt: v.number(),
  }).index("byEmail", ["email"])
    .index("byStatus", ["status"])
    .index("byCreatedAt", ["createdAt"]),
});
