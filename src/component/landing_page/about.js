import React from 'react'
import leftBanner from '../../img/banner-left.jpg'
const About = () => {
    return (
       <section className="about-area">
           <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="about-image">
                        <img src={leftBanner} className="img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 about-title">
                   <h2 className="text-uppercase pt-5">
                       <span>Let Me</span>
                       <span> introduce</span>
                       <span> myself</span>
                   </h2>
                   <div className="paragraph py-4 w-75">
                        <p className="paraf">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p className="paraf">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                   </div>
                   <button type="button" className="btn-button primary-button text-uppercase">Download CV</button>
                </div>
            </div>
           </div>
       </section>
    )
}

export default About;