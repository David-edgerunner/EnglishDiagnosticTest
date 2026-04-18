// ═══════════════════════════════════════════════════════════════
// DIAGNOSIS MODAL — Wrong-answer review overlay
// ═══════════════════════════════════════════════════════════════
//
// Renders a full-screen modal containing:
//   - Wrong answers grouped by sub-skill (most-missed first)
//   - Per-item: stem, learner's choice, correct choice, explanation
//   - AI Practice Panel prompt generator at the bottom
//
// Design note (Website Bible §2.3):
//   Wrong answers are framed as "What we learned from your answers",
//   never as mistakes. Neutral ○ for learner's wrong choice.

import AIPracticePanel from "./AIPracticePanel";

export function DiagnosisModal({ open, diagnosis, lang, results, goalType, t, onClose }) {
  if (!open) return null;

  return (
    <div
      className="diagnosis-modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="diagnosis-modal">
        <div className="diagnosis-modal-header">
          <button className="diagnosis-back-btn" onClick={onClose}>
            ← {lang === "vi" ? "Quay lại" : "Back"}
          </button>
          <h2 className="diagnosis-modal-title">{t.diagnosisTitle}</h2>
        </div>
        <div className="diagnosis-modal-body">
          <div className="disclaimer-box" style={{ marginBottom: 20 }}>
            <span className="disclaimer-icon">ℹ️</span>
            <p>{t.disclaimer}</p>
          </div>
          {Object.entries(diagnosis.wrongBySubSkill)
            .sort((a, b) => b[1].length - a[1].length)
            .map(([subSkill, items]) => (
              <div className="wrong-answer-group" key={subSkill}>
                <h4>{subSkill} ({items.length})</h4>
                {items.map((item, idx) => (
                  <div className="wrong-answer-item" key={idx}>
                    <div className="wa-stem">{item.stem}</div>
                    <div className="wa-choices">
                      <div className="wa-choice learner-wrong">
                        <span className="wa-label">{t.youChose}</span>
                        <span>{item.options[item.learner_choice]}</span>
                      </div>
                      <div className="wa-choice correct-answer">
                        <span className="wa-label">{t.theAnswer}</span>
                        <span>{item.options[item.correct_choice]}</span>
                      </div>
                    </div>
                    <div className="wa-explanation">
                      {lang === "vi" && item.explanation_vi ? item.explanation_vi : item.explanation_text}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          {diagnosis.wrongAnswers.length === 0 && (
            <p style={{ color: "var(--strength)", fontWeight: 500, textAlign: "center", padding: 20 }}>
              {lang === "vi"
                ? "Hoàn hảo! Bạn đã trả lời đúng tất cả các câu hỏi."
                : "Perfect! You answered every question correctly."}
            </p>
          )}
          {diagnosis.wrongAnswers.length > 0 && (
            <AIPracticePanel results={results} t={t} goalType={goalType} lang={lang} />
          )}
        </div>
      </div>
    </div>
  );
}
