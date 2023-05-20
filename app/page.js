import Casestudies from "@components/Casestudies";
import Hero from "@components/Hero";
import HomeAppHeader from "@components/HomeAppHeader";
import Navbar from "@components/Navbar";
import Services from "@components/Services";
import Technologies from "@components/Technologies";


export default function Home() {


return (
<>
<HomeAppHeader />

<Hero />

{/* Clients  */}
<section className="padng-sec why-us-c py-5 mt-5" id="abt-sec">
  <div className="container">
    <div className="row d-flex align-items-center">
    <div className="col-lg-6 col-md-12">
        <div className="sub-hd">
          <h2>About Us</h2>
          <h1>
          INNBITS <span> EMPOWERING BUSINESS</span> <span>THROUGH DIGITAL</span> TRANSFORMATION
          </h1>
          <p>Specialized in providing user-centric digital transformation, Innbits – a next-generation Tech studio powers business growth through the innovative and smart use of digital technology. Our services are designed to reinvent top-notch digital solutions for building a brand</p>
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="whyus-icn-c " id="counter">
          <div className="whyus-icn-c-dbl d-flex  justify-content-center ml-0 ml-sm-5">
            <div className="whyus-icn-c-sngl d-flex  justify-content-center  me-lg-5 mb-3 me-2">
              <div className="whyus-icn-c-sngl-cnt">
                <img loading="lazy" src="https://www.revolotech.com/theme/images/sml.svg" alt />
                <p className="m-0 p-0">Around the World with</p>
                <h3><span className="count percent" data-count={70}>70</span><span>+</span></h3>
                <h6> Clients</h6>
              </div>
            </div>
            <div className="whyus-icn-c-sngl mt-0 mt-sm-5 ml-0 ml-sm-5 d-flex  justify-content-center">
              <img loading="lazy" src="https://www.revolotech.com/theme/images/ger.svg" alt />
              <p>Well adjusted to</p>
              <h3><span className="count percent" data-count={35}>35</span><span>+</span></h3>
              <h6> Industries </h6>
            </div>
          </div>
          <div className="whyus-icn-c-dbl d-flex  justify-content-center  ml-0 ml-sm-5">
            <div className="whyus-icn-c-sngl d-flex  justify-content-center me-lg-5 mb-3 me-2">
              <img loading="lazy" src="https://www.revolotech.com/theme/images/prjct.svg" alt />
              <p className="m-0 p-0">Going</p>
              <h3><span className="count percent" data-count={100}>100</span><span>+</span></h3>
              <h6> Projects </h6>
              <p>&amp; still strong</p>
            </div>
            <div className="whyus-icn-c-sngl d-flex mt-0 mt-sm-5 ml-0 ml-sm-5 justify-content-center">
              <img loading="lazy" src="https://www.revolotech.com/theme/images/box.svg" alt />
              <h3><span className="count percent" data-count={12}>12</span><span>+</span></h3>
              <h6>software </h6>
              <p className="m-0 p-0">implementations</p>
            </div>
          </div>
          <div className="whyus-icn-c-bk-bdr">
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>

{/* services  */}
{/* <Services /> */}

{/* Technologies  */}
<Technologies />


{/* Casestudies  */}
<Casestudies />


{/* Testimonials  */}
<section className="testimonial-innbits mt-5">
  <div className="container">
    <div className="row">
      <h2 className="display-2 text-center mb-0 pb-0">Success Stories</h2>
      <div className="col-lg-8 mx-auto">
        <div className="row">
        <div className="col-md-12">
  <div className="border-0 p-4 p-xxl-5">
    {/* Slider prev/next buttons + Quotation mark */}
   
    {/* Slider */}
    <div
      className="swiper mx-0 mb-md-n2 mb-xxl-n3 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
      data-swiper-options='{
          "spaceBetween": 24,
          "loop": true,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "navigation": {
            "prevEl": "#testimonial-prev",
            "nextEl": "#testimonial-next"
          }
        }'
    >
      <div
        className="swiper-wrapper"
        id="swiper-wrapper-22d1c10549fd5a932"
        aria-live="polite"
        style={{
          transitionDuration: "0ms",
          transform: "translate3d(-1557px, 0px, 0px)"
        }}
      >
        <div
          className="swiper-slide h-auto swiper-slide-duplicate swiper-slide-duplicate-active"
          data-swiper-tab="#author-3"
          data-swiper-slide-index={2}
          role="group"
          aria-label="3 / 3"
          style={{ width: 495, marginRight: 24 }}
        >
          <figure className="card h-100 position-relative border-0 bg-transparent">
            <blockquote className="card-body p-0 mb-0">
              <p className="fs-lg mb-0 testimonial-para">
               <span className="small-text">Richard Says,</span> Ac at sed sit senectus massa. Massa ante amet ultrices magna
                porta tempor. Aliquet diam in et magna ultricies mi at. Lectus
                enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus
                laoreet aliquam pellentesque sed aliquet integer massa. Orci leo
                tortor ornare id mattis auctor aliquam volutpat aliquet. Odio
                lectus viverra eu blandit nunc malesuada vitae eleifend
                pulvinar.
              </p>
            </blockquote>
            <div className="row">
              <div className="col-lg-6">
              <figcaption className="card-footer border-0 d-flex align-items-center w-100 pb-2">
              <img
                src="https://silicon.createx.studio/assets/img/avatar/01.jpg"
                width={48}
                className="rounded-circle"
                alt="Ralph Edwards"
              />
              <div className="ps-3">
                <h5 className="fw-semibold lh-base mb-0">Ralph Edwards</h5>
                <span className="fs-sm text-muted">
                  Head of Marketing at Lorem Company
                </span>
              </div>
            </figcaption>
              </div>
              <div className="col-lg-6 my-auto text-end">
              <button
                  type="button"
                  id="testimonial-prev"
                  className="btn btn-prev btn-icon btn-sm me-2 position-static"
                  tabIndex={0}
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-22d1c10549fd5a932"
                >
                  <i className="bx bx-chevron-left" />
                </button>
                <button
                  type="button"
                  id="testimonial-next"
                  className="btn btn-next btn-icon btn-sm ms-2 position-static"
                  tabIndex={0}
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-22d1c10549fd5a932"
                >
                  <i className="bx bx-chevron-right" />
                </button>
              </div>
            </div>
          </figure>
        </div>
        {/* Item */}
        <div
          className="swiper-slide h-auto swiper-slide-duplicate-next"
          data-swiper-tab="#author-1"
          data-swiper-slide-index={0}
          role="group"
          aria-label="1 / 3"
          style={{ width: 495, marginRight: 24 }}
        >
          <figure className="card h-100 position-relative border-0 bg-transparent">
            <blockquote className="card-body p-0 mb-0">
              <p className="fs-lg mb-0 testimonial-para">
              <span className="small-text">Biraja Rout Says,</span> It was a great pleasure to come into partnership with Innbits Technologies. I appreciate their attention to details and their creativity in bringing my idea to life. I am so thankful in the ways they supported me in making this dream a reality.
              </p>
            </blockquote>
            <div className="row">
              <div className="col-lg-6">
              <figcaption className="card-footer border-0 d-flex align-items-center w-100 pb-2">
              <img
                src="https://silicon.createx.studio/assets/img/avatar/01.jpg"
                width={48}
                className="rounded-circle"
                alt="Biraja Rout"
              />
              <div className="ps-3">
                <h5 className="fw-semibold lh-base mb-0">Biraja Rout</h5>
                <span className="fs-sm text-muted">
                  Head of Marketing at Lorem Company
                </span>
              </div>
            </figcaption>
              </div>
              <div className="col-lg-6 my-auto text-end">
              <button
                  type="button"
                  id="testimonial-prev"
                  className="btn btn-prev btn-icon btn-sm me-2 position-static"
                  tabIndex={0}
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-22d1c10549fd5a932"
                >
                  <i className="bx bx-chevron-left" />
                </button>
                <button
                  type="button"
                  id="testimonial-next"
                  className="btn btn-next btn-icon btn-sm ms-2 position-static"
                  tabIndex={0}
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-22d1c10549fd5a932"
                >
                  <i className="bx bx-chevron-right" />
                </button>
              </div>
            </div>
          </figure>
        </div>
        {/* Item */}
        <div
          className="swiper-slide h-auto swiper-slide-prev"
          data-swiper-tab="#author-2"
          data-swiper-slide-index={1}
          role="group"
          aria-label="2 / 3"
          style={{ width: 495, marginRight: 24 }}
        >
          <figure className="card h-100 position-relative border-0 bg-transparent">
            <blockquote className="card-body p-0 mb-0">
              <p className="fs-lg mb-0 testimonial-para">
              <span className="small-text">Gian Ruggeri Says,</span>  <p>The way Innbits has taken us in building our Website from scratch is having a high level of polished skill.We, to the core, are completely fulfilled connecting with Innbits Team. Much obliged to you for being with us!</p>
              </p>
            </blockquote>
            <div className="row">
              <div className="col-lg-6">
              <figcaption className="card-footer border-0 d-flex align-items-center w-100 pb-2">
              <img
                src="https://silicon.createx.studio/assets/img/avatar/01.jpg"
                width={48}
                className="rounded-circle"
                alt="Gian Ruggeri"
              />
              <div className="ps-3">
                <h5 className="fw-semibold lh-base mb-0">Gian Ruggeri</h5>
                {/* <span className="fs-sm text-muted">
                  Head of Marketing at Lorem Company
                </span> */}
              </div>
            </figcaption>
              </div>
              <div className="col-lg-6 my-auto text-end">
              <button
                  type="button"
                  id="testimonial-prev"
                  className="btn btn-prev btn-icon btn-sm me-2 position-static"
                  tabIndex={0}
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-22d1c10549fd5a932"
                >
                  <i className="bx bx-chevron-left" />
                </button>
                <button
                  type="button"
                  id="testimonial-next"
                  className="btn btn-next btn-icon btn-sm ms-2 position-static"
                  tabIndex={0}
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-22d1c10549fd5a932"
                >
                  <i className="bx bx-chevron-right" />
                </button>
              </div>
            </div>
          </figure>
        </div>
        {/* Item */}
        <div
          className="swiper-slide h-auto swiper-slide-active"
          data-swiper-tab="#author-3"
          data-swiper-slide-index={2}
          role="group"
          aria-label="3 / 3"
          style={{ width: 495, marginRight: 24 }}
        >
          <figure className="card h-100 position-relative border-0 bg-transparent">
            <blockquote className="card-body p-0 mb-0">
              <p className="fs-lg mb-0 testimonial-para">
              <span className="small-text">Prakash Says,</span>  It was a great pleasure to come into partnership with Innbits Technologies. I appreciate their attention to details and their creativity in bringing my idea to life.
              </p>
            </blockquote>
            <div className="row">
              <div className="col-lg-6">
              <figcaption className="card-footer border-0 d-flex align-items-center w-100 pb-2">
              <img
                src="https://silicon.createx.studio/assets/img/avatar/01.jpg"
                width={48}
                className="rounded-circle"
                alt="prakash"
              />
              <div className="ps-3">
                <h5 className="fw-semibold lh-base mb-0">Prakash</h5>
                {/* <span className="fs-sm text-muted">
                  Head of Marketing at Lorem Company
                </span> */}
              </div>
            </figcaption>
              </div>
              <div className="col-lg-6 my-auto text-end">
              <button
                  type="button"
                  id="testimonial-prev"
                  className="btn btn-prev btn-icon btn-sm me-2 position-static"
                  tabIndex={0}
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-22d1c10549fd5a932"
                >
                  <i className="bx bx-chevron-left" />
                </button>
                <button
                  type="button"
                  id="testimonial-next"
                  className="btn btn-next btn-icon btn-sm ms-2 position-static"
                  tabIndex={0}
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-22d1c10549fd5a932"
                >
                  <i className="bx bx-chevron-right" />
                </button>
              </div>
            </div>
          </figure>
        </div>
        <div
          className="swiper-slide h-auto swiper-slide-duplicate swiper-slide-next"
          data-swiper-tab="#author-1"
          data-swiper-slide-index={0}
          role="group"
          aria-label="1 / 3"
          style={{ width: 495, marginRight: 24 }}
        >
          <figure className="card h-100 position-relative border-0 bg-transparent">
            <blockquote className="card-body p-0 mb-0">
              <p className="fs-lg mb-0 testimonial-para">
              <span className="small-text">Richard Says,</span>  Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam
                iaculis varius mauris magna sem. Egestas sed sed suscipit dolor
                faucibus dui imperdiet at eget. Tincidunt imperdiet quis
                hendrerit aliquam feugiat neque cras sed. Dictum quam integer
                volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus
                at mauris. Sagittis gravida vitae porta enim.
              </p>
            </blockquote>
            <div className="row">
              <div className="col-lg-6">
              <figcaption className="card-footer border-0 d-flex align-items-center w-100 pb-2">
              <img
                src="https://silicon.createx.studio/assets/img/avatar/01.jpg"
                width={48}
                className="rounded-circle"
                alt="Ralph Edwards"
              />
              <div className="ps-3">
                <h5 className="fw-semibold lh-base mb-0">Ralph Edwards</h5>
                <span className="fs-sm text-muted">
                  Head of Marketing at Lorem Company
                </span>
              </div>
            </figcaption>
              </div>
              <div className="col-lg-6 my-auto text-end">
              <button
                  type="button"
                  id="testimonial-prev"
                  className="btn btn-prev btn-icon btn-sm me-2 position-static"
                  tabIndex={0}
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-22d1c10549fd5a932"
                >
                  <i className="bx bx-chevron-left" />
                </button>
                <button
                  type="button"
                  id="testimonial-next"
                  className="btn btn-next btn-icon btn-sm ms-2 position-static"
                  tabIndex={0}
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-22d1c10549fd5a932"
                >
                  <i className="bx bx-chevron-right" />
                </button>
              </div>
            </div>
          </figure>
        </div>
      </div>
      {/* Pagination (bullets) */}
      <div className="swiper-pagination position-relative pt-3 mt-4 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
        <span
          className="swiper-pagination-bullet"
          tabIndex={0}
          role="button"
          aria-label="Go to slide 1"
        />
        <span
          className="swiper-pagination-bullet"
          tabIndex={0}
          role="button"
          aria-label="Go to slide 2"
        />
        <span
          className="swiper-pagination-bullet swiper-pagination-bullet-active"
          tabIndex={0}
          role="button"
          aria-label="Go to slide 3"
          aria-current="true"
        />
      </div>
      <span
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      />
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* client logo scroll  */}
<section className="mb-5 pt-md-3 pt-lg-4 pt-xl-5">
  <h2 className="h1 pt-lg-2 pt-xl-3 mb-5 text-center">Our Clients</h2>
  <div className="pb-2 pb-sm-3 pb-md-4">
    {/* LTR */}
    <div
      className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden"
      data-swiper-options='{
      "loop": true,
      "grabCursor": false,
      "centeredSlides": true,
      "autoplay": {
        "delay": 0,
        "disableOnInteraction": false
      },
      "freeMode": true,
      "speed": 38000,
      "freeModeMomentum": false,
      "breakpoints": {
        "0": {
          "slidesPerView": 1,
          "spaceBetween": 8
        },
        "500": {
          "spaceBetween": 16
        },
        "768": {
          "slidesPerView": 2,
          "spaceBetween": 24
        }
      }
    }'
    >
      <div
        className="swiper-wrapper"
        id="swiper-wrapper-0456876bc3347106b"
        aria-live="off"
        style={{
          transitionDuration: "38000ms",
          transform: "translate3d(-766px, 0px, 0px)"
        }}
      >
        
        
        <div
          className="swiper-slide swiper-slide-img swiper-slide-duplicate swiper-slide-duplicate-next"
          role="group"
          aria-label="3 / 10"
          style={{ width: 'fit-content', marginRight: 8 }}
          data-swiper-slide-index={2}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/06/02144457/PraemiumLogo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-prev"
          role="group"
          aria-label="1 / 10"
          style={{ width: 'fit-content', marginRight: 8 }}
          data-swiper-slide-index={0}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/06/02144457/PraemiumLogo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-active"
          role="group"
          aria-label="2 / 10"
          style={{ width: 'fit-content', marginRight: 8 }}
          data-swiper-slide-index={1}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/02/26203823/sandb__logo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-next"
          role="group"
          aria-label="3 / 10"
          style={{ width: 'fit-content', marginRight: 8 }}
          data-swiper-slide-index={2}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/02/26203823/sandb__logo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        <div
          className="swiper-slide swiper-slide-img swiper-slide-prev"
          role="group"
          aria-label="4 / 10"
          style={{ width: 'fit-content', marginRight: 8 }}
          data-swiper-slide-index={0}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/06/02144457/PraemiumLogo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-active"
          role="group"
          aria-label="5 / 10"
          style={{ width: 'fit-content', marginRight: 8 }}
          data-swiper-slide-index={1}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/02/26203823/sandb__logo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-next"
          role="group"
          aria-label="6 / 10"
          style={{ width: 'fit-content', marginRight: 8 }}
          data-swiper-slide-index={2}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/02/26203823/sandb__logo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        <div
          className="swiper-slide swiper-slide-img swiper-slide-prev"
          role="group"
          aria-label="7 / 10"
          style={{ width: 'fit-content', marginRight: 8 }}
          data-swiper-slide-index={0}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/06/02144457/PraemiumLogo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-active"
          role="group"
          aria-label="8 / 10"
          style={{ width: 'fit-content', marginRight: 8 }}
          data-swiper-slide-index={1}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/02/26203823/sandb__logo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-next"
          role="group"
          aria-label="9 / 10"
          style={{ width: 'fit-content', marginRight: 8 }}
          data-swiper-slide-index={2}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/02/26203823/sandb__logo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        <div
          className="swiper-slide swiper-slide-img swiper-slide-duplicate swiper-slide-duplicate-prev"
          role="group"
          aria-label="1 / 10"
          style={{ width: 'fit-content', marginRight: 8 }}
          data-swiper-slide-index={0}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/02/26203823/sandb__logo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        
      </div>
      <span
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      />
    </div>
    {/* RTL */}
    <div
      className="swiper mt-md-4 mt-sm-3 mt-2 swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-rtl swiper-backface-hidden"
      dir="rtl"
      data-swiper-options='{
      "loop": true,
      "grabCursor": false,
      "centeredSlides": true,
      "autoplay": {
        "delay": 0,
        "disableOnInteraction": false
      },
      "freeMode": true,
      "speed": 38000,
      "freeModeMomentum": false,
      "breakpoints": {
        "0": {
          "slidesPerView": 1,
          "spaceBetween": 8
        },
        "500": {
          "spaceBetween": 16
        },
        "768": {
          "slidesPerView": 2,
          "spaceBetween": 24
        }
      }
    }'
    >
      <div
        className="swiper-wrapper"
        id="swiper-wrapper-0927cc1b112e8129"
        aria-live="off"
        style={{
          transitionDuration: "38000ms",
          transform: "translate3d(766px, 0px, 0px)"
        }}
      >
       
       
        <div
          className="swiper-slide swiper-slide-img swiper-slide-duplicate swiper-slide-duplicate-next"
          role="group"
          aria-label="3 / 10"
          style={{ width: 'fit-content', marginLeft: 8 }}
          data-swiper-slide-index={2}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/02/26203823/sandb__logo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-prev"
          role="group"
          aria-label="1 / 10"
          style={{ width: 'fit-content', marginLeft: 8 }}
          data-swiper-slide-index={0}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/02/26203823/sandb__logo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-active"
          role="group"
          aria-label="2 / 10"
          style={{ width: 'fit-content', marginLeft: 8 }}
          data-swiper-slide-index={1}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/02/26203823/sandb__logo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-next"
          role="group"
          aria-label="3 / 10"
          style={{ width: 'fit-content', marginLeft: 8 }}
          data-swiper-slide-index={2}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/06/02124053/lombard_logo.jpg"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>

          {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-prev"
          role="group"
          aria-label="4 / 10"
          style={{ width: 'fit-content', marginLeft: 8 }}
          data-swiper-slide-index={0}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/02/26203823/sandb__logo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-active"
          role="group"
          aria-label="5 / 10"
          style={{ width: 'fit-content', marginLeft: 8 }}
          data-swiper-slide-index={1}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/02/26203823/sandb__logo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-next"
          role="group"
          aria-label="6 / 10"
          style={{ width: 'fit-content', marginLeft: 8 }}
          data-swiper-slide-index={2}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/06/02124053/lombard_logo.jpg"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>

          {/* Item */}
          <div
          className="swiper-slide swiper-slide-img swiper-slide-prev"
          role="group"
          aria-label="7 / 10"
          style={{ width: 'fit-content', marginLeft: 8 }}
          data-swiper-slide-index={0}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/02/26203823/sandb__logo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-active"
          role="group"
          aria-label="8 / 10"
          style={{ width: 'fit-content', marginLeft: 8 }}
          data-swiper-slide-index={1}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/02/26203823/sandb__logo.png"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-next"
          role="group"
          aria-label="9 / 10"
          style={{ width: 'fit-content', marginLeft: 8 }}
          data-swiper-slide-index={2}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/06/02124053/lombard_logo.jpg"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        {/* Item */}
        <div
          className="swiper-slide swiper-slide-img swiper-slide-next"
          role="group"
          aria-label="10 / 10"
          style={{ width: 'fit-content', marginLeft: 8 }}
          data-swiper-slide-index={2}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/06/02124053/lombard_logo.jpg"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>
        <div
          className="swiper-slide swiper-slide-img swiper-slide-duplicate swiper-slide-duplicate-prev"
          role="group"
          aria-label="1 / 10"
          style={{ width: 'fit-content', marginLeft: 8 }}
          data-swiper-slide-index={0}
        >
          <img
            src="https://cdn.tigmo.com.au/app/uploads/2021/06/02124053/lombard_logo.jpg"
            alt="Gallery image"
            className="rounded-3"
          />
        </div>

        


      </div>
      <span
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      />
    </div>
  </div>
</section>

{/* call back  */}
<section className="call-back position-relative">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-lg-4 col-xl-4 mt-4">
        <p className="text-white fs-5">With over 20 years of experience, we specialize in creating tailored IT solutions for medium-sized businesses and corporations. Our priority is aligning with your business goals, and we take pride in the work we do and the clients we serve.</p>


        <div className="callback-ceo">
    <div className="d-flex ceo-name-box">
    <div className="ceo-name-one">
      <h6 className="ceo-name pb-0 mb-0">Mr. Debadutta</h6>
      <p className="text-warning">CEO Innbits</p>
    </div>
   <div className="position-relative">
   <img src="https://wezom.com/images/start-business/image-1x.webp" alt="" className="img-fluid" />
   <div className="position-absolute ceo-bg-img-mobile">
   <img src="https://wezom.com/images/start-business/bg.jpg" alt="" className="img-fluid w-100" />
   </div>
   </div>
  </div>
</div>

<div className="position-absolute call-back-red-bg">
  <img src="https://wezom.com/images/start-business/bg.jpg" alt="" className="img-fluid w-100" />
</div>


      </div>
      <div className="col-md-12 col-lg-8 col-xl-8">
        <h2 className="display-3 text-white w-75">
        Start growing your business with us
        </h2>

         <form>

          <div className="row">
            <div className="col-lg-6">
            {/* Text input */}
          <div className="form-floating mb-4">
          <input className="form-control call-back-input" type="text" id="fl-text" placeholder="Your name" required />
          <label htmlFor="fl-text">Your name</label>
          </div>
            </div>
            <div className="col-lg-6">
              {/* Email input */}
          <div className="form-floating mb-4">
          <input className="form-control call-back-input" type="email" id="fl-text" placeholder="Your Email" />
          <label htmlFor="fl-text">Your Email</label>
          </div>
            </div>

            <div className="col-lg-6">
            {/* Phone input */}
          <div className="form-floating mb-4">
          <input className="form-control call-back-input" type="tel" id="fl-text" placeholder="Your Phone" />
          <label htmlFor="fl-text">Your Phone</label>
          </div>
            </div>
            <div className="col-lg-6">
              {/* Company input */}
          <div className="form-floating mb-4">
          <input className="form-control call-back-input" type="text" id="fl-text" placeholder="Your Company" />
          <label htmlFor="fl-text">Your Company</label>
          </div>
            </div>

            <div className="col-lg-12">
              {/* Company input */}
          <div className="form-floating mb-4">
          <input className="form-control call-back-input" type="text" id="fl-text" placeholder="Your Message" />
          <label htmlFor="fl-text">Your Message</label>
          </div>
            </div>

            <div className="col-lg-6">
            {/* Stacked checkboxes */}
            <div className="form-check">
              <input className="form-check-input call-back-input" type="checkbox" id="ex-check-1" />
              <label className="form-check-label" htmlFor="ex-check-1">We will add your info to our CRM for contacting you regarding your request. For more info please consult our <span className="text-warning">privacy policy</span> .</label>
            </div>

            </div>

            <div className="col-lg-6 text-end">
            {/* Warning solid button */}
          <button type="submit" className="btn btn-yellow-bg">Send Message</button>

            </div>



          </div>
          

          


         </form>

      </div>
    </div>
  </div>
</section>

</>
  )
}
