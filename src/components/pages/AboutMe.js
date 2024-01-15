import React from "react";
import Header from "../../components/Header";
import Particle from "../../Particle";
function AboutMe() {
  return (
    <>
    <Particle />
     <div className="container">
        <Header />
        <div className="row">
            <div className="col-12 my-5">
            <p className="article p-5">
                <h1 className="text-center">About My Self</h1>
                I have Proficiency in HTML & CSS which are the building blocks
                of web development, I have Knowledge of responsive web
                development principles, which ensure that websites are optimized
                for different devices and screen sizes and I have Familiarity
                with front-end frameworks such as Bootstrap, which can speed up
                the development process, Moreover, I have experience in using
                React.js, a popular JavaScript library for building dynamic and
                interactive user interfaces. These skills allow me to create
                modern, responsive, and feature-rich web applications, making me
                a well-rounded front-endweb developer. My tech stack HTML, CSS,
                BOOTSTRAP, TAILWIND, JAVASCRIPT, REACT.JS,REACT WITH TYPESCRIPT,
                JQUERY, WORDPRESS (ELEMENTOR, SALIANT PAGE BUILDER)
              </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
