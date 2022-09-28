import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
       {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>Be the reason for someone's heartbeat.</h1>
          <h2>A single drop of blood can make a huge difference.</h2>

         
          <div className="d-flex">
            <Link to="#about" className="btn-get-started scrollto">Get Started</Link>
            <a href="https://www.youtube.com/watch?v=Af0gk_kiGac" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img">
          <img src="assets/img/hero-img.gif" className="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>

  </section>
  {/* <!-- End Hero --> */}

  <main id="main">
  {/* <!-- ======= Featured Services Section ======= --> */}
    <section id="featured-services" className="featured-services">
      <div className="container">

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-heart-pulse-fill"></i></div>
              <h4 className="title"><Link to="/">Blood Collection</Link></h4>
              <p className="description">We are ready to serve blood to you at valuable time so register to get more information</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-card-checklist"></i></div>
              <h4 className="title"><Link to="/">Rules</Link></h4>
              <p className="description">Register in our website with proper information to get service from us.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-droplet-fill"></i></div>
              <h4 className="title"><Link to="/">Blood</Link></h4>
              <p className="description">Different group of blood available here.We are connect with different donor and hospital to collect blood.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Featured Services Section --> */}

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container">

        <div className="row">
          <div className="col-lg-6">
            <img src="assets/img/about.gif" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <h3>WHY SHOULD DONATE BLOOD?</h3>
            <p className="fst-italic">
            Blood is essential to help patients survive surgeries, cancer treatment, chronic illnesses, and traumatic injuries.
             This lifesaving care starts with one person making a generous donation. 
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i>There is no substitute for human blood.</li>
              <li><i className="bi bi-check-circle"></i>Regular blood donation is linked to lower blood pressure and a lower risk for heart attacks.</li>
              <li><i className="bi bi-check-circle"></i>Giving blood may reduce your risk of developing cancer.</li>
              <li><i className="bi bi-check-circle"></i>Giving blood can reduce harmful iron stores</li>
            </ul>
            <h3>What should not do before donating blood?</h3>
            <p>
            Eat something light before donating blood and hydrate yourself as it helps you to avoid weakness.
            Avoid drinking alcohol the day prior to blood donation.
            Do not smoke for at least 2 hours before blood donation.
            Don't eat immediately before donating.
            Don't give blood if you feel sick. 
            </p>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}

    {/* <!-- ======= Counts Section ======= --> */}
    <section id="counts" className="counts">
      <div className="container">

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
            <p>Clients</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
            <p>Projects</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
            <p>Hours Of Support</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            {/* hocche na eta */}
            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
            <p>Hard Workers</p>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Counts Section --> */}

    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services section-bg">
      <div className="container">

        <div className="section-title">
          <span>Services</span>
          <h2>Services</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><Link to="/">Lorem Ipsum</Link></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><Link to="/">Sed ut perspiciatis</Link></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><Link to="/">Magni Dolores</Link></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4><Link to="/">Nemo Enim</Link></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-slideshow"></i></div>
              <h4><Link to="/">Dele cardo</Link></h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-arch"></i></div>
              <h4><Link to="/">Divera don</Link></h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}

    {/* <!-- ======= Portfolio Section ======= --> */}
     <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <span>Gallery</span>
          <h2>Gallery</h2>
          <p>This are the pictures of our clint and donor.</p>
        </div>

        {/* <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div> */}

        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
            
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
            
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
           
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
            
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
            
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
            
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
            
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
            
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
            
          </div>

        </div>

      </div>
    </section> 
    {/* <!-- End Portfolio Section --> */}

    {/* start gallery */}

    {/* <section id="gallery" classNameName="gallery">
      <div classNameName="container">

        <div classNameName="section-title">
          <h2>Gallery</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
      </div>

      <div classNameName="container-fluid">
        <div classNameName="row g-0">

          <div classNameName="col-lg-3 col-md-4">
            <div classNameName="gallery-item">
              <a href="assets/img/portfolio/portfolio-1.jpg.jpg" classNameName="galelry-lightbox">
                <img src="assets/img/portfolio/portfolio-1.jpg.jpg" alt="" classNameName="img-fluid"/>
              </a>
            </div>
          </div>

          <div classNameName="col-lg-3 col-md-4">
            <div classNameName="gallery-item">
              <a href="assets/img/portfolio/portfolio-2.jpg.jpg" classNameName="galelry-lightbox">
                <img src="assets/img/portfolio/portfolio-2.jpg.jpg" alt="" classNameName="img-fluid"/>
              </a>
            </div>
          </div>

          <div classNameName="col-lg-3 col-md-4">
            <div classNameName="gallery-item">
              <a href="assets/img/portfolio/portfolio-3.jpg.jpg" classNameName="galelry-lightbox">
                <img src="assets/img/portfolio/portfolio-3.jpg.jpg" alt="" classNameName="img-fluid"/>
              </a>
            </div>
          </div>

          <div classNameName="col-lg-3 col-md-4">
            <div classNameName="gallery-item">
              <a href="assets/img/portfolio/portfolio-4.jpg.jpg" classNameName="galelry-lightbox">
                <img src="assets/img/portfolio/portfolio-4.jpg.jpg" alt="" classNameName="img-fluid"/>
              </a>
            </div>
          </div>

          <div classNameName="col-lg-3 col-md-4">
            <div classNameName="gallery-item">
              <a href="assets/img/portfolio/portfolio-5.jpg.jpg" classNameName="galelry-lightbox">
                <img src="assets/img/portfolio/portfolio-5.jpg.jpg" alt="" classNameName="img-fluid"/>
              </a>
            </div>
          </div>

          <div classNameName="col-lg-3 col-md-4">
            <div classNameName="gallery-item">
              <a href="assets/img/portfolio/portfolio-6.jpg.jpg" classNameName="galelry-lightbox">
                <img src="assets/img/portfolio/portfolio-6.jpg.jpg" alt="" classNameName="img-fluid"/>
              </a>
            </div>
          </div>

        

        </div>

      </div>
    </section>  */}
{/* end galelry */}
    {/* <!-- ======= Testimonials Section ======= --> */}
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">

        <div className="section-title">
          <span>Founder of LifeLayers</span>
          <h2>Founder of LifeLayers</h2>
          <p>Saul Goodman is the Founder and CEO of this blood bank whose first step and contribution unpredictable</p>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  The lives can only be saved if we have enough blood for the transfusion. Hence, blood donation is the only medium that can help us. People around the world donate blood which helps treat people with ill- health.

