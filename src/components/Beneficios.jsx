import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function Beneficios() {
    return (
        <Timeline position="alternate" sx={{marginTop: "8rem", marginBottom: "8rem"}}>
            <TimelineItem>
                {/* <TimelineOppositeContent color="text.secondary">
                    09:30 am
                </TimelineOppositeContent> */}
                <TimelineSeparator sx={{ height: '300px' }}>
                    <TimelineDot sx={{background: "#07182E"}}>
                        Reign
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Box className='card-line'>
                        <Typography className='h2-line'>
                            Aprenda sobre Reinos
                        </Typography>
                        <Typography className='p-line'>
                            Não deixe para depois
                        </Typography>
                    </Box>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                {/* <TimelineOppositeContent color="text.secondary">
                    10:00 am
                </TimelineOppositeContent> */}
                <TimelineSeparator sx={{ height: '300px' }}>
                    <TimelineDot sx={{background: "#07182E"}}>
                        Reign
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Box className='card-line' sx={{ position: 'relative', left: '480px' }}>
                        <Typography className='h2-line'>
                            Imersão em reinados
                        </Typography>
                        <Typography className='p-line'>
                            Explore cada reino
                        </Typography>
                    </Box>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                {/* <TimelineOppositeContent color="text.secondary">
                    12:00 am
                </TimelineOppositeContent> */}
                <TimelineSeparator sx={{ height: '300px' }}>
                    <TimelineDot sx={{background: "#07182E"}}>
                        Reign
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Box className='card-line'>
                        <Typography className='h2-line'>
                            Comunidade
                        </Typography>
                        <Typography className='p-line'>
                            Maior comunidade do país
                        </Typography>
                    </Box>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                {/* <TimelineOppositeContent color="text.secondary">
                    9:00 am
                </TimelineOppositeContent> */}
                <TimelineSeparator>
                    <TimelineDot sx={{background: "#07182E"}}>
                        Reign
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Box className='card-line' sx={{ position: 'relative', left: '480px' }}>
                        <Typography className='h2-line'>
                            Acesso vitalício
                        </Typography>
                        <Typography className='p-line'>
                            Tenha acesso para sempre
                        </Typography>
                    </Box>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
