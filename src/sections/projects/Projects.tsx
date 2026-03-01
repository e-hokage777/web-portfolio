import ProjectCard from "./components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects-section" className="py-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-7xl font-rostex">Projects</h1>
          <p className="font-3xl font-konexy">
            These are some of the cool projects I've worked on, enjoy !!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProjectCard
            image={"/images/projects/siwa.png"}
            title="Smart Indigenous Weather Application"
            description="Revolutionalizing weather prediction with indigneous heritage and Artificial Intelligence"
          />
          <ProjectCard
            image={"/images/projects/hoot.jpg"}
            title="Hoot"
            description="Portraying Africa's culture with visual art"
          />
          <ProjectCard
            image={"/images/projects/easyGo.jpg"}
            title="easyGo"
            description="Vacations? Field Trips? Plan your travel with ease"
          />
          <ProjectCard
            image={"/images/projects/bilibuddy.png"}
            title="BiliBuddy"
            description="Protecting futures through the early detection of neonatal jaundice"
          />
          <ProjectCard
            image={"/images/projects/digital-broselow.png"}
            title="Digital Broselow"
            description="Supporting emergency treatment efforts through seamless estimation of height and weight"
          />
        </div>
      </div>
    </section>
  );
}
