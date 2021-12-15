import React from "react"
import Navbar from "./components/Sidebar"

export default function about() {
  return (
    <>
      <title>About Me</title>
      <Navbar />

      <section className="main-about-sect">
        <article>
          <h1 className="about-heading">About me~</h1>
          <p>
            Hello there fellow developer, I am Piyush from India, passionate
            about web developement. I mainly focus on frontend, since I am
            currently learning backend.
          </p>
          <p>
            In my blog, I will be posting about my journey in web developement,
            tips & tricks, and anything I find interesting.
          </p>
          <p className="bold">
            Find me on: <a href="https://twitter.com/piyushpanchal_">Twitter</a>{" "}
            and <a href="https://github.com/programmer005">GitHub</a>
          </p>
        </article>
      </section>
    </>
  )
}
