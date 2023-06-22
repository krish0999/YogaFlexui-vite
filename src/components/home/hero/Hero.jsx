import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Yogaflex Your Next Gym "
            subtitle="YOGAFLEX TO
SHAPE YOUR BODY"
          />

          <form className="flex">
            <div className="box">
              <span>State</span>
              <input
                type="text"
                placeholder="state name"
                style={{ width: "80%" }}
              />
            </div>

            <div className="box">
              <span>City/Street</span>
              <input
                type="text"
                placeholder="Location"
                style={{ width: "50%" }}
              />
            </div>

            <button className="btn1">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
