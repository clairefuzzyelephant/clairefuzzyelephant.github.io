import * as React from "react"

import Seo from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

import "../components/styles.css"

const Electronic = () => (
  <div>
    <Header />
    <div className="two-column-page">
      <div>
        recently i have started learning how to produce music... look away...
        <div className="mobile-info">
          <i>swipe to the right for videos!</i>
        </div>
      </div>
      <div className="column-video">
        <iframe
          src="https://www.youtube.com/embed/4N6dhx2d6hw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/wScAzuB_JTQ"
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

export const Head = () => <Seo title="Claire Cheng | Music" />

export default Electronic
