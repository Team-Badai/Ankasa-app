import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Hero from "../Pages/Hero";
import Auth from "../Pages/Auth";
import Login from "../Pages/Auth/Login";
import ResetPassword from "../Pages/Auth/ResetPassword";
import SignUp from "../Pages/Auth/SignUp";
import Booking from "../Pages/Main/Booking";
import BookingDetail from "../Pages/Main/BookingDetail";
import Payment from "../Pages/Main/Payment";
import Chat from "../Pages/Main/Chat";
import Notification from "../Pages/Main/Notification";
import Profile from "../Pages/Main/Profile";
import SearchPage from "../Pages/Main/SearchFlight";
import Page404 from "../Pages/404";
import CreateBooking from "../Pages/Main/CreateBooking";
import ResetPasswordCreate from "../Pages/Auth/ResetPasswordCreate";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Hero />} />

        <Route path={"/auth"} element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="resetpass" element={<ResetPassword />} />
          <Route
            path="reset-password/:token"
            element={<ResetPasswordCreate />}
          />
          <Route index element={<Navigate to="/auth/login" />} />
        </Route>
        <Route path={"/main"}>
          <Route path="create-booking" element={<CreateBooking />} />
          <Route path="booking" element={<Booking />} />
          <Route path="booking-detail" element={<BookingDetail />} />
          <Route path="search-result" element={<SearchPage />} />
          <Route path="payment" element={<Payment />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route path="notification" element={<Notification />} />
        </Route>

        <Route path={"/*"} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
