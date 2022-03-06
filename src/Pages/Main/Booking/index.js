import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../Components/module/Navbar'
import Footer from '../../../Components/module/Footer'
import Sidebar from '../../../Components/module/Sidebar'
import plane from '.././../../assets/img/plane.svg'

const Booking = () => {
  const navigate = useNavigate()

  return (
    <div className='d-flex flex-column'>
      <Navbar></Navbar>
      <main class="flex-fill bg-light">
        <div class="d-flex mb-5 mx-5">
          <Sidebar></Sidebar>
          <div class="mt-5 d-flex flex-column flex-fill">
            <section class="container bg-white p-4 ms-2 rounded d-md-block">
              <p className='fw-bold text-primary'>M Y <span className='ms-2'>B O O K I N G</span></p>
              <div className='d-flex justify-content-between'>
                <span className='fw-bold fs-5'>My Booking</span>
                <span className='text-primary fw-bold'>Order History</span>
              </div>
            </section>
            <section class="container bg-white p-4 ms-2 rounded mt-4">
              <p class="">Monday, 20 July ‘20 - 12:33</p>
              <div className='d-flex'>
                <p className='fw-bold fs-5'>IDN</p>
                <img className='mx-4 mt-1' src={plane} alt="" height='20' />
                <p className='fw-bold fs-5'>JPN</p>
              </div>
              <p className='text-secondary'>Garuda Indonesia, AB-221</p>
              <div className='border-bottom'></div>
              <div className='d-flex justify-content-between mt-4'>
                <p className='fw-bold text-secondary'>Status</p>
                <div className='bg-warning rounded-3 text-white p-2 mx-5 w-25 text-center d-none d-md-block'>Waiting for payment</div>
                <div className='bg-warning rounded-3 text-white p-2 mx-5 text-center d-md-none'>Waiting for payment</div>
                <p className='text-primary fw-bold cursor flex-fill text-end d-none d-md-block' onClick={() => { navigate('/main/booking-detail') }}>View Details</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Booking