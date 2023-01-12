import React, { useState } from "react"
import { Link } from "gatsby"
import { IoMenuOutline } from "react-icons/io5"

import "./styles.css"

export default function Header() {
  const [showHoverMenu, setShowHoverMenu] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)

  return (
    <div>
      <div className="web-navbar">
        <div onMouseLeave={() => setShowHoverMenu(false)} className="navbar">
          <div className="home-title">claire cheng</div>
          <div className="navbar-items">
            <div>
              <Link
                className={
                  window.location.pathname === "/" ? "highlighted-link" : null
                }
                to="/"
              >
                home
              </Link>
            </div>
            <div>
              {!showHoverMenu ? (
                <span onMouseOver={() => setShowHoverMenu(true)}>
                  <Link
                    className={
                      window.location.href.includes("/covers") |
                      window.location.href.includes("/electronic") |
                      window.location.href.includes("/classical")
                        ? "highlighted-link"
                        : null
                    }
                    to="/classical"
                  >
                    music
                  </Link>
                </span>
              ) : null}

              {showHoverMenu ? (
                <span className="musicMenu">
                  <Link to="/classical">
                    <i>classical</i>
                  </Link>
                  <Link to="/covers">
                    <i>covers</i>
                  </Link>
                  <Link to="/electronic">
                    <i>electronic</i>
                  </Link>
                </span>
              ) : null}
            </div>
            <div>
              <Link
                className={
                  window.location.href.includes("/dance")
                    ? "highlighted-link"
                    : null
                }
                to="/dance"
              >
                dance
              </Link>
            </div>
            <div>
              <Link
                className={
                  window.location.href.includes("/blog")
                    ? "highlighted-link"
                    : null
                }
                to="/blog"
              >
                blog
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-navbar">
        <div className="home-title">claire cheng</div>
        <div className="mobile-menu-button">
          <div onClick={() => setShowMobileNav(true)}>
            <IoMenuOutline />
          </div>
        </div>
        {showMobileNav ? (
          <div className="mobile-menu" onClick={() => setShowMobileNav(false)}>
            <div>
              <Link
                className={
                  window.location.pathname === "/" ? "highlighted-link" : null
                }
                to="/"
              >
                home
              </Link>
            </div>
            <span className="musicMenu">
              <div>
                <Link to="/classical">
                  <i>music: classical</i>
                </Link>
              </div>
              <div>
                <Link to="/covers">
                  <i>music: covers</i>
                </Link>
              </div>
              <div>
                <Link to="/electronic">
                  <i>music: electronic</i>
                </Link>
              </div>
            </span>
            <div>
              <Link
                className={
                  window.location.href.includes("/dance")
                    ? "highlighted-link"
                    : null
                }
                to="/dance"
              >
                dance
              </Link>
            </div>
            <div>
              <Link
                className={
                  window.location.href.includes("/blog")
                    ? "highlighted-link"
                    : null
                }
                to="/blog"
              >
                blog
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
