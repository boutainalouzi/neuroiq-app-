/**
 * IQ Calculation Engine based on Standard Gaussian Distribution (μ = 100, σ = 15)
 * ZERO EMOJIS - Clean scientific, academic classification
 */

export const IQ_CATEGORIES = [
  {
    minScore: 135,
    title: "Génie & Supérieur Exceptionnel",
    level: "Rang Mensa International (Top 1%)",
    badge: "HAUT POTENTIEL EXCEPTIONNEL",
    color: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.35)",
    archetypeFigure: "Albert Einstein & Leonardo da Vinci",
    archetypeImage: "/images/albert-einstein.jpg",
    description: "Vos facultés cognitives sont d'un ordre exceptionnel. Vous démontrez une vitesse d'abstraction rare, une pensée formelle rigoureuse et une intuition multidisciplinaire hors du commun.",
    recommendation: "Votre profil correspond aux critères d'admission des associations internationales de très haut quotient intellectuel (Mensa, Intertel)."
  },
  {
    minScore: 120,
    title: "Intelligence Très Supérieure",
    level: "Top 5% à 10% de la population",
    badge: "TRÈS SUPÉRIEUR",
    color: "#2dd4bf",
    glowColor: "rgba(45, 212, 191, 0.35)",
    archetypeFigure: "Marie Curie",
    archetypeImage: "/images/marie-curie.jpg",
    description: "Excellentes facultés d'analyse, vivacité de déduction et solide culture générale. Vous résolvez avec aisance des systèmes logiques complexes.",
    recommendation: "Votre esprit est particulièrement doué pour la recherche, l'innovation scientifique et la modélisation de problèmes abstraits."
  },
  {
    minScore: 110,
    title: "Intelligence Supérieure",
    level: "Moyenne Haute (Top 25%)",
    badge: "SUPÉRIEUR",
    color: "#67e8f9",
    glowColor: "rgba(103, 232, 249, 0.35)",
    archetypeFigure: "Sir Isaac Newton",
    archetypeImage: "/images/isaac-newton.jpg",
    description: "Performances nettement au-dessus de la moyenne. Votre raisonnement méthodique et votre sens critique vous permettent d'appréhender rapidement de nouveaux savoirs.",
    recommendation: "Très bonne capacité d'assimilation et de réflexion structurée. Vous disposez d'un excellent potentiel de progression."
  },
  {
    minScore: 90,
    title: "Intelligence Moyenne Standard",
    level: "Zone Normale Représentative (50% de la population)",
    badge: "STANDARD NORMATIF",
    color: "#94a3b8",
    glowColor: "rgba(148, 163, 184, 0.3)",
    archetypeFigure: "Victor Hugo",
    archetypeImage: "/images/victor-hugo.jpg",
    description: "Vous vous situez au cœur de la courbe normale de Gauss. Vous possédez un esprit équilibré, un sens logique fonctionnel et une compréhension générale fluide.",
    recommendation: "Un résultat sain et harmonieux. Un entraînement ciblé en calcul arithmétique et en lecture analytique peut encore élever votre score."
  },
  {
    minScore: 80,
    title: "Aptitudes en Développement",
    level: "Zone Initiale de Progression",
    badge: "EN PROGRESSION",
    color: "#fbbf24",
    glowColor: "rgba(251, 191, 36, 0.3)",
    archetypeFigure: "Étudiant de l'Académie",
    archetypeImage: "/images/albert-einstein.jpg",
    description: "Vous avez fait preuve d'une attention réelle. Certaines déductions sous contrainte de temps ont nécessité plus de recul.",
    recommendation: "La plasticité cérébrale s'affine à tout âge par la lecture régulière, la résolution d'énigmes et la pratique des sciences."
  },
  {
    minScore: 0,
    title: "Score d'Éveil Cognitif",
    level: "Évaluation Préliminaire",
    badge: "ÉVEIL COGNITIF",
    color: "#64748b",
    glowColor: "rgba(100, 116, 139, 0.25)",
    archetypeFigure: "Observateur",
    archetypeImage: "/images/leonardo-da-vinci.jpg",
    description: "Ce résultat préliminaire suggère une session écourtée ou une fatigue passagère au moment de l'évaluation.",
    recommendation: "Prenez un moment de repos et repassez le test dans un environnement silencieux propice à la concentration."
  }
];

function erf(x) {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);

  const t = 1.0 / (1.0 + p * x);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

  return sign * y;
}

export function calculatePercentile(iq) {
  const z = (iq - 100) / 15;
  const cdf = 0.5 * (1 + erf(z / Math.sqrt(2)));
  const percentile = Math.min(99.9, Math.max(0.1, cdf * 100));
  return Number(percentile.toFixed(1));
}

export function calculateIQ(questions, userAnswers, answerTimes = []) {
  let totalWeightedScore = 0;
  let maxPossibleWeightedScore = 0;
  let correctCount = 0;
  let totalTime = 0;

  const categoryStats = {};

  questions.forEach((q, idx) => {
    const chosen = userAnswers[idx];
    const isCorrect = chosen === q.correct;
    const timeSpent = answerTimes[idx] || 15;
    totalTime += timeSpent;

    const weight = q.difficulty === 1 ? 1.0 : q.difficulty === 2 ? 1.35 : 1.7;
    maxPossibleWeightedScore += weight;

    if (isCorrect) {
      correctCount++;
      const speedBonusMultiplier = timeSpent < 10 ? 1.15 : timeSpent < 18 ? 1.05 : 1.0;
      totalWeightedScore += weight * speedBonusMultiplier;
    }

    if (!categoryStats[q.category]) {
      categoryStats[q.category] = { correct: 0, total: 0 };
    }
    categoryStats[q.category].total += 1;
    if (isCorrect) {
      categoryStats[q.category].correct += 1;
    }
  });

  const rawRatio = maxPossibleWeightedScore > 0 ? (totalWeightedScore / maxPossibleWeightedScore) : 0;
  let rawIQ = 70 + (rawRatio * 75);

  if (correctCount === questions.length) {
    rawIQ += 4;
  } else if (correctCount / questions.length >= 0.85) {
    rawIQ += 2;
  }

  const finalScore = Math.min(150, Math.max(70, Math.round(rawIQ)));
  const percentile = calculatePercentile(finalScore);
  const categoryInfo = IQ_CATEGORIES.find(cat => finalScore >= cat.minScore) || IQ_CATEGORIES[IQ_CATEGORIES.length - 1];

  const categoryBreakdown = {};
  let bestCategory = null;
  let bestRatio = -1;

  Object.entries(categoryStats).forEach(([catKey, stat]) => {
    const pct = Math.round((stat.correct / stat.total) * 100);
    categoryBreakdown[catKey] = {
      correct: stat.correct,
      total: stat.total,
      percentage: pct
    };
    if (pct > bestRatio) {
      bestRatio = pct;
      bestCategory = catKey;
    }
  });

  return {
    score: finalScore,
    percentile,
    correctCount,
    totalQuestions: questions.length,
    accuracyPercent: Math.round((correctCount / questions.length) * 100),
    totalTimeSeconds: Math.round(totalTime),
    averageTimePerQuestion: (totalTime / questions.length).toFixed(1),
    category: categoryInfo,
    categoryBreakdown,
    bestCategory
  };
}
