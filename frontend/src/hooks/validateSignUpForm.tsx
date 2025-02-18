import {SignUpUser} from "@/src/api/sign-up";

export const validateSignUpForm = async (prevData: string, formData: FormData) => {
    const email = formData.get('email') as string
    const name = formData.get('name') as string

    try {
        await SignUpUser({email, name})
    } catch (e: object) {
        console.log(e);
        return 'Что-то пошло не так, повторите попытку снова'
    }
}