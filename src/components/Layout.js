
import React, { Fragment, useState } from 'react'
import Header from './Header'
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
            <i className="fas fa-caret-right"></i>
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
          <Header />
          <section className="main-principal">
            {children}
          </section>
        </div>
      </main>

    </Fragment>
  )
}
