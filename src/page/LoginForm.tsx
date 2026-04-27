import { useForm } from "react-hook-form";
import InputText  from "../components/ui/InputText";    
import InputPassword from "../components/ui/InputPassword";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";


type FormData = {
    email: string;
    password: string;
}

const schema = z.object({
    email: z.string().min(1,"Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 karakter"),
});

export default function LoginForm() {
    const {register, 
            handleSubmit, 
             formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data : FormData) => {
        console.log(data);
    }

    return ( 
        <div className=" mt-30 ml-30 items-center justify-center">
        <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

            <InputText label="Email" 
            nama="email" 
            register={register} 
            error={errors.email?.message} />
            
            <InputPassword label="Password" 
            nama="password" 
            register={register} 
            error={errors.password?.message} />

            <Button label="Login" variant="primary" className="rounded-3xl" />

            <p className="mt-4 text-sm">belum punya akun? <a href="/register" className="text-blue-500 hover:underline">Daftar sekarang</a></p>
        </form>
    </div>
);
}
