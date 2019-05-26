import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "world-class cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, magnam?"
      },
      {
        icon: <FaHiking />,
        title: "beautiful hiking trails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae hic aut suscipit assumenda soluta."
      },
      {
        icon: <FaShuttleVan />,
        title: "complimentary shuttle",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat sit aliquid et, impedit, porro sed veniam reprehenderit rerum maxime aliquam est!"
      },
      {
        icon: <FaBeer />,
        title: "local craft beers",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      }
    ]
  };
  render() {
    return (
      <div>
        <section className="services">
          <Title title="services" />
          <div className="services-center">
            {this.state.services.map((item, idx) => (
              <article key={idx} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
