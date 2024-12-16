type Question = {
  question: string;
  correctAnswer: string;
  answers: string[];
};

export const questions: Question[] = [
    {
      question: "Spørgsmål 1",
      answers: ["Familie", "Par", "Venner", "Solo"],
      correctAnswer: "Familie"
    }
];