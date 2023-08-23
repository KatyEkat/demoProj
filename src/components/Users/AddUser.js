import React from "react";
import Card from "../UI/Card";
import S from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={S.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username"> Username</label>
        <input id="username" type="text"></input>

        <label htmlFor="age"> Age (Years)</label>
        <input id="age" type="number"></input>

        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
