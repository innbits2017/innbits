"use client"
import Link from 'next/link';

const BlogHero = ({posts}) => {

  return (
    <>
    <section
    className="dark-mode position-relative jarallax pb-xl-3"
    data-jarallax=""
    data-speed="0.4"
    >
  {/* Parallax img */}
  {/* Overlay bg */}
  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-70 zindex-1" />
  {/* Overlay content */}
  <div className="container position-relative pb-5 zindex-5">
    {/* Breadcrumb */}
    <nav className="py-4" aria-label="breadcrumb">
      <ol className="breadcrumb mb-0 py-3">
        <li className="breadcrumb-item">
          <a href="/">
            <i className="bx bx-home-alt fs-lg me-1" />
            Home
          </a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Blog
        </li>
      </ol>
    </nav>
    {/* Featured article */}
    <div className="row mb-xxl-5 py-md-4 py-lg-5">
      <div className="col-lg-6 col-md-7 pb-3 pb-md-0 mb-4 mb-md-5">
        <div className="mb-3 fs-lg text-light">
          <img
            src="https://silicon.createx.studio/assets/img/blog/flame.svg"
            width={24}
            alt="Flame icon"
            className="mt-n1 me-1"
          />
          Hot Topic
        </div>
        
        {
            posts.slice(0,1).map((post) =>{
                return (
                    <>
        <h1 className="display-5 pb-md-3">
          {post?.frontmatter?.title}
        </h1>
        <div className="d-flex flex-wrap mb-md-5 mb-4 pb-md-2 text-white">
          <div className="border-end border-light h-100 mb-2 pe-3 me-3">
            <span className="badge bg-faded-light fs-base">{post?.frontmatter?.category}</span>
          </div>
        </div>
        <Link href={`/blog/${post?.slug}`} className="btn btn-lg btn-primary">
          Read article
          <i className="bx bx-right-arrow-alt ms-2 me-n1 lead" />
        </Link>
                    </>
                )
            })
        }

      
      </div>
      {/* Articles slider */}
      <div className="col-lg-4 offset-lg-2 col-md-5">
        <div
          className="swiper overflow-hidden w-100 ms-n2 ms-md-0 pe-3 pe-sm-4 swiper-initialized swiper-vertical swiper-pointer-events swiper-free-mode swiper-backface-hidden"
          style={{ maxHeight: 405 }}
          data-swiper-options='{
          "direction": "vertical",
          "slidesPerView": "auto",
          "freeMode": true,
          "scrollbar": {
            "el": ".swiper-scrollbar"
          },
          "mousewheel": true
        }'
        >
          <div
            className="swiper-wrapper pe-md-2"
            id="swiper-wrapper-bfc1e34f10f4510692"
            aria-live="polite"
            style={{
              transitionDuration: "0ms",
              transform: "translate3d(0px, 0px, 0px)"
            }}
          >
            <div
              className="swiper-slide h-auto px-2 swiper-slide-active"
              role="group"
              aria-label="1 / 1"
            >
              <div className="row row-cols-md-1 row-cols-sm-2 row-cols-1 g-md-4 g-3">
                {/* Article */}
                {posts.slice(0,10).map((post) =>{
                    return (
                <div className="col">
                  <article className="card h-100 border-0 shadow-sm card-hover-primary">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <Link
                          href={`/blog/${post?.slug}`}
                          className="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2"
                        >
                          {post?.frontmatter?.category}
                        </Link>
                        <span className="fs-sm text-muted">{post?.frontmatter?.date}</span>
                      </div>
                      <h3 className="h5 mb-0">
                        <Link  href={`/blog/${post?.slug}`} className="stretched-link">
                          {post?.frontmatter?.title}
                        </Link>
                      </h3>
                    </div>
                    <div className="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-like fs-lg me-1" />
                        <span className="fs-sm">8</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-comment fs-lg me-1" />
                        <span className="fs-sm">4</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bx bx-share-alt fs-lg me-1" />
                        <span className="fs-sm">2</span>
                      </div>
                    </div>
                  </article>
                </div>
                    )
                })}
                {/* Article */}
              </div>
            </div>
          </div>
          <div className="swiper-scrollbar swiper-scrollbar-vertical">
            <div
              className="swiper-scrollbar-drag"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                height: "127.23px",
                transitionDuration: "0ms"
              }}
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
  <div
    id="jarallax-container-0"
    className="jarallax-container"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      zIndex: -100,
      clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)"
    }}
  >
    <div
      className="jarallax-img bg-dark opacity-70"
      style={{
        backgroundImage: 'url("https://silicon.createx.studio/assets/img/blog/single/cover-image.jpg")',
        objectFit: "cover",
        objectPosition: "50% 50%",
        maxWidth: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        pointerEvents: "none",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        marginTop: "-99.58px",
        transform: "translate3d(0px, 129.98px, 0px)"
      }}
      data-jarallax-original-styles="background-image: url(assets/img/blog/single/cover-image.jpg);"
    />
  </div>
    </section>
    </>
  )
}

export default BlogHero