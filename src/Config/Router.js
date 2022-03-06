import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../Pages/Auth";
import Login from "../Pages/Auth/Login";
import ResetPassword from "../Pages/Auth/ResetPassword";
import SignUp from "../Pages/Auth/SignUp";
import Booking from "../Pages/Main/Booking";
import BookingDetail from "../Pages/Main/BookingDetail"
import Chat from "../Pages/Main/Chat";
import Notification from "../Pages/Main/Notification";
import Profile from "../Pages/Main/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/auth"} element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="resetpass" element={<ResetPassword />} />
        </Route>
        <Route path={"/main"}>
          <Route path="booking" element={<Booking />} />
          <Route path="booking-detail" element={<BookingDetail />} />
          <Route path="profile" element={<Profile/>}/>
          <Route path="chat" element={<Chat/>}/>
          <Route path="notification" element={<Notification/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
