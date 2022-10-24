import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "WhatsApp Web Clone",
    github: "https://github.com/amans8270/Whatsapp_clone",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:6709106840409575425/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Covid 19 Tracker App",
    github: "https://github.com/amans8270/covid-19-tracker",
    demo: "covid-19-app-17f14.web.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Twitter Clone",
    github: "https://github.com/amans8270/3rd-year-Project",
    demo: "https://google.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Airbnb clone",
    github: "https://github.com/amans8270/airbnb",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:6710256957472747520/",
  },
 
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio </h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
