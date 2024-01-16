/* eslint-disable jsx-a11y/no-distracting-elements */
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
              <h1 className="text-center text-uppercase">About Me</h1>I have Proficiency
              in HTML & CSS which are the building blocks of web development, I
              have Knowledge of responsive web development principles, which
              ensure that websites are optimized for different devices and
              screen sizes and I have Familiarity with front-end frameworks such
              as Bootstrap, which can speed up the development process,
              Moreover, I have experience in using React.js, a popular
              JavaScript library for building dynamic and interactive user
              interfaces. These skills allow me to create modern, responsive,
              and feature-rich web applications, making me a well-rounded
              front-endweb developer. My tech stack HTML, CSS, BOOTSTRAP,
              TAILWIND, JAVASCRIPT, REACT.JS,REACT WITH TYPESCRIPT, JQUERY,
              WORDPRESS (ELEMENTOR, SALIANT PAGE BUILDER)
            </p>
            <marquee><div
              className="wrp p-3 d-flex align-items-center justify-content-center mt-5"
            >
              <div className="">
                <h3 className="contact-h">Contact Info:</h3>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="mx-4 ">0319-3865337</h4>
                <h4 className="contact-h mx-4">Mail To: </h4>
                <h4>
                  <a href="mailto:shariikhan925@gmail.com">
                    shariikhan925@gmail.com
                  </a>
                </h4>
              </div>
            </div></marquee>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
