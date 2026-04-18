# IDomaHub Web App Overview for AI Models

This document is an AI-oriented map of the codebase in `/home/bahieu/Documents/apps/idomahub`. It explains what the app does, which files matter, how data flows through the system, and which folders are primary versus incidental.

## 1. What This App Is

This is a client-side React + Vite single-page app for an adaptive English placement test.

Its main product behavior:

- Lets the learner choose a purpose for taking the test.
- Runs a 20-question or 40-question adaptive multiple-choice test.
- Estimates ability with a 3PL IRT model.
- Converts ability into a 0-100 score, CEFR band, and IELTS estimate.
- Generates a diagnostic breakdown of strengths, weak sub-skills, and wrong-answer explanations.
- Supports English and Vietnamese UI copy.

The app is fully front-end. There is no backend, login, database, or API integration in the primary codepath.

## 2. Main Tech Stack

- React 18
- Vite 5
- Plain JavaScript / JSX
- Vitest for unit tests
- Session storage for persistence across refreshes

Package definition: `package.json`

## 3. Primary Entry Points

Read these first if you need to understand the app quickly:

1. `main.jsx`
2. `App.jsx`
3. `TestSessionContext.jsx`
4. `irt.js`
5. `diagnostic.js`
6. `ResultsPage.jsx`
7. `itemBank/index.js`
8. `i18n.js`

## 4. App Flow

The app uses an internal page state machine instead of a router.

Page enum in `TestSessionContext.jsx`:

- `LANDING`
- `GOAL`
- `INTRO`
- `TEST`
- `PROCESSING`
- `RESULTS`

User journey:

1. `LandingPage.jsx`
2. `GoalPage.jsx`
3. `IntroPage.jsx`
4. `TestPage.jsx`
5. `ProcessingPage.jsx`
6. `ResultsPage.jsx`

`App.jsx` lazy-loads these pages and renders exactly one at a time based on context state.

## 5. State Management

All app state lives in `TestSessionContext.jsx`.

Important state fields:

- `page`: current page enum
- `lang`: `"en"` or `"vi"`
- `goalType`: `"A"` to `"E"`
- `testLength`: `20` or `40`
- `responses`: learner answer history
- `currentItem`: current item from the item bank
- `theta`: current IRT ability estimate
- `se`: standard error of the estimate
- `usedIds`: previously used item ids
- `selectedOption`: current selected answer index
- `confirmed`: whether current answer has been locked
- `results`: final score object after stopping

Persistence:

- Session state is stored in `sessionStorage` under key `cat_test_session`.
- Refreshing the page restores the test session if possible.
- `resetSession()` clears both in-memory state and the stored session.

## 6. Test Start and Item Selection

The test always starts from a random B1 item:

- `startTest()` filters `ITEM_BANK` for `cefr_difficulty === "B1"`
- one random B1 item becomes `currentItem`

After each confirmed answer:

1. A response object is created.
2. `IRT.estimateTheta()` recalculates `theta` and `se`.
3. `IRT.shouldStop()` decides whether the test ends.
4. If not stopping, `IRT.selectNext()` chooses the next item by Fisher information, with content balancing.

## 7. IRT Engine

Core file: `irt.js`

Implemented behaviors:

- `prob3PL(theta, a, b, c)`: 3PL probability
- `fisherInfo(theta, a, b, c)`: item information for selection
- `estimateTheta(responses)`: EAP estimation with a normal prior
- `selectNext(theta, usedIds, responses, itemBank, maxItems)`
- `thetaToScore(theta)`: maps theta to 0-100
- `thetaToCEFR(theta)`: maps score to CEFR
- `cefrToIELTS(cefr, score)`: approximate IELTS band
- `shouldStop(responses, se, maxItems)`: adaptive stopping rule

Config file: `irt.config.js`

Key defaults:

- Theta quadrature bounds: `-3` to `3` in `0.1` steps
- Prior SE default: `2.0`
- Quick mode: `20` items, minimum `20`, SE threshold `0.32`
- Full mode: `40` items, minimum `30`, SE threshold `0.25`
- Minimum items per skill for content balancing: `4`

Important note:

`IntroPage.jsx` comments mention older thresholds. The live behavior comes from `irt.config.js`, not from those comments.

## 8. Item Bank

Index file: `itemBank/index.js`

Source files:

