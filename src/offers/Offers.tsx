import React from "react";
import style from "./Offers.module.css";
import styleContainer from "../common/styles/Container.module.css";

export const Offers = () => {
  return (
    <div className={style.offersBlock}>
      <div className={`${styleContainer.container} ${style.offersContainer}`}>
        <h2>Looking for remote job offers</h2>
        <button>Offer me</button>
      </div>
    </div>
  );
};
