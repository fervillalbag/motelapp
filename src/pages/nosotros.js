
import React from 'react'
import Layout from '../components/Layout'
import { useNosotros } from '../hooks/useNosotros'
import Image from 'gatsby-image'
import ButtonBack from '../components/ButtonBack'

export default function Nosotros() {
  const data = useNosotros()

  const { title, description, blockquote, image } = data

  return (
    <Layout>
      <div className="about">
        <ButtonBack />
        <div className="about__media">
          <Image
            fluid={image.fluid}
            alt={title}
            className="about__image"
          />
        </div>
        <div className="about__info">
          <h3 className="about__title">{title}</h3>
          <p className="about__description">{description}</p>

          <div className="about__services">
            <h3 className="about__subtitle">Nos distingue</h3>
            <div className="about__grid">
              <article className="about__item">
                <span className="about__icon">
                  <i className="fas fa-broom"></i>
                </span>
                <span className="about__name">
                  Higiente
              </span>
                <p className="about__detail">
                  Contamos con 4 niveles de limpieza; Limpieza a profundidad de todas las habitaciones a diario, sistema de luces UV que emulan el poder del sol para desinfectar a fondo, nebulización de ambientes y finalmente el hisopado de superficies con laboratorio móvil.
              </p>
              </article>
              <article className="about__item">
                <span className="about__icon">
                  <i className="fas fa-concierge-bell"></i>
                </span>
                <span className="about__name">
                  Servicio
              </span>
                <p className="about__detail">
                  La creatividad de nuestros cocineros, la calidad de nuestra cocina y la higiene de nuestras instalaciones han establecido una reputación entre nuestros comensales.
              </p>
              </article>
              <article className="about__item">
                <span className="about__icon">
                  <i className="fas fa-award"></i>
                </span>
                <span className="about__name">
                  Calidad
              </span>
                <p className="about__detail">
                  Ofrecemos el lugar perfecto para cada ocasión, brindandole facilidades para sus eventos y garantizando una calidad que lo dejara totalmente satisfecho cada vez que nos visite.
              </p>
              </article>
            </div>
          </div>

          <blockquote className="about__blockquote">
            {blockquote}
          </blockquote>
        </div>
      </div>
    </Layout>
  )
}
