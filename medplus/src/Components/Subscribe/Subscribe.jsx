import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
    return (
        <>
            <div className="subscribe-area">
                <div className="help-section">
                    <img src="https://static2.medplusmart.com/live/webpwa/assets/call.d827ce57105febee311d.svg" className="help-logo" />
                    <div className="help-contact">
                        <p>Need any Help?</p>
                        <a href="tel:+9140-67006700" className='contact-number' title='Need any Help?040-67006700'>040-67006700</a>
                    </div>
                </div>
                <div className="subscribe-section">
                    <div className="descr">
                        <p>Subscribe for</p>
                        <span>Latest Offers</span>
                    </div>
                    <div className="input-region">
                        <input type="text" placeholder='Your email address here'/>
                    </div>
                    <div className="sub-button">
                    <button type="button" class="btn btn-brand-gradient rounded-pill px-4 custom-btn-lg">Subscribe</button>
                    </div>
                </div>

            </div>
            <div className="list-area">
                <div className="list-item">
                    <ul className='list-items'>
                    <a href="#" title='About Us'><li>About Us</li></a>
                    <a href="#" title='FAQs'><li>FAQs</li></a>
                    <a href="#" title='Locate A MedPlus Store'><li>Locate A MedPlus Store</li></a>
                    <a href="#" title='Track Orders'><li>Track Orders</li></a>
                    <a href="#" title='Browse All Brands '><li>Browse All Brands </li></a>
                    <a href="#" title='Customer Feedback'><li>Customer Feedback</li></a>
                    <a href="#" title='Community Delivery'><li>Community Delivery</li></a>
                    <a href="#" title='Bulk Order'><li>Bulk Order</li></a>
                    <a href="#" title='Contact Us'><li>Contact Us</li></a>
                    </ul>
                </div>
                <div className="security-logo">
                    <img src="https://www.medplusmart.com/new_theme/web/images/siteseal_gd_3_h_l_m.png" title='GoDaddy Verifed & Secured' />
                </div>
            </div>
        </>
    )
}

export default Subscribe
