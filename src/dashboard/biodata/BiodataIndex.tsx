import { User, Hash, Users, Monitor, Building2, MapPin } from "lucide-react";

export default function BiodataIndex() {
  const biodata = [
    { label: "Nama Lengkap", value: "Muhammad Hammam Ghazi", icon: <User className="w-5 h-5" /> },
    { label: "NIM", value: "24090056", icon: <Hash className="w-5 h-5" /> },
    { label: "Kelas", value: "4B", icon: <Users className="w-5 h-5" /> },
    { label: "Program Studi", value: "D4 Teknik Informatika", icon: <Monitor className="w-5 h-5" /> },
    { label: "Fakultas", value: "Sekolah Vokasi", icon: <Building2 className="w-5 h-5" /> },
    { label: "Alamat", value: "Desa Ujungrusi Rt 6/1, Adiwerna, Kab. Tegal", icon: <MapPin className="w-5 h-5" /> },
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="relative border-4 border-black bg-yellow-300 shadow-[8px_8px_0px_0px_#000] p-8 mb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-10 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-black opacity-10 rounded-tr-full" />
        <p className="text-xs font-black uppercase tracking-widest text-black/60 mb-1">
          Universitas Harkat Negeri
        </p>
        <h1 className="text-4xl font-black uppercase tracking-tight text-black">
          Biodata Mahasiswa
        </h1>
        <p className="font-bold text-black/70 mt-2 text-sm uppercase tracking-wider">
          D4 Teknik Informatika — Sekolah Vokasi
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-72 shrink-0">
          <div className="border-4 border-black shadow-[8px_8px_0px_0px_#000] bg-white p-6 flex flex-col items-center gap-4 hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-300 border-4 border-black translate-x-2 translate-y-2 z-0" />
              <img
                src="/img/Hammam Profil.jpg"
                alt="Foto Hammam"
                className="relative z-10 w-48 h-48 object-cover border-4 border-black"
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-black text-lg uppercase tracking-tight">
                Muhammad Hammam Ghazi
              </h2>
              <p className="text-sm font-bold text-gray-500 uppercase">24090056</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="bg-black text-yellow-300 font-black uppercase text-xs px-4 py-2 tracking-widest text-center border-2 border-black">
                Mahasiswa Aktif
              </div>
              <div className="bg-yellow-300 text-black font-black uppercase text-xs px-4 py-2 tracking-widest text-center border-2 border-black">
                Kelas 4B
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {biodata.map((item, index) => (
            <div
              key={item.label}
              className={`border-4 border-black shadow-[6px_6px_0px_0px_#000] bg-white p-5 
                hover:shadow-[10px_10px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 
                transition-all duration-200 cursor-default
                ${index === biodata.length - 1 && biodata.length % 2 !== 0 ? "sm:col-span-2" : ""}
              `}
            >
              <div className="flex items-start gap-3">
                <div className="border-2 border-black bg-yellow-300 w-12 h-12 flex items-center justify-center shrink-0 shadow-[3px_3px_0px_0px_#000]">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">
                    {item.label}
                  </p>
                  <p className="font-black text-black text-base leading-tight">
                    {item.value}
                  </p>
                </div>
              </div>
              <div className="mt-4 h-1 bg-yellow-300 border border-black" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}