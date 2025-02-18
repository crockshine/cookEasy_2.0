'use client'
import AuthLayout from "@/src/layouts/AuthLayout/AuthLayout";
import AuthForm from "@/src/widgets/AuthForm/AuthForm";
import {useState} from "react";

const Page = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(true)
    return (
        <AuthLayout title={isSignUp ? 'Регистрация' : 'Вход'}>
            <AuthForm isSignUp={isSignUp} setIsSignUp={(state) => setIsSignUp(state)}/>
        </AuthLayout>
    )
};

export default Page;