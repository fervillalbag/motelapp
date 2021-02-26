
import React from "react"
import Calculator from "../components/Calculator"
import Categories from "../components/Categories"
import Layout from "../components/Layout"
import Rooms from "../components/Rooms"

export default function IndexPage() {

  return (
    <Layout>
      <h1 className="main-principal__title">
        Nombre de la Empresa
      </h1>
      <Calculator />
      <Categories />
      <Rooms />
    </Layout>
  )
}