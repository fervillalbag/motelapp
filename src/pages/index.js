
import { Link } from "gatsby"
import React from "react"
import Header from '../components/Header'
// import Calculator from "../components/Calculator"
// import Categories from "../components/Categories"
import Layout from "../components/Layout"
import Rooms from "../components/Rooms"
import { useNosotros } from "../hooks/useNosotros"

export default function IndexPage() {

  const data = useNosotros()
  const { description } = data

  return (
    <Layout>
      <div className="content">
        <Header />
        <section className="main-principal">
          <h1 className="main-principal__title">
            Nombre de la Empresa
          </h1>
          <p className="main-principal__description">{description}</p>
          <Link to="/nosotros" className="main-principal__link">
            Más acerca de nosotros
          </Link>
          {/* <Calculator /> */}
          {/* <Categories /> */}
          <h2 className="main-principal__subtitle">Habitaciones</h2>
          <Rooms />
        </section>
      </div>
    </Layout>
  )
}