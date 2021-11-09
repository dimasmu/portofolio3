import React from 'react'
import logo1 from '../../img/logo1.jpg'

const brand = () => {
    return (
       <section className="brand-area">
           <div class="container">
               <div className="row">
                <div class="col-xl-6 col-lg-12 col-md-12">
                        <div class="first-row row">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-brand">
                                    <img src={logo1} alt="brand-1" className="img-fluid"/>
                                </div>
                                <div class="single-brand">
                                    <img src={logo1} alt="brand-1" className="img-fluid"/>
                                </div>
                                <div class="single-brand">
                                    <img src={logo1} alt="brand-1" className="img-fluid"/>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-brand">
                                    <img src={logo1} alt="brand-1" className="img-fluid"/>
                                </div>
                                <div class="single-brand">
                                    <img src={logo1} alt="brand-1" className="img-fluid"/>
                                </div>
                                <div class="single-brand">
                                    <img src={logo1} alt="brand-1" className="img-fluid"/>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-brand">
                                    <img src={logo1} alt="brand-1" className="img-fluid"/>
                                </div>
                                <div class="single-brand">
                                    <img src={logo1} alt="brand-1" className="img-fluid"/>
                                </div>
                                <div class="single-brand">
                                    <img src={logo1} alt="brand-1" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
       </section>
    )
}

export default brand