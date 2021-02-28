
import React, { useState } from 'react'
import { Link } from 'gatsby'

export default function FormContact() {

  const [formValues, SetformValues] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const { nombre, email, mensaje } = formValues

  const handleChange = ({ target }) => {
    SetformValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <form
      className="contact__form"
      onSubmit={handleSubmit}
    >
      <h3 className="contact__title">¡Contactá con nosotros!</h3>
      <div className="contact__social">
        <Link to="/" className="contact__link">
          <span className="contact__icon">
            <i className="fab fa-facebook-square"></i>
          </span>
        </Link>
        <Link to="/" className="contact__link">
          <span className="contact__icon">
            <i className="fab fa-twitter-square"></i>
          </span>
        </Link>
        <Link to="/" className="contact__link">
          <span className="contact__icon">
            <i className="fab fa-instagram-square"></i>
          </span>
        </Link>
        <Link to="/" className="contact__link">
          <span className="contact__icon">
            <i className="fab fa-whatsapp-square"></i>
          </span>
        </Link>
        <Link to="/" className="contact__link">
          <span className="contact__icon">
            <i className="fab fa-telegram"></i>
          </span>
        </Link>
      </div>
      <div className="contact__group">
        <input
          type="text"
          className="contact__input"
          placeholder="Nombre"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
      </div>
      <div className="contact__group">
        <input
          type="text"
          className="contact__input"
          placeholder="Correo"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="contact__group">
        <textarea
          className="contact__input contact__input--textarea"
          placeholder="Mensaje"
          name="mensaje"
          value={mensaje}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="contact__submit"
      >
        Enviar
            </button>
    </form>
  )
}
