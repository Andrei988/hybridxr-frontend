import React from "react";
import ServiceItem from '../items/ServiceItem'

const titles = ["Sed ut perspiciatis", "Nemo Enim", "Magni Dolores"];

const descriptions = [
  "Excepteur sint occaecat cupidatat non proident, sunt in culpaqui officia",
  "At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis",
  "Quis consequatur saepe eligendi voluptatem consequatur dolorconsequuntur",
];

const icons = [
    'dribbble',
    'world',
    'box'
]

const ServicesPage = (props) => {
  return (
    <div>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <h3>
              Check our <span>Services</span>
            </h3>
            <p>{props.title}</p>
          </div>
          <div className="row">
            <ServiceItem title={titles[0]} description={descriptions[0]} icon={icons[0]}/>
            <ServiceItem title={titles[1]} description={descriptions[1]} icon={icons[1]}/>
            <ServiceItem title={titles[2]} description={descriptions[2]} icon={icons[2]}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
