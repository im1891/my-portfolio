import React from "react";
import style from "./Project.module.css";

type ProjectPropsType = {
  projectTitle: string;
  description: string;
};

export const Project: React.FC<ProjectPropsType> = ({
  projectTitle,
  description,
}) => {
  return (
    <div className={style.project}>
      <div className={style.imageContainer}>
        <a href={"#"} className={style.viewButton}>
          View
        </a>
      </div>

      <h3>{projectTitle}</h3>
      <span>{description}</span>
    </div>
  );
};
