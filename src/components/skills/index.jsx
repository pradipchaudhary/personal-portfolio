import React from "react";
import "./style.scss";
import Section from "../shared/section";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Skills = () => {
  return (
    <Section id="skills" background="dark">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={TechIcons} alt="HTML, CSS, SCSS, JS, React, Node_JS" />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            repudiandae recusandae repellendus sunt ad libero laboriosam impedit
            reprehenderit vero itaque iusto aliquam in perferendis iste,
            molestias delectus? Ullam, quisquam, excepturi at dolorem non
            ratione quia atque fugit veniam, consequatur dolorum!
          </p>
          <CallToAction text="Download CV" icon={<AiOutlineCloudDownload />} />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
