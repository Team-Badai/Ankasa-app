/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../../Components/Input'
import Button from '../../../Components/Button'
import Navbar from '../../../Components/module/Navbar'
import Footer from '../../../Components/module/Footer'
import plane from '.././../../assets/img/plane.svg'
import garuda from '.././../../assets/img/garuda-indonesia-logo-BD82882F07-seeklogo 3.svg'
import dot from '../../../assets/img/Ellipse 48.svg'
import danger from '../../../assets/img/danger.svg'
import check from '../../../assets/img/Group 1059.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getFlights } from '../../../Redux/actions/main/booking'
import { getUser } from '../../../Redux/actions/main/user'

const Booking = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const data = useSelector((state) => state.FetchUser)
    console.log(data)
  
    useEffect(() => {
      dispatch(getUser())
    }, [])

    const [form, setForm] = useState({
        passengerName: "",
        phone_number: "",
        fullname: "",
        city: "",
        address: "",
        post_code: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handlePayment = () => {
        navigate('/main/payment')
    }

    return (
        <div className="d-flex flex-column">
            <Navbar></Navbar>
            <main class="flex-fill bg-light d-none d-md-block">
                <div className='wrapper p-5 d-flex bd-highlight'>
                    <div class="p-2 bd-highlight me-auto fs-5 ms-3">Contact Person Details</div>
                    <div class="p-2 bd-highlight fs-5 me-5">Flight Details</div>
                    <div class="p-2 bd-highlight mx-5 mt-1">View Details</div>
                </div>
                <div class="d-flex mb-5 mx-5 mt-1">
                    <div class="d-flex flex-fill flex-column">
                        <section class="container bg-white p-4 ms-2 rounded d-md-block">
                            <form>
                                <div className="mb-4 d-flex flex-column">
                                    <label className="ms-1 txt-label">Full Name</label>
                                    <Input
                                        className="input-booking"
                                        type="fullname"
                                        name="fullname"
                                        value={form.fullname}
                                        onChange={handleChange}
                                        placeholder={data.data.fullname}
                                    />
                                </div>
                                <div className="mb-4 d-flex flex-column">
                                    <label className="ms-1 txt-label">Email</label>
                                    <Input
                                        className="input-booking"
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder={data.data.email}
                                    />
                                </div>
                                <div className="mb-4 d-flex flex-column">
                                    <label className="ms-1 txt-label">Phone Number</label>
                                    <Input
                                        className="input-booking"
                                        type="phone_number"
                                        name="phone_number"
                                        value={form.phone_number}
                                        onChange={handleChange}
                                        placeholder={data.data.phone_number}
                                    />
                                </div>
                            </form>
                            <div className='rounded bg-danger p-1 d-flex my-3'>
                                <img className='mt-3 mx-3' src={danger} alt="" height='18' />
                                <p className='mt-3 text-secondary'>Make sure the data is correct.</p>
                            </div>
                        </section>
                        <p className='fw-bold fs-4 mt-5 ms-2'>Passenger Details</p>
                        <section class="container bg-white p-4 ms-2 mt-2 rounded d-md-block">
                            <div className='rounded bg-blue p-1 d-flex justify-content-between my-4'>
                                <p className='mt-3 text-secondary ms-3'>Passenger: 1 Adult</p>
                                <div class="form-check form-switch mt-3 me-3">
                                    <label class="form-check-label text-secondary" for="flexSwitchCheckDefault">Same as contact person</label>
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                                </div>
                            </div>
                            <form className='mt-2'>
                                <div className="mb-4 d-flex flex-column">
                                    <label className="ms-1 txt-label mt-2">Title</label>
                                    <Input
                                        className="input-booking"
                                        type="title"
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4 d-flex flex-column">
                                    <label className="ms-1 txt-label">Full name</label>
                                    <Input
                                        className="input-booking"
                                        type="passengerName"
                                        name="passengerName"
                                        value={form.passengerName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4 d-flex flex-column w-100">
                                    <label className="ms-1 txt-label">Nationality</label>
                                    <Input
                                        className="input-booking"
                                        type="nationality"
                                        name="nationality"
                                        value={form.nationality}
                                        onChange={handleChange}
                                    />
                                </div>
                            </form>
                        </section>
                        <p className='fw-bold fs-4 mt-5 ms-2'>Passenger Details</p>
                        <section class="container bg-white p-4 ms-2 mt-2 rounded d-md-block">
                            <div className='d-flex justify-content-between'>
                                <div class="form-check ms-3 mt-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                    <label class="form-check-label fw-bold fs-5 ms-2" for="flexCheckDefault">
                                        Travel Insurance
                                    </label>
                                </div>
                                <p className='mt-3 text-secondary ms-3 text-primary fs-5'>$2,00<span className='text-secondary fs-6 me-3'>/pax</span></p>
                            </div>
                            <div className='border-bottom'></div>
                            <p className='mt-3'>Get travel compensation up to $ 10.000,00</p>
                        </section>
                        <Button className='text-white fw-bold p-3 mt-5 bg-primary rounded-3 w-25 align-items-center mx-auto shadow-sm' onClick={handlePayment}>
                            Proceed to Payment
                        </Button>
                    </div>
                    <section class="container bg-white p-4 ms-4 rounded flight-detail">
                        <img src={garuda} alt="" />
                        <span className='ms-4 text-secondary'>Garuda indonesia</span>
                        <div className='d-flex mt-4'>
                            <p className='fs-5 fw-bold'>IDN</p>
                            <img className='mt-2 mx-4' src={plane} alt="" height='15' />
                            <p className='fs-5 fw-bold'>JPN</p>
                        </div>
                        <div className='d-flex'>
                            <p className='text-secondary'>Saturday</p>
                            <img className='mt-2 mx-4' src={dot} alt="" height='5' />
                            <p className='text-secondary'>08:00</p>
                        </div>
                        <div className='mt-3'>
                            <img className='mt-' src={check} alt="" height='' />
                            <span className='text-primary ms-2'>Refundable</span>
                        </div>
                        <div className='mt-3 mb-3'>
                            <img className='mt' src={check} alt="" height='' />
                            <span className='text-primary ms-2'>Can Reschedule</span>
                        </div>
                        <div className='border-bottom'></div>
                        <div className='d-flex justify-content-between mt-3 text-center'>
                            <p className='fs-6 mt-2'>Total Payment</p>
                            <p className='fs-4 text-primary'>$500</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Booking;
