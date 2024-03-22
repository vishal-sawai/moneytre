import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function OnboardAdvisory() {
  return (
    <div className="main">

      <Topbar />
      <Header />
      <main id="main" data-aos="fade-in">
        <div class="breadcrumbs">
          <div class="container">
            <ol>
            <li> <Link to={'/'}><a>Home</a></Link>  </li>

            </ol>

          </div>
        </div>
        <section id="trainers" class="trainers">
          <div class="container" >
          <div class="section-title">
            <h2>Onboard Advisory</h2>
          </div>
            <div class="row" data-aos="zoom-in" data-aos-delay="100">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="" />
                  <div class="member-content">
                    <h4>Walter White</h4>
                    <span>Web Development</span>
                    <p>
                      Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut
                      aut aut
                    </p>

                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <img src="assets/img/team//team-3.jpg" class="img-fluid" alt="" />
                  <div class="member-content">
                    <h4>Sarah Jhinson</h4>
                    <span>Marketing</span>
                    <p>
                      Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum
                      temporibus
                    </p>

                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <img src="assets/img/team//team-2.jpg" class="img-fluid" alt="" />
                  <div class="member-content">
                    <h4>Sarah Jhinson</h4>
                    <span>Marketing</span>
                    <p>
                      Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum
                      temporibus
                    </p>

                  </div>
                </div>
              </div>



            </div>

          </div>
        </section>








      </main>
      <Footer />
    </div>
  )
}

export default OnboardAdvisory