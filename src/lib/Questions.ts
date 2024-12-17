type Question = {
  question: string;
  correctAnswer: string;
  answers: string[];
};

export const questions: Question[] = [
  {
    question: "Hvilket år blev Horizon Travel etableret?",
    answers: ["2010", "2000", "2005", "1995", "2015"],
    correctAnswer: "2005",
  },
  {
    question: "Hvad specialiserer Horizon Travel sig i?",
    answers: ["Solferier", "Storbyferier", "Skirejser", "Krydstogter", "Safari"],
    correctAnswer: "Skirejser",
  },
  {
    question: "Hvilke tre grupper er vores hovedmålgrupper?",
    answers: [
      "Par, familier og grupper",
      "Unge, seniorer og virksomheder",
      "Sportsudøvere, musikere og kunstnere",
      "Studerende, singler og backpackere",
      "Erhvervsfolk, pensionister og børn",
    ],
    correctAnswer: "Par, familier og grupper",
  },
  {
    question: "Hvilken kontinent tilbyder vi IKKE skirejser til?",
    answers: ["Europa", "Nordamerika", "Sydamerika", "Asien", "Oceanien"],
    correctAnswer: "Sydamerika",
  },
  {
    question: "Hvad er Horizon Travels motto?",
    answers: [
      "Rejs med glæde",
      "Det perfekte eventyr",
      "Dit næste skieventyr starter her!",
      "En verden af muligheder",
      "Uforglemmelige skiferier",
    ],
    correctAnswer: "Dit næste skieventyr starter her!",
  },
  {
    question: "Hvilken type ferie tilbyder vi primært?",
    answers: ["Skiferier", "Vandringsferier", "Badeferier", "Kulturelle rejser", "Safari"],
    correctAnswer: "Skiferier",
  },
  {
    question: "Hvilken kategori af rejser tilbyder vi IKKE?",
    answers: [
      "Familieferier",
      "Grupperejser",
      "Pargetaways",
      "Solferier",
      "Firmaudflugter",
    ],
    correctAnswer: "Solferier",
  },
  {
    question: "Hvilken tjeneste er altid inkluderet i vores skirejser?",
    answers: [
      "Krydstogtbilletter",
      "Liftkort",
      "Gratis måltider",
      "Shoppingture",
      "Spa-behandlinger",
    ],
    correctAnswer: "Liftkort",
  },
  {
    question: "Hvilken destination tilbyder Horizon Travel IKKE skiferier til?",
    answers: ["Canada", "Østrig", "Japan", "Spanien", "USA"],
    correctAnswer: "Spanien",
  },
  {
    question: "Hvad garanterer vi for alle vores kunder?",
    answers: [
      "Gratis transport",
      "Høj kvalitet og kundetilfredshed",
      "All-inclusive madpakker",
      "Billigste rejser på markedet",
      "Gratis opgradering af hotel",
    ],
    correctAnswer: "Høj kvalitet og kundetilfredshed",
  },
];
