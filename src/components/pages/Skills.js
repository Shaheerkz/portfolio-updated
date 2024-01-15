import React from "react";
import Header from "../../components/Header";
import Particle from "../../Particle";
// import HTML from "../HTML.png";
// import Css from "../Css.png";
// import Js from "../Js.png";
// import Jquery from "../jquery.png";
// import ReactImg from "../react.png";
// import Bootstrap from "../bootstrap.png";
// import tailwind from "../tailwind.png";
// import Github from "../github.png";
import Card from "./Card.js";

function Skills() {
  const skillsData = [
    {
      id: 1,
      heading: 'HTML',
      progress: '90%'
    },
    {
      id: 2,
      heading: 'CSS',
      progress: '90%'
    },
    {
      id: 3,
      heading: 'BOOTSTRAP',
      progress: '90%'
    },
    {
      id: 4,
      heading: 'TAILWIND',
      progress: '60%'
    },
    {
      id: 5,
      heading: 'JAVASCRIPT',
      progress: '20%'
    },
    {
      id: 6,
      heading: 'JQUERY',
      progress: '40%'
    },
    {
      id: 7,
      heading: 'REACT',
      progress: '50%'
    },
    {
      id: 8,
      heading: 'GITHUB',
      progress: '40%'
    }
  ]
  return (
    <>
      <Particle />
      <div className="container">
        <Header />
        <div className="row skills">
            {skillsData.map((card) => (<Card heading={card.heading} progress={card.progress} key={card.id} />))}
        </div>
      </div>
    </>
  );
}

export default Skills;
