import React from 'react'
import './portofolio.css'
import portfolioData from './Porto.json';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";

const Portofolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          portfolioData.map(({ id, image, title, github, demo, content }) => {
            return (
              <article key={id} className='portfolio__item'>
                <Swiper className='portfolio__item-image'
                  pagination={{
                    type: "progressbar",
                    clickable: true
                  }}
                  spaceBetween={40}
                  slidesPerView={1}
                  modules={[Pagination]}
                >
                  {
                    image.map((data, index) => {
                      return (
                        <SwiperSlide>
                          <img src={data} alt={index + 1} />
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
                <h3>{title}</h3>
                <p style={{ minHeight: '10rem' }}>{content}</p>
                <div className="portfolio__item-cta" style={{ marginTop: '1rem' }}>
                  {github !== "#" &&
                    < a href={github} className='btn' target='_blank'>Github</a>
                  }
                  {demo !== "#" &&
                    <a href={demo} className='btn btn-primary' target='_blank'>Link</a>
                  }
                </div>
              </article>
            )
          })
        }
      </div>
    </section >
  )
}

export default Portofolio