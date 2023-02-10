import React from "react";
import styleContainer from "../common/styles/Container.module.css";
import style from "./Skills.module.css";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2>My skills</h2>
        <div className={style.skills}>
          <Skill
            title={"JS"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, nulla!"
            }
          />
          <Skill
            title={"CSS"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, sunt!"
            }
          />
          <Skill
            title={"React"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, maiores."
            }
          />
        </div>
      </div>
    </div>
  );
};
