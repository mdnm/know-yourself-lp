import Head from "next/head";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Obrigado</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="text-center bg-gray-900 text-white flex flex-col justify-center items-center min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-3">Obrigado!</h1>
        <p className="text-xl mb-12 drop-shadow-lg">
          Verifique seu e-mail em alguns minutos! (se isso não funcionar, tente
          abrir a pasta Spam)
        </p>
        <p>techmatch.it - 2023</p>
      </main>
    </>
  );
}