- `itemBank/grammar.js`
- `itemBank/vocabulary.js`
- `itemBank/reading.js`

Current aggregate stats from the live item bank:

- Total items: `300`
- Skills: `Grammar 118`, `Vocabulary 85`, `Reading 97`
- CEFR counts: `A2 33`, `B1 72`, `B2 102`, `C1 82`, `C2 11`
- Distinct sub-skills: `24`

Expected item shape:

```js
{
  item_id: string,
  stem: string,
  options: string[],
  correct_choice: number,
  skill: "Grammar" | "Vocabulary" | "Reading",
  sub_skill: string,
  cefr_difficulty: "A2" | "B1" | "B2" | "C1" | "C2",
  irt_a_param: number,
  irt_b_param: number,
  irt_c_param: number,
  explanation_text: string,
  explanation_vi?: string | null,
  distractor_traps?: Record<string, string>
}
```

This shape is assumed by the session context, the IRT engine, the diagnosis pipeline, and the results UI.

## 9. Response Object Contract

When an answer is confirmed, `TestSessionContext.jsx` builds a normalized response object:

```js
{
  item_id,
  stem,
  options,
  correct_choice,
  learner_choice,
  correct,
  skill,
  sub_skill,
  cefr_difficulty,
  a,
  b,
  c,
  explanation_text,
  explanation_vi,
  distractor_traps
}
```

Notes:

- `a`, `b`, and `c` are copied from the item’s IRT params.
- Downstream diagnosis code relies on `skill`, `sub_skill`, `correct`, and explanation fields.

## 10. Result Object Contract

At test end, `results` is shaped like:

```js
{
  theta: number,
  se: number,
  score: number,
  cefr: "A2" | "B1" | "B2" | "C1" | "C2",
  ielts: number,
  diagnosis: {
    skillAccuracy,
    subSkillAnalysis,
    wrongAnswers,
    wrongBySubSkill,
    weaknesses,
    totalCorrect,
    totalItems
  }
}
```

This object is the payload for `ResultsPage.jsx`, `DiagnosisModal.jsx`, `EnglishDNA.jsx`, `WrongAnswerBreakdown.jsx`, and `AIPracticePanel.jsx`.

## 11. Diagnosis Pipeline

There are two layers:

### Layer 1: raw diagnosis

File: `diagnostic.js`

`Diagnostic.analyze(responses, goalType)` computes:

- `skillAccuracy`
- `subSkillAnalysis`
- `wrongAnswers`
- `wrongBySubSkill`
- `weaknesses`
- `totalCorrect`
- `totalItems`

Important detail:

- `goalType` is accepted but currently not used in ranking logic.
- Weaknesses are effectively sorted by low accuracy, not by goal-specific relevance.

### Layer 2: presentation-oriented diagnosis

File: `diagnosticEngine.js`

`computeDiagnosis(diagnosis, t)` derives:

- `subSkillAccuracy`
- `weakLink`
- `unlockCards`
- `wrongAnswers` with normalized `explanation_vi`

This is the object consumed by the newer results components.

## 12. Results UI Structure

Primary file: `ResultsPage.jsx`

The results page renders these major sections:

1. Hero block with CEFR label, description, and goal statement
2. Score cards for score and IELTS estimate
3. Score bar
4. Skill breakdown
5. Sub-skill heatmap
6. Diagnosis modal trigger
7. `DiagnosisModal`
8. `EnglishDNA`
9. `WrongAnswerBreakdown`
10. Share + retake actions

Supporting components:

- `DiagnosisModal.jsx`: older overlay view of wrong answers plus AI prompt copy tool
- `EnglishDNA.jsx`: newer premium-feeling summary card with radar chart, weak link, unlock cards, and timeline
- `WrongAnswerBreakdown.jsx`: grouped expandable wrong-answer review
- `AIPracticePanel.jsx`: copies a generated practice prompt for external AI chatbots

## 13. Internationalization

File: `i18n.js`

The app is bilingual:

- UI language: English and Vietnamese
- Test item content: English
- Vietnamese auto-selects when `navigator.language` starts with `vi`

`main.jsx` also performs a dev-only top-level key parity check between `i18n.en` and `i18n.vi`.

`i18n.js` contains more than button labels. It also stores:

