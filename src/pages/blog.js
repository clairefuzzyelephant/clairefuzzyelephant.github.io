import * as React from "react"

import Seo from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

import "../components/styles.css"

const Blog = () => (
  <div>
    <Header />
    <div className="home-content">
      <div>
        I have made too many blogs throughout the years that have been
        abandoned, but here are some that are either new or have miraculously
        survived.
        <br /> <br />
        <a href="https://clarityeats.com" target="_blank">
          clarityeats - a food & travel blog
        </a>
        <br />
        <br />
        <a href="https://shiftingtempo.tumblr.com" target="_blank">
          cache - an emo writing blog
        </a>
        <br />
        <br />
        <a
          href="https://inspirationsbymoonlight.wordpress.com/"
          target="_blank"
        >
          inspirations by moonlight - a collection of thoughts
        </a>
      </div>
    </div>
    <Footer />
  </div>
)

export const Head = () => <Seo title="Claire Cheng | Blog" />

export default Blog
