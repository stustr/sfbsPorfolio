import React from "react";
import Project from "./Project";
export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col align-middle justify-center"
      data-aos="zoom-in"
      data-aos-anchor="#trigger-portfolio"
      data-aos-duration="1500"
    >
      <h3 className="text-xl text-sky-500 pt-4">Portfolio</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
        repellendus, magni debitis alias ipsum voluptate mollitia praesentium
        perspiciatis tenetur eaque accusamus odio sunt nesciunt quos veritatis
        numquam quibusdam natus pariatur!
      </p>
      <div className="mt-5 flex justify-center items-center">
        <Project />
        <div id="trigger-portfolio"></div>
      </div>
    </section>
  );
}
