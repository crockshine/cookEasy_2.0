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
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor={label}>{label}</label>
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