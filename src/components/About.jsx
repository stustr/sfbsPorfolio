import React from "react";
import { Linkedin, Github } from "@icons-pack/react-simple-icons";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex align-middle justify-center flex-col"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
      data-aos-duration="1500"
    >
      <figure className="flex gap-5">
        <img
          src="/src/assets/img/IMG_0234.jpg"
          alt="Photo of Struan"
          className="w-1/3 rounded-l-full "
        />
        <figcaption>
          <h3 className="text-xl text-sky-500 pt-4">About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            quaerat inventore atque earum possimus quas eligendi, laudantium
            veritatis dolorem temporibus vel aspernatur, tempore nostrum illum
            recusandae! Nulla corrupti reiciendis eveniet.
          </p>
          <p className="mt-4 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            molestiae minima cumque atque voluptatum amet magni dolorem animi
            enim alias modi. Harum laborum unde tenetur doloremque iste enim
            voluptatem voluptatibus, laudantium pariatur aliquam temporibus
            explicabo facere reprehenderit soluta ipsa ullam.
          </p>
          <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi repellat alias beatae harum, sunt dolore?</p>
          <div className="flex gap-4 justify-start mt-4">
            <a href="https://www.linkedin.com/in/struan-sturrock-69b285248">
              <Linkedin size={25} />
            </a>
            <a href="https://github.com/stustr">
              <Github size={25} />
            </a>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
