import Timeline from "./components/Timeline";
import { useWindowSize } from "react-use";

export default function WorkExperienceSection() {
  const {width} = useWindowSize()
  return (
    <section id="work-section" className="py-8 h-screen bg-black work-experience-section">
      <div className="container mx-auto h-full">
        <div className="mb-8 text-white">
          <h1 className="text-7xl font-rostex">Work Experience</h1>
          <p className="font-3xl font-konexy">
            From Machine Learning to Web Develop to 3D Modeling
          </p>
        </div>
        <Timeline triggerElement=".work-experience-section" divisionLength={width/2}/>
      </div>
    </section>
  );
}
