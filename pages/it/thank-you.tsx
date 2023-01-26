import Head from "next/head";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Grazie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="text-center bg-gray-900 text-white flex flex-col justify-center items-center min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-3">Grazie!</h1>
        <p className="text-xl mb-12 drop-shadow-lg">
          Verifica la tua email in pochi minuti! (se non funziona, prova a
          controllare la cartella Spam)
        </p>
        <p>techmatch.it - 2023</p>
      </main>
    </>
  );
}
