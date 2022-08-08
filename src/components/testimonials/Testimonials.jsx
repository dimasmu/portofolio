import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Show',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora optio quidem, nostrum earum praesentium non, vero odio eveniet laboriosam consequatur unde nam. Necessitatibus sed accusamus odit culpa impedit quisquam odio fugit laborum'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora optio quidem, nostrum earum praesentium non, vero odio eveniet laboriosam consequatur unde nam. Necessitatibus sed accusamus odit culpa impedit quisquam odio fugit laborum'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Bespite',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora optio quidem, nostrum earum praesentium non, vero odio eveniet laboriosam consequatur unde nam. Necessitatibus sed accusamus odit culpa impedit quisquam odio fugit laborum'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama Mcbrown',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora optio quidem, nostrum earum praesentium non, vero odio eveniet laboriosam consequatur unde nam. Necessitatibus sed accusamus odit culpa impedit quisquam odio fugit laborum'
  }
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        pagination={{
          type: "progressbar",
          clickable: true
        }}
        spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination]}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide>
                <article key={index} className='testimonial'>
                  <div className="client__avatar">
                    <img src={avatar} alt="Avatar One" />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                    {review}
                  </small>
                </article>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial