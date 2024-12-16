import { handleUserInput, userFormInputError } from "$/lib/konkurrence";
import Link from "next/link";
import { useActionState } from "react";
import { inspect } from "util";


export default function UserInfoForm() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [actionState, submitAction, isPending] = useActionState(handleUserInput, null);
    if (!actionState || (actionState as userFormInputError).error) {
        console.log(inspect(actionState));
        return (
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg">
                <form action={submitAction} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text" minLength={2}
                            required name="navn"
                            placeholder="Fornavn"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800"
                        />
                        <input
                            type="text"
                            minLength={2}
                            required name="efternavn"
                            placeholder="Efternavn"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800"
                        />
                    </div>
                    <input
                        type="email"
                        required name="email"
                        placeholder="Email@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    />
                    <input
                        type="tel"
                        required name="phone"
                        placeholder="12345678"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    />
                    <p className="bg-amber-100 p-4">
                        Ved at indsende dine informationer, accepterer du vores vilkår og betingelser.
                        <Link
                            href="/terms-of-service"
                            className="inline-block mt-4 text-blue-500 hover:underline hover:underline-offset-8"
                        >
                            Læs vores Terms of Service
                        </Link>
                    </p>
                    <button type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
                    >
                        Send
                    </button>
                </form>
            </div>
        );
    }
}