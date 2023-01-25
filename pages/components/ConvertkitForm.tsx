export default function ConvertkitForm() {
  const formOptions =
    "{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Verifique seu e-mail em alguns minutos! (se isso não funcionar, tente abrir a pasta Spam)&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:true},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}";

  return (
    <form
      action="https://app.convertkit.com/forms/4786327/subscriptions"
      className="seva-form formkit-form mx-auto"
      method="post"
      data-sv-form="4786327"
      data-uid="af506c786d"
      data-format="inline"
      data-version="5"
      data-options={formOptions}
      //min-width="400 500 600 700 800"
    >
      <div data-style="clean">
        <ul
          className="formkit-alert formkit-alert-error"
          data-element="errors"
          data-group="alert"
        ></ul>
        <div
          data-element="fields"
          data-stacked="false"
          className="seva-fields formkit-fields"
        >
          <div className="formkit-field">
            <input
              className="formkit-input"
              aria-label="Nome"
              name="fields[first_name]"
              required
              placeholder="Nome"
              type="text"
              style={{
                color: "rgb(0, 0, 0)",
                borderColor: "rgb(227, 227, 227)",
                borderRadius: 4,
                fontWeight: 400,
              }}
            />
          </div>
          <div className="formkit-field">
            <input
              className="formkit-input"
              name="email_address"
              aria-label="Email"
              placeholder="Email"
              required
              type="email"
              style={{
                color: "rgb(0, 0, 0)",
                borderColor: "rgb(227, 227, 227)",
                borderRadius: 4,
                fontWeight: 400,
              }}
            />
          </div>
          <button
            data-element="submit"
            className="formkit-submit formkit-submit"
            style={{
              backgroundColor: "rgb(42, 87, 217)",
              color: "rgb(255, 255, 255)",
              borderRadius: 5,
              fontWeight: 700,
            }}
          >
            <div className="formkit-spinner"></div>
            <span className="">PEGAR CÓPIA GRÁTIS + BÔNUS</span>
          </button>
          <div className="formkit-powered-by-convertkit-container">
            <a
              href="https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"
              data-element="powered-by"
              className="formkit-powered-by-convertkit"
              data-variant="dark"
              target="_blank"
              rel="nofollow noreferrer"
            >
              Built with ConvertKit
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}
