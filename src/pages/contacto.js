
import React from 'react'
import Layout from '../components/Layout'
import ButtonBack from '../components/ButtonBack'
import FormContact from '../components/FormContact'

export default function Contacto() {
  return (
    <Layout>
      <div className="contact">
        <ButtonBack />
        <div className="contact__grid">
          <FormContact />
          <div className="contact__maps">
            <div className="contact__mapouter">
              <div className="contact__gmap_canvas">
                <iframe width='100%' height='100vh' id="gmap_canvas" src="https://maps.google.com/maps?q=Motel%20Asunci%C3%B3n&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
