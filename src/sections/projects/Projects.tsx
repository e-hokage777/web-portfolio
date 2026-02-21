import ProjectCard from "./components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-7xl font-rostex">Projects</h1>
          <p className="font-3xl font-konexy">
            These are some of the cool projects I've worked on, enjoy !!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <ProjectCard
            image={"/images/profile.jpg"}
            title="Smart Indigenous Weather Application"
          />
          <ProjectCard
            image={"/images/profile.jpg"}
            title="Hoot"
          />
          <ProjectCard
            image={"/images/profile.jpg"}
            title="easyGo"
          />
          <ProjectCard
            image={"/images/profile.jpg"}
            title="Crop Disease Detection"
          />
          <ProjectCard
            image={"/images/profile.jpg"}
            title="BiliBuddy"
          />
        </div>
      </div>
    </section>
  );
}
