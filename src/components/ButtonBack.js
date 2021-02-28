
import React from 'react'
import { Link } from 'gatsby'

export default function ButtonBack() {
  return (
    <Link to="/" className="button-back">
      <i className="fas fa-caret-left"
        style={{ marginRight: '0.5rem' }}>
      </i>
      Volver
    </Link>
  )
}
