
import React from 'react'

export default function Calculator() {
  return (
    <form className="calculator">
      <div className="calculator__group">
        <select className="calculator__input">
          <option value="">-- Seleccione --</option>
          <option value="">Básico</option>
          <option value="">Premium</option>
          <option value="">Gold</option>
        </select>
      </div>
      <div className="calculator__group">
        <select className="calculator__input">
          <option value="">-- Seleccione --</option>
          <option value="1hora">1 ½ hora </option>
          <option value="noche">Noche</option>
        </select>
      </div>
      <div className="calculator__group">
        <button
          type="button"
          className="calculator__button"
          role="button"
          aria-label="Botón de Buscar"
        >
          <span className="calculator__icon">
            <i className="fas fa-search"></i>
          </span>
        </button>
      </div>
      <div className="calculator__group">
        <div className="calculator__value">
          Gs. 150.000
        </div>
      </div>
      <div className="calculator__group calculator__group--trash">
        <button
          type="button"
          className="calculator__button"
          role="button"
          aria-label="Botón de Borrar"
        >
          <span className="calculator__icon">
            <i className="fas fa-trash"></i>
          </span>
        </button>
      </div>
    </form>
  )
}
