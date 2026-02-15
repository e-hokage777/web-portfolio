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
    const split= SplitText.create(textRef.current, {
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
    <section className="h-screen relative bg-black">
      <div className="flex-3 overflow-hidden absolute left-0 top-0 h-full w-full">
        <div className="size-full absolute left-0 top-0">
          <ComputerRoomCanvas />
        </div>
      </div>
      <div className="text-white  h-full px-8 flex-2 absolute left-0 top-0 z-10 pointer-events-none">
        <div
          ref={textRef}
          className="flex-1 flex flex-col gap-8 justify-center h-full max-w-1/2"
        >
          <h1 className="text-7xl font-rostex">Hi There</h1>
          <p className="text-2xl text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            eius tempore <span className="text-primary">something</span>{" "}
            doloremque aperiam illo necessitatibus, dolores reiciendis ut
            placeat voluptatibus dicta enim esse sint unde sunt debitis vel
            dignissimos!
          </p>
        </div>
      </div>
    </section>
  );
}
