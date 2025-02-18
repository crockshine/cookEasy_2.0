import styles from '@/src/widgets/AuthForm/AuthForm.module.css'
import InputWithLabel from "@/src/components/shared/InputWithLabel/InputWithLabel";

const SignUp = () => {
    return (
        <div className={styles.groupContainer}>
            <InputWithLabel
                label={'Как Вас зовут?'}
                placeholder={'Овсянка Булкова'}
                name={'name'}
                type={'text'}
                required={true}
            />
            <InputWithLabel
                label={'Электронная почта'}
                placeholder={'кухня_2007@mail.ru'}
                name={'email'}
                type={'email'}
                required={true}
            />
        </div>
    )
};

export default SignUp;