
import React from 'react'
import { Link } from 'gatsby'

export default function Navigation({ isMenuActive, handleMenuClick }) {

  return (
    <nav className={!isMenuActive ? 'navigation' : 'navigation active'}>
      <div className="navigation__content">
        <Link
          to="/"
          className="navigation__link"
          onClick={handleMenuClick}
        >
          <span className="navigation__icon">
            <i className="fas fa-home"></i>
          </span>
          <span className="navigation__name">
            Home
          </span>
        </Link>
        <Link
          to="/"
          className="navigation__link"
        >
          <span className="navigation__icon">
            <i className="fas fa-info"></i>
          </span>
          <span className="navigation__name">
            Nosotros
          </span>
        </Link>
        <Link to="/" className="navigation__link">
          <span className="navigation__icon">
            <i className="fas fa-at"></i>
          </span>
          <span className="navigation__name">
            Contacto
          </span>
        </Link>

        <button
          type="button"
          className="navigation-bars"
          onClick={handleMenuClick}
        >
          <span className="menu__icon">
            <i className="fas fa-caret-left"></i>
          </span>
          <span className="menu__text">
            Cerrar
          </span>
        </button>

      </div>
    </nav>
  )
}
