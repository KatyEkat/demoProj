import React from "react";
import ReactDOM from "react-dom";
import S from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={S.backdrop} onClick={props.onConfirm} />;
};
const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("background-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}{" "}
    </>
  );
};

export default ErrorModal;
