import React, { useState, useEffect } from 'react';


function Nav() {
 const [show , handlerShow] = useState(false)
   
 useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            handlerShow(true);
        } else handlerShow(false);
    });
    return () => {
        window.removeEventListener("scroll");
    };
}, []);
    

    return (
        <div className={`nav ${show && "nav__black"}`}>
      <img
      className="nav__logo"
      src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
      alt="Netflix Logo"
        />

      <img 
      className="nav__avatar"
      src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1"
       alt="Netflix Avatar"
       />
    </div>
  )
}

export default Nav

