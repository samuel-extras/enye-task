import React from "react";
import Card from "./card";

const CardList = (props) => (
  <div  className="card-list" style={{marginBottom: '40px'}} >
    {props.users.map((user) => (
      <Card key={user.CreditCardNumber} user={user} />
    ))}
  </div>
);
export default CardList;
