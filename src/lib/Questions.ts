type Question = {
  question: string;
  correctAnswer: string;
  answers: string[];
};

export const questions: Question[] = [
    {
      question: "Hvilken type skiferie foretrækker du?",
      answers: ["Familie", "Par", "Venner", "Solo"],
      correctAnswer: "Familie"
    },
    {
      question: "Hvilken type skiferie foretrækker du?",
      answers: ["Familie", "Par", "Venner", "Solo"],
      correctAnswer: "Par"
    },
    {
      question: "Hvilken type skiferie foretrækker du?",
      answers: ["Familie", "Par", "Venner", "Solo"],
      correctAnswer: "Venner"
    }
];