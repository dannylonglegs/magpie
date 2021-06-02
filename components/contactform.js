import { useState } from "react";

const ContactForm = () => {
  const [hover, setHover] = useState(false);
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label className="">
          <input
            className="text-title font-bold shadow-boxBlack w-full bg-red mb-8 h-16 px-6 py-4 placeholder-black"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </label>
      </p>
      <p>
        <label className="">
          <input
            className="text-title font-bold shadow-boxBlack w-full bg-green mb-8 h-16 px-6 py-4 placeholder-black"
            type="email"
            name="email"
            placeholder="Your Contact Information"
            required
          />
        </label>
      </p>
      <p>
        <label className=" ">
          <textarea
            className="text-title font-bold shadow-boxBlack w-full bg-yellow h-64 px-6 py-4 placeholder-black"
            name="message"
            placeholder="When would you like to talk? Do you have any questions?"
            required
          ></textarea>
        </label>
      </p>
      <p className="flex flex-row justify-center items-center">
        <button
          className="bg-black text-body text-white underline px-10 py-6 mt-8"
          type="submit"
        >
          Send!
        </button>
      </p>
    </form>
  );
};

export default ContactForm;
