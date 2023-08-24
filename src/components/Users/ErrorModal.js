import React, { useState } from "react";
import S from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "./Button";

const ErrorModal = (props) => {

  return (
    <div>
        <div className={S.backdrop} onClick={props.onConfirm}/>
      <Card className={S.modal}>
        <header className={S.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={S.content}>
          <p>{props.message}</p>
        </div>
        <footer className={S.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
