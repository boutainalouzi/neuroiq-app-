import confetti from 'canvas-confetti';
import { CATEGORIES, HISTORICAL_FIGURES, getTestSessionQuestions } from './data/questions.js';
import { calculateIQ } from './utils/iqCalculator.js';
import { sound } from './utils/audio.js';
import { generateCertificateDataURL } from './utils/certificate.js';
import { shareScore, downloadImage } from './utils/share.js';

// SVG ICONS (Zero emojis, pristine vector design)
const ICONS = {
  soundOn: `<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-2.5 9.77l-4.5-4h-4v6h4l4.5 4v-6zm3.5-3.5v7c1.48-.73 2.5-2.25 2.5-4s-1.02-3.27-2.5-4z"/></svg>`,
  soundOff: `<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`,
  info: `<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.8 14.17c-.24.68-1.4 1.25-1.92 1.33-.51.08-1.18.11-3.39-.8-2.82-1.17-4.64-4.04-4.78-4.23-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.35.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.49.24.57.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.32.38-.45.51-.15.15-.31.31-.13.62.18.31.79 1.3 1.7 2.11 1.17 1.04 2.16 1.36 2.47 1.51.31.15.49.13.67-.08.18-.21.79-.92 1-1.24.21-.32.42-.27.7-.16.28.11 1.78.84 2.09.99.31.15.52.23.6.36.08.13.08.76-.16 1.44z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
  copy: `<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-7.85-1.42 1.42L16.86 11H5v2z"/></svg>`
};

// Application State
const state = {
  view: 'welcome',
  userName: 'Participant',
  questionCount: 18,
  questions: [],
  currentIndex: 0,
  userAnswers: [],
  answerTimes: [],
  questionStartTime: 0,
  timerInterval: null,
  elapsedQuestionSeconds: 0,
  iqResults: null,
  certificateDataUrl: null,
  showReview: false
};

const appEl = document.getElementById('app');
const toastEl = document.getElementById('toast');
const toastMsgEl = document.getElementById('toast-msg');

function showToast(message) {
  toastMsgEl.textContent = message;
  toastEl.classList.add('show');
  setTimeout(() => {
    toastEl.classList.remove('show');
  }, 3200);
}

