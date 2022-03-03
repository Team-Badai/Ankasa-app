import React, { Fragment, useState } from 'react'
import Logo from "../../../assets/img/Logo2.svg";
import Button from '../../../Components/Button';
import Input from '../../../Components/Input';

const ResetPassword = () => {

  const [form, setFrom] = useState({
    email: ""
  });
  const handleChange = (e) => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <section className="right-section p-5">
      <div className="header">
          <img src={Logo} alt="" />
        </div>
        <div className="content">
          <p className="txt-forgot mt-5">Forgot Password</p>
          <Input
            className="input-login pt-4"
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
          <Button className="btn-login mt-4">Send</Button>
          <p className='mt-3'>You’ll get message soon on your email</p>
        </div>
      </section>
    </Fragment>
  )
}

export default ResetPassword