import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Particle from "../../Particle";
import Header from "../Header";
import Slider from "react-slick";
import ProjectCards from "./ProjectCards";
import MyImg from "../KC-autoconnect 6.png";
import Brawds from "../brawds.jpg";
import Memo from "../memorable.jpg";
import Luis from "../Luis-Olivares.png";
import Future from "../Dashboard.png";
function Projects() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ProjectCard = [
    {
      id: 1,
      img: MyImg,
      title: "KC-AutoConnect",
      link: "https://kcautoconnect.onlinedevelopmentserver.com",
      button: "View Project",
    },
    {
      id: 2,
      img: Brawds,
      title: "Brawds",
      link: "https://shaheerkz.github.io/BRAWDS",
      button: "View Project",
    },
    {
      id: 3,
      img: Memo,
      title: "Memorable-world",
      link: "https://onlinedevelopmentserver.com/memorable-world-new",
      button: "View Project",
    },
    {
      id: 4,
      img: Luis,
      title: "Luis Olivares",
      link: "https://onlinedevserver.com/luis-v2.onlinedevserver.com/",
      button: "View Project",
    },
    {
      id: 5,
      img: Future,
      title: "Furure Now Network",
      link: "https://onlinedevelopmentserver.com/future-now",
      button: "View Project",
    },
  ];
  return (
    <>
      <Particle />
      <div className="container">
        <Header />
        <div className="row mt-5">
          <Slider {...settings}>
            {ProjectCard.map((card) => (
              <ProjectCards
                img={card.img}
                title={card.title}
                content={card.content}
                link={card.link}
                button={card.button}
                key={card.id}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Projects;
