
import React from "react"
import Header from '../components/Header'
import Calculator from "../components/Calculator"
import Categories from "../components/Categories"
import Layout from "../components/Layout"
import Rooms from "../components/Rooms"

export default function IndexPage() {

  return (
    <Layout>
      <div className="content">
        <Header />
        <section className="main-principal">
          <h1 className="main-principal__title">
            Nombre de la Empresa
          </h1>
          <Calculator />
          <Categories />
          <Rooms />
        </section>
      </div>
    </Layout>
  )
}