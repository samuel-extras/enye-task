import React from "react";


const Card = (props) => {
  return (
    <div className="card">
      {
        
        <div className="face front">
        <img alt="" src="/chip.png" width="65px"/>
          <h3 className="name">{props.user.FirstName}&nbsp;{props.user.LastName}</h3>
          <h3 className="gender">{props.user.Gender}</h3>
          <h3 className="username">
            <i className="fas fa-user"></i> {props.user.UserName}
          </h3>
          <h5 className="email">
            <i className="fas fa-envelope "></i>&nbsp;{props.user.Email}
          </h5>
          <h5 className="phone">
            <i className="fas fa-phone "></i>&nbsp;{props.user.PhoneNumber}
          </h5>
          <h3 className="card-no">{props.user.CreditCardNumber}</h3>
          <h4 className="card-name">
            <i className="fas fa-credit-card"></i>&nbsp;{props.user.CreditCardType}
          </h4>
          <h4 className="payment-method">
            <i className="fas fa-hand-holding-usd"></i>&nbsp;{props.user.PaymentMethod}
          </h4>
          <h5 className="location">
            <i className="fas fa-map-marker-alt"></i> &nbsp;
            <span>
              Latitude:&nbsp; <span>{props.user.Latitude}</span> &nbs; &nbsp;Longitude:&nbsp;{" "}
              <span>{props.user.Longitude}</span>
            </span>
          </h5>
        </div>
      }
      {
        <div className="face back">
          <div className="blackbar"></div>
          <h5 className="domain">
            <i className="fas fa-globe"></i> &nbsp;{props.user.DomainName}
          </h5>

          <h5 className="url">
            <i className="fas fa-paper-plane"></i> &nbsp;{props.user.URL}
          </h5>
          <h5 className="mac">
            <i className="fas fa-laptop-house">&nbsp;</i>
            {props.user.MacAddress}{" "}
          </h5>
          <h5 className="last-login">
            <i className="fas fa-user-clock"></i>&nbsp;{props.user.LastLogin}
          </h5>
        </div> 
          
      }
     
    </div>
  );
};

  export default Card;
