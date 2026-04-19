import { useState } from "react";

interface InputSelectEventProps {
    label: string;
    nama: string;
    register: any;
    setValue: any;
    error?: string;
    placeholder?: string;
}

const events = ["Workshop", "Seminar", "IT Competition"] as const;

const InputSelectEvent: React.FC<InputSelectEventProps> = ({
    label,
    nama,
    register,
    setValue,
    error,
    placeholder = "-- Pilih Event --",
}) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (event: string) => {
        setSelected(event);
        setValue(nama, event);
        setOpen(false);
    };

    return (
        <div className="flex flex-col gap-1 mb-4">
            <label className="text-sm font-medium text-gray-700">{label}</label>

            <input type="hidden" {...register(nama)} />

            <button
                type="button"
                onClick={() => setOpen(!open)}
                className={`border px-3 py-2.5 rounded-2xl bg-white text-left flex justify-between items-center text-sm transition-all
            hover:border-gray-400
            ${open ? "border-blue-500 ring-2 ring-blue-100" : ""}
            ${error ? "border-red-400 bg-red-50" : "border-gray-200"}
        `}
            >
                <span className={selected ? "text-gray-800" : "text-gray-400"}>
                    {selected ?? placeholder}
                </span>
                <span className="text-gray-400 text-xs">{open ? "▲" : "▼"}</span>
            </button>

            {open && (
                <div className="border border-gray-200 rounded-2xl bg-white shadow-lg overflow-hidden z-10">
                    {events.map((event) => (
                        <button
                            key={event}
                            type="button"
                            onClick={() => handleSelect(event)}
                            className={`w-full text-left px-4 py-3 text-sm transition-colors
                        hover:bg-blue-50 hover:text-blue-600
                        ${selected === event ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-700"}
                    `}
                        >
                            {event}
                        </button>
                    ))}
                </div>
            )}

            {error && <p className="text-red-600 text-xs mt-0.5">{error}</p>}
        </div>
    );
};

export default InputSelectEvent;