import React, { useContext } from 'react'
import './about.css'
import { Waypoint } from 'react-waypoint'
import { ActiveContext } from '../../App'
import { Timeline } from '../../components/ui/timeline'
import { workExperienceData, educationData, WorkExperience, Education } from '../../constant/workingExperienceData'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/system';

function TabPanel(props: any) {
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

function a11yProps(index: number) {
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
    const context = useContext(ActiveContext)
    if (!context) {
        throw new Error('About must be used within an ActiveContext Provider')
    }

    const { active, setActive } = context
    const _handleEnter = () => {
        setActive('#about')
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: number) => {
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
                    <TabPanel style={{ maxWidth: "85%", overflow: 'auto' }} value={value} index={0}>
                        <div className="about__timeline">
                            <Timeline data={transformEducationData(educationData)} />
                        </div>
                    </TabPanel>
                    <TabPanel style={{ maxWidth: "85%", overflow: 'auto' }} value={value} index={1}>
                        <div className="about__timeline">
                            <Timeline data={transformWorkExperienceData(workExperienceData)} />
                        </div>
                    </TabPanel>
                </Box>
            </div>
        </section>
    )
}

// Transform the work experience data to match the Timeline component's expected structure
const transformWorkExperienceData = (data: WorkExperience[]) => {
    return data.map(item => ({
        title: `${item.position} at ${item.company}`,
        content: (
            <div className="about__timeline-content">
                <p><strong>Period:</strong> {item.period}</p>
                <p><strong>Responsibilities:</strong> {item.responsibilities}</p>
                <p><strong>Technologies:</strong> {item.technologies}</p>
            </div>
        )
    }))
}

// Transform the education data to match the Timeline component's expected structure
const transformEducationData = (data: Education[]) => {
    return data.map(item => ({
        title: item.degree,
        content: (
            <div className="about__timeline-content">
                <p><strong>Institution:</strong> {item.institution}</p>
                <p><strong>Period:</strong> {item.period}</p>
                <p>{item.description}</p>
            </div>
        )
    }))
}

export default About