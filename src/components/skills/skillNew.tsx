import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Waypoint } from 'react-waypoint';
import { ActiveContext } from '../../App'
import skillsDataRaw from '../../constant/skillsData.json';
import './skillNew.css';

interface SkillItem {
    name: string;
    level: number;
    icon: string;
}

interface SkillsData {
    frontend: SkillItem[];
    backend: SkillItem[];
    other: SkillItem[];
}

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress
                    variant="determinate"
                    {...props}
                    sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        '& .MuiLinearProgress-bar': {
                            borderRadius: 5,
                            backgroundColor: 'var(--color-primary)',
                        }
                    }}
                />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography
                    variant="body2"
                    sx={{ color: 'var(--color-light)' }}
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

const SkillNew = () => {
    const context = React.useContext(ActiveContext)
    if (!context) {
        throw new Error('Experience must be used within an ActiveContext Provider')
    }

    const { active, setActive } = context
    const _handleEnter = () => {
        setActive('#skills')
    }

    // Cast the imported JSON to our SkillsData interface
    const skillsData: SkillsData = skillsDataRaw as SkillsData;

    // Initialize progress state with all skills set to 0
    const initialProgress: { [key: string]: number } = {};
    const allSkills = [
        ...skillsData.frontend,
        ...skillsData.backend,
        ...skillsData.other
    ];

    allSkills.forEach((skill: SkillItem) => {
        initialProgress[skill.name] = 0;
    });

    const [progress, setProgress] = React.useState<{ [key: string]: number }>(initialProgress);
    const [hasAnimated, setHasAnimated] = React.useState(false);

    React.useEffect(() => {
        if (!hasAnimated) {
            setHasAnimated(true);

            // Animate progress
            const timer = setTimeout(() => {
                const animatedProgress: { [key: string]: number } = {};
                allSkills.forEach((skill: SkillItem) => {
                    animatedProgress[skill.name] = skill.level;
                });
                setProgress(animatedProgress);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [hasAnimated]);

    const renderSkillCategory = (title: string, skills: SkillItem[]) => {
        return (
            <div className="experience__category">
                <h3>{title}</h3>
                <div className="experience__content">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-header">
                                {/* <span className="skill-icon">{skill.icon}</span> */}
                                <h4>{skill.name}</h4>
                            </div>
                            <LinearProgressWithLabel value={progress[skill.name] || skill.level} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section id='skills'>
            <Waypoint onEnter={_handleEnter} />
            <h5>What Skills I have</h5>
            <h2>My Skills</h2>
            <div className='container experience__container'>
                {renderSkillCategory("Frontend Development", skillsData.frontend)}
                {renderSkillCategory("Backend Development", skillsData.backend)}
                {renderSkillCategory("Other Technologies", skillsData.other)}
            </div>
        </section>
    )
}

export default SkillNew