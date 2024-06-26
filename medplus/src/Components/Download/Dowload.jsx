import React from 'react'
import './Dowload.css'

const Dowload = () => {
  return (
    <>
      <div className="download-box">
        <div className="download-img">
          <img className='girl' src="https://static2.medplusmart.com/live/webpwa/assets/download-app.3bd6c30cfa0c34643e3f.png" />
        </div>
        <div className="apps">
          <h2>Download Our App Now</h2>
          <p className="app-description">
            Buy general store products and medicines from
            your mobile at anytime, anywhere
          </p>
          <div className="app-logo">
            <p className="app-description">Available On:</p>
            <div className="logos">
              <a href="#" title='Get it on Play Store'><img src="https://static2.medplusmart.com/live/webpwa/assets/Google_Play_Store-cssbg.5e8a3ffbb5024c236295.svg" className="playstore" /></a>
              <a href="#" title='Available on the App Store'><img src="https://static2.medplusmart.com/live/webpwa/assets/App_Store-cssbg.7cefae321292192d26cb.svg" className="appstore" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dowload