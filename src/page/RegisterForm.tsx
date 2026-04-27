import { useForm } from "react-hook-form";
import InputText from "../components/ui/InputText";
import InputPassword from "../components/ui/InputPassword";
import InputSelectEvent from "../components/ui/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";
import Textarea from "../components/ui/TextArea";

type FormData = {
    nama: string;
    email: string;
    password: string;
    event: string;
    bio: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    email: z.string().email("email tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    event: z.string().min(1, "Event harus dipilih"),
    bio: z.string().max(100, "Bio maksimal 100 karakter"),
});

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (

        <div className=" p-8 rounded-2xl shadow-sm ">
            <h2 className="text-3xl font-bold mb-4 text-center">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText
                    label="Nama"
                    nama="nama"
                    register={register}
                    error={errors.nama?.message}
                />

                <InputText
                    label="Email"
                    nama="email"
                    register={register}
                    error={errors.email?.message}
                />

                <InputPassword
                    label="Password"
                    nama="password"
                    register={register}
                    error={errors.password?.message}
                />

                <InputSelectEvent
                    label="Pilih Event"
                    nama="event"
                    register={register}
                    setValue={setValue}
                    error={errors.event?.message}
                />
                <Textarea
                    label="Bio"
                    nama="bio"
                    register={register}
                    error={errors.bio?.message}
                />
                <div className="flex justify-center">
                    <Button label="Daftar" variant="primary" className="rounded-3xl " />
                </div>

                 <p className="mt-4 text-sm">sudah punya akun? <a href="/login" className="text-blue-500 hover:underline">Login sekarang</a></p>
            </form>
        </div>

    );
}