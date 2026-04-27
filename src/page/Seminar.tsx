import SpeakerCard from "../components/ui/SpeakerCard"
import Button from "../components/ui/Button"

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
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];
    return(
        
        <div>
            <section
                                          id="hero"
                                          className="py-10 flex gap-10 justify-between items-center "
                                        >
                                          <div className="w-2/3 flex flex-col gap-6">
                                           <h1 className="text-red-800 text-5xl font-bold">Semminar</h1>
                                           <h2 className="text-red-800 text-4xl font-semibold">"From Creation to Inovation"</h2>
                                    
                                            <p>
                                              Invofest (Informatics Vocational Festival) adalah festival tahunan
                                              yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
                                              Indonesia dalam menghadapi era digital. Dengan mengusung tema
                                              “Beyond Limits, Beyond Intelligence: Innovate for a Smarter
                                              Tomorrow ”.
                                            </p>
                                
                                            <div className="flex gap-3">
                                              <Button label="Info Selengkapnya" variant="primary" />
                                              <Button label="Hubungi Panitia" variant="outline" />
                                            </div>
                                          </div>
                                          <div className="w-1/3">
                                            <img
                                              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
                                              alt=""
                                            />
                                          </div>
                                        </section>

                                         <section id="speaker" className="py-24">
                                             <h2 className="text-3xl text-red-900 font-bold mb-10 text-center">Temui Pembicara Khusus Kami</h2>
                                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
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


            
        </div>
    )
};