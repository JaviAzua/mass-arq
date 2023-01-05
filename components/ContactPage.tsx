export default function ContactPage() {
  return (
    <div className="min-h-[100vh] flex items-center justify-center">
      <div>
        <h2 className="text-center font-bold text-2xl">CONTACTO</h2>
        <div className=" bg-slate-300 min-h-[60vh] w-[90vw] md:w-[70vw]">
          <form
            action="https://formspree.io/f/xdojgvev"
            method="POST"
            className="flex flex-col p-5 gap-4"
          >
            <div className="form_item">
              <label htmlFor="email">E-mail de contacto:</label>
              <input type="email" name="email" required />
            </div>
            <div className="form_item">
              <label htmlFor="subject">Asunto:</label>
              <input type="text" name="subject" required />
            </div>
            <div className="form_item">
              <label htmlFor="mssj">Mensaje:</label>
              <textarea name="mssj" className="min-h-[30vh]" required />
            </div>
            <div className="text-center">
              <button
                className="bg-white min-w-[15vw] py-2 px-5 font-semibold hover:scale-105 duration-300"
                type="submit"
              >
                E N V I A R
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
