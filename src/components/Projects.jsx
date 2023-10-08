import { useEffect, useState } from "react";
import Title from "./Title";
import ProjectDetail from "./ProjectDetail";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects));
  }, []);

  return (
    <section className="py-12" id="projects">
      <div className="container">
        <Title title="projects" number="02." />
      </div>
      {/* project component */}
      {projects.map((project) => (
        <ProjectDetail key={crypto.randomUUID()} project={project} />
      ))}
    </section>
  );
};

export default Projects;
