import * as React from "react"

import Seo from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

import "../components/styles.css"

const Classical = () => (
  <div>
    <Header />
    <div className="two-column-page">
      <div>
        i started piano when i was 5, and flute when i was 12. i've played
        classical music for most of my life, and a couple of my favorite
        composers are Ravel and Beethoven.
        <br />
        <br />
        on the right you can see my solo recital from college senior spring, a
        cool brahms piece i learned as part of the MIT emerson scholarship
        program, a minuet & trio i composed for a theory class, and three of my
        favorite high school performance (beethoven's waldstein, ravel's une
        barque, and chopin's ballade no. 4).
        <div className="mobile-info">
          <i>swipe to the right for videos!</i>
        </div>
      </div>
      <div className="column-video">
        <iframe
          src="https://www.youtube.com/embed/LBLN3Gxdh1A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/tyMHUEA0jzs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/F07T7ZBZmE0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/QxQQvXrAGhI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/0cuadoBPw7Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/uWM11D0xw5c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <Footer />
  </div>
)

export const Head = () => <Seo title="Claire Cheng | Classical" />

export default Classical
