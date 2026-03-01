import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Connect() {
  useGSAP(() => {
    gsap.set(".contact-link", { opacity: 0, y: 40 });
    const trigger = ScrollTrigger.create({
      trigger: "#connect-section",
      start: "top 90%",
    });

    gsap.to(".contact-link", {
      scrollTrigger: trigger,
      opacity: 1,
      y: 0,
      stagger: 0.2,
    });
  });
  return (
    <section id="connect-section" className="py-12 bg-black">
      <div className="container mx-auto h-full">
        <div className="mb-8 text-white">
          <h1 className="text-5xl font-rostex">Reach out to me on:</h1>
        </div>
        <div className="flex flex-row flex-wrap gap-8 text-3xl">
          <a
            className="contact-link underline text-primary"
            href="tel:+2332466879018"
            target="_blank"
          >
            +233 246 687 9018
          </a>
          <a
            className="contact-link underline text-primary"
            href="mailto:eli.bansa.k@gmail.com"
            target="_blank"
          >
            eli.bansa.k@gmail.com
          </a>
          <a
            className="contact-link underline text-primary"
            href="https://www.linkedin.com/in/eli-bansa-92475b207/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="contact-link underline text-primary"
            href="https://github.com/e-hokage777"
            target="_blank"
          >
            Github
          </a>
          <a
            className="contact-link underline text-primary"
            href="#"
            target="_blank"
          >
            LeetCode
          </a>
          <a
            className="contact-link underline text-primary"
            href="#"
            target="_blank"
          >
            CodeForces
          </a>
          <a
            className="contact-link underline text-primary"
            href="https://www.hackerrank.com/e_hokage777"
            target="_blank"
          >
            Hackerrank
          </a>
          <a
            className="contact-link underline text-primary"
            href="https://web.facebook.com/eli.bansa.5/"
            target="_blank"
          >
            facebook
          </a>
        </div>
      </div>
    </section>
  );
}
