import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputText from "../../components/ui/InputText";
import { Button } from "../../components/ui/Button";

type FormData = {
    nama: string;
    role: string;
}
const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    role: z.string().min(1, "Role harus diisi"),
});


export default function SpeakerCreate(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: zodResolver(schema),
      });
    
      const onSubmit = (data: FormData) => {
        console.log(data);
      };
    return(
          <div className="p-6">
    <h2 className="text-2xl font-black uppercase tracking-tight border-b-4 border-black pb-4 mb-6">New Category</h2>
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-4 border-black shadow-[6px_6px_0px_0px_#000] bg-white p-6 flex flex-col gap-4 max-w-md"
    >
        <InputText
            label="Nama Speaker"
            nama="nama"
            register={register}
            error={errors.nama?.message}
        />
        <InputText
            label="Role"
            nama="role"
            register={register}
            error={errors.role?.message}
        />
        <Button
            label="Add"
            variant="primary"
            className="bg-yellow-300 text-black font-black uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-yellow-400 hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#000] transition-all"
        />
        
    </form>
</div>
    )
}   