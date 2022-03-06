import React from 'react'
import logo from '../../../assets/img/lilplane.png'
import google from '../../../assets/img/apple-app-store-travel-awards-globestamp-7 2.svg'
import app from '../../../assets/img/apple-app-store-travel-awards-globestamp-7 3.svg'
import twitter from '../../../assets/img/twitter.svg'
import facebook from '../../../assets/img/facebook.svg'
import instagram from '../../../assets/img/instagram.svg'
import youtube from '../../../assets/img/youtube.svg'
import pin from '../../../assets/img/map-pin.svg'

const Footer = () => {
    return (
        <div>
            <div className='footer d-none d-md-flex justify-content-around p-3 h-100 mt-5'>
                <div class="d-flex flex-column bd-highlight">
                    <div className='mb-auto bd-highlight'>
                        <img src={logo} alt="" />
                        <span className='ms-3 fs-5 fw-bolder'>Ankasa</span>
                        <p class="mt-3 text-secondary">Find your Flight and explore the <br></br>
                            world with us. We will take care of the rest</p>
                    </div>
                    <p className='text-secondary bd-highlight mt-6'>© Ankasa.  All Rights Reserved.</p>
                </div>
                <div class="">
                    <p class="fw-bolder">Features</p>
                    <p class="text-secondary">Find Ticket</p>
                    <p class="text-secondary">My Booking</p>
                    <p class="text-secondary">Chat</p>
                    <p class="text-secondary">Notification</p>
                </div>
                <div class="d-flex flex-column">
                    <p class="fw-bolder">Download Angkasa App</p>
                    <img src={google} alt="" />
                    <img className='mt-2' src={app} alt="" />
                </div>
                <div class="d-flex flex-column bd-highlight">
                    <div className='mb-auto bd-highlight'>
                        <p class="fw-bolder">Follow Us</p>
                        <div class="d-flex">
                            <img className='' src={facebook} alt="" />
                            <img className='mx-3' src={twitter} alt="" />
                            <img className='' src={instagram} alt="" />
                            <img className='mx-3' src={youtube} alt="" />
                        </div>
                    </div>
                    <div className='mb-3'>
                        <img src={pin} alt="" />
                        <span className='text-secondary bd-highlight ms-2'>Jakarta Indonesia</span>
                    </div>
                </div>
            </div>
            {/* Responsive */}
            <div className='footer d-md-none justify-content-around p-3 h-100 mt-5'>
                <div class="d-flex flex-column bd-highlight">
                    <div className='mb-auto bd-highlight'>
                        <img src={logo} alt="" />
                        <span className='ms-3 fs-5 fw-bolder'>Ankasa</span>
                        <p class="mt-4 text-secondary lh-base">Find your Flight and explore the <br></br>
                            world with us. We will take care of the rest</p>
                    </div>
                </div>
                <p class="fw-bolder mt-3">Features</p>
                <div class="d-flex justify-content-between">
                    <p class="text-secondary">Find Ticket</p>
                    <p class="text-secondary">My Booking</p>
                    <p class="text-secondary">Chat</p>
                    <p class="text-secondary">Notification</p>
                </div>
                <p class="fw-bolder mt-5">Download Angkasa App</p>
                <div class="d-flex">
                    <img src={google} alt="" />
                    <img className='ms-3' src={app} alt="" />
                </div>
                <div class="d-flex flex-column bd-highlight">
                    <div className='mb-auto bd-highlight mt-5'>
                        <p class="fw-bolder">Follow Us</p>
                        <div class="d-flex">
                            <img className='' src={facebook} alt="" />
                            <img className='mx-3' src={twitter} alt="" />
                            <img className='' src={instagram} alt="" />
                            <img className='mx-3' src={youtube} alt="" />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <img src={pin} alt="" />
                        <span className='text-secondary bd-highlight ms-2'>Jakarta Indonesia</span>
                        <p className='text-secondary bd-highlight mt-3'>© Ankasa.  All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer