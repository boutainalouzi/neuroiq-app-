/**
 * NeuroIQ Question Bank
 * Strictly 3 choices per question, exactly 1 correct answer.
 * ZERO EMOJIS - Clean editorial and scientific typography.
 */

export const CATEGORIES = {
  logique: {
    id: 'logique',
    name: 'Logique & Déduction',
    code: 'LOG',
    color: '#38bdf8',
    bgColor: 'rgba(56, 189, 248, 0.1)',
    description: 'Capacité d\'analyse déductive, pensée formelle et détection de postulats'
  },
  math: {
    id: 'math',
    name: 'Mathématiques & Suites',
    code: 'MAT',
    color: '#2dd4bf',
    bgColor: 'rgba(45, 212, 191, 0.1)',
    description: 'Calcul arithmétique, raisonnement inductif et suites de nombres'
  },
  culture: {
    id: 'culture',
    name: 'Culture Générale & Histoire',
    code: 'CUL',
    color: '#38bdf8',
    bgColor: 'rgba(56, 189, 248, 0.1)',
    description: 'Connaissances historiques, géopolitiques et patrimoine mondial'
  },
  science: {
    id: 'science',
    name: 'Sciences Physiques & Nature',
    code: 'SCI',
    color: '#fbbf24',
    bgColor: 'rgba(251, 191, 36, 0.1)',
    description: 'Lois de la physique, chimie des éléments, biologie et astrophysique'
  },
  spatial: {
    id: 'spatial',
    name: 'Raisonnement Spatial',
    code: 'SPA',
    color: '#818cf8',
    bgColor: 'rgba(129, 140, 248, 0.1)',
    description: 'Visualisation tridimensionnelle, rotation mentale et géométrie'
  },
  verbal: {
    id: 'verbal',
    name: 'Aptitude Verbale & Littérature',
    code: 'VER',
    color: '#2dd4bf',
    bgColor: 'rgba(45, 212, 191, 0.1)',
    description: 'Analogies lexicales, sémantique précise et rhétorique'
  }
};

export const HISTORICAL_FIGURES = [
  {
    id: 'einstein',
    name: 'Albert Einstein',
    dates: '1879 — 1955',
    role: 'Physicien théoricien, Prix Nobel de Physique',
    image: '/images/albert-einstein.jpg',
    iqEstimate: '160 — 165',
    categoryKey: 'science',
    quote: '« L\'imagination est plus importante que le savoir. Le savoir est limité, tandis que l\'imagination embrasse le monde entier. »',
    field: 'Physique quantique & Relativité générale'
  },
  {
    id: 'curie',
    name: 'Marie Curie',
    dates: '1867 — 1934',
    role: 'Physicienne et chimiste, Double Prix Nobel',
    image: '/images/marie-curie.jpg',
    iqEstimate: '170 — 175',
    categoryKey: 'science',
    quote: '« Dans la vie, rien n\'est à craindre, tout est à comprendre. Il est temps de comprendre plus pour craindre moins. »',
    field: 'Radioactivité fondamentale & Sciences'
  },
  {
    id: 'davinci',
    name: 'Leonardo da Vinci',
    dates: '1452 — 1519',
    role: 'Polymathe, Peintre, Ingénieur et Inventeur',
    image: '/images/leonardo-da-vinci.jpg',
    iqEstimate: '180 — 190',
    categoryKey: 'spatial',
    quote: '« La simplicité est la sophistication suprême. »',
    field: 'Arts visuels, Anatomie & Vision spatiale'
  },
  {
    id: 'newton',
    name: 'Sir Isaac Newton',
    dates: '1643 — 1727',
    role: 'Mathématicien, Physicien et Astronome',
    image: '/images/isaac-newton.jpg',
    iqEstimate: '185 — 195',
    categoryKey: 'math',
    quote: '« Si j\'ai vu plus loin, c\'est en me tenant sur les épaules de géants. »',
    field: 'Mécanique céleste, Calcul différentiel & Optique'
  },
  {
    id: 'hugo',
    name: 'Victor Hugo',
    dates: '1802 — 1885',
    role: 'Écrivain, Poète et Figure des Lumières',
    image: '/images/victor-hugo.jpg',
    iqEstimate: '165 — 170',
    categoryKey: 'verbal',
    quote: '« Lire, c\'est voyager ; voyager, c\'est lire. Rien n\'est plus puissant qu\'une idée dont le temps est venu. »',
    field: 'Littérature française & Philosophie humaniste'
  }
];

export const QUESTIONS_POOL = [
  // ==========================================
  // MATH & SUITES NUMÉRIQUES (3 CHOIX STRICTS)
  // ==========================================
  {
    id: 'math_1',
    category: 'math',
    difficulty: 1,
    question: "Déterminez le terme suivant dans la progression géométrique : 3, 6, 12, 24, ... ?",
    options: ["48", "36", "52"],
    correct: 0,
    explanation: "Chaque terme est rigoureusement le double du précédent (raison 2) : 24 × 2 = 48."
  },
  {
    id: 'math_2',
    category: 'math',
    difficulty: 2,
    question: "Quelle valeur complète rigoureusement cette suite : 2, 5, 10, 17, 26, ... ?",
    options: ["35", "37", "39"],
    correct: 1,
    explanation: "La règle mathématique correspond à n² + 1 pour n = 1, 2, 3, 4, 5, 6 : 6² + 1 = 37."
  },
  {
    id: 'math_3',
    category: 'math',
    difficulty: 1,
    question: "Cinq ateliers produisent 5 instruments en 5 jours. Combien de jours sont nécessaires à 100 ateliers pour concevoir 100 instruments identiques ?",
    options: ["100 jours", "5 jours", "25 jours"],
    correct: 1,
    explanation: "La cadence unitaire est de 1 instrument par atelier en 5 jours. 100 ateliers opérant en parallèle termineront 100 instruments en 5 jours."
  },
  {
    id: 'math_4',
    category: 'math',
    difficulty: 2,
    question: "Un compas et une règle de précision coûtent 1,10 € à l'achat. Le compas coûte 1 € de plus que la règle. Quel est le montant exact de la règle ?",
    options: ["0,05 €", "0,10 €", "0,15 €"],
    correct: 0,
    explanation: "Soit R le coût de la règle : R + (R + 1,00) = 1,10 => 2R = 0,10 => R = 0,05 €."
  },
  {
    id: 'math_5',
    category: 'math',
    difficulty: 3,
    question: "Dans cette progression arithmétique fondamentale : 4, 9, 25, 49, 121, ... quel est le nombre suivant ?",
    options: ["144", "169", "196"],
    correct: 1,
    explanation: "Cette suite est constituée des carrés des nombres premiers successifs (2²=4, 3²=9, 5²=25, 7²=49, 11²=121). Le nombre premier suivant est 13, et 13² = 169."
  },
  {
    id: 'math_6',
    category: 'math',
    difficulty: 2,
    question: "Quel nombre succède logiquement dans la séquence : 1, 1, 2, 3, 5, 8, 13, ... ?",
    options: ["20", "21", "24"],
    correct: 1,
    explanation: "C'est la suite de Fibonacci : chaque terme est la somme des deux termes qui le précèdent (8 + 13 = 21)."
  },
  {
    id: 'math_7',
    category: 'math',
    difficulty: 2,
    question: "Une colonie bactérienne double de volume toutes les 24 heures. Si l'éprouvette est pleine au 48ème jour, à quel jour était-elle à moitié pleine ?",
    options: ["Au 24ème jour", "Au 47ème jour", "Au 36ème jour"],
    correct: 1,
    explanation: "Le volume doublant chaque jour, l'éprouvette atteignait exactement la moitié de sa capacité la veille du remplissage complet, soit au 47ème jour."
  },
  {
    id: 'math_8',
    category: 'math',
    difficulty: 3,
    question: "Résolvez le terme manquant de la suite : 8, 12, 18, 27, ... ?",
    options: ["36,5", "40,5", "42,0"],
    correct: 1,
    explanation: "Le ratio multiplicatif entre deux termes consécutifs est de 1,5 : 27 × 1,5 = 40,5."
  },
  {
    id: 'math_9',
    category: 'math',
    difficulty: 1,
    question: "Selon les règles formelles de priorité opératoire, quel est le résultat de : 15 - 3 × 4 + 2 ?",
    options: ["5", "50", "14"],
    correct: 0,
    explanation: "La multiplication est prioritaire : 3 × 4 = 12. Puis l'évaluation de gauche à droite donne : 15 - 12 + 2 = 5."
  },
  {
    id: 'math_10',
    category: 'math',
    difficulty: 3,
    question: "Si 3 calculateurs effectuent 3 modélisations en 3 heures, combien de modélisations 6 calculateurs produiront-ils en 6 heures à cadence égale ?",
    options: ["6 modélisations", "12 modélisations", "18 modélisations"],
    correct: 1,
    explanation: "1 calculateur produit 1 modélisation en 3 heures, soit 2 en 6 heures. 6 calculateurs produiront donc 6 × 2 = 12 modélisations."
  },

  // ==========================================
  // LOGIQUE & DÉDUCTION FORMELLE
  // ==========================================
  {
    id: 'logique_1',
    category: 'logique',
    difficulty: 1,
    question: "Tous les astronomes observent les constellations. Certains scientifiques sont astronomes. Quelle déduction est irréfutable ?",
    options: [
      "Certains scientifiques observent les constellations",
      "Tous les scientifiques observent les constellations",
      "Tous les astronomes sont des mathématiciens"
    ],
    correct: 0,
    explanation: "Puisque les astronomes observent les constellations et que certains scientifiques sont des astronomes, il en résulte formellement que certains scientifiques observent les constellations."
  },
  {
    id: 'logique_2',
    category: 'logique',
    difficulty: 2,
    question: "Si l'équinoxe a lieu un mardi, quel jour de la semaine surviendra exactement 100 jours plus tard ?",
    options: ["Jeudi", "Vendredi", "Mercredi"],
    correct: 0,
    explanation: "100 jours divisés par 7 font 14 semaines complètes et un reste de 2 jours. Deux jours après mardi se trouve jeudi."
  },
  {
    id: 'logique_3',
    category: 'logique',
    difficulty: 2,
    question: "Isaac regarde Marie, mais Marie regarde Thomas. Isaac est marié, Thomas ne l'est pas. Une personne mariée observe-t-elle une personne non mariée ?",
    options: [
      "Oui, nécessairement",
      "Non, impossible",
      "Informations insuffisantes pour conclure"
    ],
    correct: 0,
    explanation: "Si Marie est mariée, elle regarde Thomas (non marié) : l'énoncé est vérifié. Si Marie n'est pas mariée, Isaac (marié) la regarde : l'énoncé est également vérifié. C'est vrai dans tous les cas."
  },
  {
    id: 'logique_4',
    category: 'logique',
    difficulty: 1,
    question: "René est né avant Blaise, mais après Nicolas. Lequel de ces trois érudits est le plus jeune ?",
    options: ["Blaise", "René", "Nicolas"],
    correct: 0,
    explanation: "L'ordre chronologique de naissance est Nicolas > René > Blaise. Le plus jeune est Blaise."
  },
  {
    id: 'logique_5',
    category: 'logique',
    difficulty: 3,
    question: "Quatre savants s'expriment. Un seul énonce une vérité mathématique. A: 'B se trompe', B: 'D se trompe', C: 'Je dis faux', D: 'B dit vrai'. Qui est véridique ?",
    options: ["Le savant A", "Le savant B", "Le savant D"],
    correct: 0,
    explanation: "B et D sont interdépendants. Comme une seule affirmation est vraie, B et D ne peuvent coïncider. L'unique solution logique cohérente attribue la vérité au savant A."
  },
  {
    id: 'logique_6',
    category: 'logique',
    difficulty: 2,
    question: "Dans une compétition chronométrée, vous dépassez le concurrent qui occupait la deuxième position. À quel rang vous positionnez-vous ?",
    options: ["Au 1er rang", "Au 2ème rang", "Au 3ème rang"],
    correct: 1,
    explanation: "En dépassant le concurrent occupant la deuxième position, vous prenez sa place et devenez 2ème."
  },
  {
    id: 'logique_7',
    category: 'logique',
    difficulty: 3,
    question: "Aucun astre tellurique n'est une géante gazeuse. Toutes les exoplanètes de type Jupiter sont des géantes gazeuses. Par conséquent :",
    options: [
      "Aucune exoplanète de type Jupiter n'est un astre tellurique",
      "Certains astres telluriques sont des géantes gazeuses",
      "Toutes les exoplanètes sont nécessairement telluriques"
    ],
    correct: 0,
    explanation: "Les deux ensembles étant strictement disjoints, aucune entité de la classe 'exoplanète de type Jupiter' ne peut appartenir à la classe 'astre tellurique'."
  },
  {
    id: 'logique_8',
    category: 'logique',
    difficulty: 2,
    question: "Identifiez l'élément géométrique non congruent parmi les trois propositions :",
    options: ["Dodécaèdre", "Hexagone régulier", "Tétraèdre"],
    correct: 1,
    explanation: "L'hexagone est une figure bidimensionnelle plane, tandis que le dodécaèdre et le tétraèdre sont des polyèdres tridimensionnels."
  },

  // ==========================================
  // CULTURE GÉNÉRALE & HISTOIRE MONDIALE
  // ==========================================
  {
    id: 'culture_1',
    category: 'culture',
    difficulty: 1,
    question: "Quelle cité a été désignée capitale fédérale de l'Australie en 1908 pour arbitrer la rivalité entre Sydney et Melbourne ?",
    options: ["Canberra", "Brisbane", "Adélaïde"],
    correct: 0,
    explanation: "Canberra fut spécialement édifiée comme cité capitale de compromis géographique et politique."
  },
  {
    id: 'culture_2',
    category: 'culture',
    difficulty: 1,
    question: "En quelle année s'est déroulée la chute historique du mur de Berlin, marquant la fin de la Guerre froide ?",
    options: ["1989", "1991", "1985"],
    correct: 0,
    explanation: "L'ouverture et la chute du mur de Berlin ont eu lieu le 9 novembre 1989."
  },
  {
    id: 'culture_3',
    category: 'culture',
    difficulty: 2,
    question: "Quel maître espagnol du cubisme a réalisé la toile monumentale 'Guernica' en 1937 ?",
    options: ["Pablo Picasso", "Joan Miró", "Francisco de Goya"],
    correct: 0,
    explanation: "Pablo Picasso a conçu 'Guernica' pour dénoncer le bombardement tragique de la ville basque."
  },
  {
    id: 'culture_4',
    category: 'culture',
    difficulty: 2,
    question: "Quel fleuve est attesté par les récentes mesures satellitaires et hydrographiques comme le plus long et volumineux de la planète ?",
    options: ["L'Amazone", "Le Nil", "Le Mississippi"],
    correct: 0,
    explanation: "L'Amazone, avec ses près de 6 992 km et son débit moyen de 209 000 m³/s, surpasse l'ensemble des réseaux fluviaux terrestres."
  },
  {
    id: 'culture_5',
    category: 'culture',
    difficulty: 2,
    question: "Quel dramaturge classique français est l'auteur de l'œuvre immortelle 'Cyrano de Bergerac' créée en 1897 ?",
    options: ["Edmond Rostand", "Pierre Corneille", "Jean Racine"],
    correct: 0,
    explanation: "Edmond Rostand a composé cette comédie héroïque en vers qui triomphe sur les scènes internationales."
  },
  {
    id: 'culture_6',
    category: 'culture',
    difficulty: 3,
    question: "Dans la mythologie grecque archaïque, quelle divinité personnifie le Sommeil, frère jumeau de Thanatos ?",
    options: ["Hypnos", "Morphée", "Érèbe"],
    correct: 0,
    explanation: "Hypnos est la personnification du sommeil primordial (Morphée étant son fils et le dieu des songes)."
  },
  {
    id: 'culture_7',
    category: 'culture',
    difficulty: 2,
    question: "Quel traité diplomatique scellé le 28 juin 1919 a formellement conclu la Première Guerre mondiale ?",
    options: ["Le Traité de Versailles", "Le Congrès de Vienne", "Le Traité d'Utrecht"],
    correct: 0,
    explanation: "Le Traité de Versailles fut signé dans la galerie des Glaces du château de Versailles."
  },
  {
    id: 'culture_8',
    category: 'culture',
    difficulty: 3,
    question: "Quelle dynastie arabe antique a sculpté la célèbre cité caravanière de Pétra dans les falaises rocheuses de Jordanie ?",
    options: ["Les Nabatéens", "Les Phéniciens", "Les Sassanides"],
    correct: 0,
    explanation: "Les Nabatéens ont érigé cette capitale troglodytique prospère entre le IVe siècle av. J.-C. et le Ier siècle apr. J.-C."
  },

  // ==========================================
  // SCIENCES & PHYSIQUE COSMIQUE
  // ==========================================
  {
    id: 'science_1',
    category: 'science',
    difficulty: 1,
    question: "Quel élément chimique fondamental est désigné par le symbole 'Au' dans la table de Mendeleïev ?",
    options: ["L'Or", "L'Argent", "L'Argent colloïdal"],
    correct: 0,
    explanation: "'Au' provient de la racine latine 'Aurum', signifiant 'brillant' ou 'or'."
  },
  {
    id: 'science_2',
    category: 'science',
    difficulty: 1,
    question: "Quelle est la vitesse universelle constante de propagation de la lumière (c) dans le vide spatial ?",
    options: ["~ 300 000 km/s", "~ 150 000 km/s", "~ 30 000 km/s"],
    correct: 0,
    explanation: "La constante fondamentale 'c' est d'exactement 299 792 458 m/s, soit environ 300 000 kilomètres par seconde."
  },
  {
    id: 'science_3',
    category: 'science',
    difficulty: 2,
    question: "Quel corps céleste du système solaire possède la vitesse de rotation sur son axe la plus élevée (durée d'un jour inférieure à 10 heures) ?",
    options: ["Jupiter", "Saturne", "Vénus"],
    correct: 0,
    explanation: "Jupiter accomplit une révolution complète sur elle-même en seulement 9 heures et 55 minutes."
  },
  {
    id: 'science_4',
    category: 'science',
    difficulty: 2,
    question: "Quel gaz élémentaire compose la fraction prépondérante (environ 78 %) de l'atmosphère terrestre ?",
    options: ["Le Diazote (Azote)", "L'Oxygène", "L'Argon"],
    correct: 0,
    explanation: "L'azote moléculaire (N₂) constitue 78,08 % du volume de l'air sec, devançant l'oxygène (20,95 %)."
  },
  {
    id: 'science_5',
    category: 'science',
    difficulty: 3,
    question: "Quelle formulation énonce le principe d'inertie (première loi du mouvement de Newton) ?",
    options: [
      "Tout corps persévère dans son état de repos ou de mouvement rectiligne uniforme sans force externe",
      "L'accélération d'un corps est toujours proportionnelle à son rayon gravitationnel",
      "L'énergie totale d'un système isolé décroît avec l'entropie"
    ],
    correct: 0,
    explanation: "Le premier principe de la dynamique newtonienne postule la conservation de la quantité de mouvement en l'absence de force nette résultante."
  },
  {
    id: 'science_6',
    category: 'science',
    difficulty: 2,
    question: "Quelle particule nucléaire élémentaire possède une charge électrique rigoureusement neutre ?",
    options: ["Le Neutron", "Le Proton", "Le Positron"],
    correct: 0,
    explanation: "Le neutron, composant du noyau atomique avec le proton, possède une charge électrique nulle."
  },
  {
    id: 'science_7',
    category: 'science',
    difficulty: 3,
    question: "Quelle théorie unifiée a été postulée par Albert Einstein en 1915 pour décrire la gravitation comme courbure de l'espace-temps ?",
    options: [
      "La Relativité Générale",
      "L'Électrodynamique Quantique",
      "La Théorie des Cordes"
    ],
    correct: 0,
    explanation: "La Relativité Générale d'Einstein (1915) réinterprète la force gravitationnelle comme une déformation géométrique de l'espace-temps produite par l'énergie et la masse."
  },

  // ==========================================
  // RAISONNEMENT SPATIAL & GÉOMÉTRIE
  // ==========================================
  {
    id: 'spatial_1',
    category: 'spatial',
    difficulty: 1,
    question: "Combien de faces pentagonales régulières composent un dodécaèdre régulier de Platon ?",
    options: ["12 faces", "20 faces", "8 faces"],
    correct: 0,
    explanation: "Le dodécaèdre régulier est constitué de douze faces pentagonales équilatérales congruentes."
  },
  {
    id: 'spatial_2',
    category: 'spatial',
    difficulty: 2,
    question: "Combien d'arêtes linéaires distinctes délimitent un prisme cubique standard ?",
    options: ["12 arêtes", "8 arêtes", "16 arêtes"],
    correct: 0,
    explanation: "Un cube comporte exactement 6 faces, 8 sommets et 12 arêtes."
  },
  {
    id: 'spatial_3',
    category: 'spatial',
    difficulty: 2,
    question: "Quelle est la somme absolue des angles internes de tout triangle dans un espace euclidien plan ?",
    options: ["180 degrés (π radians)", "360 degrés (2π radians)", "270 degrés"],
    correct: 0,
    explanation: "Dans le cadre de la géométrie euclidienne classique, la somme des trois angles d'un triangle équivaut rigoureusement à 180°."
  },
  {
    id: 'spatial_4',
    category: 'spatial',
    difficulty: 3,
    question: "Combien de diagonales intérieures distinctes relient les sommets non adjacents d'un hexagone régulier convexe ?",
    options: ["9 diagonales", "12 diagonales", "6 diagonales"],
    correct: 0,
    explanation: "La formule analytique du nombre de diagonales d'un polygone à n côtés est n(n-3)/2. Pour n=6 : 6 × 3 / 2 = 9."
  },
  {
    id: 'spatial_5',
    category: 'spatial',
    difficulty: 3,
    question: "Un bloc solide de 3×3×3 cm peint en bleu est découpé en 27 cubes unitaires de 1×1×1 cm. Combien de ces petits cubes ne présentent AUCUNE face peinte ?",
    options: ["1 cube central", "0 cube", "4 cubes"],
    correct: 0,
    explanation: "Seul le cube unique situé au centre géométrique intérieur n'a aucune de ses 6 faces exposées à la surface externe : (3-2)³ = 1."
  },
  {
    id: 'spatial_6',
    category: 'spatial',
    difficulty: 2,
    question: "Si une horloge astronomique indique exactement 3 heures et 15 minutes, quel est l'angle géométrique précis séparant l'aiguille des heures de celle des minutes ?",
    options: ["7,5 degrés", "0 degré (alignées)", "15 degrés"],
    correct: 0,
    explanation: "L'aiguille des heures avance de 0,5° par minute. En 15 minutes, elle a progressé de 15 × 0,5 = 7,5° au-delà du repère de 3 heures, d'où un écart de 7,5°."
  },

  // ==========================================
  // VOCABULAIRE & ANALOGIES LITTÉRAIRES
  // ==========================================
  {
    id: 'verbal_1',
    category: 'verbal',
    difficulty: 1,
    question: "Établissez l'analogie formelle : Le 'Traité' est à l'Érudit ce que la 'Fresque' est au ... ?",
    options: ["Peintre fresquiste", "Critique d'art", "Conservateur"],
    correct: 0,
    explanation: "L'érudit est le créateur du traité, tout comme le peintre fresquiste est le créateur de la fresque murale."
  },
  {
    id: 'verbal_2',
    category: 'verbal',
    difficulty: 2,
    question: "Quel adjectif soutenu constitue l'antonyme rigoureux de l'état 'Éphémère' ?",
    options: ["Pérenne", "Fugace", "Transitoire"],
    correct: 0,
    explanation: "'Pérenne' caractérise ce qui dure indéfiniment ou traverse les époques, à l'opposé d'éphémère."
  },
  {
    id: 'verbal_3',
    category: 'verbal',
    difficulty: 3,
    question: "Quel énoncé littéraire constitue la manifestation d'un 'Oxymore' rhétorique classique ?",
    options: [
      "Cette obscure clarté qui tombe des étoiles (Corneille)",
      "Un silence d'or dans un ciel de plomb",
      "Il pleut des larmes sur le pavé des villes"
    ],
    correct: 0,
    explanation: "L'oxymore réunit deux notions contradictoires au sein d'un même syntagme ('obscure clarté')."
  },
  {
    id: 'verbal_4',
    category: 'verbal',
    difficulty: 2,
    question: "Que désigne précisément le terme 'Pléonasme' en stylistique et grammaire française ?",
    options: [
      "L'emploi de termes superflus répétant une même signification",
      "Une métaphore filée sur plusieurs strophes",
      "Une inversion syntaxique du sujet et du verbe"
    ],
    correct: 0,
    explanation: "Le pléonasme est une redondance de termes apportant la même charge sémantique (ex: 'prédire à l'avance')."
  },
  {
    id: 'verbal_5',
    category: 'verbal',
    difficulty: 2,
    question: "Complétez l'analogie scientifique : Le 'Baromètre' quantifie la 'Pression' ce que l'Anémomètre' quantifie pour le ... ?",
    options: ["Vent (vitesse et flux)", "Taux d'humidité", "Rayonnement solaire"],
    correct: 0,
    explanation: "L'anémomètre est l'instrument de mesure étalonné pour mesurer la vitesse et la pression dynamique du vent."
  }
];

export function getTestSessionQuestions(count = 18) {
  const grouped = {};
  Object.keys(CATEGORIES).forEach(cat => {
    grouped[cat] = [...QUESTIONS_POOL.filter(q => q.category === cat)];
    grouped[cat].sort(() => Math.random() - 0.5);
  });

  const selected = [];
  const categoryKeys = Object.keys(CATEGORIES);

  let i = 0;
  while (selected.length < count) {
    const cat = categoryKeys[i % categoryKeys.length];
    if (grouped[cat] && grouped[cat].length > 0) {
      selected.push(grouped[cat].pop());
    }
    i++;
    if (categoryKeys.every(k => grouped[k].length === 0)) break;
  }

  return selected.sort(() => Math.random() - 0.5);
}