function initModals() {
  const methodModal = document.getElementById('method-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalOkBtn = document.getElementById('modal-ok-btn');

  function closeModal() {
    methodModal.classList.remove('open');
    methodModal.setAttribute('aria-hidden', 'true');
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalOkBtn) modalOkBtn.addEventListener('click', closeModal);

  methodModal.addEventListener('click', (e) => {
    if (e.target === methodModal) closeModal();
  });
}

function openMethodModal() {
  const methodModal = document.getElementById('method-modal');
  if (methodModal) {
    methodModal.classList.add('open');
    methodModal.setAttribute('aria-hidden', 'false');
  }
}

// ==========================================
// RENDERERS
// ==========================================

function renderHeader() {
  const isMuted = sound.isMuted();
  return `
    <header class="site-header">
      <div class="brand-logo" id="nav-brand">
        <span class="brand-subhead">Institut Psychométrique</span>
        <div class="brand-title">Neuro<span>IQ</span></div>
      </div>
      <div class="nav-actions">
        <button class="icon-btn" id="btn-sound-toggle" title="${isMuted ? 'Activer le son' : 'Couper le son'}" aria-label="Contrôle audio">
          ${isMuted ? ICONS.soundOff : ICONS.soundOn}
        </button>
        <button class="icon-btn" id="btn-info" title="Méthodologie scientifique" aria-label="Informations">
          ${ICONS.info}
        </button>
      </div>
    </header>
  `;
}

function renderWelcomeView() {
  return `
    ${renderHeader()}
    <main class="glass-panel hero-content">
      <span class="editorial-tag">Évaluation Cognitive Multidisciplinaire Standardisée</span>

      <h1 class="poster-title">
        Entre les Galaxies<br />
        <span style="color: var(--teal-lumi); font-size: 0.75em; letter-spacing: 0.18em;">du Savoir & de l'Esprit</span>
      </h1>

      <p class="poster-subtitle">
        Mesurez la puissance de votre raisonnement logique, vos facultés mathématiques, votre culture encyclopédique et votre vision spatiale à travers le prisme des grands esprits de l'histoire humaine.
      </p>

      <!-- HISTORICAL FIGURES GALLERY (Albert Einstein, Marie Curie, Da Vinci, Newton, Hugo) -->
      <section class="historical-gallery-section">
        <div class="section-editorial-header">
          <h3>Les Grands Esprits & Étalons Historiques</h3>
          <span>Archive Cognitive</span>
        </div>

        <div class="figures-scroll-grid">
          ${HISTORICAL_FIGURES.slice(0, 4).map(fig => `
            <article class="figure-card">
              <div class="figure-img-wrap">
                <img src="${fig.image}" alt="${fig.name}" loading="lazy" />
                <span class="figure-iq-badge">QI ~ ${fig.iqEstimate}</span>
              </div>
              <div class="figure-info">
                <h4 class="figure-name">${fig.name}</h4>
                <p class="figure-role">${fig.role}</p>
                <p class="figure-quote">${fig.quote}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- CONFIG CARD -->
      <div class="test-config-card">
        <div class="form-group">
          <label class="form-label" for="user-name-input">Identité du Candidat</label>
          <input 
            type="text" 
            id="user-name-input" 
            class="form-input" 
            placeholder="Nom complet ou désignation" 
            value="${state.userName !== 'Participant' ? state.userName : ''}"
            maxlength="32"
            autocomplete="name"
          />
        </div>

        <div class="form-group">
          <label class="form-label">Format de l'évaluation</label>
          <div class="length-selector">
            <label class="chip-option">
              <input type="radio" name="test-length" value="12" ${state.questionCount === 12 ? 'checked' : ''} />
              <div class="chip-content">
                <span class="chip-title">Session Rapide</span>
                <span class="chip-desc">12 questions (4 min)</span>
              </div>
            </label>
            <label class="chip-option">
              <input type="radio" name="test-length" value="18" ${state.questionCount === 18 ? 'checked' : ''} />
              <div class="chip-content">
                <span class="chip-title">Standard Certifié</span>
                <span class="chip-desc">18 questions (8 min)</span>
              </div>
            </label>
          </div>
        </div>

        <button id="btn-start-quiz" class="btn-primary">
          <span>Initier l'Évaluation</span>
          ${ICONS.arrowRight}
        </button>
      </div>
    </main>
  `;
}

function renderQuizView() {
  const currentQ = state.questions[state.currentIndex];
  const cat = CATEGORIES[currentQ.category] || { name: 'Général', code: 'GEN', color: '#38bdf8' };
  const progressPercent = Math.round(((state.currentIndex) / state.questions.length) * 100);
  const currentAnswer = state.userAnswers[state.currentIndex];

  const letterLabels = ['A', 'B', 'C'];

  return `
    ${renderHeader()}
    <main class="glass-panel">
      <div class="quiz-top-bar">
        <div class="quiz-category-tag" style="border-color: ${cat.color}; color: ${cat.color};">
          <span>[${cat.code}]</span>
          <span>${cat.name}</span>
        </div>
        <div class="quiz-timer" id="quiz-timer-display" aria-label="Temps écoulé">
          ${ICONS.clock}
          <span id="timer-seconds">${state.elapsedQuestionSeconds}s</span>
        </div>
      </div>

      <div class="progress-container">
        <div class="progress-meta">
          <span>Question <strong>${state.currentIndex + 1}</strong> / <strong>${state.questions.length}</strong></span>
          <span>Progression : ${progressPercent}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${progressPercent}%"></div>
        </div>
      </div>

      <div class="question-card">
        <h2 class="question-text" id="current-question-title">
          ${currentQ.question}
        </h2>

        <!-- STRICT RULE: EXACTLY 3 CHOICES (A, B, C) -->
        <div class="options-list" role="radiogroup" aria-labelledby="current-question-title">
          ${currentQ.options.map((optionText, idx) => `
            <button 
              type="button"
              class="option-btn ${currentAnswer === idx ? 'selected' : ''}" 
              data-option-idx="${idx}"
              role="radio"
              aria-checked="${currentAnswer === idx ? 'true' : 'false'}"
            >
              <span class="option-letter">${letterLabels[idx]}</span>
              <span class="option-label">${optionText}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <div class="quiz-footer-actions">
        <button id="btn-skip-q" class="btn-secondary" title="Passer cette question">
          Passer
        </button>

        <button id="btn-next-q" class="btn-primary" style="margin-top: 0; width: auto; padding: 0.75rem 2rem;">
          <span>${state.currentIndex === state.questions.length - 1 ? 'Conclure & Évaluer' : 'Question Suivante'}</span>
          ${ICONS.arrowRight}
        </button>
      </div>
    </main>
  `;
}

function renderResultsView() {
  const { score, percentile, accuracyPercent, averageTimePerQuestion, category, categoryBreakdown } = state.iqResults;

  return `
    ${renderHeader()}
    <main class="glass-panel">
      <div class="results-hero">
        <p style="font-size: 1rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem;">
          Bilan Psychométrique pour <strong>${state.userName}</strong>
        </p>

        <div class="score-reveal-circle" style="border-color: ${category.color}; box-shadow: 0 0 35px ${category.glowColor};">
          <span class="score-label-top">Score Étalonné</span>
          <div class="score-number" id="animated-score">0</div>
          <span class="score-label-bottom">Quotient Intellectuel</span>
        </div>

        <div class="category-banner" style="background: ${category.glowColor}; color: ${category.color}; border: 1px solid ${category.color};">
          ${category.badge}
        </div>

        <div class="category-sublevel">${category.level}</div>

        <p class="category-description-text">
          ${category.description}
        </p>

        <!-- HISTORICAL COGNITIVE ARCHETYPE -->
        <div class="archetype-resonance-box">
          <div class="archetype-avatar">
            <img src="${category.archetypeImage}" alt="${category.archetypeFigure}" />
          </div>
          <div class="archetype-content">
            <h4>Résonance Cognitive Historique</h4>
            <h3>Esprit de ${category.archetypeFigure}</h3>
            <p>${category.recommendation}</p>
          </div>
        </div>
      </div>

      <!-- Quick Metrics Summary -->
      <div class="stats-summary-grid">
        <div class="stat-card">
          <span class="stat-val" style="color: ${category.color};">${score}</span>
          <span class="stat-lbl">Quotient Intellectuel</span>
        </div>
        <div class="stat-card">
          <span class="stat-val" style="color: var(--cyan-lumi);">${percentile}%</span>
          <span class="stat-lbl">Centile Mondial</span>
        </div>
        <div class="stat-card">
          <span class="stat-val" style="color: var(--teal-lumi);">${accuracyPercent}%</span>
          <span class="stat-lbl">Exactitude Formelle</span>
        </div>
        <div class="stat-card">
          <span class="stat-val" style="color: #ffffff;">${averageTimePerQuestion}s</span>
          <span class="stat-lbl">Vélocité Moyenne</span>
        </div>
      </div>

      <!-- Category Breakdown Progress -->
      <div class="breakdown-section">
        <h3 class="breakdown-title">
          Spectre des Domaines Analytiques
        </h3>
        <div class="topic-bars-list">
          ${Object.entries(categoryBreakdown).map(([catKey, stat]) => {
            const cat = CATEGORIES[catKey] || { name: catKey, code: 'GEN', color: '#38bdf8' };
            return `
              <div class="topic-row">
                <div class="topic-meta">
                  <span class="topic-name">
                    <strong style="color: ${cat.color}; margin-right: 0.4rem;">[${cat.code}]</strong>
                    <span>${cat.name}</span>
                  </span>
                  <span class="topic-score-val">${stat.correct} / ${stat.total} (${stat.percentage}%)</span>
                </div>
                <div class="topic-bar-bg">
                  <div class="topic-bar-fill" style="width: ${stat.percentage}%; background: ${cat.color};"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- SOCIAL SHARING & OFFICIAL CERTIFICATE -->
      <section class="share-section-card">
        <h3 class="share-section-title">
          Transmission & Partage du Score
        </h3>
        <p class="share-section-desc">
          Partagez votre attestation cognitive et invitez vos pairs à se mesurer aux épreuves de l'Institut.
        </p>

        <div class="social-buttons-cluster">
          <a id="btn-share-whatsapp" href="#" target="_blank" rel="noopener" class="social-share-btn btn-whatsapp">
            ${ICONS.whatsapp}
            <span>WhatsApp</span>
          </a>
          <a id="btn-share-twitter" href="#" target="_blank" rel="noopener" class="social-share-btn btn-twitter">
            ${ICONS.twitter}
            <span>Partager sur X</span>
          </a>
          <a id="btn-share-telegram" href="#" target="_blank" rel="noopener" class="social-share-btn btn-telegram">
            ${ICONS.telegram}
            <span>Telegram</span>
          </a>
          <a id="btn-share-linkedin" href="#" target="_blank" rel="noopener" class="social-share-btn btn-linkedin">
            ${ICONS.linkedin}
            <span>LinkedIn</span>
          </a>
          <button id="btn-copy-score-link" class="social-share-btn btn-copy-link">
            ${ICONS.copy}
            <span>Copier la Fiche</span>
          </button>
        </div>

        <!-- Certificate Card View -->
        <div class="certificate-preview-box">
          <div class="cert-img-container">
            <img id="cert-preview-img" src="${state.certificateDataUrl || ''}" alt="Certificat officiel NeuroIQ" />
          </div>
          <div style="text-align: center;">
            <button id="btn-download-cert" class="btn-primary" style="margin: 0 auto; width: auto; padding: 0.85rem 1.75rem;">
              ${ICONS.download}
              <span>Télécharger le Certificat HD (PNG)</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Review / Correction Accordion -->
      <div class="review-section">
        <button id="btn-toggle-review" class="review-toggle-btn">
          <span>Consulter le registre des réponses (${state.questions.length} questions)</span>
          <span id="review-arrow">${state.showReview ? '▲' : '▼'}</span>
        </button>

        ${state.showReview ? `
          <div class="review-list">
            ${state.questions.map((q, idx) => {
              const userPick = state.userAnswers[idx];
              const isCorrect = userPick === q.correct;
              const cat = CATEGORIES[q.category] || { name: 'Général', code: 'GEN' };
              const letterLabels = ['A', 'B', 'C'];

              return `
                <div class="review-item ${isCorrect ? 'correct' : 'wrong'}">
                  <div class="review-header">
                    <span>[${cat.code}] ${cat.name}</span>
                    <strong style="color: ${isCorrect ? 'var(--teal-lumi)' : '#ef4444'}">
                      ${isCorrect ? 'EXACT' : 'INCORRECT'}
                    </strong>
                  </div>
                  <div class="review-question-title">
                    ${idx + 1}. ${q.question}
                  </div>
                  <div class="review-choices-box">
                    ${q.options.map((opt, oIdx) => {
                      const isUserChoice = userPick === oIdx;
                      const isCorrectChoice = q.correct === oIdx;
                      let choiceClass = '';
                      if (isCorrectChoice) choiceClass = 'correct-pick';
                      else if (isUserChoice && !isCorrect) choiceClass = 'user-pick';

                      return `
                        <div class="review-choice ${choiceClass}">
                          <span>${letterLabels[oIdx]}.</span>
                          <span>${opt}</span>
                          ${isUserChoice ? '<small style="margin-left:auto;">[Votre réponse]</small>' : ''}
                          ${isCorrectChoice ? '<small style="margin-left:auto; color:var(--teal-lumi);">[Réponse vérifiée]</small>' : ''}
                        </div>
                      `;
                    }).join('')}
                  </div>
                  <div class="review-explanation">
                    Démonstration : ${q.explanation}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : ''}
      </div>

      <div style="text-align: center; margin-top: 3rem;">
        <button id="btn-restart" class="btn-secondary" style="padding: 0.9rem 2.2rem; font-size: 0.95rem;">
          ${ICONS.arrowRight}
          <span>Nouvelle Session avec Série Inédite</span>
        </button>
      </div>
    </main>
  `;
}

// ==========================================
// CONTROLLER & EVENTS
// ==========================================

function render() {
  if (state.view === 'welcome') {
    appEl.innerHTML = renderWelcomeView();
    bindWelcomeEvents();
  } else if (state.view === 'quiz') {
    appEl.innerHTML = renderQuizView();
    bindQuizEvents();
  } else if (state.view === 'results') {
    appEl.innerHTML = renderResultsView();
    bindResultsEvents();
  }
  bindHeaderEvents();
}

function bindHeaderEvents() {
  const brandLogo = document.getElementById('nav-brand');
  if (brandLogo) {
    brandLogo.addEventListener('click', () => {
      sound.playPop();
      if (state.view !== 'welcome') {
        if (confirm("Revenir à l'accueil réinitialisera votre session en cours. Poursuivre ?")) {
          clearInterval(state.timerInterval);
          state.view = 'welcome';
          render();
        }
      }
    });
  }

  const soundToggleBtn = document.getElementById('btn-sound-toggle');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      const isMuted = sound.toggleMute();
      soundToggleBtn.innerHTML = isMuted ? ICONS.soundOff : ICONS.soundOn;
      soundToggleBtn.title = isMuted ? 'Activer le son' : 'Couper le son';
      showToast(isMuted ? 'Audio désactivé' : 'Audio activé');
      if (!isMuted) sound.playPop();
    });
  }

  const infoBtn = document.getElementById('btn-info');
  if (infoBtn) {
    infoBtn.addEventListener('click', () => {
      sound.playPop();
      openMethodModal();
    });
  }
}

function bindWelcomeEvents() {
  const nameInput = document.getElementById('user-name-input');
  const startBtn = document.getElementById('btn-start-quiz');
  const lengthRadios = document.querySelectorAll('input[name="test-length"]');

  lengthRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.questionCount = parseInt(e.target.value, 10);
      sound.playPop();
    });
  });

  startBtn.addEventListener('click', () => {
    sound.init();
    sound.playSelect();

    const enteredName = nameInput.value.trim();
    state.userName = enteredName || "Participant";
    
    state.questions = getTestSessionQuestions(state.questionCount);
    state.currentIndex = 0;
    state.userAnswers = new Array(state.questions.length).fill(null);
    state.answerTimes = new Array(state.questions.length).fill(0);
    state.view = 'quiz';
    state.showReview = false;

    startQuestionTimer();
    render();
  });
}

function startQuestionTimer() {
  clearInterval(state.timerInterval);
  state.elapsedQuestionSeconds = 0;
  state.questionStartTime = Date.now();

  state.timerInterval = setInterval(() => {
    state.elapsedQuestionSeconds++;
    const timerDisplay = document.getElementById('timer-seconds');
    if (timerDisplay) {
      timerDisplay.textContent = `${state.elapsedQuestionSeconds}s`;
    }
  }, 1000);
}

function saveCurrentQuestionTime() {
  clearInterval(state.timerInterval);
  const timeTaken = Math.max(1, Math.round((Date.now() - state.questionStartTime) / 1000));
  state.answerTimes[state.currentIndex] = timeTaken;
}

function bindQuizEvents() {
  const optionBtns = document.querySelectorAll('.option-btn');
  const nextBtn = document.getElementById('btn-next-q');
  const skipBtn = document.getElementById('btn-skip-q');

  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.playSelect();
      const chosenIdx = parseInt(btn.getAttribute('data-option-idx'), 10);
      state.userAnswers[state.currentIndex] = chosenIdx;

      optionBtns.forEach(b => {
        b.classList.remove('selected');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('selected');
      btn.setAttribute('aria-checked', 'true');
    });
  });

  function goToNext() {
    saveCurrentQuestionTime();
    if (state.currentIndex < state.questions.length - 1) {
      state.currentIndex++;
      startQuestionTimer();
      render();
    } else {
      finishQuiz();
    }
  }

  nextBtn.addEventListener('click', () => {
    sound.playPop();
    goToNext();
  });

  skipBtn.addEventListener('click', () => {
    sound.playPop();
    goToNext();
  });

  const keyHandler = (e) => {
    if (state.view !== 'quiz') {
      window.removeEventListener('keydown', keyHandler);
      return;
    }
    const key = e.key.toUpperCase();
    if (key === '1' || key === 'A') {
      selectOptionByKey(0);
    } else if (key === '2' || key === 'B') {
      selectOptionByKey(1);
    } else if (key === '3' || key === 'C') {
      selectOptionByKey(2);
    } else if (key === 'ENTER') {
      goToNext();
    }
  };

  function selectOptionByKey(idx) {
    const btn = document.querySelector(`.option-btn[data-option-idx="${idx}"]`);
    if (btn) btn.click();
  }

  window.addEventListener('keydown', keyHandler, { once: true });
}

function finishQuiz() {
  clearInterval(state.timerInterval);
  state.iqResults = calculateIQ(state.questions, state.userAnswers, state.answerTimes);

  state.certificateDataUrl = generateCertificateDataURL({
    userName: state.userName,
    score: state.iqResults.score,
    percentile: state.iqResults.percentile,
    categoryTitle: state.iqResults.category.title,
    accuracyPercent: state.iqResults.accuracyPercent
  });

  state.view = 'results';
  render();

  sound.playTriumph();
  animateScoreCounter(state.iqResults.score);
  launchConfetti(state.iqResults.score);
}

function animateScoreCounter(targetScore) {
  const el = document.getElementById('animated-score');
  if (!el) return;

  const duration = 1600;
  const start = 0;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (targetScore - start) * easeOut);
    el.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = targetScore;
    }
  }
  requestAnimationFrame(update);
}

function launchConfetti(score) {
  try {
    const count = score >= 120 ? 100 : 50;
    confetti({
      particleCount: count,
      spread: 70,
      colors: ['#38bdf8', '#2dd4bf', '#fbbf24', '#ffffff'],
      origin: { y: 0.6 }
    });
  } catch (e) {}
}

function bindResultsEvents() {
  const share = shareScore({
    score: state.iqResults.score,
    categoryTitle: state.iqResults.category.title,
    percentile: state.iqResults.percentile,
    userName: state.userName
  });

  const waBtn = document.getElementById('btn-share-whatsapp');
  if (waBtn) waBtn.href = share.whatsappUrl();

  const twBtn = document.getElementById('btn-share-twitter');
  if (twBtn) twBtn.href = share.twitterUrl();

  const tgBtn = document.getElementById('btn-share-telegram');
  if (tgBtn) tgBtn.href = share.telegramUrl();

  const liBtn = document.getElementById('btn-share-linkedin');
  if (liBtn) liBtn.href = share.linkedinUrl();

  const copyBtn = document.getElementById('btn-copy-score-link');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      sound.playPop();
      const ok = await share.copyToClipboard();
      if (ok) {
        showToast('Résultats copiés dans le presse-papier');
      }
    });
  }

  const downloadBtn = document.getElementById('btn-download-cert');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      sound.playPop();
      downloadImage(state.certificateDataUrl, `NeuroIQ-Certificat-${state.userName.replace(/\s+/g, '_')}.png`);
      showToast('Certificat officiel téléchargé en haute définition');
    });
  }

  const reviewToggleBtn = document.getElementById('btn-toggle-review');
  if (reviewToggleBtn) {
    reviewToggleBtn.addEventListener('click', () => {
      sound.playPop();
      state.showReview = !state.showReview;
      render();
    });
  }

  const restartBtn = document.getElementById('btn-restart');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      sound.playPop();
      state.view = 'welcome';
      render();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initModals();
  render();
});
