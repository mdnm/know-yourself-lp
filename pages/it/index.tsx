import Head from "next/head";
import Image from "next/image";
import dinaAvatar from "../../public/dina.png";
import freebiePreview from "../../public/freebie-preview-it.png";
import matteoAvatar from "../../public/matteo.png";
import ConvertkitFormIT from "../components/ConvertkitFormIT";

export default function Home() {
  return (
    <>
      <Head>
        <title>10 Domande a Cui Rispondere Prima di Preparare il Tuo CV</title>
        <meta
          name="description"
          content="Non candidatevi per un lavoro nel settore IT senza aver risposto a queste domande"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="text-center bg-gray-900 text-white flex flex-col justify-center items-center min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-3">
          10 Domande a Cui Rispondere Prima di Preparare il Tuo CV
        </h1>
        <p className="text-xl mb-12 drop-shadow-lg">
          Non candidatevi per un lavoro nel settore IT senza aver risposto a
          queste domande
        </p>

        <div className="flex md:flex-row flex-col justify-between items-start max-w-screen-lg gap-10 mb-20">
          <div className="self-center md:hidden rounded-md max-w-xs shadow-md shadow-purple-300 border border-purple-500">
            <Image
              className="object-contain max-h-[40rem] rounded-md"
              src={freebiePreview}
              alt="10 Questions You Must Answer To Discover Your True Potential And Land A Job In Tech written with The thinker statue in synthwave style as background"
            />
          </div>

          <div className="py-1 px-4">
            <div className="text-start flex flex-col gap-3 pt-8 mb-5">
              <span>
                Avete problemi a <strong>distinguervi</strong> nel mondo della
                tecnologia?
              </span>

              <span>
                Molte persone di talento come voi non hanno idea di cosa le
                renda uniche o <strong>le differenzi</strong> dagli altri.
              </span>

              <span>
                Di conseguenza, i loro CV vengono <strong>trascurati</strong> e
                non hanno mai la possibilità di dimostrare quanto valgono.
              </span>

              <span>
                Ma con la nostra guida esperta, frutto di oltre 10 anni di
                esperienza nel settore IT, scoprirete cosa vi rende unici e come
                sfruttarlo per ottenere{" "}
                <strong>il lavoro dei vostri sogni</strong>.
              </span>

              <span>
                Con questa guida gratuita imparerete come:
                <ul>
                  <li>Identificare i propri punti di forza</li>
                  <li>Comprendere le proprie debolezze</li>
                  <li>Trovate la vostra nicchia di competenza</li>
                  <li>
                    Raggiungere i propri obiettivi in base alla situazione
                    attuale
                  </li>
                  <li>E molto altro ancora...</li>
                </ul>
              </span>

              <span>
                Ricevi subito la tua copia e riceverai anche un contenuto BONUS
                che ti mostrerà come puoi <strong>creare competenze</strong> pur
                non avendo ancora un lavoro: 👇🏻
              </span>
            </div>
            <ConvertkitFormIT />
          </div>

          <div className="hidden md:block rounded-md max-w-md shadow-md shadow-purple-300 border border-purple-500">
            <Image
              className="object-contain max-h-[40rem] rounded-md"
              src={freebiePreview}
              alt="10 Questions You Must Answer To Discover Your True Potential And Land A Job In Tech written with The thinker statue in synthwave style as background"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-3">Chi c&apos;è dietro?</h2>
          <p className="text-xl mb-6 drop-shadow-lg">
            Abbiamo già avuto un impatto su decine di migliaia di persone grazie
            alla nostra esperienza e conoscenza del mercato.
          </p>

          <div className="flex">
            <div className="self-stretch flex flex-col justify-center items-center">
              <strong className="text-lg">Vi presentiamo Dina!</strong>
              <p className="flex flex-col gap-2">
                <span>
                  Mateus De Nardo (Dina) ha oltre 4 anni di esperienza come
                  ingegnere informatico e insegnante.
                </span>

                <span>
                  Ha insegnato e aiutato più di 350 persone a trovare il loro
                  primo lavoro <br /> nel settore IT (anche a livello
                  internazionale!).
                </span>

                <a
                  href="https://www.linkedin.com/in/mateusdnm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 cursor-pointer"
                >
                  Il suo LinkedIn
                </a>
              </p>
            </div>

            <div className="max-w-xs ml-auto">
              <Image
                className="object-contain max-h-[20rem] bg-red-400 rounded-full shadow-xl"
                src={dinaAvatar}
                alt="Mateus Dina De Nardo"
              />
            </div>
          </div>

          <div className="flex mb-8">
            <div className="max-w-xs mr-auto">
              <Image
                className="object-contain max-h-[20rem]  bg-blue-400 rounded-full shadow-xl"
                src={matteoAvatar}
                alt="Matteo Corapi"
              />
            </div>
            <div className="ml-2 self-stretch flex flex-col justify-center items-center">
              <strong className="text-lg">Vi presentiamo Matteo!</strong>
              <p className="flex flex-col gap-2">
                <span>
                  Matteo Corapi ha oltre 7 anni di esperienza nel settore del
                  Recruitment IT.
                </span>

                <span>
                  Ha aiutato oltre 400 candidati a raggiungere il loro pieno
                  potenziale, conquistando il lavoro dei loro sogni.
                </span>

                <a
                  href="https://www.linkedin.com/in/matteocorapi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 cursor-pointer"
                >
                  Il suo LinkedIn
                </a>
              </p>
            </div>
          </div>

          <ConvertkitFormIT />
        </div>

        <h2 className="text-2xl font-bold mb-3">Cosa dicono di noi</h2>

        <iframe
          id="testimonialto-carousel-all-matteocorapi-dark"
          src="https://embed.testimonial.to/carousel/all/matteocorapi?theme=dark&autoplay=on&showmore=off&one-row=on&same-height=on"
          frameBorder="0"
          scrolling="no"
          width="100%"
          height={400}
        ></iframe>
        <iframe
          id="testimonialto-carousel-all-mateus-dina-de-nardo-dark"
          src="https://embed.testimonial.to/carousel/all/mateus-dina-de-nardo?theme=dark&autoplay=on&showmore=off&one-row=on&same-height=on"
          frameBorder="0"
          scrolling="no"
          width="100%"
          height={800}
          className="mb-8"
        ></iframe>

        <ConvertkitFormIT />

        <p>techmatch.it - 2023</p>
      </main>
    </>
  );
}
