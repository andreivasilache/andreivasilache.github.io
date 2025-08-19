import React, { useEffect, useState } from "react";

import FreelancingProjects from "./freelancing-projects";

const FreelancingRenderer = () => {
  const [showFreelancing, setShowFreelancing] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const frParam = urlParams.get("fr");
    setShowFreelancing(frParam === "true");
  }, []);

  if (!showFreelancing) return null;
  console.log({ showFreelancing });

  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-4 mt-4">💰 Freelancing</h2>

        <div>
          I started freelancing in 2022, working on various projects that
          involved web development, and more. This experience helped me build a
          strong foundation in software engineering and client communication.
          Unfortunately, there was not much remaining time for freelancing
          because of my full-time job, but below is the list of projects I
          worked on:
          <FreelancingProjects />
        </div>
      </div>
    </>
  );
};

export default FreelancingRenderer;
