'use client'
import styles from './AuthForm.module.css'
import React, {useActionState} from 'react';
import SignUp from "@/src/components/shared/SignUp/SignUp";
import SignIn from "@/src/components/shared/SignIn/SignIn";
import {Button} from "@/src/components/ui/button";
import {useRouter} from "next/navigation";
import {SignUpUser} from "@/src/api/sign-up";
import {SignInUser} from "@/src/api/sign-in";

interface IAuthFormProps{
    isSignUp: boolean,
    setIsSignUp: (isSignUp: boolean) => void
}
const AuthForm = ({setIsSignUp, isSignUp}: IAuthFormProps) => {
    const router = useRouter()
    const handleSubmit = async (prevData: string, formData: FormData) => {
        const email = formData.get('email') as string
        const name = formData.get('name') as string | null

        try{
            if (isSignUp) {
                if (!name) return
                await SignUpUser({email, name})
            } else {
                await SignInUser({email})
            }
            return router.replace('/auth/otp')
        } catch (e: object){
            return 'Что-то пошло не так'
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
                isSignUp
                    ? <SignUp/>
                    : <SignIn/>
            }

            {errorMessage}
            <div className={styles.groupContainer}>
                <Button variant="todo" type='submit' disabled={isPending} className={'w-full'}>
                    <b>Продолжить</b>
                </Button>
                {
                    isSignUp
                        ? <SignUpText/>
                        : <SignInText/>
                }
            </div>
        </form>
    )
};

export default AuthForm;