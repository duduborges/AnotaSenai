import { RegisterOptions, UseFormRegister } from "react-hook-form"
import { } from "../../assets/css/index.css"
interface InputProps {
    type: string
    placeholder: string
    name: string
    register: UseFormRegister<any>
    error?: string
    rules?: RegisterOptions
    className?: string
    value?: string

}

export function Input({ className, value, name, placeholder, type, register, rules, error }: InputProps) {
    return (
        <div>
            <input
                className={className}
                placeholder={placeholder}
                type={type}
                value={value}

                {...register(name, rules)}
                id={name}
            />
            {error && <p className="erro">{error}</p>}
        </div>
    )
}