import * as React from "react"

import Seo from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

import "../components/styles.css"

const IndexPage = () => (
  <div>
    <Header />
    <div className="home-content">
      hi! my name is claire and i'm an mit new grad with S.B. degrees in
      computer science (6-3) and music (21M-1). i'm also big fan of studio
      ghibli, the marvel cinematic universe, and finding cool new places to eat.
      <br />
      <br />
      feel free to contact me via any of the links below!
    </div>
    <Footer />
  </div>
)

export const Head = () => <Seo title="Claire Cheng | Home" />

export default IndexPage
