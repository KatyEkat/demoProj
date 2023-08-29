import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import S from "./AddUser.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = nameInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please, enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please, enter a valid age (>0)",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={S.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>

          <label htmlFor="age"> Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
