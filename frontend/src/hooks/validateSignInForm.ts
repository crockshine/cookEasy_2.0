import {SignInUser} from "@/src/api/sign-in";

export const validateSignInForm = async (prevData: string | null, formData: FormData) => {
    const email = formData.get('email') as string

    try {
        await SignInUser({email})
        return null
    } catch (e: object) {
        console.log(e);
        return 'Что-то пошло не так, повторите попытку снова'
    }
}