'use client'
import styles from './AuthLayout.module.css'
import React, {useState} from 'react';
import SignUp from "@/src/widgets/SignUp/SignUp";
import SignIn from "@/src/widgets/SignIn/SignIn";
import {Button} from "@/src/components/ui/button";
import {useActionState} from "react";
import {validateSignUpForm} from "@/src/hooks/validateSignUpForm";
import {validateSignInForm} from "@/src/hooks/validateSignInForm";


const AuthLayout = () => {
    const handleSubmit = async (message: string, formData: FormData) => {
        if (isSignUp) {
            return await validateSignUpForm(message, formData)
        } else {
            return await validateSignInForm(message, formData)
        }
    }

    const [message, handleAction, isPending] = useActionState(handleSubmit, "")
    const [isSignUp, setIsSignUp] = useState<boolean>(true)

    const SignUpText = () => {
        return (
            <span style={{
                color: 'hsl(var(--muted-text))',
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
                color: 'hsl(var(--muted-text))',
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
        <div className={styles.authLayout}>
            <div className={styles.infoBlock}>
                {
                    isSignUp
                        ? <h1><b>Регистрация</b></h1>
                        : <h1><b>Вход</b></h1>
                }
            </div>

            <form action={handleAction} className={styles.form}>
                {
                    isSignUp
                        ? <>
                            <SignUp/>
                            <SignUpText/>
                        </>
                        : <>
                            <SignIn/>
                            <SignInText/>
                        </>
                }

                {message}

                <div className={styles.groupContainer}>

                    <Button variant="todo" type='submit' disabled={isPending} className={'w-full'}>
                        <b>Продолжить</b>
                    </Button>

                </div>

            </form>
            <div className={styles.decorateCircle1}/>
            <div className={styles.decorateCircle2}/>

        </div>
    )
}

export default AuthLayout;