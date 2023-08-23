import React from "react";
import S from "./Card.module.css";

const Card = (props) => {
  return <div className={`${S.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
