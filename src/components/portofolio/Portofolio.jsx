import React from 'react'
import './portofolio.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import INATRADE1 from '../../assets/ip_1.png'
import INATRADE2 from '../../assets/ip_2.png'
import INATRADE3 from '../../assets/ip_3.png'
import INATRADE4 from '../../assets/ip_4.png'
import INATRADE5 from '../../assets/ip_5.png'

import ESKA1 from '../../assets/eska1.png'
import ESKA2 from '../../assets/eska2.png'
import ESKA3 from '../../assets/eska3.png'
import ESKA4 from '../../assets/eska4.png'
import ESKA5 from '../../assets/eska5.png'

const Portofolio = () => {
  const data = [
    {
      id: 1,
      image: [
        INATRADE1, INATRADE2, INATRADE3, INATRADE4, INATRADE5
      ],
      title: 'INATRADE KEMENDAG (Project Base)',
      github: '#',
      demo: '#',
      content: 'The INATRADE application is one of the export facilitation/facilities managed by the Ministry of Trade of the Republic of Indonesia, an application used to apply for export and import permits. To be able to access the application, the first thing to do is register a company to get Access Rights.'
    },
    {
      id: 1,
      image: [
        ESKA1, ESKA2, ESKA3, ESKA4, ESKA5
      ],
      title: 'ESKA KEMENDAG (Project Base)',
      github: '#',
      demo: '#',
      content: 'the Eska application is made to support the certification process of origin of goods for both export and import. The main function of this application is to issue a certificate of origin of the goods by an agency called IPSKA'
    }
  ]
  console.log("tes");
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo, content }) => {
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
                <p>{content}</p>
                {/* <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div> */}
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portofolio