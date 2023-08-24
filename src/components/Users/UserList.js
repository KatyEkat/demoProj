import React from "react";
import S from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card  className={S.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
