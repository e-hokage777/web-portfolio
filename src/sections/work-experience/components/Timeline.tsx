import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TimelineProps = {
  triggerElement?: string;
  divisionLength?: number;
  numTimeSteps?: number;
};

export default function Timeline({
  triggerElement,
  divisionLength = 900,
  numTimeSteps = 3,
}: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const timelineLength = divisionLength * (numTimeSteps - 1);
  const [numberActive, setNumberActive] = useState(0);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top top",
      end: `${timelineLength}px top`,
      pin: true,
      scrub: 1,
      onUpdate(self) {
        if (lineRef.current) {
          const newLength = self.progress * timelineLength;
          lineRef.current.style.translate = -newLength + "px";

          const newNumberActive = Math.floor(newLength / divisionLength);
          setNumberActive(newNumberActive);
        }
      },
    });
  });

  return (
    <div className="h-screen relative flex items-center overflow-hidden">
      <div
        ref={lineRef}
        className={`absolute bg-white h-px left-1/2 flex items-end justify-between`}
        style={{
          width: timelineLength + "px",
        }}
      >
        <TimelineItem
          title="Frontend Developer"
          company="easyGo GH"
          startDate="09/2022"
          endDate="12/2023"
          active={numberActive >= 0}
        />
        <TimelineItem
          title="Frontend Developer"
          company="Hoot"
          startDate="12/2023"
          active={numberActive >= 1}
        />
        <TimelineItem
          title="Research Associate"
          company="Distributed IoT Platforms, Privacy and Edge Intelligence"
          startDate="09/2024"
          active={numberActive >= 2}
        />
      </div>
    </div>
  );
}

function TimelineItem({
  title,
  company,
  startDate,
  endDate,
  active = false,
}: {
  active?: boolean;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const timelineTweenRef = useRef<gsap.core.Timeline>(null);
  const timeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    timelineTweenRef.current = gsap.timeline({ paused: true });

    timelineTweenRef.current.to(indicatorRef.current, {
      scale: 1.75,
      duruation: 0.3,
    });

    timelineTweenRef.current.to(itemRef.current, {
      scale: 1,
      ease: "power4.out",
      duration: 0.3,
    });
  });

  useEffect(() => {
    if (active) {
      timelineTweenRef.current?.play();
    } else {
      timelineTweenRef.current?.reverse();
    }
  }, [active]);

  return (
    <div className="w-15 h-15  rounded-full relative translate-y-1/2 ">
      <div className="size-full bg-primary rounded-full perspective-midrange rotate-x-60 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          ref={indicatorRef}
          className="size-full scale-0 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-primary"
        ></div>
      </div>

      <div
        ref={itemRef}
        className="absolute left-1/2 bottom-0 -translate-y-20 -translate-x-1/2 border-2 border-gray-300  w-100 h-50  text-center flex items-center justify-start scale-0 px-4"
      >
        <div className="flex flex-col items-start gap-4 text-white">
          <span className="text-xl text-primary">{title}</span>
          <span className="text-start font-montserrat text-lg text-gray-600 font-bold">
            {company}
          </span>
        </div>
      </div>
      <div className="absolute left-1/2 -bottom-12  -translate-x-1/2 text-white text-lg flex items-center gap-2">
        <span>{startDate}</span>
        <span>-</span>
        <span>{endDate ?? "Present"}</span>
      </div>
    </div>
  );
}
