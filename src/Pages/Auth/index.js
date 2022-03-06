import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import './auth.css'
import Plane from '../../assets/img/plane.png'


const Auth = () => {
  return (
    <Fragment>
        <main className="container-fluid row col-xl-8 g-0 d-flex auth-container">
            <section className='left-section d-xl-block d-md-block d-lg-block d-none'>
                <img src={Plane} alt="" className='display-app'/>
            </section>
            <Outlet/>
        </main>
    </Fragment>
  )
}

export default Auth