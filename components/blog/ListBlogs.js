'use client'

import React, { useEffect, useState } from 'react';
import BlogSidebar from '../../components/blog/sidebar';
import Pagination from '../../components/blog/pagination';


// Import Swiper styles

const ListBlogs = ({posts}) => {

  const [activeBlogPosts, setActiveBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogData, setBlogData] = useState(posts);
  const blogsPerPage = 10;

  const [currentPostPage, setCurrentPostPage] = useState(1);
  const [activePosts, setActivePosts] = useState([]);

  useEffect(() => {
    getActiveBlogPosts();
  }, [currentPage, blogData]);

  const getActiveBlogPosts = async () => {
    if (blogData) {
      const indexOfLastPage = currentPage * blogsPerPage;
      const indexOfFirstPage = indexOfLastPage - blogsPerPage;
      const blogResult = blogData && blogData.slice(indexOfFirstPage, indexOfLastPage);
      setActiveBlogPosts(blogResult);
    }
  };

  useEffect(() => {
    getActivePosts();
  }, [currentPostPage]);

  const getActivePosts = async () => {
    if (posts) {
      const lastindex = currentPostPage * 3;
      const firstindex = lastindex - 3;
      const result = posts && posts.slice(firstindex, lastindex);
      setActivePosts(result);
    }
  };

  const nextPage = () => {
    if (Math.ceil(posts.length / 2) > currentPostPage) {
      const page = currentPostPage + 1;
      setCurrentPostPage(page);
    } else if (Math.ceil(posts.length / 3) == currentPostPage) {
      setCurrentPostPage(1);
    }
  };

  const prevPage = () => {
    let page = currentPostPage;
    if (page > 1) {
      page = page - 1;
      setCurrentPostPage(page);
    }
  };

  const source = "blog"


  return (
    <>
     {/* <!-- Page title + Layout switcher --> */}
     <section className="">
     <div className='container mb-4 pb-1 pb-md-3'>
        <h1 className='mb-0 pt-5'>Our insights from experience</h1>
      </div>
      <div className='container'>
        <div className='row mb-2'>
          <div className='col-xl-9 col-lg-8'>
            <div className='pe-xl-5'>
            <div className="masonry-grid row row-cols-sm-2 row-cols-1 g-4">
      {activeBlogPosts.map(({ slug, frontmatter }) => (
        <div className="masonry-grid-item col pb-2 pb-lg-3" key={slug}>
          <article className="card border-0 bg-transparent">
            <div className="position-relative overflow-hidden rounded-3">
              <a href={`/blog/${slug}`}>
                <a className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
              </a>
              <a
                href={`/blog/${slug}`}
                className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Read later"
              >
                <i className="bx bx-bookmark"></i>
              </a>
              <img src={frontmatter?.blogImage} alt="blog-image" className="w-100" />
            </div>
            <div className="card-body pb-1 px-0">
              <a href={`/blog/${slug}`}>
                <a
                  style={{ backgroundColor: '#efc70d' }}
                  className="badge fs-sm text-dark shadow-info text-decoration-none mb-3"
                >
                  {frontmatter?.category}
                </a>
              </a>
              <h3 className="h4">
                <a href={`/blog/${slug}`}>
                  <a className="text-dark">{frontmatter?.title}</a>
                </a>
              </h3>
              <p className="mb-4 text-dark">{frontmatter?.description}</p>
              <div className="d-flex align-items-center text-dark">
                <div className="fs-sm border-end pe-3 me-3 text-dark">{frontmatter?.date}</div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>

              <Pagination posts={blogData.length} blogsPerPage={blogsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
          </div>
          <aside className='col-xl-3 col-lg-4 '>
            <BlogSidebar posts={posts} source={'home'} setBlogData={setBlogData} />
          </aside>
        </div>
      </div>
     </section>


       {/*recent blog section static */}
       <section className='mb-5 bg-secondary'>
           <div className="container">
           <div id='whatwedo'>
              <section className='py-5 pb-5 mb-md-3 mb-lg-5'>
                <div className='row justify-content-center text-center'>
                  <div className='col-xl-6 col-lg-7 col-md-8 col-sm-10'>
                    <h2 className='h1 mb-4'>Recent Blogs &amp; News</h2>
                  </div>
                </div>
                <div className='d-flex justify-content-end'>
                  <button
                    type='button'
                    className='btn btn-prev btn-icon btn-sm me-2'
                    disabled={currentPostPage === 1} 
                    onClick={() => {
                      prevPage();
                    }}
                  >
                    <i className='bx bx-chevron-left'></i>
                  </button>
                  <button
                    type='button'
                    className='btn btn-next btn-icon btn-sm ms-2'
                    onClick={() => {
                      nextPage();
                    }}
                  >
                    <i className='bx bx-chevron-right'></i>
                  </button>
                </div>
                <div className='row'>
                  {activePosts.map(({ slug, frontmatter }) => (
                    <div className='col-lg-4 col-md-6 mt-3' key={slug}>
                      <article className='card p-md-3 p-2 border-0 shadow-sm card-hover-primary h-100 mx-2'>
                        <div className='card-body pb-0'>
                          <img src={`${frontmatter?.blogImage}`} alt='blog-image' className='img-fluid rounded-3 mb-3 w-100' />
                          <div className='d-flex align-items-center justify-content-between mb-3'>
                            <a href={`blog/${slug}`} className='badge fs-sm text-nav bg-secondary text-decoration-none position-relative zindex-2'>
                              {frontmatter?.category}
                            </a>
                            <span className='fs-sm text-muted'>{frontmatter?.date}</span>
                          </div>
                          <h3 className='h4'>
                            <a href={`blog/${slug}`} className='stretched-link'>
                              {frontmatter?.title}
                            </a>
                          </h3>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </section>
            </div>
           </div>
          </section> 
          {/* recent blog section static  */}


    </>
  )
}

export default ListBlogs