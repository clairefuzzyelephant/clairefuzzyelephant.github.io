import * as React from "react"

import Seo from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

import "../components/styles.css"

const Dance = () => (
  <div>
    <Header />
    <div className="two-column-page">
      <div>
        in college i started getting into <b>dance</b>. my dancing skills are
        still very much a wip, but i love taking hip-hop, contemp, and house
        classes for fun.
        <br />
        <br />
        here are a couple cover projects i did in college, as part of the MIT
        Asian Dance Team. I was a choreographer for four semesters, and I also
        danced for MIT MissBehavior.
        <div className="mobile-info">
          <i>swipe to the right for videos!</i>
        </div>
      </div>
      <div className="column-video">
        <iframe
          src="https://www.youtube.com/embed/PfJY4lVv9rE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/mwwQCi91nsU"
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

export const Head = () => <Seo title="Claire Cheng | Dance" />

export default Dance
