import styles from '@/src/widgets/AuthForm/AuthForm.module.css'
import CustomInput from "@/src/components/customised/Input/Input";

const SignUp = () => {
    return (
        <div className={styles.groupContainer}>
            <CustomInput
                placeholder={'Электронная почта'}
                name={'email'}
                type={'email'}
                required={true}
            />
        </div>
    )
};

export default SignUp;