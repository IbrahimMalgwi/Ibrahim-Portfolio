import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.jpg"
import IMG6 from "../../assets/portfolio6.jpg"

const data = [
  {
	id: 1,
	image: IMG1,
	title: "Web Scrapping Appliation",
	github: "https://github.com/IbrahimMalgwi/pricewise",
	demo: "https://pricewise-roan.vercel.app/"
},
{
	id: 2,
	image: IMG2,
	title: "Motivation Generator Using AI",
	github: "https://github.com/IbrahimMalgwi/Motivation-Generator-Ai",
	demo: "https://motivation-generator-ai.vercel.app/"
},
{
	id: 3,
	image: IMG3,
	title: "Oma Educatioal",
	github: "https://github.com/IbrahimMalgwi",
	demo: "https://omaeducationalfoundation.org/"
},
{
	id: 4,
	image: IMG4,
	title: "Purple background",
	github: "https://github.com/IbrahimMalgwi",
	demo: "https://github.com/IbrahimMalgwi"
},
{
	id: 5,
	image: IMG5,
	title: "Purple background",
	github: "https://github.com/IbrahimMalgwi",
	demo: "https://github.com/IbrahimMalgwi"
},
{
	id: 6,
	image: IMG6,
	title: "Purple background",
	github: "https://github.com/IbrahimMalgwi",
	demo: "https://github.com/IbrahimMalgwi"
}
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer" > GitHub </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer"> Live Demo </a>
              </div>
            </article>
          );
        } )}        
      </div>
    </section>
  );
}

export default Portfolio