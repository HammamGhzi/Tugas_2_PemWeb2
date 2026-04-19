import React, { useState } from "react";

interface InputPasswordProps {
    label: string;
    nama: string;
    register: any;
    error?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({
    label,
    nama,
    register,
    error,
}) => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-1 mb-4">
            <label htmlFor={label} className="text-sm font-medium text-gray-700">{label}</label>

            <div className="relative">
                <input
                    type={show ? "text" : "password"}
                    {...register(nama)}
                    placeholder={label}
                    className={`border w-full px-3 py-2.5 pr-16 rounded-2xl text-sm outline-none transition-all
                hover:border-gray-400
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                ${error ? "border-red-400 bg-red-50" : "border-gray-200"}
            `}
                />

                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-blue-500 transition-colors font-medium"
                >
                    {show ? "Hide" : "Show"}
                </button>
            </div>

            {error && <p className="text-red-600 text-xs mt-0.5">{error}</p>}
        </div>
    )
};

export default InputPassword;