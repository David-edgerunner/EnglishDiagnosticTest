// ═══════════════════════════════════════════════════════════════
// I18N — Barrel export for internationalisation modules
// ═══════════════════════════════════════════════════════════════
//
// The platform supports English and Vietnamese (§12.2).
// Vietnamese is the default for users with Vietnamese browser locale.
//
//   - i18n: All UI strings in both languages (parallel structure)
//   - VI_EXPLANATIONS: Vietnamese translations of wrong-answer explanations
//
// Note: Test items are ALWAYS in English (we're testing English proficiency).
// Only the UI chrome (navigation, labels, instructions) switches language.

export { i18n } from "./i18n.js";
export { VI_EXPLANATIONS } from "./viExplanations.js";
