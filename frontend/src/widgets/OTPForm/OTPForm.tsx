'use client'
import styles from './OTPForm.module.css'
import React, {useActionState, useEffect, useState} from 'react';
import {Button} from "@/src/components/ui/button";
import {useRouter} from "next/navigation";
import OtpInput from "@/src/components/shared/OTP/OTPInput";

const OTPForm = () => {
    const router = useRouter()
    const handleSubmit = async (prevData: string, formData: FormData) => {
        return
    }
    const [errorMessage, handleAction, isPending] = useActionState(handleSubmit, null)
    const [timer, setTimer] = useState<number>(40)
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevState => prevState - 1)        }, 1000)

        return clearInterval(interval)
    }, [])

    return (
            <form action={handleAction} className={styles.form}>
                <OtpInput />
                {errorMessage}

                <div className={styles.groupContainer}>

                    <Button variant="todo" type='submit' disabled={isPending} className={'w-full'}>
                        <b>Проверить</b>
                    </Button>
                    <Button variant="secondary" type='submit' className={'w-full'}>
                        <b>Отправить заново {}</b>

                    </Button>

                </div>

            </form>
    )
};

export default OTPForm;