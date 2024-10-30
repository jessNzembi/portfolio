/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/macbook-with-books.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
import image from "../images/workplace.jpg";

const imageAltText = "Workplace containing a keyboard , headphones, pen, notebook and mouse";

 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Academia",
    description:
      "Developed mobile application that improves the academic experience of Daystar University students. The app has features such as viewing class and exam timetable, fee statement and calculating GPA.",
    url: "https://github.com/IamMuuo/academia",
  },
  {
    title: "Orientation App",
    description:
      "Developed a mobile application to automate activities such as grouping freshmen and efficient communication during Daystar University's orientation.",
    url: "https://github.com/dita-daystaruni/orientation_ap",
  },
  {
    title: "Bike Sharing Demand",
    description:
      "Trained a Machine Learning model using Autogluon to predict bike sharing demands. This project was under Udacity's Introduction to Machine Learning course.",
    url: "https://github.com/jessNzembi/cd0385-project-starter/blob/main/project/README.md",
  },
  {
    title: "Simple Shell",
    description:
      "A console application written in C . It is designed to be a simple clone of a unix system's shell with some minor differences.",
    url: "https://github.com/VGichuki/simple_shell",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
