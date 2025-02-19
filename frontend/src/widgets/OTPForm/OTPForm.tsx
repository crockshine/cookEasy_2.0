'use client'
import styles from './OTPForm.module.css'
import React, {useActionState, useEffect, useState} from 'react';
import {Button} from "@/src/components/ui/button";
import {useRouter} from "next/navigation";
import OtpInput from "@/src/components/shared/OTP/OTPInput";
import {checkOTP} from "@/src/api/otp";
import {ArrowLeft} from "lucide-react";

const OTPForm = () => {
    const [timer, setTimer] = useState<number>(3)
    const router = useRouter()
    const handleCheck = async (prevData: string, formData: FormData) => {
        const OTPCode = formData.get('otp') as string
        try {
            await checkOTP(OTPCode)
            return router.replace('/')
        } catch (e: object) {
            return 'Что-то пошло не так, повторите попытку еще раз'
        }
    }

    const [message, onCheck, isPending] = useActionState(handleCheck, '')

    let intervalId
    const timeout = () => {
        intervalId = setInterval(() => {
            setTimer(prevState => {
                if (prevState <= 1) {
                    clearInterval(intervalId)
                }
                return prevState - 1
            })
        }, 1000)
    }
    useEffect(() => {
        timeout()
        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            <ArrowLeft className={styles.arrowLeft} onClick={() => router.replace('/auth')}/>
            <form className={styles.form}>
                <OtpInput/>
                {message}

                <div className={styles.groupContainer}>

                    <Button variant="todo" disabled={isPending} className={'w-full'} formAction={onCheck}>
                        {
                            isPending
                                ? <b>Проверка</b>
                                : <b>Проверить</b>
                        }

                    </Button>
                    <Button variant="secondary" className={'w-full'} disabled={timer > 0}>
                        <b>Отправить заново
                            {
                                timer > 0 && <span> через {timer}</span>
                            }
                        </b>
                    </Button>
                </div>
            </form>
        </>
    )
};
export default OTPForm;