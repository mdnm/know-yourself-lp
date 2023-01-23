import Head from "next/head";
import Image from "next/image";
import dinaAvatar from "../public/dina.png";
import freebiePreview from "../public/freebie-preview.png";
import matteoAvatar from "../public/matteo.png";
import ConvertkitSignupForm from "./components/ConvertkitSignupForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>10 Questions You Must Answer Before Creating Your Resume</title>
        <meta
          name="description"
          content="Don't start applying to jobs before you understand this"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="text-center bg-zinc-700 text-white flex flex-col justify-center items-center min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-3">
          10 Questions You Must Answer Before Creating Your Resume
        </h1>
        <p className="text-xl mb-12 drop-shadow-lg">
          Don&apos;t start applying to jobs before you understand this
        </p>

        <div className="flex justify-between items-start max-w-screen-lg gap-10 mb-20">
          <div className="py-1 px-4">
            <div className="text-start flex flex-col gap-3 pt-8 mb-5">
              <span>
                Are you struggling to <strong>stand out</strong> in the crowded
                tech world?
              </span>
              <span>
                Many talents like you have no idea what makes them unique or{" "}
                <strong>sets them apart</strong> from others.
              </span>
              <span>
                The result is that their job applications are{" "}
                <strong>ignored</strong> and they never get a chance to prove
                themselves.
              </span>
              <span>
                But with our expert guidance of 10+ years combined in the Tech
                Industry, you&apos;ll get to know what makes you unique and how
                to leverage it to land your <strong>dream job</strong>.
              </span>
              <span>
                With this free guide, you&apos;ll learn how to:
                <ul className="list-disc list-inside">
                  <li>Identify your strengths</li>
                  <li>Understand your weaknesses</li>
                  <li>Find your expertise niche</li>
                  <li>Achieve your goals based on your current situation</li>
                  <li>And more...</li>
                </ul>
              </span>
              <span>
                Download the PDF now and you&apos;ll also get a BONUS document
                showing how you can <strong>create experience</strong> despite
                not being employed yet 👇🏻
              </span>
            </div>
            <ConvertkitSignupForm formId="af506c786d">
              PEGAR CÓPIA GRÁTIS + BÔNUS
            </ConvertkitSignupForm>
          </div>

          <Image
            className="object-contain max-h-[40rem] rounded-md shadow-xl"
            src={freebiePreview}
            alt="10 Questions You Must Answer To Discover Your True Potential And Land A Job In Tech written with The thinker statue in synthwave style as background"
          />
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-3">Who is behind this?</h2>
          <p className="text-xl mb-6 drop-shadow-lg">
            We have impacted tens of thousands thanks to their expertise and
            market knowledge.
          </p>

          <div className="flex">
            <div className="self-stretch flex flex-col justify-center items-center">
              <strong className="text-lg">Meet Dina!</strong>
              <p className="flex flex-col gap-2">
                <span>
                  Mateus De Nardo (Dina) has over 4 years of experience as a
                  Software Engineer and a Professor.
                </span>

                <span>
                  He taught and helped over 350 people to land their first job
                  in tech (even international ones!)
                </span>

                <a
                  href="https://www.linkedin.com/in/mateusdnm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 cursor-pointer"
                >
                  His LinkedIn
                </a>
              </p>
            </div>

            <Image
              className="object-contain max-h-[20rem] max-w-fit bg-red-400 rounded-full shadow-xl ml-auto"
              src={dinaAvatar}
              alt="Mateus Dina De Nardo"
            />
          </div>

          <div className="flex mb-8">
            <Image
              className="object-contain max-h-[20rem] max-w-fit bg-blue-400 rounded-full shadow-xl mr-auto"
              src={matteoAvatar}
              alt="Matteo Corapi"
            />
            <div className="self-stretch flex flex-col justify-center items-center">
              <strong className="text-lg">Meet Matteo!</strong>
              <p className="flex flex-col gap-2">
                <span>
                  Matteo Corapi has over 7 years of experience in Tech
                  Recruitment.
                </span>

                <span>
                  He helped over 400 candidates reach their full potential by
                  landing their dream job.
                </span>

                <a
                  href="https://www.linkedin.com/in/matteocorapi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 cursor-pointer"
                >
                  His LinkedIn
                </a>
              </p>
            </div>
          </div>

          <ConvertkitSignupForm formId="af506c786d">
            PEGAR CÓPIA GRÁTIS + BÔNUS
          </ConvertkitSignupForm>
        </div>

        <h2 className="text-2xl font-bold mb-3">Who trusts us</h2>

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

        <ConvertkitSignupForm formId="af506c786d">
          PEGAR CÓPIA GRÁTIS + BÔNUS
        </ConvertkitSignupForm>
      </main>
    </>
  );
}
