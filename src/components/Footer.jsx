import React from 'react'
import bottomarrow from "../image/down.png"

const Footer = () => {
  return (
    <div className="footer-info">

      <a href="#Navbar"><img src={bottomarrow} alt="" className='nav-heading3' /></a>
      <p>&#169;Fabulous Jay, 2023 <span className='footer-span'>Design by Ashish <i class="fa-solid fa-arrow-up"></i></span></p>


    </div>
  )
}

export default Footer
