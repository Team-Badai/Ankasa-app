/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import pic from '../../../assets/img/nnzkZNYWHaU.svg'
import Button from '../../../Components/Button'
import '../../../Pages/Main/main.css'
import user from '../../../assets/img/user.svg'
import review from '../../../assets/img/Vector.svg'
import settings from '../../../assets/img/Vector (1).svg'
import logout from '../../../assets/img/Vector (2).svg'

const SidebarMobile = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        navigate('/auth/login')
    }

    return (
        <div className='d-md-none flex-column p-3 mx-5 rounded mt-5 bg-white h-100'>
            <div class="text-center d-flex flex-column align-items-center">
                <img className='rounded-pill border-primary border border-2 p-1' src={pic} alt="" height='100' />
                <Button className='w-50 bg-white border-primary border rounded-3 p-2 text-primary mt-4 fw-bolder'>
                    Select Photo
                </Button>
                <p className='mt-4 fw-bolder mb-0 fs-5'>Mike</p>
                <span className='text-secondary'>Medan</span>
            </div>
            <div class="d-flex flex-column mt-4">
                <div className='d-flex justify-content-between'>
                    <p className='fw-bold'>Cards</p>
                    <p className='text-primary fw-bold cursor'>+ Add</p>
                </div>
                <div className='container p-3 border rounded bg-primary text-white shadow'>
                    <p className='mb-0 fw-bold'>6816392372132</p>
                    <div className='d-flex justify-content-between'>
                        <span className=''>X card</span>
                        <span className=''>Rp500000</span>
                    </div>
                </div>
                <div class="menu ms-3 mt-5">
                    <div class="">
                        <a href="" class="icon mb-4 text-dark text-decoration-none">
                            <img className='border-primary border rounded-pill' src={user} alt="" />
                            <span class="ms-4 text-primary fw-bold">Profile</span>
                        </a>
                    </div>
                    <div class="my-4">
                        <a href="" class="icon text-dark text-decoration-none" >
                            <img src={review} alt="" />
                            <span class="ms-4 fw-bold">My Review</span>
                        </a>
                    </div>
                    <div class="my-4">
                        <a href="" class="icon text-dark my-4 text-decoration-none">
                            <img src={settings} alt="" />
                            <span class="ms-4 fw-bold">Settings</span>
                        </a>
                    </div>
                    <div class="my-4">
                        <a href="" class="icon text-dark text-decoration-none" onClick={handleLogout}>
                            <img src={logout} alt="" />
                            <span class="ms-4 text-danger fw-bold">Log Out</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarMobile