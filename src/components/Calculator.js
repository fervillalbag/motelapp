
import React, { useState } from 'react'

export default function Calculator() {

  const [formValue, setFormValue] = useState({
    service: '',
    time: ''
  })

  const { service, time } = formValue

  const [result, setResult] = useState(0)

  const handleInputChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formValue)

    switch (true) {
      case service === 'basico' && time === '1hora':
        return setResult('60.000')

      case service === 'premium' && time === '1hora':
        return setResult('120.000')

      case service === 'gold' && time === '1hora':
        return setResult('220.000')

      case service === 'basico' && time === 'noche':
        return setResult('120.000')

      case service === 'premium' && time === 'noche':
        return setResult('200.000')

      case service === 'gold' && time === 'noche':
        return setResult('370.000')

      default:
        return setResult(0)
    }
  }

  return (
    <form
      className="calculator"
      onSubmit={handleSubmit}
    >
      <div className="calculator__group">
        <select
          name="service"
          className="calculator__input"
          value={service}
          onChange={handleInputChange}
        >
          <option value="">-- Seleccione --</option>
          <option value="basico">Básico</option>
          <option value="premium">Premium</option>
          <option value="gold">Gold</option>
        </select>
      </div>
      <div className="calculator__group">
        <select
          name="time"
          className="calculator__input"
          value={time}
          onChange={handleInputChange}
        >
          <option value="">-- Seleccione --</option>
          <option value="1hora">1 ½ hora </option>
          <option value="noche">Noche</option>
        </select>
      </div>
      <div className="calculator__group">
        <button
          type="submit"
          className="calculator__button"
          aria-label="Botón de Buscar"
        >
          <span className="calculator__icon">
            <i className="fas fa-search"></i>
          </span>
        </button>
      </div>
      <div className="calculator__group">
        <div className="calculator__value">
          {`Gs. ${result}`}
        </div>
      </div>
      <div className="calculator__group calculator__group--trash">
        <button
          type="button"
          className="calculator__button"
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
