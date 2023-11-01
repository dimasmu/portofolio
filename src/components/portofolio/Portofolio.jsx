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
import { Button, createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

const blueTheme = createTheme({
  palette: {
    warning: {
      light: '#ffb74d',
      main: '#ffa726',
      dark: '#f57c00'
    },
  },
});

const Portofolio = () => {

  const btnSkill = {
    bgcolor: 'warning.main',
    color: 'black',
    marginTop: '0.5rem',
    marginRight: '0.5rem',
    '&:hover': {
      bgcolor: 'warning.light', // Change the background color on hover
      color: 'black', // Change the text color on hover
    },
  };

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          portfolioData.map(({ id, image, skills, title, github, demo, content }) => {
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
                <p className='portofolio-content'>{content}</p>
                <ThemeProvider theme={blueTheme}>
                  <p className='portofolio-skill'>
                    {
                      skills && skills.length > 0 && skills.map((data, index) => (
                        <Button
                          key={index}
                          variant="contained"
                          disableElevation
                          sx={btnSkill}
                          size="small"
                        >
                          {data}
                        </Button>
                      ))
                    }
                  </p>
                </ThemeProvider>
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