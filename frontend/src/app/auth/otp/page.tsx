import AuthLayout from "@/src/layouts/AuthLayout/AuthLayout";
import OTPForm from "@/src/widgets/OTPForm/OTPForm";

const Page = () => {
    return (
        <AuthLayout  title={'Код отправлен'} subtitle={'Введите код из письма, отправленного на вашу почту'}>
            <OTPForm/>
        </AuthLayout>
    )
};

export default Page;