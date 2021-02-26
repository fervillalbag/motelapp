
exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
		query {
			allDatoCmsHabitacion {
				nodes {
					slug
				}
			}
		}
  `)

  const resultado2 = await graphql(`
    query {
			allDatoCmsCategory {
				nodes {
					slug
				}
			}
		}
  `)

  if (resultado.errors) {
    reporter.panic('No hubo resultados', resultado.errors)
  }

  if (resultado2.errors) {
    reporter.panic('No hubo resultados', resultado.errors)
  }

  // si hay paginas, crear los archivos
  const habitaciones = resultado.data.allDatoCmsHabitacion.nodes
  const categorias = resultado2.data.allDatoCmsCategory.nodes

  habitaciones.forEach(habitacion => {
    actions.createPage({
      path: habitacion.slug,
      component: require.resolve('./src/components/RoomPage.js'),
      context: {
        slug: habitacion.slug
      }
    })
  })

  categorias.forEach(categoria => {
    actions.createPage({
      path: categoria.slug,
      component: require.resolve('./src/components/CategoryPage.js'),
      context: {
        slug: categoria.slug
      }
    })
  })
}

