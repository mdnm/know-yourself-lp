import { FormEventHandler, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

const ConvertkitSignupForm: React.FC<
  React.PropsWithChildren<{
    formId: string;
  }>
> = ({ formId, children }) => {
  const formData = {
    name: "name",
    email: "email",
  };
  const [success, setSuccess] = useState<boolean | undefined>();
  const { t } = useTranslation("common");

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

        setSuccess(true);
      } catch {
        setSuccess(false);
      }
    },
    [formId]
  );

  if (success === false) {
    return <p>Apologies, an error occurred</p>;
  }

  if (success) {
    return (
      <p>
        Check out your email in some minutes! (if that doesn&apos;t work, try
        opening the Spam folder)
      </p>
    );
  }

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
          placeholder={t("name_input_placeholder") as any}
          required
        />
        <input
          type="email"
          className="w-full rounded-md px-3 py-2 text-base md:text-lg text-black"
          name={formData.email}
          aria-label="Email"
          placeholder={t("email_input_placeholder") as any}
          required
        />

        <button className="bg-blue-600 min-w-[6rem] rounded-md text-lg md:text-xl font-bold py-2">
          {children ?? t("submit_button_text")}
        </button>
      </form>
    </>
  );
};

export default ConvertkitSignupForm;
