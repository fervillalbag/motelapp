
import React from 'react'
import { Helmet } from 'react-helmet'

export default function SeoTemplate() {
  return (
    <Helmet>
      <title>Motel App</title>
      <meta name="description" content="El mejor motel situado en la ciudad de San Lorenzo" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap" rel="stylesheet" />
    </Helmet>
  )
}
