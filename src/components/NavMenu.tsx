import { FileIcon, HomeIcon, ImageIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useContext, useEffect, useRef } from "react";
import { ApplicationContext } from "@/contexts/ApplicationContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NavMenu() {
  const { mainMenuOpen } = useContext(ApplicationContext);
  const menuRefTween = useRef<gsap.core.Tween>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(menuRef.current, { xPercent: 100 });

    menuRefTween.current = gsap
      .to(menuRef.current, {
        xPercent: 0,
        duration: 0.7,
        ease: "power2.inOut",
        delay: 0.3,
      })
      .pause();
  });

  useEffect(() => {
    if (!menuRefTween.current) return;
    console
    mainMenuOpen ? menuRefTween.current.play() : menuRefTween.current.reverse();
  }, [mainMenuOpen]);

  return (
    <div ref={menuRef} className="w-screen h-screen  fixed left-0 top-0 z-100 flex flex-col justify-center items-center ">
      <div className="w-5/6 h-1/2  bg-black/80 rounded-xl flex flex-col overflow-hidden">
        <div className="bg-primary text-primary-foreground text-center py-8">
          Navigation Menu
        </div>
        <div className="flex-1 flex flex-row justify-center items-center gap-8">
          <NavButton icon={<HomeIcon className="size-8" />} title="Home" />
          <NavButton icon={<FileIcon className="size-8" />} title="Projects" />
          <NavButton
            icon={<ImageIcon className="size-8" />}
            title="Art Gallery"
          />
        </div>
      </div>
    </div>
  );
}

function NavButton({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-row gap-2 items-center justify-center group">
      <Button className="w-20 h-20 rounded-full text-primary-foreground cursor-pointer ">
        {icon}
      </Button>
      <span className="text-white w-0 overflow-hidden transition-all duration-500 group-hover:w-20">
        {title}
      </span>
    </div>
  );
}
