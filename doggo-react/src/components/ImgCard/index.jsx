import { Button } from "../Button";

export const ImgCard = (path, hasBtn = false) => {
  return (
    <div className="card">
      <figure className="card__img">
        <img src={path} alt="" />
      </figure>
      {hasBtn ? <Button styles="like">❤️</Button> : ""}
    </div>
  );
};
