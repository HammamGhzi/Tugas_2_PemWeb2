import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function Beranda() {
  return (
    <div>
      <section
        id="hero"
        className="py-10 flex gap-10 justify-between items-center "
      >
        <div className="w-2/3 flex flex-col gap-6">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
            alt=""
            className="w-96"
          />
          <p className=" mr-8 text-sm md:text-base lg:text-[1.35rem]  text-slate-600">
            Invofest (Informatics Vocational Festival) adalah festival tahunan
            yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
            Indonesia dalam menghadapi era digital. Dengan mengusung tema
            <strong className="font-bold">
              “Beyond Limits, Beyond Intelligence: Innovate for a Smarter
              Tomorrow ”
            </strong>
            .
          </p>

          <div className="flex gap-3">
            <Button className="" label="INFO SELENGKAPNYA" variant="primary" />
            <Button label="HUBUNGI PANITIA" variant="outline" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            alt=""
          />
        </div>
      </section>
      

      <section className="w-full  mt-20 relative z-10">
        <div className="max-w-7xl ">
          <div className="mb-14 max-w-5xl">
            <h2 className="text-[40px] md:text-[46px] font-medium text-[#8b2551] mb-6 tracking-tight">
              Tentang <span className="font-bold">INVOFEST</span>
            </h2>
            <p className="text-slate-600/90 text-2xl text-justify leading-relaxed">
              Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik
              Informatika Universitas Harkat Negeri, adalah festival tahunan
              yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
              Indonesia dalam menghadapi era digital. Dengan mengusung tema{" "}
              <strong className="text-slate-800 font-bold">
                "Beyond Limits, Beyond Intelligence: Innovate for a Smarter
                Tomorrow "
              </strong>
              . Invofest 2025 menghadirkan berbagai kegiatan menarik seperti
              kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan
              para ahli teknologi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ">
            <Card
              title="IT Seminar"
              description='Seminar nasional ini membahas "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif" untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.'
            >
              <Button
                className=""
                label="INFO SELENGKAPNYA"
                variant="primary"
              />
            </Card>

            <Card
              title="IT Talkshow"
              description='Talkshow "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan" membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.'
            >
              <Button
                className="w-full text-xs"
                label="INFO SELENGKAPNYA"
                variant="primary"
              />
            </Card>

            <Card
              title="IT Competition"
              description='Kompetisi "From Creation to Innovation" mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan.'
            >
              <Button
                className="w-full text-xs"
                label="INFO SELENGKAPNYA"
                variant="primary"
              />
            </Card>

            <Card
              title="IT Workshop"
              description="Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan."
            >
              <Button
                className="w-full text-xs"
                label="INFO SELENGKAPNYA"
                variant="primary"
              />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
