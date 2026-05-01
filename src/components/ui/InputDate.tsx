import { useState } from "react";

interface InputDateProps {
    label: string;
    nama: string;
    register: any;
    setValue: any;
    error?: string;
    placeholder?: string;
}

const MONTHS = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];
const DAYS = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

const InputDate: React.FC<InputDateProps> = ({
    label,
    nama,
    register,
    setValue,
    error,
    placeholder = "-- Pilih Tanggal --",
}) => {
    const today = new Date();
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<Date | null>(null);
    const [viewMonth, setViewMonth] = useState(today.getMonth());
    const [viewYear, setViewYear] = useState(today.getFullYear());

    const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

    const handleSelect = (day: number) => {
        const date = new Date(viewYear, viewMonth, day);
        setSelected(date);
    
        const formatted = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        setValue(nama, formatted);
        setOpen(false);
    };

    const prevMonth = () => {
        if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
        else setViewMonth(m => m - 1);
    };

    const nextMonth = () => {
        if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
        else setViewMonth(m => m + 1);
    };

    const displayValue = selected
        ? `${selected.getDate()} ${MONTHS[selected.getMonth()]} ${selected.getFullYear()}`
        : null;

    const daysInMonth = getDaysInMonth(viewMonth, viewYear);
    const firstDay = getFirstDayOfMonth(viewMonth, viewYear);

    return (
        <div className="flex flex-col gap-1 mb-4 relative">
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
                <span className={displayValue ? "text-gray-800" : "text-gray-400"}>
                    {displayValue ?? placeholder}
                </span>
                <span className="text-gray-400 text-xs">📅</span>
            </button>

            {open && (
                <div className="absolute top-full mt-1 left-0 z-20 border border-gray-200 rounded-2xl bg-white shadow-lg p-3 w-72">
            
                    <div className="flex justify-between items-center mb-3">
                        <button
                            type="button"
                            onClick={prevMonth}
                            className="text-gray-500 hover:text-gray-800 px-2 py-1 rounded-lg hover:bg-gray-100 text-sm"
                        >
                            ◀
                        </button>
                        <span className="text-sm font-semibold text-gray-700">
                            {MONTHS[viewMonth]} {viewYear}
                        </span>
                        <button
                            type="button"
                            onClick={nextMonth}
                            className="text-gray-500 hover:text-gray-800 px-2 py-1 rounded-lg hover:bg-gray-100 text-sm"
                        >
                            ▶
                        </button>
                    </div>

              
                    <div className="grid grid-cols-7 mb-1">
                        {DAYS.map(d => (
                            <div key={d} className="text-center text-xs font-medium text-gray-400 py-1">
                                {d}
                            </div>
                        ))}
                    </div>

                
                    <div className="grid grid-cols-7 gap-y-1">
                        {Array.from({ length: firstDay }).map((_, i) => (
                            <div key={`empty-${i}`} />
                        ))}

                        {Array.from({ length: daysInMonth }).map((_, i) => {
                            const day = i + 1;
                            const isSelected =
                                selected &&
                                selected.getDate() === day &&
                                selected.getMonth() === viewMonth &&
                                selected.getFullYear() === viewYear;
                            const isToday =
                                today.getDate() === day &&
                                today.getMonth() === viewMonth &&
                                today.getFullYear() === viewYear;

                            return (
                                <button
                                    key={day}
                                    type="button"
                                    onClick={() => handleSelect(day)}
                                    className={`text-center text-sm py-1 rounded-lg transition-colors
                                        ${isSelected
                                            ? "bg-blue-500 text-white font-semibold"
                                            : isToday
                                            ? "border border-blue-400 text-blue-600 font-medium hover:bg-blue-50"
                                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                        }
                                    `}
                                >
                                    {day}
                                </button>
                            );
                        })}
                    </div>

                    {selected && (
                        <button
                            type="button"
                            onClick={() => {
                                setSelected(null);
                                setValue(nama, "");
                            }}
                            className="mt-3 w-full text-xs text-gray-400 hover:text-red-500 transition-colors py-1"
                        >
                            Hapus pilihan
                        </button>
                    )}
                </div>
            )}

            {error && <p className="text-red-600 text-xs mt-0.5">{error}</p>}
        </div>
    );
};

export default InputDate;