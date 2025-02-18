import styles from '@/src/widgets/AuthForm/AuthForm.module.css'
import InputWithLabel from "@/src/components/shared/InputWithLabel/InputWithLabel";

const SignUp = () => {
    return (
        <div className={styles.groupContainer}>
            <InputWithLabel
                label={'Электронная почта'}
                placeholder={'ящичек_1111@mail.ru'}
                name={'email'}
                type={'email'}
                required={true}
            />
        </div>
    )
};

export default SignUp;