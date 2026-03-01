import { ApplicationContext } from "@/contexts/ApplicationContext";
import ComputerRoomCanvas from "./components/ComputerRoomCanvas";
import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

export default function Hero() {
  const { mainMenuOpen } = useContext(ApplicationContext);
  const textRef = useRef<HTMLDivElement>(null);
  const textTweenRef = useRef<gsap.core.Tween>(null);

  useGSAP(() => {
    const split = SplitText.create(textRef.current, {
      type: "words,chars",
      mask: "words",
    });

    textTweenRef.current = gsap
      .to(split.words, {
        duration: 0.3,
        yPercent: 100,
        stagger: 0.01,
        ease: "power2.inOut",
      })
      .pause();
  });

  useEffect(() => {
    if (!textTweenRef.current) return;
    mainMenuOpen ? textTweenRef.current.play() : textTweenRef.current.reverse();
  }, [mainMenuOpen]);

  return (
    <section id="hero-section" className="h-screen relative bg-black">
      <div className=" overflow-hidden absolute left-0 top-0 h-full w-full">
        <div className="size-full absolute left-0 top-0">
          <ComputerRoomCanvas />
        </div>
      </div>
      <div className="text-white  h-full px-8 absolute left-0 top-0 z-10 pointer-events-none">
        <div
          ref={textRef}
          className="w-full flex-1 flex flex-col gap-8 justify-center h-full md:w-1/2"
        >
          <h1 className="text-7xl font-rostex">Hi There</h1>
          <p className="text-2xl text-gray-400">
            I'm <span className="text-white">Eli</span>, a multitalented{" "}
            <span className="text-white">software engineer</span>, with
            experience in <span className="text-white">machine learning</span>,{" "}
            <span className="text-white">web development</span>,{" "}
            <span className="text-white">mobile development</span>, and 3
            <span className="text-white">3D modeling</span>. I love art and
            anime, and am always ready to connect
          </p>
        </div>
      </div>
    </section>
  );
}
