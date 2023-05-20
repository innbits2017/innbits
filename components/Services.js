"use client"

import React, { useState } from 'react'


const services = [
    {
        id: 1,
        name: 'Blockchain Development',
        number: '01',
        content: 'Full-stack blockchain app development services, we assist startups and corporations in leveraging the blockchain’s decentralized network',
        image: 'https://cdn-bcppi.nitrocdn.com/yOvklEMEtIBFnRFqTdXKUypeOseqROKo/assets/static/optimized/rev-5312a89/wp-content/webp-express/webp-images/uploads/2022/08/blockchain.png.webp'
    },
    {
        id: 2,
        name: 'AI Development',
        number: '02',
        content: 'Our AI solutions helps you build scalable and intelligent systems that understand, learn, predict, adapt and potentially self-operative.',
        image: 'https://cdn-bcppi.nitrocdn.com/yOvklEMEtIBFnRFqTdXKUypeOseqROKo/assets/static/optimized/rev-5312a89/wp-content/webp-express/webp-images/uploads/2022/01/artificial-intelligence.png.webp'
    },
    {
        id: 3,
        name: 'Mobile Application Development',
        number: '03',
        content: 'Work with our app development team to create a unique and elegant mobile application design that incorporates the latest technologies and capabilities. ',
        image: 'https://cdn-bcppi.nitrocdn.com/yOvklEMEtIBFnRFqTdXKUypeOseqROKo/assets/static/optimized/rev-5312a89/wp-content/webp-express/webp-images/uploads/2022/01/coding-1-1.png.webp'
    },
    {
        id: 4,
        name: 'Web Development',
        number: '04',
        content: 'Looking for a responsive and an interactive website for your business? You are at the right place. We help you transform your business goals taking your business online.',
        image: 'https://cdn-bcppi.nitrocdn.com/yOvklEMEtIBFnRFqTdXKUypeOseqROKo/assets/static/optimized/rev-5312a89/wp-content/webp-express/webp-images/uploads/2022/01/web-programming.png.webp'
    },
    {
        id: 5,
        name: 'AR/MR/VR',
        number: '03',
        content: 'We help customers explore their world with AR apps & VR games. Our offered extended reality solution can take your gaming and marketing experience to next level.',
        image: 'https://cdn-bcppi.nitrocdn.com/yOvklEMEtIBFnRFqTdXKUypeOseqROKo/assets/static/optimized/rev-5312a89/wp-content/webp-express/webp-images/uploads/2022/01/ar.png.webp'
    },
    {
        id: 6,
        name: 'Blockchain Development',
        number: '04',
        content: 'Full-stack blockchain app development services, we assist startups and corporations in leveraging the blockchain’s decentralized network',
        image: 'https://cdn-bcppi.nitrocdn.com/yOvklEMEtIBFnRFqTdXKUypeOseqROKo/assets/static/optimized/rev-5312a89/wp-content/webp-express/webp-images/uploads/2022/08/blockchain.png.webp'
    },
]



const Services = () => {




const [index, setIndex] = useState(0);
const { name, number, image, content } = services[index];
const checkNumber = (number) => {
  if (number > services.length - 1) {
    return 0;
  }
  if (number < 0) {
    return services.length - 1;
  }
  return number;
};
const nextPerson = () => {
  setIndex((index) => {
    let newIndex = index + 1;
    return checkNumber(newIndex);
  });
};
const prevPerson = () => {
  setIndex((index) => {
    let newIndex = index - 1;
    return checkNumber(newIndex);
  });
};
const randomPerson = () => {
  let randomNumber = Math.floor(Math.random() * services.length);
  if (randomNumber === index) {
    randomNumber = index + 1;
  }
  setIndex(checkNumber(randomNumber));
};




  return (
    <section className="services-sec my-5">
        <div className="container">
           <div className="row g-5">
           <div className="col-lg-3">
                <h2 className="display-4">Services</h2>
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quis sequi iure cumque libero atque nesciunt sit nisi facere. Dolorem accusamus, saepe quia necessitatibus dolor eligendi sunt eaque aliquam error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laborum iusto quidem dolorum harum quis facere! Harum tempore eaque ut?</p>
            </div>
            <div className="col-lg-5">
                <div className='service-content-box'>
                {
                    services.map((service) =>{
                        return (
                            <div className="service-content">
                            <h2 className='display-2 service-number'>{service.number}</h2>
                            <h6 className='service-heading'>{service.name}</h6>
                            </div>
                            )
                        })
                    }
                    </div>
            </div>
            <div className="col-lg-4">
           
                            <div className="service-right-box rounded h-100">
                                 <div className="service-right-img text-center pt-3">
                                    <img src={image} alt="" className='service-img-right' />
                                 </div>
                                 <div className="service-right-content mt-5">
                                  <h4 className='text-white'>{name}</h4>
                                  <p className='text-white'>{content}</p>
                                 </div>
                                 <div className="service-right-btns mt-5 d-flex justify-content-between">
                                  <button className="btn btn-info" onClick={prevPerson}>Left</button>
                                  <button className="btn btn-info" onClick={nextPerson}>Right</button>
                                 </div>
                            </div>
                           
            </div>
           </div>
        </div>
    </section>
  )
}

export default Services