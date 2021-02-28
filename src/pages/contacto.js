
import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import ButtonBack from '../components/ButtonBack'

export default function Contacto() {
  return (
    <Layout>
      <div className="contact">
        <ButtonBack />
        <div className="contact__grid">
          <form className="contact__form">
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
              />
            </div>
            <div className="contact__group">
              <input
                type="text"
                className="contact__input"
                placeholder="Correo"
              />
            </div>
            <div className="contact__group">
              <textarea
                className="contact__input contact__input--textarea"
                placeholder="Mensaje"
              ></textarea>
            </div>
            <button
              type="submit"
              className="contact__submit"
            >
              Enviar
            </button>
          </form>
          <div className="contact__maps">
            <div className="contact__mapouter">
              <div className="contact__gmap_canvas">
                <iframe width='100%' height='100vh' id="gmap_canvas" src="https://maps.google.com/maps?q=Motel%20Asunci%C3%B3n&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
                <style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;height:100vh;width:'100%';}" }} /><style dangerouslySetInnerHTML={{ __html: ".gmap_canvas {overflow:hidden;background:none!important;height:100vh;width:'100%';}" }} /></div></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
