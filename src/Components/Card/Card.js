import React from "react";
import "./Card.css";

const Card = (props) => {
  const { name, email, phone, company, website, address, username } = props;

  return (
    <div className="card-wrapper">
      <div className="row">
        <div className="col-auto">
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
            alt="avatar-display"
            height="200px"
            width="200px"
          />
        </div>
        <div className="col col-xs-12">
          <h2>{name}</h2>
          <div className="email-wrapper">
            <strong>Email: </strong>
            <span>{email}</span>
          </div>
          <div className="email-wrapper">
            <strong>Phone: </strong>
            <span>{phone}</span>
          </div>
          <div className="email-wrapper">
            <strong>Company: </strong>
            <span>{company}</span>
          </div>
          <div className="email-wrapper">
            <strong>Website: </strong>
            <span>{website}</span>
          </div>
          <div className="email-wrapper">
            <strong>Address: </strong>
            <span>{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
