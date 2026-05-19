import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputText from "../../components/ui/InputText";
import { Button } from "../../components/ui/Button";
import { useForm } from "react-hook-form";
import InputSelectEvent from "../../components/ui/Select";
import InputDate from "../../components/ui/InputDate";
import Textarea from "../../components/ui/TextArea";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type FormData = {
  nama: string;
  category: string;
  pembicara: string;
  date: string;
  bio: string;
};

const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  category: z.string().min(1, "Category harus dipilih"),
  pembicara: z.string().min(1, "Pembicara harus dipilih"),
  date: z.string().min(1, "Tanggal harus diisi"),
  bio: z.string().max(100, "Bio maksimal 100 karakter"),
});

export default function EventUpdate() {
  const { id } = useParams();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/events/${id}`,
        );
        if (!response.ok) throw new Error("Gagal mengambil data");
        const data = await response.json();
        setValue("nama", data.name);
        setValue("category", String(data.categoryId));
        setValue("pembicara", String(data.pembicaraId));
        setValue("date", new Date(data.tanggal).toISOString().split("T")[0]);
        setValue("bio", data.description);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/events/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.nama,
            categoryId: Number(data.category),
            pembicaraId: Number(data.pembicara),
            tanggal: data.date,
            description: data.bio,
          }),
        },
      );

      if (!response.ok) throw new Error("Gagal mengupdate event");

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan, coba lagi");
    }
  };

  if (loading) return <div className="p-6 font-bold">Memuat data...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-black uppercase tracking-tight border-b-4 border-black pb-4 mb-6">
        Update Event
      </h2>

      {success && (
        <div className="mb-4 px-4 py-3 border-2 border-black bg-green-300 font-bold shadow-[3px_3px_0px_0px_#000]">
          Event berhasil diupdate!
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-4 border-black shadow-[6px_6px_0px_0px_#000] bg-white p-6 flex flex-col gap-4 max-w-md"
      >
        <InputText
          label="Nama Event"
          nama="nama"
          register={register}
          error={errors.nama?.message}
        />
  
        <InputSelectEvent
          label="Pilih Category"
          nama="category"
          register={register}
          setValue={setValue}
          error={errors.category?.message}
          endpoint="categories" // ← fetch ke /categories
        />
     
        <InputSelectEvent
          label="Pilih Pembicara"
          nama="pembicara"
          register={register}
          setValue={setValue}
          error={errors.pembicara?.message}
          endpoint="pembicara" // ← fetch ke /pembicara
        />
        <InputDate
          label="Tanggal Event"
          nama="date"
          register={register}
          setValue={setValue}
          error={errors.date?.message}
        />
        <Textarea
          label="Deskripsi Event"
          nama="bio"
          register={register}
          error={errors.bio?.message}
        />
        <Button
          label="Update"
          variant="primary"
          className="bg-yellow-300 text-black font-black uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-yellow-400 hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#000] transition-all"
        />
      </form>
    </div>
  );
}
