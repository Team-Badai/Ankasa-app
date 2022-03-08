import React from 'react'
import Navbar from '../../../Components/module/Navbar'
import Footer from '../../../Components/module/Footer'
import garuda from '.././../../assets/img/garuda-indonesia-logo-BD82882F07-seeklogo 3.svg'
import plane from '.././../../assets/img/plane.svg'
import Barcode from 'react-barcode'


const BookingDetail = () => {

    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill bg-primary">
                <p className='fs-4 fw-bold p-5 d-md-none text-white'>Booking Pass</p>
                <div class="container booking-pass bg-white rounded my-5 d-none d-md-block">
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
                        <div className='barcode'>
                            <Barcode value='8820932489473'></Barcode>
                        </div>
                    </div>
                </div>
                {/* Responsive */}
                <div class="d-flex d-md-none flex-column justify-content-between shadow-sm rounded mb-5 mx-5 bg-white">
                    <img className='mt-4' src={garuda} alt="" height='60' />
                    <div className='d-flex justify-content-evenly mt-4'>
                        <p className='fs-2 fw-bold'>IDN</p>
                        <img className='mt-2' src={plane} alt="" height='20' />
                        <p className='fs-2 fw-bold'>JPN</p>
                    </div>
                    <div className='container bg-success rounded-3 text-white p-2 w-50 text-center'>E-ticket Issued</div>
                    <div className='board2 mt-4'></div>
                    <div className='p-5 row ms-1'>
                        <div class="col lh-1 mb-5">
                            <p className='text-muted'><small>Passenger</small></p>
                            <span>Mike</span>
                        </div>
                        <div class="col lh-1 mb-5">
                            <p className='text-muted'><small>Class</small></p>
                            <span>Mike</span>
                        </div>

                        <div class="w-100"></div>

                        <div class="col lh-1 mb-5">
                            <p className='text-muted'><small>Departure</small></p>
                            <span>Mike</span>
                        </div>
                        <div class="col lh-1 mb-5">
                            <p className='text-muted'><small>Time</small></p>
                            <span>Mike</span>
                        </div>

                        <div class="w-100"></div>

                        <div class="col lh-1 mb-5">
                            <p className='text-muted'><small>Code</small></p>
                            <span>Mike</span>
                        </div>
                        <div class="col lh-1 mb-5">
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
                    <div className='board2 mt-1'></div>
                    <div className='barcodee ms-4 my-4'>
                        <Barcode value='8820 9324 8947'></Barcode>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default BookingDetail