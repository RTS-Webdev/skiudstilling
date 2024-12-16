"use server";

import { z } from "zod";
import { questions } from "./Questions";

type QuestionError = {
    error: string;
    status: number;
}


export type QuestionReponse = number | QuestionError;

export async function handleAnswers(state: QuestionReponse, formData: string[]): Promise<QuestionReponse> {
    if(questions.length !== formData.length) return {error: "Invalid form data", status: 400};
    let correctAnswers = 0;

    for (let i = 0; i < questions.length; i++) {
        if (formData[i] === questions[i].correctAnswer) {
            correctAnswers += 1;
        }
    }
    console.log(`Correct answers: ${correctAnswers}`);
    console.log(formData);
    console.log(correctAnswers)
    return correctAnswers;
};

export type userFormInputSuccess = {
    success: string, 
}

export type userFormInputError = {error: string, parseError: string};

export async function handleUserInput(prev: userFormInputSuccess | userFormInputError | null, formData: FormData): Promise<userFormInputError | userFormInputSuccess | null> {
    "use server";
    console.log(prev);
    const formDataSchema = z.object({
        navn: z.string().min(2),
        efternavn: z.string().min(2),
        email: z.string().email(),
        phone: z.string().min(8)
    })
    const parsedData = formDataSchema.safeParse({
        navn: formData.get("navn"),
        efternavn: formData.get("efternavn"),
        email: formData.get("email"),
        phone: formData.get("phone")
    });

    if(!parsedData.success) {
        console.log(parsedData.error.flatten());
        return {
            error: "Der skete en fejl",
            parseError: parsedData.error.message
        }
    }
    console.log(parsedData.data);
    const res: userFormInputSuccess = {
        success: "Din formular er blevet sendt"
    }

    return res;
}