import React from "react";
import style from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <h2>Contacts</h2>
        <form action="" className={style.contactsForm}>
          <input type="text" />
          <input type="text" />
          <textarea name="" id="" rows={6} />
        </form>
        <a href="" className={style.sendButton}>
          Send
        </a>
      </div>
    </div>
  );
};
