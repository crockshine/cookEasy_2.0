'use client'
import styles from './AuthForm.module.css'
import React, {useActionState} from 'react';
import SignUp from "@/src/widgets/SignUp/SignUp";
import SignIn from "@/src/widgets/SignIn/SignIn";
import {Button} from "@/src/components/ui/button";
import {useRouter} from "next/navigation";
import {validateSignUpForm} from "@/src/hooks/validateSignUpForm";
import {validateSignInForm} from "@/src/hooks/validateSignInForm";

interface IAuthFormProps{
    isSignUp: boolean,
    setIsSignUp: (isSignUp: boolean) => void
}
const AuthForm = ({setIsSignUp, isSignUp}: IAuthFormProps) => {
    const router = useRouter()
    const handleSubmit = async (prevData: string, formData: FormData) => {
        if (isSignUp) {
            const errorMsg = await validateSignUpForm(prevData, formData)
            if (errorMsg !== null) return errorMsg
            return router.push('/auth/otp')
        } else {
            const errorMsg = await validateSignInForm(prevData, formData)
            if (errorMsg !== null) return errorMsg
            return router.push('/auth/otp')
        }
    }

    const [errorMessage, handleAction, isPending] = useActionState(handleSubmit, null)

    const SignUpText = () => {
        return (
            <span style={{
                color: 'hsl(var(--primary))',
                textAlign: "center"
            }}>
                Есть аккаунт? <span style={{textDecoration: 'underline'}}
                                    onClick={() => setIsSignUp(false)}>
                    Войти
                </span>
            </span>
        )
    }

    const SignInText = () => {
        return (
            <span style={{
                color: 'hsl(var(--primary))',
                textAlign: "center"
            }}>
                Нет аккаунта? <span style={{textDecoration: 'underline'}}
                                    onClick={() => setIsSignUp(true)}>
                    Зарегистрироваться
                </span>
            </span>
        )
    }

    return (
        <form action={handleAction} className={styles.form}>
            {
                isSignUp ? <SignUp/> : <SignIn/>
            }

            {errorMessage}

            <div className={styles.groupContainer}>

                <Button variant="todo" type='submit' disabled={isPending} className={'w-full'}>
                    <b>Продолжить</b>
                </Button>
                {
                    isSignUp ? <SignUpText/> : <SignInText/>
                }
            </div>
        </form>
    )
};

export default AuthForm;