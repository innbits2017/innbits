import React from 'react'




const casestudies= [
    {
        id: 1,
        image: 'https://wezom.com/storage/cases/list/IGQy4PpoNPzQAXHainwyAqumGV8pn5dR15qnq70H.png.webp?v=1683044988',
        category: 'Web Development',
        title: 'Billing CMS for the Energetic Company',
        description: 'Development of a CMS for accounting and management of financial transactions and billing of services provided by the company to its customers',
    },
    {
        id: 2,
        image: 'https://wezom.com/storage/cases/list/M165eV2JXapyb1tVWLqqjl967uF40qOH83ClMfke.png.webp?v=1680257363',
        category: 'Mobile Development',
        title: 'Billing CMS for the Energetic Company',
        description: 'Development of a CMS for accounting and management of financial transactions and billing of services provided by the company to its customers',
    },
    {
        id: 3,
        image: 'https://wezom.com/storage/cases/list/O9RHFuN91fVrKx9SzFZPuepuHArkgoLNbZyuGd0v.png.webp?v=1681764409',
        category: 'Android Development',
        title: 'Billing CMS for the Energetic Company',
        description: 'Development of a CMS for accounting and management of financial transactions and billing of services provided by the company to its customers',
    },
    {
        id: 4,
        image: 'https://wezom.com/storage/cases/list/X5xWEXtSROfNcjHuHkUEbj2kr9Xd6SEzTpr50yje.png.webp?v=1678464225',
        category: 'Full Stack Development',
        title: 'Billing CMS for the Energetic Company',
        description: 'Development of a CMS for accounting and management of financial transactions and billing of services provided by the company to its customers',
    },
]




const Casestudies = () => {
  return (
    <section className='bg-dark py-5'>
       <div className="container py-5">
        <div className="row">
            <div className="col-lg-8">
            <h2 className="display-3 text-white">
            CASE STUDIES
            </h2>
            <div className="category-btn">
                    {
                        casestudies.map((item) =>{
                            return (
                                <>
                                <button className="btn text-white casestudy-btn me-2">
                                 {item.category}
                                </button>
                                </>
                            )
                        })
                    }
            </div>
            </div>
            <div className="col-lg-4 text-end">
                <button className="btn btn-yellow-bg me-3">
                    All Cases 
                </button>
            </div>
        </div>

    <div className="row pt-5">
        {casestudies.map((item) =>{
            return (
                <div className="col-lg-6 mb-4">
                   <a href="/" className='text-decoration-none'>
                   <div className="card bg-dark border-0">
                    <div className="img-wrapper">
                    <img className="inner-img w-100" src={item.image} />
                    </div>
                    <h6 className="display-6">
                        {item.category}
                    </h6>
                    <h2 className='text-white'>{item.title}</h2>
                    <p>{item.description}</p>
                    </div>
                   </a>
                </div>
            )
        })}
    </div>

       </div>
    </section>
  )
}

export default Casestudies