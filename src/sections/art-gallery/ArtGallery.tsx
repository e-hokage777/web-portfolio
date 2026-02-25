import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ArtGallery() {
  const numItems = 12;
  useGSAP(() => {
    let count = 0;

    const interval = setInterval(() => {
        console.log("ldkfjldkjflk")
      gsap.to(`.art-${count}`, {
        opacity: 0,
        duration: 3,
      });

      count = (count + 1) % numItems;

      gsap.to(`.art-${count}`, {
        opacity: 1,
        duration: 3,
      });
    }, 5000);

    return () => clearInterval(interval)
  }, []);
  return (
    <section className="h-screen relative py-8">
      {Array(numItems)
        .fill(0)
        .map((_, index) => (
          <div key={`art-${index}`} className="size-full absolute left-0 top-0">
            <img
              src={`/art-gallery/art-${index + 1}.png`}
              alt="art gallery"
              className={cn(
                "size-full object-cover object-top-left",
                index != 0 ? "opacity-0" : "",
                `art-${index}`,
              )}
            />
          </div>
        ))}
      <div
        className="absolute left-0 top-0 size-full"
        style={{
          background:
            "linear-gradient(180deg,rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.5) 92%)",
        }}
      ></div>
      <div className="h-full absolute left-0 top-0 container mx-auto flex flex-col justify-between items-center p-8">
        <p className="text-2xl font-kenexy text-center">
          Explore the works of an amateur artist, yours truly
        </p>
        <h1 className="text-center font-rostex text-7xl mb-8 text-white text-center">
          My Art Gallery
        </h1>
      </div>
    </section>
  );
}
