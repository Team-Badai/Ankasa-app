import React from 'react'
import Navbar from '../../../Components/module/Navbar'
import Footer from '../../../Components/module/Footer'
import garuda from '.././../../assets/img/garuda-indonesia-logo-BD82882F07-seeklogo 3.svg'
import plane from '.././../../assets/img/plane.svg'
import barcode from '.././../../assets/img/Group 922.svg'


const BookingDetail = () => {
    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill bg-primary">
                <div class="container booking-pass bg-white rounded my-5">
                    <div className='d-flex justify-content-between'>
                        <p className='fs-4 fw-bold'>Booking Pass</p>
                        <div class="three-dots"></div>
                    </div>
                    <div class="ticket d-flex justify-content-between shadow-sm rounded mt-3 border">
                        <div className='board d-flex flex-column justify-content-between p-5'>
                            <img src={garuda} alt="" />
                            <p className='fs-3 fw-bold text-center mt-3'>IDN</p>
                            <img src={plane} alt="" height='20' />
                            <p className='fs-3 fw-bold text-center mt-4'>JPN</p>
                        </div>
                        <div className='board p-5 row'>
                            <div class="col lh-1">
                                <p className='text-muted'><small>Passenger</small></p>
                                <span>Mike</span>
                            </div>
                            <div class="col lh-1">
                                <p className='text-muted'><small>Class</small></p>
                                <span>Mike</span>
                            </div>

                            <div class="w-100"></div>

                            <div class="col lh-1">
                                <p className='text-muted'><small>Departure</small></p>
                                <span>Mike</span>
                            </div>
                            <div class="col lh-1">
                                <p className='text-muted'><small>Time</small></p>
                                <span>Mike</span>
                            </div>

                            <div class="w-100"></div>

                            <div class="col lh-1">
                                <p className='text-muted'><small>Code</small></p>
                                <span>Mike</span>
                            </div>
                            <div class="col lh-1">
                                <p className='text-muted'><small>Terminal</small></p>
                                <span>Mike</span>
                            </div>

                            <div class="w-100"></div>

                            <div class="col lh-1">
                                <p className='text-muted'><small>Gate</small></p>
                                <span>Mike</span>
                            </div>
                            <div class="col lh-1">
                                <p className='text-muted'><small>Seat</small></p>
                                <span>Mike</span>
                            </div>
                        </div>
                        <div className='p-5'>
                            <img src={barcode} alt="" />
                        </div>

                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default BookingDetail