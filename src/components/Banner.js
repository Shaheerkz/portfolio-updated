import React from "react";
import shaheerImg from "../components/Layer-1.png";
import Typewriter from "typewriter-effect";
function Banner() {
  return (
    <div className="row align-items-center">
      <div className="col-md-8">
        <div className="text-area">
          <h1>I am Muhammad Shaheer</h1>
          <h2 className="font">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "UI Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
      </div>
      <div className="col-md-4 text-center">
        <img className="my-img" src={shaheerImg} />
      </div>
    </div>
  );
}

export default Banner;
