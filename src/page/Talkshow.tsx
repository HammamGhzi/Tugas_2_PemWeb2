import Button from "../components/ui/Button";
import SpeakerCard from "../components/ui/SpeakerCard";
import InfoCard from "../components/ui/CardSeminar";
import {  Building, CalendarDays, Clock9, MapPin } from "lucide-react";
import FaqAccordion from "../components/ui/FAQ";

export default function Talkshow() {
const speakers = [
    {
      name: "Moh. Ichsan Maulana",
      role: `Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera`,
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png",
    },
    {
      name: "M. Zaim Zamzami",
      role: `Programmer, PT. Pertamina Drilling Service Indonesia`,
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png",
    },
    {
      name: "Daffa Zuhdan Muhtar",
      role: `Android Developer, PT. Astra Internasional`,
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png",
    },
      {
      name: "Bayu Adi Prasetiyo",
      role: `Software Engineer, KOMPAS.ID`,
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png",
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
        className="py-10 flex gap-1 justify-between items-center "
      >
        <div className="w-2/3 flex flex-col gap-7  ">
          <h1 className="text-red-800 text-5xl font-semibold">IT Talkshow</h1>
          <h1 className="text-red-800 text-3xl font-semibold  mr-40  ">
            “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”
          </h1>

          <p className=" mr-29 text-sm md:text-base lg:text-[1.35rem]  text-slate-600">
            Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa
            Depan” Sebuah diskusi interaktif yang mengeksplorasi cara
            mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan
            kreativitas ke dalam pengembangan kecerdasan buatan. yang bertujuan
            menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai
            alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai
            penggantinya.
          </p>

          <div className="flex gap-3">
            <Button label="Daftar Sekarang" variant="primary" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
            alt=""
          />
        </div>
      </section>
      <section id="About">
        <div className=" ">
          <div className="text-center">
            <h1 className="text-5xl text-red-800 mt-30 font-semibold">
              Tentang IT Talkshow
            </h1>
            <p className="mt-5 text-[1.35rem] text-base leading-loose">
              Seiring teknologi, khususnya kecerdasan buatan (AI), yang semakin
              meresap ke dalam setiap aspek kehidupan kita, muncul sebuah
              pertanyaan fundamental: Apakah kita sedang menciptakan teknologi
              yang melayani manusia, atau justru sebaliknya? Untuk menjawab
              pertanyaan tersebut, kami mempersembahkan talkshow berskala
              nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di
              Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi
              sebagai entitas yang dingin dan terpisah, melainkan untuk menggali
              bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti
              empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami
              akan mengupas tuntas visi masa depan di mana AI tidak menjadi
              pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi
              unik manusia.
            </p>
          </div>
        </div>
      </section >
       <section id="speaker" className="py-24 ">
              <h2 className="text-5xl text-red-900 font-semibold mb-20 text-center mt-90">
                Temui Pembicara Khusus Kami
              </h2>
              <div className="grid grid-cols-4 gap-10 px-3 ">
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
             <section id="pelaksanaan" className="mt-70">
              <h1 className="text-center text-5xl font-semibold  text-red-900 mb-10 ">Pelaksanaan IT Seminar</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto px-6">
                <InfoCard icon={CalendarDays} text="Senin, 24 November 2025" />
                <InfoCard icon={Clock9} text="08.00 WIB - 12.00 WIB" />
                <InfoCard icon={MapPin} text="Aula Gedung C" />
                <InfoCard icon={Building} text="Kampus 1 (Mataram) Universitas Harkat Negeri" />
            </div>

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

            
      </section>
    </div>
  );
}
