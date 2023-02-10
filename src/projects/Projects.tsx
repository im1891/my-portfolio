import React from "react";
import style from "./Projects.module.css";
import styleContainer from "../common/styles/Container.module.css";
import { Project } from "./project/Project";

export const Projects = () => {
  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <h2>My projects</h2>
        <div className={style.myProjects}>
          <Project
            projectTitle={"First project"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga libero perferendis sed sit veniam. Corporis in inventore natus nisi numquam porro quo tenetur. A cum ex, possimus recusandae sed tempore?"
            }
          />
          <Project
            projectTitle={"Second project"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga libero perferendis sed sit veniam. Corporis in inventore natus nisi numquam porro quo tenetur. A cum ex, possimus recusandae sed tempore?"
            }
          />
          <Project
            projectTitle={"Third project"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga libero perferendis sed sit veniam. Corporis in inventore natus nisi numquam porro quo tenetur. A cum ex, possimus recusandae sed tempore?"
            }
          />
        </div>
      </div>
    </div>
  );
};
