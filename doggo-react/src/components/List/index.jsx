import React from "react";
import { ImgCard } from "../ImgCard";

export const List = (images, styles = "", hasBtn = "false") => {
  return (
    <section className={`gallery ${styles}`}>
      {Object.keys(images).map((path) => {
        return <ImgCard path={path} hasBtn={hasBtn}></ImgCard>;
      })}
    </section>
  );
};
