const blogFollowUs = () => {
    return (
        <div className='card my-3'>
            <div className='card-body'>
                <h5 className='mb-4'>Follow Us</h5>
                <a href='#' className='btn btn-icon btn-sm btn-secondary btn-linkedin me-2 mb-2'>
                    <i className='bx bxl-linkedin'></i>
                </a>
                <a href='#' className='btn btn-icon btn-sm btn-secondary btn-facebook me-2 mb-2'>
                    <i className='bx bxl-facebook'></i>
                </a>
                <a href='#' className='btn btn-icon btn-sm btn-secondary btn-twitter me-2 mb-2'>
                    <i className='bx bxl-twitter'></i>
                </a>
                <a href='#' className='btn btn-icon btn-sm btn-secondary btn-instagram me-2 mb-2'>
                    <i className='bx bxl-instagram'></i>
                </a>
                <a href='#' className='btn btn-icon btn-sm btn-secondary btn-behance me-2 mb-2'>
                    <i className='bx bxl-behance'></i>
                </a>                
                <div className="d-flex justify-content-start flex-column my-2">
                    <h6>Contact Us</h6>
                    <p>IN: <a href={`tel: +91 7353001000`} className="text-decoration-none text-dark">  +91 7353001000 </a></p>
                    <p>US: <a href={`tel: +91-9036082478`} className="text-decoration-none text-dark"> +91-9036082478</a></p>
                    <p>Sales:<a href="mailto:info@innbits.com" className="fw-medium text-decoration-none text-dark">info@innbits.com</a></p>
                </div>
            </div>


        </div>
    )

}

export default blogFollowUs