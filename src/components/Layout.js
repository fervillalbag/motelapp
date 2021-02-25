
import React, { Fragment, useState } from 'react'
import Navigation from './Navigation'
import SeoTemplate from './SeoTemplate'

export default function Layout({ children }) {

  const [isMenuActive, setIsMenuActive] = useState(false)
  const handleMenuClick = () => setIsMenuActive(!isMenuActive)
  const handleShowMenu = () => setIsMenuActive(true)

  return (
    <Fragment>
      <SeoTemplate />

      {!isMenuActive && (
        <button
          type="button"
          className="menu"
          onClick={handleShowMenu}
        >
          <span className="menu__icon">

          </span>
          <span className="menu__text">
            Menu
          </span>
        </button>
      )}

      <main className="main">
        <Navigation
          isMenuActive={isMenuActive}
          handleMenuClick={handleMenuClick}
        />
        <div className="content">
          <header></header>
          <section className="main-principal">
            {children}
          </section>
        </div>
      </main>

    </Fragment>
  )
}
