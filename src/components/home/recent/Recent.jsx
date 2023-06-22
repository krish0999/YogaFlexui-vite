import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent open  GYM' subtitle='Thinking about overseas adventure travel? Have you put any thought into the best places to go when it comes to overseas adventure travel?' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
