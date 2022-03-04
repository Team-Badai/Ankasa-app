import React from 'react'
import Navbar from '../../../Components/module/Navbar'
import Footer from '../../../Components/module/Footer'


const History = () => {
  return (
    <div className='d-flex flex-column wrapper-home'>
      <Navbar></Navbar>
      {/* <header class="header-mobile p-3 d-md-none">
        <a href="home.html"><img src={arrow} alt="" /></a>
        <span class="text-mobile mx-3 fw-bold fs-4 fw-bold">History</span>
      </header>
      <main class="flex-fill my-3">
        <div class="container d-flex">
          <Sidebar></Sidebar>
          <div class="content flex-fill shadow-sm rounded">
            <section class="p-3 ms-2">
              <h4 class="d-none d-md-block fw-bold">Transaction History</h4>
              <div class="history-list">
                <p class="fw-lighter my-4">This Week</p>
                <TransactionHistory></TransactionHistory>
              </div>
            </section>
          </div>
        </div>
      </main> */}
    <Footer></Footer>
    </div>
  )
}

export default History