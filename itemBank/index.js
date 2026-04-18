// ═══════════════════════════════════════════════════════════════
// ITEM BANK — Index
// ═══════════════════════════════════════════════════════════════
// Merges all skill-specific item files into a single ITEM_BANK
// export so callers don't need to know about the file split.

import { GRAMMAR_ITEMS } from './grammar.js';
import { VOCABULARY_ITEMS } from './vocabulary.js';
import { READING_ITEMS } from './reading.js';

export const ITEM_BANK = [...GRAMMAR_ITEMS, ...VOCABULARY_ITEMS, ...READING_ITEMS];
