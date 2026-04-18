// ═══════════════════════════════════════════════════════════════
// DATA — Barrel export for static data modules
// ═══════════════════════════════════════════════════════════════
//
// Static data that doesn't change at runtime:
//   - itemBank: 100 IRT-calibrated test items (the question database)
//   - resources: Curated free learning resources per sub-skill
//
// In a production setup, itemBank would likely be fetched from an API
// with exposure control (§9.1: max 30% exposure rate per item).
// For the client-side MVP, it's embedded directly.

export { ITEM_BANK } from "./itemBank.js";
export { RESOURCES } from "./resources.js";