- landing-page marketing copy
- goal statements by goal type and CEFR
- CEFR descriptions
- EnglishDNA headlines and timelines
- sub-skill impact copy
- unlock-card copy
- WrongAnswerBreakdown labels
- AI practice panel copy

This means content changes are tightly coupled to the UI and diagnosis presentation.

## 14. Goal Types

Goal types are selected on `GoalPage.jsx`:

- `A`: IELTS / exam prep
- `B`: academic / university
- `C`: professional / work
- `D`: media / culture
- `E`: general curiosity

Current actual behavior:

- Goal type mainly affects the goal statement text shown on results.
- The core CAT algorithm does not adapt item selection by goal type.
- The diagnosis ranking also does not currently customize by goal type.

## 15. User Experience Details Embedded in Code

These are not just cosmetic; they affect behavior:

- No router, no server state
- Lazy loading of major pages in `App.jsx`
- Keyboard shortcuts on the test page: `A/B/C/D` to select, `Enter` to confirm
- Four-second delay on the processing page before auto-navigation to results
- Animated score count-up on results
- Share action uses `navigator.share`, otherwise clipboard fallback
- Many components are written with strong “emotion design” comments that describe the intended tone

## 16. Tests

File: `irt.test.js`

Covered areas:

- 3PL probability bounds
- EAP theta estimation shifts
- next-item selection by Fisher information
- stopping rule behavior

The test coverage is focused on the IRT engine, not on React components.

## 17. Files and Folders That Matter Most

Primary application files:

- `App.jsx`
- `main.jsx`
- `TestSessionContext.jsx`
- `irt.js`
- `irt.config.js`
- `diagnostic.js`
- `diagnosticEngine.js`
- `ResultsPage.jsx`
- `EnglishDNA.jsx`
- `WrongAnswerBreakdown.jsx`
- `DiagnosisModal.jsx`
- `AIPracticePanel.jsx`
- `i18n.js`
- `itemBank/`
- `index.css`

## 18. Files and Folders to Treat Carefully or Ignore

These are not the main live app logic:

- `node_modules/`: dependency tree, ignore for app reasoning
- `dist/`: build output, generated artifacts
- `mnt/user-data/outputs/`: appears to be generated/exported reference output, not the main runtime path
- `my-new-app/`: separate scaffolded Vite app, likely unrelated to the main product in this folder
- `resources.js`: intentionally empty placeholder; not used for the current roadmap approach

If you are modifying the main app, do not assume `my-new-app/` is authoritative unless the user explicitly says so.

## 19. Known Architectural Constraints

- No backend means all scoring logic and content ship to the browser.
- Session persistence is per-browser-tab/session via `sessionStorage`, not durable user storage.
- The app depends heavily on shape consistency in item data and i18n keys.
- State transitions are manual and time-based in places (`setTimeout` in navigation and post-answer flow).
- The results stack mixes old and new UX layers: `DiagnosisModal` is older, `EnglishDNA` and `WrongAnswerBreakdown` are newer.

## 20. Practical Guidance for Future AI Agents

If you need to change scoring behavior:

- Start with `irt.js` and `irt.config.js`
- Verify that `irt.test.js` still passes

If you need to change diagnosis behavior:

- Update `diagnostic.js` for raw metrics
- Update `diagnosticEngine.js` for UI-oriented derived objects
- Confirm `ResultsPage.jsx`, `EnglishDNA.jsx`, and `WrongAnswerBreakdown.jsx` still receive the same data contract

If you need to add or edit questions:

- Modify the relevant file in `itemBank/`
- Preserve item field names exactly
- Ensure the new sub-skill has matching copy in `i18n.js` if the results UI references it

If you need to change wording:

- Most copy lives in `i18n.js`
- Some older comments may describe intent but are not the source of runtime truth

If you need to change navigation:

- The page flow is controlled by `TestSessionContext.jsx`
- There is no React Router to update

## 21. Short Mental Model

This app is best understood as four stacked layers:

1. Content layer: `itemBank/` and `i18n.js`
2. Engine layer: `irt.js`, `irt.config.js`, `diagnostic.js`, `diagnosticEngine.js`
3. Session layer: `TestSessionContext.jsx`
4. UI layer: page components and results components

If a bug appears:

- wrong score or stop timing: engine/session layer
- wrong wording or labels: content layer
- wrong screen sequence or persistence: session layer
- rendering or interaction issue: UI layer

