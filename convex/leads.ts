import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

/**
 * Lead Management Functions
 *
 * Handle contact form submissions and lead tracking
 */

// Submit a new lead
export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    message: v.string(),
    source: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const leadId = await ctx.db.insert("leads", {
      ...args,
      status: "new",
      createdAt: Date.now(),
    });

    return leadId;
  },
});

// Get all leads (for admin dashboard - future)
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("leads")
      .withIndex("byCreatedAt")
      .order("desc")
      .take(100);
  },
});

// Get leads by status
export const listByStatus = query({
  args: {
    status: v.string(),
  },
  handler: async (ctx, { status }) => {
    return await ctx.db
      .query("leads")
      .withIndex("byStatus", (q) => q.eq("status", status))
      .collect();
  },
});

// Update lead status
export const updateStatus = mutation({
  args: {
    leadId: v.id("leads"),
    status: v.string(),
  },
  handler: async (ctx, { leadId, status }) => {
    await ctx.db.patch(leadId, { status });
  },
});
