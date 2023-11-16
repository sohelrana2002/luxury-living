import React from "react";
import { NavLink } from "react-router-dom";
import { TiMessages } from "react-icons/ti";
import { BiSolidQuoteSingleLeft, BiSolidQuoteSingleRight } from "react-icons/bi";

import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thankYou__container">
      <div className="thank__you-icon">
        <TiMessages />
      </div>

      <div className="thank__you-description">
        <h1>Thank You for Scheduling a Viewing!</h1>
        <h5>
          We've received your details and are excited to show you our property.
          Our team will reach out soon to confirm your appointment. In the
          meantime, if you have any questions or wish to reschedule, feel free
          to call us at <BiSolidQuoteSingleLeft /> <span>07710 507950</span> <BiSolidQuoteSingleRight />
        </h5>
      </div>

      <NavLink to="/">Go Home</NavLink>
    </div>
  );
};

export default ThankYou;
