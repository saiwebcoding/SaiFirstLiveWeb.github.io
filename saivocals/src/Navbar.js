import React, { useState, useEffect } from 'react'
import "./Navbar.css";

function Navbar() {

    const [show, handleShow] = useState(false);


useEffect(() => {
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            handleShow(true)
            
        } else handleShow(false);
    });

    return () => {
        window.removeEventListener("scroll");
    }
}
, []);
    return (
       
            <div className={`navbar ${show && "navbar_black"}`}>
                <img src="https://1.bp.blogspot.com/-Yzofa5Hybfo/X614XZWLlUI/AAAAAAAAAKE/9-nR4UHX9MMgF8YrtLAeLs7lnhk7wt2oQCLcBGAsYHQ/s320/SaiVocalsLogo.png" alt="MyLogo" className="Sai"/>
                <img src="https://1.bp.blogspot.com/-D6jCmNYYDPg/X614XcB7f0I/AAAAAAAAAKA/vo5DjrR4XhIO-1Pl-VyqqTssHr7Z3SqCACLcBGAsYHQ/s320/SaiImgLogo.png" alt="Me" className="me"/>
                
            </div>
       
    )
}

export default Navbar;
