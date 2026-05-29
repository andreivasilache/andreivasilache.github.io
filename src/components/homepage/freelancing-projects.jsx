import modalav from "../../assets/modalav.jpeg";
import rose from "../../assets/rose.png";
import { splitTechnologies } from "../../shared/const";

const FREELANCING_PROJECTS = [
  {
    name: "Rose Flower Shop Presentation Website",
    role: "Full Stack Developer",
    description:
      "A presentation website for a local flower shop, showcasing their products and services. Focused on performance, maintainability, and CMS-driven content management.",
    technologies: "NextJs, React, Tailwind CSS, Supabase",
    responsibilities:
      "Planned, designed and developed the project from scratch based on client requirements. Implemented a CMS for easy content updates, optimized performance, and ensured a responsive design.",
    image: rose,
    link: "https://florariarose.ro/?ref=andreivasilache-portfolio",
  },
  {
    name: "Rose Flower Shop – Stock Management System",
    role: "Full Stack Developer",
    description:
      "An internal stock management application for the same flower shop, enabling the owner to track inventory, manage flower stock levels, and streamline day-to-day operations.",
    technologies: "NextJs, React, Tailwind CSS, Supabase",
    responsibilities:
      "Designed and developed the system from scratch based on client requirements. Implemented real-time stock tracking, database integration with Supabase, and a user-friendly interface tailored to the client's workflow.",
    image: rose,
  },
  {
    name: "Modalav – Corporate Website",
    role: "Full Stack Developer",
    description:
      "A presentation website for Modalav, a company specializing in professional audiovisual solutions. Focused on performance, maintainability, and CMS-driven content management.",
    technologies: "Gatsby, React, Styled Components, Sanity (Headless CMS)",
    responsibilities:
      "Inherited an incomplete and non-functional codebase. Refactored the entire project, integrated Sanity as the CMS, optimized performance, and delivered new features while ensuring production readiness.",
    image: modalav,
    link: "https://www.modalav.co.uk/",
  },
  {
    name: "Modalav – Project Builder",
    role: "Full Stack Developer",
    description:
      "An internal tool for Modalav allowing clients to configure project requirements (AV systems, room setups, devices, etc.) and automatically generate detailed cost estimates.",
    technologies:
      "React, TypeScript, Styled Components, Storybook, Supabase (Database & Auth)",
    responsibilities:
      "Developed the platform from scratch based on client-provided design. Implemented dynamic forms, database integration, authentication, and scalable frontend architecture.",
    image: modalav,
  },
];

const FreelancingProjects = () => {
  return (
    <ol className="panel divide-y divide-line">
      {FREELANCING_PROJECTS.map((project, index) => {
        const num = String(index + 1).padStart(2, "0");
        const technologies = splitTechnologies(project.technologies);

        return (
          <li
            key={index}
            className="grid grid-cols-[2rem_1fr] gap-x-4 gap-y-3 p-5 transition-colors hover:bg-subtle sm:p-6"
          >
            <span className="pt-0.5 text-sm tabular-nums text-muted">{num}</span>

            <div className="[display:flow-root]">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-bold leading-snug">
                  {project.name}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link ml-2 text-xs font-normal text-muted"
                      data-umami-event="project-visit"
                      data-umami-event-project={project.name}
                    >
                      visit ↗
                    </a>
                  )}
                </h3>
                {project.role && (
                  <span className="eyebrow shrink-0 sm:text-right">
                    {project.role}
                  </span>
                )}
              </div>

              {project.image && (
                <img
                  src={project.image.src}
                  alt=""
                  aria-hidden="true"
                  className="float-left mr-4 mt-3 mb-1 h-16 w-16 object-contain"
                />
              )}

              {project.description && (
                <p className="mt-3 text-sm leading-relaxed text-fg/85">
                  {project.description}
                </p>
              )}

              {technologies.length > 0 && (
                <p className="mt-3 text-xs uppercase tracking-wider text-muted">
                  {technologies.join(" · ")}
                </p>
              )}

              {project.responsibilities && (
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.responsibilities}
                </p>
              )}
            </div>
          </li>
        );
      })}

      <li className="flex flex-col gap-1 p-5 text-sm text-muted sm:p-6">
        <span className="font-bold text-fg">Your project here?</span>
        <span>
          I'd be happy to help with your next project —{" "}
          <a
            href="mailto:vasilacheandrei46@gmail.com"
            className="link"
            data-umami-event="email-click"
            data-umami-event-location="freelancing"
          >
            get in touch
          </a>
          .
        </span>
      </li>
    </ol>
  );
};

export default FreelancingProjects;
