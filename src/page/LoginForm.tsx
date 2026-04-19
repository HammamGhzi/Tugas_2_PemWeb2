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
        </form>
    </div>
);
}
