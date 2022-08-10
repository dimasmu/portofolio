import React, { useContext } from 'react'
import './about.css'
import { Waypoint } from 'react-waypoint';
import { ActviveContext } from '../../App'


import { FaUserGraduate } from 'react-icons/fa'
import { AiOutlineHistory } from 'react-icons/ai'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/system';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

const About = () => {
  const { active, setActive } = useContext(ActviveContext)
  const _handleEnter = () => {
    setActive('#about')
  }
  const _handleLeave = () => {
    setActive('#about')
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id='about'>
      <Waypoint onEnter={_handleEnter} />
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container">
        <Box
          sx={{
            "& button": {
              color: "white"
            },
            "& button:focus": {
              color: "white",
              backgroundColor: "#4db5ff"
            },
            "& button.Mui-selected": {
              color: "white",
              backgroundColor: "#4db5ff"
            },
            flexGrow: 1,
            bgcolor: '#2c2c6c',
            display: 'flex',
            height: 360,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ backgroundColor: '#2c2c6c', borderRight: 2, borderColor: 'divider' }}
          >
            <Tab label="Education" {...a11yProps(0)} style={{ minWidth: "50%" }} />
            <Tab label="Working History" {...a11yProps(1)} style={{ minWidth: "90%" }} />
          </Tabs>
          <TabPanel style={{ maxWidth: "85%", overflow: 'auto' }} value={value} index={0} variant="scrollable">
            <div className="resume-screen-container">
              <div class="resume-heading">
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                  <span>Dian nuswantoro university, Indonesia</span>
                  <div class="heading-date">2014-2018</div>
                </div>
                <div class="resume-sub-heading"><span>BACHELOR OF SCIENCE INFORMATION TECHNOLOGY</span></div>
                <div class="resume-heading-description">
                  <span>
                    an informatics engineering student graduated in 2018 with a GPA of 3.37, the thesis I am writing is entitled “Bitcoin price prediction with backpropagation algorithm”. This final project I made aims for crypto investors, especially in the bitcoin market, to be able to make price predictions based on the data collected
                  </span>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel style={{ maxWidth: "85%", overflow: 'auto' }} value={value} index={1}>
            <div className="resume-screen-container">
              <div class="resume-heading">
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                  <span>Pt. Mutiara Solusindo</span>
                  <div class="heading-date">2019-2021</div>
                </div>
                <div class="resume-sub-heading"><span>FULLSTACK DEVELOPER</span></div>
                <div class="resume-heading-description">
                  <span>
                    Responsible : Build application for lottemart HRIS
                    <br></br>Technology : Bootstrap, jquery, css, html, javascript, JSP, spring mvc, HQL, Sql server/Postgresql
                  </span>
                </div>
              </div>
            </div>
            <div className="resume-screen-container" style={{ marginTop: "1rem" }}>
              <div class="resume-heading">
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                  <span>PT. Pro Sistimatika Automasi</span>
                  <div class="heading-date">2021-2022</div>
                </div>
                <div class="resume-sub-heading"><span>FULLSTACK DEVELOPER</span></div>
                <div class="resume-heading-description">
                  <span>
                    Responsible : Build application for Ministry of Trade of the Republic of Indonesia <br></br>
                    Technology: Node JS (express, sequelize, toad scheduler, Jspdf), React JS(react route dom, react hook, leaflet, primeface), postgresql
                  </span>
                </div>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
      <Waypoint onLeave={_handleLeave}/>
    </section>
  )
}

export default About