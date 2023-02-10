import React from "react";
import style from "./Footer.module.css";
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <h2>Igor Muratov</h2>
        <div className={style.footer}>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="facebookIcon"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="instagramIcon"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536424.png"
              alt="twitterIcon"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3938/3938026.png"
              alt="youtubeIcon"
            />
          </a>
        </div>
        <h3>&#174; All rights reserved</h3>
      </div>
    </div>
  );
};
