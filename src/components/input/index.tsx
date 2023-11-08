import { ControllerFieldState, RegisterOptions, UseFormRegister } from "react-hook-form"
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
    defaultValue?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ defaultValue, className, value, name, placeholder, type, register, rules, error, onChange }: InputProps) {
    return (
        <div>
            <input
                className={className}
                placeholder={placeholder}
                type={type}
                value={value}
                defaultValue={defaultValue}
                {...register(name, rules)}
                onChange={onChange}
                id={name}
            />
            {error && <p className="erro">{error}</p>}
        </div>
    )
}