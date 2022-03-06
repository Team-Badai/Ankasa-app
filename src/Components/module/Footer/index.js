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
        <div className='footer d-flex justify-content-around p-3 d-none d-md-flex h-100 mt-6'>
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
    )
}

export default Footer