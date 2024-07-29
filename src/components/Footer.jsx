import React from 'react'
import bottomarrow from "../image/down.png"

const Footer = () => {
  return (
    <div className="footer-info">

      <a href="#page1"><img src={bottomarrow} alt="" className='nav-heading' /></a>
      <p>&#169;Fabulous Jay, 2023 <span>Design by fedo</span></p>


    </div>
  )
}

export default Footer
