import SpeakerCard from "../components/ui/SpeakerCard";
import Button from "../components/ui/Button";
import InfoCard from "../components/ui/CardSeminar";
import {  Building, CalendarDays, Clock9, MapPin } from "lucide-react";
import FaqAccordion from "../components/ui/FAQ";

export default function Seminar() {
  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "Aws Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
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
          <h1 className="text-red-800 text-5xl font-semibold">IT Seminar</h1>
          <h1 className="text-red-800 text-3xl font-semibold  mr-4  ">
            “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan
            Kompetitif”
          </h1>

          <p className=" mr-8 text-sm md:text-base lg:text-[1.35rem]  text-slate-600">
            Seminar nasional yang membahas strategi dan arsitektur teknologi
            untuk menciptakan sistem di mana manusia dan AI bekerja sebagai
            mitra yang sinergis.Yang bertujuan mengubah paradigma dari
            persaingan menjadi kolaborasi, serta meningkatkan pengetahuan
            peserta dalam merancang teknologi AI yang berpusat pada manusia.
          </p>

          <div className="flex gap-3">
            <Button label="Daftar Sekarang" variant="primary" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
            alt=""
          />
        </div>
      </section>
      <section>
        <div className=" ">
          <div className="text-center">
            <h1 className="text-5xl text-red-800 mt-30 font-semibold">
              Tentang IT SEMINAR
            </h1>
            <p className="mt-5 text-[1.35rem] text-base leading-loose">
              Seminar bertajuk “Human-AI Integration: Merancang Arsitektur
              Kolaboratif, Di tengah pesatnya kemajuan kecerdasan buatan (AI),
              narasi yang sering muncul adalah tentang persaingan antara manusia
              dan mesin. Kekhawatiran akan penggantian peran manusia oleh
              teknologi cerdas menjadi diskusi utama di berbagai sektor. Namun,
              bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional
              Teknologi Informasi ini hadir untuk menjawab tantangan itu dengan
              mengangkat tema "Human-AI Integration: Merancang Arsitektur
              Kolaboratif, Bukan Kompetitif.” Kami bertujuan untuk menggeser
              fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang
              kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat
              merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi
              sebagai mitra yang memperkuat kecerdasan, kreativitas, dan
              produktivitas manusia—bukan sebagai pengganti.
            </p>
          </div>
        </div>
      </section>

      <section id="speaker" className="py-24 ">
        <h2 className="text-5xl text-red-900 font-semibold mb-20 text-center mt-90">
          Temui Pembicara Khusus Kami
        </h2>
        <div className="grid grid-cols-2 gap-40 py-5 mx-30">
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
          <div>
            
          </div>

      <section id="pelaksanaan" className="mt-70">
              <h1 className="text-center text-5xl font-semibold  text-red-900 mb-10 ">Pelaksanaan IT Seminar</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto px-6">
                <InfoCard icon={CalendarDays} text="Kamis, 27 November 2025" />
                <InfoCard icon={Clock9} text="08.00 WIB - 12.00 WIB" />
                <InfoCard icon={MapPin} text="Aula Gedung C" />
                <InfoCard icon={Building} text="Kampus 1 (Mataram) Universitas Harkat Negeri" />
            </div>
            
      </section>
       <section>
        <div className="text-center">
          <div className="mt-90 mb-4">
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
