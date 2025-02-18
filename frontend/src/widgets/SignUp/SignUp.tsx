import styles from '@/src/layouts/AuthLayout/AuthLayout.module.css'
import InputWithLabel from "@/src/components/shared/InputWithLabel/InputWithLabel";

const SignUp = () => {
    return (
        <div className={styles.inputBlock}>
            <InputWithLabel
                label={'Как Вас зовут?'}
                placeholder={'Жужа'}
                name={'name'}
                type={'text'}
                required={true}
            />
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