import Button from "../components/ui/Button";

export default function Competition() {
  return (
    <div>
    <section
      id="hero"
      className="py-10 flex gap-10 justify-between items-center "
    >
      <div className="w-2/3 flex flex-col gap-6">
        <h1 className="text-red-800 text-5xl font-semibold">IT Competition</h1>
        <h1 className="text-red-800 text-3xl font-semibold   ">
          "From Creation to Innovation"
        </h1>

        <p className=" mr-8 text-sm md:text-base lg:text-[1.35rem]  text-slate-600">
          Kompetisi dalam INVOFEST ini mengusung tema “From Creation to
          Innovation”, Tema ini bertujuan mengajak generasi muda untuk
          mengembangkan inovasi dan kreativitas guna membentuk kelompok yang
          memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang
          berkelanjutan.
        </p>

        <div className="flex gap-3">
          <Button label="Info Selengkapnya" variant="primary" />
          <Button label="Hubungi Panitia" variant="outline" />
        </div>
      </div>
      <div className="w-1/3">
        <img
          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
          alt=""
        />
      </div>
    </section>
    <section>
      <div className="w-full ">

      </div>

    </section>
    </div>
  );
}
