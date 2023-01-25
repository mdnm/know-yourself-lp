import { FormEventHandler, useCallback } from "react";
import { toast } from "react-hot-toast";

const ConvertkitSignupForm: React.FC<
  React.PropsWithChildren<{
    formId: string;
  }>
> = ({ formId, children }) => {
  const formData = {
    name: "name",
    email: "email",
  };

  const onSubmit: FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();

      const target = event.target as HTMLFormElement;
      const data = new FormData(target);
      const name = data.get(formData.name);
      const email = data.get(formData.email);

      const body = JSON.stringify({
        formId,
        name,
        email,
      });

      const headers = new Headers({
        "Content-Type": "application/json; charset=utf-8",
      });

      try {
        await fetch(`/api/subscribe`, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers,
          body,
        });

        toast.success(
          "Verifique seu e-mail em alguns minutos! (se isso não funcionar, tente abrir a pasta Spam)",
          {
            position: "top-right",
          }
        );
      } catch {
        toast.error(
          "Algo deu errado, tente novamente em alguns minutos. Se isso não funcionar, entre em contato conosco em nossas redes sociais.",
          {
            position: "top-right",
          }
        );
      }
    },
    [formId]
  );

  return (
    <>
      <form
        target="_blank"
        className={`space-around flex flex-col w-full justify-center gap-4 max-w-screen-sm mx-auto`}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          className="w-full rounded-md px-3 py-2 text-base md:text-lg text-black"
          name={formData.name}
          aria-label="Name"
          placeholder={"Seu nome"}
          required
        />
        <input
          type="email"
          className="w-full rounded-md px-3 py-2 text-base md:text-lg text-black"
          name={formData.email}
          aria-label="Email"
          placeholder={"seu@email.com"}
          required
        />

        <button className="bg-blue-600 hover:bg-blue-800 min-w-[6rem] rounded-md text-lg md:text-xl font-bold py-2">
          {children ?? "Inscreva-se"}
        </button>
      </form>
    </>
  );
};

export default ConvertkitSignupForm;
