import Button from "../components/ui/Button";
import SpeakerCard from "../components/ui/SpeakerCard";
import { Code2, Smartphone, ShieldCheck } from "lucide-react";
import WorkshopCard from "../components/ui/CardWorkshop";
import FaqAccordion from "../components/ui/FAQ";
export default function Workshop() {
  const speakers = [
    {
      name: "Lhuqita Fazryi",
      role: `Mobile Development

Developer, Founder Rumah Coding Indonesia`,
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
    {
      name: "M. Dendi Purwanto",
      role: `Artificial Intelligence Software Engineer, PT. Mayar Kernel Supernova`,
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png",
    },
    {
      name: "Danang Avan M",
      role: `Cyber Security Security Analyst, Founder | Contributor TegalSec`,
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png",
    },
  ];
  const faqs = [
    {
        question: "Apa itu INVOFEST?",
        answer: "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
        question: "Kapan dan dimana INVOFEST dilaksanakan?",
        answer: "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025.",
    },
    {
        question: "Apakah ada biaya pendaftaran di INVOFEST?",
        answer: "Semua kegiatan dipastikan berbayar ya teman-teman.",
    },
    {
        question: "Bagaimana saya mengetahui pemenang kompetisi?",
        answer: "Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri.",
    },
    {
        question: "Apa yang didapat pemenang dalam kompetisi?",
        answer: "Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat.",
    },
    {
        question: "Bagaimana cara mendaftar event?",
        answer: "Buka website invofest lalu pergi ke halaman event yang anda ingin ikuti dan klik tombol Registrasi.",
    },
];
  return (
    <div>
      <section
        id="hero"
        className="py-10 flex gap-10 justify-between items-center "
      >
        <div className="w-2/3 flex flex-col gap-6 mr-10">
          <h1 className="text-red-800 text-5xl font-semibold">IT Workshop</h1>
          <h1 className="text-red-800 text-3xl font-semibold  mr-4  ">
            “AI for a Sustainable Future: The Role of Z Generation in the
            Digital Era”
          </h1>

          <p className=" mr-8 text-sm md:text-base lg:text-[1.35rem]  text-slate-600">
            IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan
            AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan
            dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif
            menjadi solusi lingkungan yang nyata dan terukur di era digital.
          </p>

          <div className="flex gap-3">
            <Button label="Daftar Sekarang" variant="primary" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
            alt=""
          />
        </div>
      </section>
      <section>
        <div className=" ">
          <div className="text-center">
            <h1 className="text-5xl text-red-800 mt-30 font-semibold">
              Tentang IT Workshop
            </h1>
            <p className="mt-5 text-[1.35rem] text-base leading-loose">
              Workshop “AI for a Sustainable Future: The Role of Z Generation in
              the Digital Era” ini didesain khusus untuk Generasi Z, para
              digital natives yang berada di persimpangan antara inovasi
              teknologi dan tantangan keberlanjutan global. Peserta akan diajak
              untuk menyelami bagaimana Kecerdasan Buatan (AI) bukan hanya
              sekadar teknologi canggih, tetapi juga alat yang ampuh untuk
              menciptakan solusi nyata bagi isu-isu lingkungan. Melalui sesi
              inspiratif, pengenalan konsep, dan praktik langsung (hands-on),
              workshop ini bertujuan memberdayakan Gen Z untuk menjadi agen
              perubahan di era digital, menggunakan keahlian mereka untuk masa
              depan bumi yang lebih baik.
            </p>
          </div>
        </div>
      </section>
      <section id="speaker" className="py-24 ">
        <h2 className="text-5xl text-red-900 font-semibold mb-20 text-center mt-90">
          Temui Pembicara Khusus Kami
        </h2>
        <div className="grid grid-cols-3 gap-10 px-3 ">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              role={speaker.role}
              imageUrl={speaker.imageUrl}
            />
          ))}
        </div>
      </section>
      <section>
        <h1 className="text-5xl text-red-800  font-semibold text-center mb-20 mt-70">Pelaksanaan Workshop</h1>
        <div className="flex flex-col items-center gap-5 max-w-5xl mx-auto px-6">
       
            <div className="grid grid-cols-2 gap-5 w-full">
                <WorkshopCard
                    icon={Code2}
                    title="Mobile Development"
                    date="Selasa, 25 November 2025"
                    time="08.00 WIB - 16.30 WIB"
                    location="Lab Kom D.1"
                />
                <WorkshopCard
                    icon={Smartphone}
                    title="Artificial Intelligence"
                    date="Selasa, 25 November 2025"
                    time="08.00 WIB - 16.30 WIB"
                    location="Lab Kom D.2"
                />
            </div>

            <div className="w-1/2">
                <WorkshopCard
                    icon={ShieldCheck}
                    title="Cyber Security"
                    date="Rabu, 26 November 2025"
                    time="08.00 WIB - 16.30 WIB"
                    location="Lab Kom D.1"
                />
            </div>
        </div>
      </section>
      <section id="faq" className="mt-90">
        <div className="text-center">
          <div className="mt-4 mb-4">
            <span className="text-slate-600 text-lg  font-semibold   ">
              FAQ
            </span>
          </div>

          <h2 className="text-slate-600 text-4xl font-bold">
            Punya Pertanyaan? Lihat{" "}
          </h2>
          <h2 className=" text-4xl  text-red-800 font-bold mb-4">Disini</h2>
          <div className="text-base text-slate-600 mt-5" >
            <p >
              Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat
            </p>
            <p>daftar pertanyaan di bawah ini.</p>
          </div>
        </div>
      </section>
      <section>
            <FaqAccordion faqs={faqs} />
        </section>

    </div>
  );
}
