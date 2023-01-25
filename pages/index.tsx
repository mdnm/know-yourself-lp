import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import dinaAvatar from "../public/dina.png";
import freebiePreview from "../public/freebie-preview.png";
import matteoAvatar from "../public/matteo.png";
import ConvertkitSignupForm from "./components/ConvertkitSignupForm";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta
          name="description"
          content="Don't start applying to jobs before you understand this"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="text-center bg-gray-900 text-white flex flex-col justify-center items-center min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-3">{t("title")}</h1>
        <p className="text-xl mb-12 drop-shadow-lg">{t("subtitle")}</p>

        <div className="flex justify-between items-start max-w-screen-lg gap-10 mb-20">
          <div className="py-1 px-4">
            <div
              className="text-start flex flex-col gap-3 pt-8 mb-5"
              dangerouslySetInnerHTML={{
                __html: t("body1", {
                  interpolation: { escapeValue: true },
                }),
              }}
            ></div>
            <ConvertkitSignupForm formId="af506c786d">
              {t("CTA")}
            </ConvertkitSignupForm>
          </div>

          <Image
            className="object-contain max-h-[40rem] rounded-md shadow-md shadow-purple-300 border border-purple-500"
            src={freebiePreview}
            alt="10 Questions You Must Answer To Discover Your True Potential And Land A Job In Tech written with The thinker statue in synthwave style as background"
          />
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-3">{t("title2")}</h2>
          <p className="text-xl mb-6 drop-shadow-lg">{t("subtitle2")}</p>

          <div className="flex">
            <div className="self-stretch flex flex-col justify-center items-center">
              <strong className="text-lg">{t("meet")} Dina!</strong>
              <p className="flex flex-col gap-2">
                <span>{t("dina1")}</span>

                <span>{t("dina2")}</span>

                <a
                  href="https://www.linkedin.com/in/mateusdnm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 cursor-pointer"
                >
                  {t("his_linkedin")}
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
              <strong className="text-lg">{t("meet")} Matteo!</strong>
              <p className="flex flex-col gap-2">
                <span>{t("matteo1")}</span>

                <span>{t("matteo2")}</span>

                <a
                  href="https://www.linkedin.com/in/matteocorapi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 cursor-pointer"
                >
                  {t("his_linkedin")}
                </a>
              </p>
            </div>
          </div>

          <ConvertkitSignupForm formId="af506c786d">
            {t("CTA")}
          </ConvertkitSignupForm>
        </div>

        <h2 className="text-2xl font-bold mb-3">{t("title3")}</h2>

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
          {t("CTA")}
        </ConvertkitSignupForm>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, locales }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? "en-US",
        ["common"],
        null,
        locales
      )),
    },
  };
};
