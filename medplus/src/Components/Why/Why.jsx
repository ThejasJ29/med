import React from 'react'
import './Why.css'

const Why = () => {
    return (
        <>
            <div className="why-medplus">
                <h5>Why MedPlusMart</h5>
                <div className="reasons">
                    <div className="reason">
                        <div className='reason-img'>
                            <img src="https://static2.medplusmart.com/live/webpwa/assets/safe-and-secure.f87b9b29b201af66ef89.svg" />
                        </div>
                        <h6>100% Safe & Secure</h6>
                        <p>We take all safety and hygiene measures to keep our customers safe.</p>
                    </div>
                    <div className="reason">
                        <div className='reason-img'>
                            <img src="https://static2.medplusmart.com/live/webpwa/assets/online-reports.03fb335de31455e84d8f.svg" />
                        </div>
                        <h6>Click and Pick</h6>
                        <p>Click to buy a range of products across categories</p>
                    </div>
                    <div className="reason">
                        <div className='reason-img'>
                            <img src="https://static2.medplusmart.com/live/webpwa/assets/home-sample-collection.513fdc0331c1185aa035.svg" />
                        </div>
                        <h6>Home Delivery</h6>
                        <p>We offer convenient home delivery of medicines & general goods</p>
                    </div>
                    <div className="reason">
                        <div className='reason-img'>
                            <img src="https://static2.medplusmart.com/live/webpwa/assets/compititive-prices.0424e317d16b7148a34b.svg" />
                        </div>
                        <h6>Unlimited Health Records</h6>
                        <p>Save all your health records (Medical Records...)</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Why