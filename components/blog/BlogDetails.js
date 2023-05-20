"use client"
import { useEffect, useState } from "react";
import md from 'markdown-it';
import BlogSidebar from "@components/blog/sidebar";



const BlogDetails = ({posts, frontmatter, content }) => {

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
      const lastindex = currentPostPage * 2;
      const firstindex = lastindex - 2;
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



  return (
      <>
       <div className='container mt-5'>
          <div className='row'>
            <div className='col-xl-9 col-lg-8'>
              <a href='#' className='badge fs-sm text-white btn-yellow-bg pt-2 shadow-info text-decoration-none mb-3'>
                {frontmatter.category}
              </a>
              <div dangerouslySetInnerHTML={{ __html: md().render(content) }} className="blog-post" /> 
            </div>
            <div className='col-xl-3 col-lg-4'>
              <div className="mt-4"> <BlogSidebar posts={posts} source={`blog`} /></div>
            </div>
          </div>
        </div>

         {/* blog section static */}
         <section className='bg-secondary'>
            <div className="container">
            <div className='px-2' id='whatwedo'>
              <div className='d-none d-lg-block'></div>
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
                    <div className='col-lg-6 col-md-6 mt-3'>
                      <article className='card p-md-3 p-2 border-0 shadow-sm card-hover-primary h-100 mx-2'>
                        <div className='card-body pb-0'>
                          <img src={`${frontmatter?.blogImage}`} alt='blog-image' className='img-fluid rounded-3 mb-3' />
                          <div className='d-flex align-items-center justify-content-between mb-3'>
                            <a href={`${slug}`} className='badge fs-sm text-nav btn-yellow-bg text-decoration-none position-relative zindex-2'>
                              {frontmatter?.category}
                            </a>
                            <span className='fs-sm text-muted'>{frontmatter?.date}</span>
                          </div>
                          <h3 className='h4'>
                            <a href={`${slug}`} className='stretched-link'>
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
          {/* blog section static  */}
      </>
  )
}

export default BlogDetails