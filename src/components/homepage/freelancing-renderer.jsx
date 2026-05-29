import React, { useEffect, useState } from "react";

import { getSection } from "../../shared/const";
import FreelancingProjects from "./freelancing-projects";

const section = getSection("freelancing");

const FreelancingRenderer = () => {
  const [showFreelancing, setShowFreelancing] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const frParam = urlParams.get("fr");
    setShowFreelancing(frParam === "true");
  }, []);

  if (!showFreelancing) return null;

  return (
    <section className="mt-20 scroll-mt-24" id={section.id}>
      <div className="mb-7 flex items-baseline justify-between gap-4 border-t border-fg/15 pt-3">
        <h2 className="text-sm font-bold uppercase tracking-[0.22em]" data-decode>
          {section.label}
        </h2>
        <span className="text-xs tabular-nums text-muted">{section.num}</span>
      </div>

      <p className="prose-block">
        I started freelancing in 2022, working on web development and more. It
        helped me build a strong foundation in software engineering and client
        communication. My full-time job leaves little time for it, but here are
        the projects I've worked on:
      </p>

      <div className="mt-6">
        <FreelancingProjects />
      </div>
    </section>
  );
};

export default FreelancingRenderer;
