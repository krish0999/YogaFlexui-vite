import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../../components/images/about.webp"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='How Yogaflex can change your life' subtitle='As you pour the first glass of your favorite Chianti or Chardonnay and settle into an intimate Friday evening.' />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./about-img.png.webp' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
