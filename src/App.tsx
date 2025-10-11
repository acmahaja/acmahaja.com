import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <div className="max-w-lg w-11/12 h-auto font-display text-lg space-y-2 bg-beige p-8 rounded-4xl border-2 border-black transition duration-300">
      <p>Hi — I'm currently working on the <a href="https://github.com/acmahaja/acmahaja.com" className=" underline underline-offset-4">2025-26 version</a> of my portfolio.</p>
      <p>
        The site is temporarily down, but I'm available on socials and by email.
        Reach me here:
      </p>
      <div className="flex flex-row gap-1.5 my-4 text-2xl">
        <a
          href="mailto:acmahaja@gmail.com"
          className="p-2 border-2 rounded-full hover:bg-red-600 hover:border-white hover:text-white hover:-translate-y-0.5 transition-all duration-200 hover:shadow"
        >
          <MdEmail />
        </a>
        <a
          href="https://linkedin.com/acmahaja"
          className="p-2 border-2 rounded-full hover:bg-[#0a66c2] hover:border-white hover:text-white hover:-translate-y-0.5 transition-all duration-200 hover:shadow"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/acmahaja"
          className="p-2 border-2 rounded-full hover:bg-[#24292f] hover:border-white hover:text-white hover:-translate-y-0.5 transition-all duration-200 hover:shadow"
        >
          <FaGithub />
        </a>

        <a
          href="http://instagram.com/acmahaja"
          className="p-2 border-2 rounded-full hover:bg-[radial-gradient(circle_at_30%_107%,_#fdf497_0%,_#fdf497_5%,_#fd5949_45%,_#d6249f_60%,_#285aeb_90%)] hover:white hover:text-white hover:-translate-y-0.5 hover:shadow transition-all duration-200 "
        >
          <FaInstagram />
        </a>

        <a
          href="https://discordapp.com/users/349311189454553092"
          className="p-2 border-2 rounded-full hover:bg-[#5661f5] hover:border-white hover:text-white hover:-translate-y-0.5 transition-all duration-200 hover:shadow"
        >
          <FaDiscord />
        </a>
      </div>
      <p>Thanks for stopping by — I'll be back soon.</p>
    </div>
  );
}

export default App;
