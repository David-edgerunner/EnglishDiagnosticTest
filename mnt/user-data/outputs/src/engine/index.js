// ═══════════════════════════════════════════════════════════════
// ENGINE — Barrel export for psychometric modules
// ═══════════════════════════════════════════════════════════════
//
// The "engine" contains the pure computational logic of the CAT:
//   - IRT: probability calculations, theta estimation, item selection
//   - Diagnostic: transforms raw response data into actionable insights
//
// These modules are stateless and side-effect-free — they take data in,
// return results out. This makes them easy to unit test.

export { IRT } from "./irt.js";
export { Diagnostic } from "./diagnostic.js";
