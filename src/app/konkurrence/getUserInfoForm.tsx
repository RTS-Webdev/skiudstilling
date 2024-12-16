import { handleUserInput, userFormInputError } from "$/lib/konkurrence";
import { useActionState } from "react";
import { inspect } from "util";


export default function UserInfoForm() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [actionState, submitAction, isPending] = useActionState(handleUserInput, null);
    if (!actionState || (actionState as userFormInputError).error) {
        console.log(inspect(actionState));
        return (
            <form action={submitAction}>
                <input type="text" minLength={2} required name="navn" placeholder="Fornavn" />
                <input type="text" minLength={2} required name="efternavn" placeholder="Efternavn" />
                <input type="email" required name="email" placeholder="Email@example.com" />
                <input type="tel" required name="phone" placeholder="12345678" />
                <button type="submit">Send</button>
            </form>
        );
    }
}