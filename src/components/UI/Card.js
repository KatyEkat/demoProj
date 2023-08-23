import React from "react";
import S from "./Card.module.css";

const Card = (props) => {
  return <div className={S.card}>{props.children}</div>;
};

export default Card;
