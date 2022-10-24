import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";


// import Swiper core and required modules
import {Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar:AVTR1,
    name:'Intermediate Relational Database and SQL',
    certi:'https://www.coursera.org/account/accomplishments/certificate/RLZV4T9ARVX8',
    review:'An online non-credit project authorized by Coursera Project Network and offered through Coursera'
    
  },
  {
    avatar:AVTR1,
    name:'Interactivity with JavaScript',
    certi:'https://www.coursera.org/account/accomplishments/certificate/4XYUZXKET8Z9',
    review:'An online non-credit course authorized by University of Michigan and offered through Coursera'
  }
  , {
    avatar:AVTR1,
    name:'Front-End Web Development with React',
    certi:'https://www.coursera.org/account/accomplishments/certificate/9WXUR7WPDCFF',
    review:'An online non-credit course authorized by The Hong Kong University of Science and Technology and offered through Coursera'
  }
  , {
    avatar:AVTR1,
    name:'Front-End Web UI Frameworks and Tools: Bootstrap 4',
    certi:'https://www.coursera.org/account/accomplishments/certificate/VH4A8NJ6VMRN',
    review:'An online non-credit course authorized by The Hong Kong University of Science and Technology and offered through Coursera'
  },
  {
    avatar:AVTR1,
    name:'Crash Course on Python',
    certi:'https://www.coursera.org/account/accomplishments/certificate/YVQ47EWGPJ3L',
    review:'An online non-credit course authorized by Google and offered through Coursera'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonial">
      <section className="testimonials">
        <h5>Courses From Online Platform</h5>
        <h2>Certifications</h2>
        <Swiper className="container testimonials__container" 
              modules={[ Pagination,A11y]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }} >
          {data.map(({avatar,name,review,certi},index)=>{
            return(
              <SwiperSlide  key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="AVATAR ONE" />
            </div>
            <h5>{name}</h5>
            <small className="client__review">
             {review}
            </small>
            <a href={certi}><button className="btn btn-primary">Certificate</button></a>
          </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
    </section>
  );
};

export default Testimonials;
