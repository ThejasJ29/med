import React from 'react'
import './Navbar3.css'

const Navbar3 = () => {
    return (
        <>
            <nav className="nav-3">
                <ul>
                    <button className="drop-down btn btn-custom" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <p></p>
                        <p></p>
                        <p></p></button>
                    <ul class="dropdown-menu">
                        <li><a className="dropdown-item" href="#">All Product</a></li>
                        <li><a className="dropdown-item" href="#">General Store</a></li>
                        <li><a className="dropdown-item" href="#">Pharmacy</a></li>
                    </ul>
                    <li><a href='#'><span class='important'>Health Store</span></a></li>
                    <li><a href='#'>Pharmacy</a></li>
                    <li><a href='#'>Diagnostics</a></li>
                    <li><a href='#'>Doctors</a></li>
                    <li><a href='#'>MedPlus Advantage</a></li>
                    <li><a href='#'>MedPlus Payback Points</a></li>
                    <li><a href='#'>Promotions</a></li>
                    <li><a href='#'>Healthy Life</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar3