
import React from 'react'
import { Link } from 'gatsby'

export default function Categories() {
  return (
    <section className="categories">
      <Link to="/populares" activeClassName="active" className="categories__link">
        Populares
      </Link>
      <Link to="/nuevos" activeClassName="active" className="categories__link">
        Nuevos
      </Link>
      <Link to="/mejores-precios" activeClassName="active" className="categories__link">
        Mejores Precios
      </Link>
    </section>
  )
}
