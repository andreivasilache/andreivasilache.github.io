import modalav from "../../assets/modalav.jpeg";

const FREELANCING_PROJECTS = [
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
    <table className="w-full mt-4">
      <tbody>
        {FREELANCING_PROJECTS.map((project, index) => (
          <tr key={index} class="flex flex-col sm:table-row">
            <td className="w-full sm:w-1/8 pr-4 align-top border border-black p-4">
              <img
                src={project.image.src}
                alt={project.name}
                className="mx-auto"
              />
            </td>
            <td className="w-full sm:w-1/2 pr-4 align-top border border-black p-4">
              <strong className="underline">
                {index + 1}. {project.name}
                {project.link && (
                  <a href={project.link} className="text-blue-600">
                    {" "}
                    - visit website
                  </a>
                )}
              </strong>
              <ul className="list-disc pl-6">
                {project.role && (
                  <li>
                    <b>Role</b>: {project.role}
                  </li>
                )}
                {project.description && (
                  <li>
                    <b>Description</b>: {project.description}
                  </li>
                )}
                {project.technologies && (
                  <li>
                    <b>Technologies</b>:
                    <span className="text-gray-600">
                      {" "}
                      {project.technologies}
                    </span>
                  </li>
                )}
                {project.responsibilities && (
                  <li>
                    <b>Responsibilities</b>: {project.responsibilities}
                  </li>
                )}
              </ul>
            </td>
          </tr>
        ))}
        <tr>
          <th
            colSpan={2}
            className="w-1/8 pr-4 align-top border border-black p-4"
          >
            Your project here! <br />
            I'll be happy to help you with your next project. <br />
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default FreelancingProjects;
