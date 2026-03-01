import {
  Briefcase,
  ChevronLeft,
  FileIcon,
  HomeIcon,
  ImageIcon,
  PhoneIcon,
} from "lucide-react";
import { useContext, useEffect, useRef } from "react";
import { ApplicationContext } from "@/contexts/ApplicationContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NavMenu() {
  const { mainMenuOpen, setMainMenuOpen } = useContext(ApplicationContext);
  const menuRefTween = useRef<gsap.core.Tween>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(menuRef.current, { xPercent: -100 });

    menuRefTween.current = gsap
      .to(menuRef.current, {
        xPercent: 0,
        duration: 0.7,
        ease: "power2.inOut",
        delay: 0.4,
      })
      .pause();
  });

  useEffect(() => {
    if (!menuRefTween.current) return;
    console;
    mainMenuOpen ? menuRefTween.current.play() : menuRefTween.current.reverse();
  }, [mainMenuOpen]);

  return (
    <div
      ref={menuRef}
      className="h-screen  fixed left-0 top-0 z-100 flex flex-col justify-center items-start "
    >
      <div className="h-full  bg-black/20 flex flex-col overflow-hidden">
        <div
          className="py-8 flex items-center justify-center text-white text-4xl cursor-pointer"
          onClick={() => setMainMenuOpen(false)}
        >
          <ChevronLeft className=" text-white size-16" />
          CLOSE
        </div>
        <div className="flex-1 flex flex-col justify-center items-start gap-8">
          <NavButton
            href="#hero-section"
            icon={
              <HomeIcon className="size-8 stroke-white group-hover:stroke-black transition-colors duration-300" />
            }
            title="Home"
          />
          <NavButton
            href="#projects-section"
            icon={
              <FileIcon className="size-8 stroke-white group-hover:stroke-black transition-colors duration-300" />
            }
            title="Projects"
          />
          <NavButton
            href="#work-section"
            icon={
              <Briefcase className="size-8 stroke-white group-hover:stroke-black transition-colors duration-300" />
            }
            title="Experience"
          />
          <NavButton
            href="#art-section"
            icon={
              <ImageIcon className="size-8 stroke-white group-hover:stroke-black transition-colors duration-300" />
            }
            title="Art Gallery"
          />
          <NavButton
            href="#connect-section"
            icon={
              <PhoneIcon className="size-8 stroke-white group-hover:stroke-black transition-colors duration-300" />
            }
            title="Connect"
          />
        </div>
      </div>
    </div>
  );
}

function NavButton({
  icon,
  title,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  href?: string;
}) {
  const { setMainMenuOpen } = useContext(ApplicationContext);
  return (
    <a
      onClick={() => setMainMenuOpen(false)}
      href={href}
      className="flex flex-row gap-2 items-center group px-4 relative group cursor-pointer"
    >
      <div className="size-full bg-primary left-0 top-0 absolute -z-10 w-0 group-hover:w-full duration-300 transition-all"></div>
      {icon}
      <span className="text-white overflow-hidden transition-colors duration-300 text-4xl group-hover:text-black">
        {title}
      </span>
    </a>
  );
}
