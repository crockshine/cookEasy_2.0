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

    return (
        <div className={styles.authLayout}>
            <div className={styles.infoBlock}>
                {
                    isSignUp
                        ? <b>Регистрация</b>
                        : <b>Вход</b>
                }
            </div>

            <form action={handleAction} className={styles.form}>
                {
                    isSignUp
                        ? <SignUp/>
                        : <SignIn/>
                }

                {message}

                {
                    isSignUp
                        ?
                        <span>Есть аккаунт? <span
                            style={{textDecoration: 'underline'}}
                            onClick={() => setIsSignUp(false)}
                        >
                                Войти
                            </span>
                        </span>
                        :
                        <span>Нет аккаунта? <span
                            style={{textDecoration: 'underline'}}
                            onClick={() => setIsSignUp(true)}
                        >
                                Зарегистрироваться
                            </span>
                        </span>
                }

                <Button variant="todo" type='submit' disabled={isPending}>
                    Продолжить
                </Button>
            </form>
        </div>
    )
}

export default AuthLayout;