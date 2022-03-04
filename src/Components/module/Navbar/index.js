/* eslint-disable no-unused-vars */
import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import logo from '../../../assets/img/lilplane.png'
import mail from '../../../assets/img/ic_round-mail-outline.svg'
import pic from '../../../assets/img/nnzkZNYWHaU.svg'
import bell from '../../../assets/img/bell.svg'
import search from '../../../assets/img/search.svg'
import Input from '../../../Components/Input'
import Button from '../../../Components/Button'
import '../../../Pages/Main/main.css'

const Navbar = () => {
    const navigate = useNavigate()
    const auth = localStorage.getItem('auth')
    const [searchParams, setSearchParams] = useSearchParams();
    const querySearch = searchParams.get("search");

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            setSearchParams({ search: e.target.value });
        }
    };

    return (
        <div className='navbar d-flex justify-content-around p-5 shadow-sm'>
            <div>
                <img src={logo} alt="" />
                <span className='ms-3 fs-5 fw-bolder'>Ankasa</span>
            </div>
            <div className='d-flex'>
                <form class="rounded bg-light p-2">
                    <img src={search} alt="" />
                    <Input
                        className="p-1 ms-1 rounded bg-light border-0"
                        type="text"
                        placeholder="Where do you want to go?"
                        name="search"
                        onKeyUp={handleSearch}
                    ></Input>
                </form>
                <span className='mx-5 mt-3'>Find Ticket</span>
                <span className='mt-3'>My Booking</span>
            </div>
            {auth === '1' ? (
                <div>
                    <img src={mail} alt="" />
                    <img className='mx-5' src={bell} alt="" />
                    <img className='rounded-pill' src={pic} alt="" />
                </div>
            ) : (
                <Button className='btn-sign bg-primary rounded-3 p-2 text-white shadow' onClick={() => {navigate('/auth/signup')}}>
                    Sign Up
                </Button>
            )}
        </div>
    )
}

export default Navbar