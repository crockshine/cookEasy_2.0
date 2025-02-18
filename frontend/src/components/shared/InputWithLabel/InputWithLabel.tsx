import styles from './InputWithLabel.module.css'
import { Input } from "@/src/components/ui/input"

type InputType =
    | 'email'
    | 'text'
    | 'number'

interface IInputWithLabelProps{
    label: string,
    placeholder: string,
    name: string,
    required: boolean,
    type?: InputType,
}

const InputWithLabel = ({label, placeholder, name, type, required}: IInputWithLabelProps) => {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={label} style={{color: 'hsl(var(--primary))'}}><b>{label}</b></label>
            <Input
                type={type}
                id={label}
                placeholder={placeholder}
                name={name}
                required={required}
            />
        </div>
    )
}
export default InputWithLabel