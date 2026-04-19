interface InputTextProps {
    label: string;
    nama: string;
    register: any;
    error?: string;
}

const InputText: React.FC<InputTextProps> = ({
    label,
    nama,
    register,
    error,
}) => {
    return (
        <div className="flex flex-col gap-1 mb-4">
            <label htmlFor={label}>{label}</label>
            <input type="text"
                {...register(nama)}
                placeholder={label}
                className={`border p-3 rounded-2xl text-sm outline-none transition-all
            hover:border-gray-400
            focus:border-blue-500 focus:ring-2 focus:ring-blue-100
            ${error ? "border-red-400 bg-red-50" : "border-gray-200"}    `}
            />
            {error && <p className="text-red-800 text-sm">{error}</p>}
        </div>
    )
};

export default InputText;