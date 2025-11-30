import React, { useContext } from 'react'
import './working-experience.css'
import { Waypoint } from 'react-waypoint'
import { ActiveContext } from '../../App'
import { workExperienceData, WorkExperience } from '../../constant/workingExperienceData'
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab'
import {
    Work,
    Business,
    Schedule,
    Code,
    Computer,
    Web,
    DeveloperMode,
    Code as CodeIcon,
    Build,
    BusinessCenter,
    CorporateFare,
    Store,
    Apartment,
} from '@mui/icons-material'
import {
    Card,
    CardContent,
    Typography,
    Chip,
    Box,
    Avatar,
    useTheme
} from '@mui/material'

const WorkingExperience = () => {
    const context = useContext(ActiveContext)
    if (!context) {
        throw new Error('WorkingExperience must be used within an ActiveContext Provider')
    }

    const { active, setActive } = context
    const _handleEnter = () => {
        setActive('#about')
    }

    // State to track image loading errors
    const [imageErrors, setImageErrors] = React.useState<Set<number>>(new Set());

    // Handle image error
    const handleImageError = (index: number) => {
        setImageErrors(prev => new Set(prev).add(index));
    };

    // Icon mapping function to render appropriate icon based on string name
    const renderDynamicIcon = (iconName?: string) => {
        const iconProps = { sx: { color: '#1f1f38' } };

        switch (iconName) {
            case 'Computer':
                return <Computer {...iconProps} />;
            case 'Web':
                return <Web {...iconProps} />;
            case 'DeveloperMode':
                return <DeveloperMode {...iconProps} />;
            case 'Code':
                return <CodeIcon {...iconProps} />;
            case 'Build':
                return <Build {...iconProps} />;
            case 'BusinessCenter':
                return <BusinessCenter {...iconProps} />;
            case 'CorporateFare':
                return <CorporateFare {...iconProps} />;
            case 'Store':
                return <Store {...iconProps} />;
            case 'Apartment':
                return <Apartment {...iconProps} />;
            case 'Work':
            default:
                return <Business {...iconProps} />;
        }
    };

    // Render icon with fallback to Business icon if image fails to load
    const renderIconTimeline = (iconImage?: string, iconName?: string, index?: number) => {
        // If there's an image and it hasn't failed to load, show the image
        if (iconImage && index !== undefined && !imageErrors.has(index)) {
            return (
                <img
                    src={iconImage}
                    alt="Company Icon"
                    onError={() => handleImageError(index)}
                    style={{
                        width: '40px',
                        height: '40px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '2px solid #1f1f38'
                    }}
                />
            );
        }

        // Fallback to dynamic icon system with Business as default
        return renderDynamicIcon(iconName);
    };

    // Render icon with fallback to Business icon if image fails to load
    const renderIconCompany = (iconImage?: string, iconName?: string, index?: number) => {
        // If there's an image and it hasn't failed to load, show the image
        if (iconImage && index !== undefined && !imageErrors.has(index)) {
            return (
                <img
                    src={iconImage}
                    alt="Company Icon"
                    onError={() => handleImageError(index)}
                    style={{
                        width: '40px',
                        height: '40px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '2px solid #1f1f38'
                    }}
                />
            );
        }

        // Fallback to dynamic icon system with Business as default
        return <Business />;
    };

    return (
        <section id='about'>
            <Waypoint onEnter={_handleEnter} />
            <h5>My Professional Journey</h5>
            <h2>Working Experience</h2>
            <div className="container working-experience__container">
                <Timeline position="alternate">
                    {workExperienceData.map((item, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Schedule fontSize="small" sx={{ color: '#4db5ff' }} />
                                    <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{item.period}</span>
                                </Box>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot
                                    sx={{
                                        backgroundColor: item.iconImage && !imageErrors.has(index) ? 'transparent' : '#4db5ff',
                                        borderColor: item.iconImage && !imageErrors.has(index) ? 'transparent' : '#4db5ff',
                                        boxShadow: item.iconImage && !imageErrors.has(index) ? 'none' : '0 0 20px rgba(77, 181, 255, 0.5)',
                                        padding: '4px',
                                        width: '44px',
                                        height: '44px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        '&:hover': {
                                            backgroundColor: item.iconImage && !imageErrors.has(index) ? 'transparent' : 'rgba(77, 181, 255, 0.8)',
                                            transform: 'scale(1.1)',
                                            transition: 'all 400ms ease'
                                        }
                                    }}
                                >
                                    {renderIconTimeline("", item.icon, index)}
                                </TimelineDot>
                                <TimelineConnector
                                    sx={{
                                        background: 'linear-gradient(180deg, #4db5ff 0%, rgba(77, 181, 255, 0.3) 100%)',
                                        width: '2px'
                                    }}
                                />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Card
                                    sx={{
                                        backgroundColor: '#2c2c6c',
                                        border: '1px solid rgba(77, 181, 255, 0.3)',
                                        borderRadius: '1rem',
                                        transition: 'all 400ms ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 30px rgba(77, 181, 255, 0.3)',
                                            border: '1px solid rgba(77, 181, 255, 0.6)'
                                        }
                                    }}
                                >
                                    <CardContent sx={{ padding: '1.5rem' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <Avatar
                                                sx={{
                                                    backgroundColor: '#4db5ff',
                                                    color: '#1f1f38',
                                                    mr: 2,
                                                    width: 48,
                                                    height: 48,
                                                    boxShadow: '0 0 15px rgba(77, 181, 255, 0.5)'
                                                }}
                                            >
                                                {renderIconCompany(item.iconImage, item.icon, index)}
                                            </Avatar>
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    component="h3"
                                                    sx={{
                                                        fontWeight: '600',
                                                        color: '#fff',
                                                        fontSize: '1.1rem'
                                                    }}
                                                >
                                                    {item.position}
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{
                                                        color: 'rgba(255, 255, 255, 0.6)',
                                                        fontSize: '0.9rem'
                                                    }}
                                                >
                                                    {item.company}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box sx={{ mb: 2 }}>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    mb: 1,
                                                    fontWeight: '500',
                                                    color: '#4db5ff',
                                                    fontSize: '0.85rem'
                                                }}
                                            >
                                                Responsibilities:
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    lineHeight: 1.6,
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                    fontSize: '0.9rem'
                                                }}
                                            >
                                                {item.responsibilities}
                                            </Typography>
                                        </Box>

                                        <Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                <Code
                                                    fontSize="small"
                                                    sx={{
                                                        mr: 1,
                                                        color: '#4db5ff'
                                                    }}
                                                />
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontWeight: '500',
                                                        color: '#4db5ff',
                                                        fontSize: '0.85rem'
                                                    }}
                                                >
                                                    Technologies:
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {item.technologies.map((tech, techIndex) => (
                                                    <Chip
                                                        key={techIndex}
                                                        label={tech}
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: 'rgba(77, 181, 255, 0.1)',
                                                            color: '#4db5ff',
                                                            border: '1px solid rgba(77, 181, 255, 0.3)',
                                                            fontSize: '0.75rem',
                                                            fontWeight: '400',
                                                            '&:hover': {
                                                                backgroundColor: 'rgba(77, 181, 255, 0.2)',
                                                                border: '1px solid rgba(77, 181, 255, 0.5)'
                                                            }
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    )
}

export default WorkingExperience