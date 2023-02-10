import React from "react";
import styleContainer from "../common/styles/Container.module.css";
import style from "./Header.module.css";
import { Navigation } from "./navigation/Navigation";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={`${styleContainer.container} ${style.headerContainer}`}>
        <Navigation />
      </div>
    </div>
  );
};
