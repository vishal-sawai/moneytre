import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function Blogs() {
  return (
    <div className='main'>
      <Topbar />
      <Header />
      <main id="main">


        <section class="breadcrumbs">
          <div class="container">

            <ol>
            <li> <Link to={'/'}><a>Home</a></Link>  </li>
            </ol>


          </div>
        </section>


        <section id="blog" class="blog">

          <div class="container" data-aos="fade-up" data-aos-delay="100">

            <div class="row gy-4 posts-list">



              <div class="col-xl-4 col-lg-6">
                <article>

                  <div class="post-img">
                    <img src="assets/img/blog/blog-4.jpg" alt="" class="img-fluid" />
                  </div>
                  <h2 class="title">
                  <Link to={'/blogdetails'}><a>Why a trade plan is necessary</a></Link>  
                    {/* <a href="blog-detail.html">Why a trade plan is necessary</a> */}
                  </h2>

                  <div class="d-flex align-items-center">
                    <img src="assets/img/blog/blog-author-4.jpg" alt="" class="img-fluid post-author-img flex-shrink-0" />
                    <div class="post-meta">
                      <p class="post-author">Hetal Shah</p>
                      <p class="post-date">
                        <time datetime="2022-01-01">Jun 30, 2022</time>
                      </p>
                    </div>
                  </div>

                </article>
              </div>

              <div class="col-xl-4 col-lg-6">
                <article>

                  <div class="post-img">
                    <img src="assets/img/blog/blog-5.jpg" alt="" class="img-fluid" />
                  </div>
                  <h2 class="title">
                  <Link to={'/blogdetails2'}><a>Become a competent trader</a></Link>  
                  
                  </h2>

                  <div class="d-flex align-items-center">
                    <img src="assets/img/blog/blog-author-5.jpg" alt="" class="img-fluid post-author-img flex-shrink-0" />
                    <div class="post-meta">
                      <p class="post-author">Hetal Shah</p>
                      <p class="post-date">
                        <time datetime="2022-01-01">Jan 30, 2022</time>
                      </p>
                    </div>
                  </div>

                </article>
              </div>




            </div>



          </div>

        </section>

      </main>
      <Footer />
    </div>
  )
}

export default Blogs