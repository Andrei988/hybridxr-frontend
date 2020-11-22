import React from "react";
import Icofont from "react-icofont";

const ServiceItem = (props) => {
  return (
    <div data-aos="zoom-in">
      <div className="icon-box">
        <div className="icon">
          <Icofont icon={props.icon} />
        </div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
