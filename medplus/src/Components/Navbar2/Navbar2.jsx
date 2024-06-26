import React from 'react'
import './Navbar2.css'

const Navbar2 = () => {
    return (
        <>
            <nav className='Navbar2'>
                <div className="current_location">
                    <div className="location_logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                    </div>
                    <div className="address">
                        <p className='c-address'><b>224,Deepa Nagar, Mysuru, Karnataka 570026, India</b></p>
                        <p className='default-line'>Home Delivery & Store Pickup Available</p>
                    </div>
                </div>
                <div className="search-bar" >
                    <div className="dropdown" id='elements'>
                        <button className="btn btn-custom dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            All Product</button>
                        <ul class="dropdown-menu">
                            <li><a className="dropdown-item" href="#">All Product</a></li>
                            <li><a className="dropdown-item" href="#">General Store</a></li>
                            <li><a className="dropdown-item" href="#">Pharmacy</a></li>
                        </ul>
                    </div>
                    <div className="s-bar" id='elements'>
                        <input type="text" placeholder='Search for... General or Pharma Products' />

                    </div>

                </div>
                <div className="upload-btn">
                    <button>Upload</button>
                </div>
                <div className="cart-notifications" id='elements'>
                    <div className="notification-logo">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="50" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                        </svg></a>
                    </div>
                    <div className="cart-logo">
                        <div className="item">
                            
                        </div>
                        <div className="cart-svg" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="50" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16" >
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar2