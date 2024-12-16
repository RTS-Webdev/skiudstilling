"use client";

import Image from "next/image";
import { useState } from "react";
import { questions } from "../utils";
import Navigation from "$/components/Navigation";

export default function Home() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswerSelect = (answer: string) => {
        setSelectedAnswer(answer);
    };

    const handleConfirm = () => {
        if (selectedAnswer !== null) {
            setAnswers([...answers, selectedAnswer]);
            setSelectedAnswer(null);
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowResult(true);
            }
        }
    };

    const calculateScore = () => {
        return answers.reduce((score, answer, index) => {
            return score + (answer === questions[index].correctAnswer ? 1 : 0);
        }, 0);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-[#100f0f] text-white overflow-x-hidden">
            <header className="fixed top-0 left-0 right-0 z-50">
                <Navigation />
            </header>
            <main className="relative pt-20">
                <section className="py-20 px-4 md:px-0" aria-label="Hero section">
                    <div className="container mx-auto flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pl-8 md:pr-32">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Prøv og vind en gratis skiferie!</h1>
                            <p className="text-xl mb-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ut! Ab nulla dolore itaque, dignissimos consequuntur molestiae vitae ut repellat quis aliquam accusamus error odio a ipsa quibusdam maxime, doloremque tempora soluta commodi eum dolor et! Error cupiditate porro eos quisquam molestiae distinctio aut reprehenderit nihil magni, assumenda, eveniet voluptates.
                            </p>
                        </div>
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <Image
                                src="/img/6.jpg"
                                alt="Ski resort landscape"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-16 px-4 md:px-0 bg-white text-black" aria-label="Quiz section">
                    <div className="container mx-auto">
                        <div className="max-w-2xl mx-auto">
                            {!showResult ? (
                                <form action={() => handleConfirm()}>
                                    <h2 className="text-2xl font-semibold mb-6">{questions[currentQuestion].question}</h2>
                                    <fieldset className="mb-8">
                                        <legend className="sr-only">Answer options</legend>
                                        <ul className="space-y-4">
                                            {questions[currentQuestion].answers.map((answer, index) => (
                                                <li key={index} className="flex items-start">
                                                    <input
                                                        type="radio"
                                                        id={`answer-${index}`}
                                                        name="quiz-answer"
                                                        value={answer}
                                                        checked={selectedAnswer === answer}
                                                        onChange={() => handleAnswerSelect(answer)}
                                                        className="sr-only"
                                                    />
                                                    <label
                                                        htmlFor={`answer-${index}`}
                                                        className="flex items-center cursor-pointer"
                                                    >
                                                        <span className={`w-5 h-5 rounded-full mr-4 border-2 transition-colors ${
                                                            selectedAnswer === answer
                                                                ? 'bg-green-500 border-lime-500'
                                                                : 'border-gray-300 hover:border-gray-400'
                                                        }`}></span>
                                                        <span className="text-lg">{answer}</span>
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </fieldset>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors"
                                        disabled={selectedAnswer === null}
                                    >
                                        {currentQuestion < questions.length - 1 ? 'Næste spørgsmål' : 'Afslut quiz'}
                                    </button>
                                </form>
                            ) : (
                                <div>
                                    <h2 className="text-2xl font-semibold mb-6">Quiz Resultat</h2>
                                    <p className="text-xl mb-4">Du svarede korrekt på {calculateScore()} ud af {questions.length} spørgsmål.</p>
                                    <ol className="space-y-4 mb-6 list-decimal list-inside">
                                        {questions.map((q, index) => (
                                            <li key={index} className="border-b pb-4">
                                                <h3 className="font-semibold inline-block">{q.question}</h3>
                                                <p>Dit svar: {answers[index]}</p>
                                                <p>Korrekt svar: {q.correctAnswer}</p>
                                            </li>
                                        ))}
                                    </ol>

                                    <button
                                        onClick={() => {
                                            setCurrentQuestion(0);
                                            setSelectedAnswer(null);
                                            setAnswers([]);
                                            setShowResult(false);
                                        }}
                                        className="px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors"
                                    >
                                        Prøv igen
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}