import Head from "next/head";
import Image from "next/image";
import dinaAvatar from "../public/dina.png";
import freebiePreview from "../public/freebie-preview.png";
import matteoAvatar from "../public/matteo.png";
import ConvertkitForm from "./components/ConvertkitForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          10 Perguntas Que Você Deve Responder Antes De Criar Seu Currículo
        </title>
        <meta
          name="description"
          content="Não aplique para vagas na area de TI sem antes responder essas perguntas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="text-center bg-gray-900 text-white flex flex-col justify-center items-center min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-3">
          10 Perguntas Que Você Deve Responder Antes De Criar Seu Currículo
        </h1>
        <p className="text-xl mb-12 drop-shadow-lg">
          Não aplique para vagas na area de TI sem antes responder essas
          perguntas
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
                Está tendo dificuldades para <strong>se destacar</strong> no
                mundo da tecnologia?
              </span>

              <span>
                Muitos talentos como você não tem ideia do que os torna únicos
                ou <strong>os diferencia</strong> dos outros.
              </span>

              <span>
                O resultado disso é que seus currículos são{" "}
                <strong>ignorados</strong> e eles nunca têm a chance de se
                provarem.
              </span>

              <span>
                Mas com a nossa orientação especializada de 10+ anos combinados
                na indústria de TI, você descobrirá o que o torna único e como
                explorar isso para conquistar seu{" "}
                <strong>emprego dos sonhos</strong>.
              </span>

              <span>
                Com este guia gratuito, você aprenderá como:
                <ul>
                  <li>Identificar suas forças</li>
                  <li>Entender suas fraquezas</li>
                  <li>Encontrar seu nicho de expertise</li>
                  <li>
                    Alcançar seus objetivos com base em sua situação atual
                  </li>
                  <li>E muito mais...</li>
                </ul>
              </span>

              <span>
                Pegue sua cópia agora e você também receberá um conteúdo BÔNUS
                mostrando como você pode <strong>criar experiência</strong>{" "}
                apesar de ainda não estar empregado 👇🏻
              </span>
            </div>
            <ConvertkitForm />
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
          <h2 className="text-2xl font-bold mb-3">Quem está por trás disso?</h2>
          <p className="text-xl mb-6 drop-shadow-lg">
            Nós já impactamos dezenas de milhares de pessoas graças a nossa
            experiência e conhecimento do mercado.
          </p>

          <div className="flex">
            <div className="self-stretch flex flex-col justify-center items-center">
              <strong className="text-lg">Conheça o Dina!</strong>
              <p className="flex flex-col gap-2">
                <span>
                  Mateus De Nardo (Dina) tem mais de 4 anos de experiência como
                  Engenheiro de Software e Professor.
                </span>

                <span>
                  Ele ensinou e ajudou mais de 350 pessoas a conquistarem seu
                  primeiro emprego na área de TI <br /> (inclusive
                  internacionais!)
                </span>

                <a
                  href="https://www.linkedin.com/in/mateusdnm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 cursor-pointer"
                >
                  Seu LinkedIn
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
            <div className="self-stretch flex flex-col justify-center items-center">
              <strong className="text-lg">Conheça o Matteo!</strong>
              <p className="flex flex-col gap-2">
                <span>
                  Matteo Corapi tem mais de 7 anos de experiência em
                  Recrutamento de TI.
                </span>

                <span>
                  Ele ajudou mais de 400 candidatos a alcançar seu potencial
                  máximo, conquistando seu emprego dos sonhos.
                </span>

                <a
                  href="https://www.linkedin.com/in/matteocorapi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 cursor-pointer"
                >
                  Seu LinkedIn
                </a>
              </p>
            </div>
          </div>

          <ConvertkitForm />
        </div>

        <h2 className="text-2xl font-bold mb-3">Quem confia em nós</h2>

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

        <ConvertkitForm />
      </main>
    </>
  );
}
