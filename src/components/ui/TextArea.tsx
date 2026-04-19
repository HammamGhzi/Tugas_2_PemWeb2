                                                                                                                                                                                                                                                                                                                                                                                          interface TextareaProps {
    label: string;
    nama: string;
    register: any;
    error?: string;
}

const Textarea: React.FC<TextareaProps> = ({
    label,
    nama,
    register,
    error,
}) => {
    return (
        <div className="flex flex-col gap-1 mb-4">
            <label htmlFor={nama}>{label}</label>
            <textarea
                id={nama}
                {...register(nama)}
                placeholder="Tulis bio oi"
                rows={4}
                className="border border-gray-200 p-2 rounded-2xl resize-none"
            />
            {error && <p className="text-red-800 text-sm">{error}</p>}
        </div>
    );
};

export default Textarea;                                                                                      