There are various benefits of donating blood. It not only helps the receiver but also enhances the health of the donor. It revitalizes the body for better health.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
    {/* <!-- End Testimonials Section --> */}

    {/* <!-- ======= Cta Section ======= --> */}
    <section id="cta" className="cta">
      <div className="container">

        <div className="text-center">
          <h3>Call To Action</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Link to="/" className="cta-btn">Call To Action</Link>
        </div>

      </div>
    </section>
    {/* <!-- End Cta Section --> */}

    {/* <!-- ======= Team Section ======= --> */}
    <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title">
          <span>Team</span>
          <h2>Team</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="assets/img/team/team-1.jpg" alt=""/>
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <p>
                Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
              </p>
              <div className="social">
                <a href="www.twitter.com"><i className="bi bi-twitter"></i></a>
                <a href="www.facebook.com"><i className="bi bi-facebook"></i></a>
                <a href="www.instagram.com"><i className="bi bi-instagram"></i></a>
                <a href="www.linkedin.com"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="assets/img/team/team-2.png" alt=""/>
              <h4>Sarah Jhinson</h4>
              <span>Product Manager</span>
              <p>
                Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
              </p>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="assets/img/team/team-3.jpg" alt=""/>
              <h4>William Anderson</h4>
              <span>CTO</span>
              <p>
                Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
              </p>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Team Section --> */}

    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <span>Contact</span>
          <h2>Contact</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div className="row">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>101, Salt Lake, Kolkata 535022</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235724.99048079457!2d88.23699029014847!3d22.60889431719735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1663862997853!5m2!1sen!2sin" frameborder="0" style={{border:0 , width: '100%' , height: '290px'}} allowfullscreen></iframe>
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required/>
                </div>
                <div className="form-group col-md-6 mt-3 mt-md-0">
                  <label for="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <label for="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required/>
              </div>
              <div className="form-group mt-3">
                <label for="name">Message</label>
                <textarea className="form-control" name="message" rows="10" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Contact Section --> */}


  </main>
    </div>
  )
}
