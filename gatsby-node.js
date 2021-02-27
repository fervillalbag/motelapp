
exports.createPages = async ({ actions, graphql, reporter }) => {
  const habitacionesData = await graphql(`
		query {
			allDatoCmsHabitacion {
				nodes {
					slug
				}
			}
		}
  `)

  const categoriasData = await graphql(`
    query {
			allDatoCmsCategory {
				nodes {
					slug
				}
			}
		}
  `)

  if (habitacionesData.errors) {
    reporter.panic('No hubo resultados', habitacionesData.errors)
  }

  if (categoriasData.errors) {
    reporter.panic('No hubo resultados', categoriasData.errors)
  }

  // si hay paginas, crear los archivos
  const habitaciones = habitacionesData.data.allDatoCmsHabitacion.nodes
  const categorias = categoriasData.data.allDatoCmsCategory.nodes

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

