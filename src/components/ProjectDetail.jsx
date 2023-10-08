const ProjectDetail = ({ project }) => {
  return (
    <article className="full-width-screen pb-16">
      <img
        src={project.image}
        alt="club sport project image"
        className="h-full"
      />
      <div>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <p
              key={crypto.randomUUID()}
              className="capitalize text-accent bg-secondary border border-accent p-1 px-2 rounded-md text-xs"
            >
              {tool}
            </p>
          ))}
        </div>
        <p className="font-bold my-2 md:text-2xl md:my-4 capitalize">
          {project.title}
        </p>
        <p className="text-primary text-xs sm:text-sm lg:text-base">
          {project.description}
        </p>
        <div className="mt-8 flex gap-4">
          {project.links.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="p-1 px-3 rounded-md bg-purple-400 hover:shadow-md duration-300"
              key={crypto.randomUUID()}
              title={project.src}
            >
              <img src={link.icon} alt="icon" className="w-4 sm:w-5 md:w-6 " />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectDetail;
