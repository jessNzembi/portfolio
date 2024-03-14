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
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AirBnB clone 🎉",
    description:
      "Collaboration to create a clone of the popular AirBnB website. This was one of the projects under ALX software Engineering program.",
    url: "https://github.com/jessNzembi/AirBnB_clone_v4",
  },
  {
    title: "Simple Shell",
    description:
      "Collaborated to create a console application which is a simple clone of the bash shell. This was also part of the ALX projects built using C.",
    url: "https://github.com/VGichuki/simple_shell",
  },
  {
    title: "Academia",
    description:
      "Collaborated to create a mobile application to improve the academic experience of Daystar University students.",
    url: "https://github.com/IamMuuo/academia",
  },
  {
    title: "Church Website",
    description:
      "Created a web application for a church using html and CSS for frontend and django for backend.",
    url: "https://github.com/jessNzembi/citamProject",
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
