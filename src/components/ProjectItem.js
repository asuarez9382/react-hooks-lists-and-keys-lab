import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  const technologyCard = technologies.map(technology => <span>{technology}</span>)

  return (

    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyCard}
      </div>
    </div>
  );
}

export default ProjectItem;
