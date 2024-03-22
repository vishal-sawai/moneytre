import React from 'react'

function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
    <div className="container" data-aos="zoom-out" data-aos-delay="100">
      <h1>Welcome to <span>Moneytre</span></h1>
      
      <div className="d-flex mt-3">
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
       
      </div>
    </div>
  </section>
  )
}

export default Hero