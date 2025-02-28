import {Input} from "@/src/components/ui/input"

type InputType =
    | 'email'
    | 'text'
    | 'number'

interface IInputProps {
    placeholder: string,
    name: string,
    required: boolean,
    type?: InputType,
}

const CustomInput = ({placeholder, name, type, required}: IInputProps) => {
    return (
        <Input
            type={type}
            placeholder={placeholder}
            name={name}
            required={required}
        />
    )
}
export default CustomInput