import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const coloredImageRef = useRef<HTMLImageElement>(null);
  const hoverTimeline = useRef<gsap.core.Timeline>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(coloredImageRef.current, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0)",
    });
    hoverTimeline.current = gsap.timeline().pause();

    hoverTimeline.current.to(coloredImageRef.current, {
      clipPath: "polygon(38% 0, 100% 0, 100% 100%, 0 100%, 0% 38%)",
      duration: 0.15,
      ease: "power2.out",
    });

    hoverTimeline.current.to(arrowRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power4.out",
    });
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <div
        className="relative rounded-lg overflow-hidden h-100 cursor-pointer"
        onMouseEnter={() => {
          console.log("dlfjldkfj");
          hoverTimeline.current?.play();
        }}
        onMouseLeave={() => hoverTimeline.current?.reverse()}
      >
        <img
          src={image}
          className="grayscale-100 size-full object-cover absolute left-0 top-0"
        />
        <img
          src={image}
          className="size-full object-cover absolute left-0 top-0"
          ref={coloredImageRef}
        />
        <div
          ref={arrowRef}
          className="w-12 h-12 rounded-full text-white border-3 border-white absolute left-5 top-5 flex justify-center items-center scale-0"
        >
          <ArrowRight className="stroke-white stroke-3" />
        </div>
      </div>
      <div className="font-konexy text-4xl ">{title}</div>
    </div>
  );
}
