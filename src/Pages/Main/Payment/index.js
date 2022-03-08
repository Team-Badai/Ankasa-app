import React from 'react'
import Navbar from '../../../Components/module/Navbar'
import Footer from '../../../Components/module/Footer'
import Button from '../../../Components/Button'


const Payment = () => {
    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="d-flex bg-light">
                <div className='container bg-white my-4 rounded p-3 mx-4'>
                    <p className='fw-bold fs-5'>Review Booking</p>
                    <p className='fw-bold text-secondary mt-4'>Your Trip</p>
                    <p className='mb-0'>Monday, 20 July ‘20 - 12:33</p>
                    <p className='fw-bold'>IDN ---&gt; JPN</p>
                    <p className='fw-bold text-secondary mt-4'>My Card</p>
                    <div className='p-3 border rounded bg-primary text-white shadow w-50'>
                        <p className='mb-0 fw-bold'>6816392372132</p>
                        <div className='d-flex justify-content-between'>
                            <span className=''>X card</span>
                            <span className=''>Rp500000</span>
                        </div>
                    </div>
                </div>
                <div className='container bg-white my-4 rounded p-3 me-4 w-50'>
                    <p className='fw-bold fs-5'>Price Details</p>
                    <div className='d-flex justify-content-between'>
                        <p className='fw-bold text-secondary'>Flight:</p>
                        <p className='fw-bold'>Rp500000</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='fw-bold text-secondary'>Baggage:</p>
                        <p className='fw-bold text-success'>FREE</p>
                    </div>
                    <div className='border-bottom'></div>
                    <div className='d-flex justify-content-between mt-3'>
                        <p className='fw-bold'>Total:</p>
                        <p className='fw-bold'>Rp500000</p>
                    </div>
                    <Button className='btn-sign bg-primary rounded-3 p-2 text-white shadow mt-3'>
                        Pay with card
                    </Button>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Payment