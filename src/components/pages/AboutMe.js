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
            <p className="article p-md-5 p-3">
              <h1 className="text-center text-uppercase">About Me</h1>"I possess a strong command of HTML and CSS, serving as the cornerstone of web development. My expertise extends to responsive web development principles, ensuring seamless optimization across diverse devices and screen sizes. Additionally, I am adept at leveraging front-end frameworks such as Bootstrap and Tailwind to expedite the development process effectively.

Furthermore, my proficiency includes utilizing JavaScript and React.js, a widely acclaimed JavaScript library, to craft dynamic and engaging user interfaces. By incorporating React with TypeScript, I enhance code robustness and maintainability, thus elevating the quality of web applications.

My comprehensive tech stack encompasses HTML, CSS, Bootstrap, Tailwind, JavaScript, React.js, React with TypeScript, jQuery, and WordPress, particularly leveraging tools like Elementor and Salient Page Builder. With this diverse skill set, I excel in creating modern, responsive, and feature-rich web applications, positioning myself as a versatile and accomplished front-end web developer."
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
