import { RegisterOptions, UseFormRegister } from "react-hook-form"
import { } from "../../assets/css/index.css"
interface InputProps {
    type: string
    placeholder: string
    name: string
    register: UseFormRegister<any>
    error?: string
    rules?: RegisterOptions
}

export function Input({ name, placeholder, type, register, rules, error }: InputProps) {
    return (
        <div>
            <input
                className="input"
                placeholder={placeholder}
                type={type}

                {...register(name, rules)}
                id={name}
            />
            {error && <p className="erro">{error}</p>}
        </div>
    )
}