/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import pic from '../../../assets/img/nnzkZNYWHaU.svg'
import Button from '../../../Components/Button'
import '../../../Pages/Main/main.css'
import user from '../../../assets/img/user.svg'
import review from '../../../assets/img/Vector.svg'
import settings from '../../../assets/img/Vector (1).svg'
import logout from '../../../assets/img/Vector (2).svg'
import { changePicture } from '../../../Redux/actions/main/changePicture'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../../Redux/actions/main/user'

const SidebarMobile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.clear()
        navigate('/auth/login')
    }
    
    const data = useSelector((state) => state.FetchUser)
    console.log(data)
  
    useEffect(() => {
      dispatch(getUser())
    }, [])

    const [form, setForm] = useState({
        profile_picture: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            profile_picture: e.target.files[0]
        })
    }

    const handleContinue = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profile_picture', form.profile_picture)
        dispatch(changePicture(formData))
        console.log(form);
        navigate('/')
    }

    const [modalPic, setModalPic] = useState(false)

    const openModal = () => {
        if (modalPic === false) {
            setModalPic(true)
        } else {
            setModalPic(false)
        }
    }

    return (
        <div className='d-md-none flex-column p-3 mx-5 rounded mt-5 bg-white h-100'>
            <div class="text-center d-flex flex-column align-items-center">
                <img className='rounded-pill border-primary border border-2 p-1' src={data.data.profile_picture} alt="" height='100' />
                <Button className='w-50 bg-white border-primary border rounded-3 p-2 text-primary mt-4 fw-bolder'>
                    Select Photo
                </Button>
                <p className='mt-4 fw-bolder mb-0 fs-5'>{data.data.fullname}</p>
                <span className='text-secondary'>{data.data.address}</span>
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
                        <a href="" class="icon mb-4 text-dark text-decoration-none" onClick={()=>{navigate('/main/profile')}}>
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
            {modalPic === true ? (
                <div className='modals'>
                    <div className='modal-content p-4'>
                        <div className='d-flex justify-content-between'>
                            <h5 class="fw-bold mt-3">Change Profile Picture</h5>
                            <Button className='btn-close' onClick={() => openModal(false)}></Button>
                        </div>
                        <p class="fw-lighter mt-2">
                            Choose the picture and then <br></br>
                            press continue to the next steps.
                        </p>
                        <form encType="multipart/form-data" onSubmit={handleContinue} className="d-flex flex-column">
                            <input type="file" name="file" id="file" onChange={handleChange} />
                            {form.profile_picture ? (
                                <img className="mt-3" src={URL.createObjectURL(form.profile_picture)} alt="" height='80' width='80' />
                            ) : ('')}
                            <Button className="btn bg-primary text-white mt-4 p-2 border-0 mb-3 w-100" type="submit">Continue</Button>
                        </form>
                    </div>
                </div>
            ) : ('')}
        </div>
    )
}

export default SidebarMobile