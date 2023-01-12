import * as React from "react"

import Seo from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

import "../components/styles.css"

const Covers = () => (
  <div>
    <Header />
    <div className="two-column-page">
      <div>
        my first cover was created during sophomore year of HS, after being
        inspired by rainbowpig2 and many other cover musicians on youtube. i
        only started *really* making covers during second semester senior year
        of high school though, when i was bored out of my mind and needed a
        creative outlet. Here is my{" "}
        <a href="https://www.youtube.com/marniescastle" target="_blank">
          channel
        </a>{" "}
        (named marniescastle, if you don't know the reference, watch more ghibli
        movies!)
        <br />
        <br />
        most of my covers are arranged by ear and produced from scratch!
        <div className="mobile-info">
          <i>swipe to the right for videos!</i>
        </div>
      </div>
      <div className="column-video">
        <iframe
          src="https://www.youtube.com/embed/IU8ibth9bV4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/k4lBq5GTSPk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/qkVhUDpu9mo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/u0jh4KKRdMY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/er3d-JHjiJs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <Footer />
  </div>
)

export const Head = () => <Seo title="Claire Cheng | Covers" />

export default Covers
