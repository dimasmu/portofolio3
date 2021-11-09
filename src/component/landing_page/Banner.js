import React from 'react'
import BannerLogo from '../../img/banner-logo.jpg'
const Banner = () => {
    return (
       <section className="site-banner">
           <div className="container col-md-12">
               <div className="row">
                <div className="col-lg-6 col-md-12 site-title">
                        <h3 className="title-text">Hey</h3>
                        <h1 className="title-text text-uppercase">
                            I'am Dimas
                        </h1>
                        <h4 className="col-lg-6 col-md-12">Programmer</h4>
                        <div className="site-buttons">
                            <div className="d-flex flex-row flex-wrap">
                                <button type="button" className="btn-button primary-button mr-4 text-uppercase">Hire Me</button>
                                <button type="button" className="btn-button secondary-button mr-4 text-uppercase">Get Cv</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 banner-image">
                        <img src={BannerLogo} style={{ maxWidth: '100%' }} alt="banner-img" className="image-fluid" />
                    </div>
               </div>
           </div>
       </section>
    )
}

export default Banner;