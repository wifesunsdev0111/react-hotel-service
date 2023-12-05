// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ResponsiveLine } from '@nivo/line'
import {
    Box, useTheme,
} from "@mui/material";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const SmallLineChart = ({ title, data }) => {
    const theme = useTheme();
    return (
        <Box m="1rem 0"
            display="flex"
            gridColumn="span 6"
            gridRow="span 2"
            flexDirection="column"
            justifyContent="space-between"
            p="1.25rem 1rem"
            flex="1 1 100%"
            borderRadius="0.55rem">
            <Card className='card'>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            T
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={title}
                />
                <CardMedia>
                    <Box
                        mt="1rem"
                        pb="2rem"
                        height="24.6rem"
                        sx={{
                            color: theme.palette.secondary[500]
                        }}
                    >
                        <ResponsiveLine
                            data={data}
                            theme={{
                                fontSize: "1rem",
                                textColor: theme.palette.secondary[100],
                            }}
                            margin={{ top: 10, right: 30, bottom: 30, left: 60 }}
                            xScale={{ type: 'point' }}
                            yScale={{
                                type: 'linear',
                                min: 'auto',
                                max: 'auto',
                                stacked: true,
                                reverse: false
                            }}
                            yFormat=" >-.2f"
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                tickSize: 10,
                                tickPadding: 0,
                                tickRotation: 0,
                                legend: '',
                                legendOffset: 36,
                                legendPosition: 'middle'
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: '',
                                legendOffset: -40,
                                legendPosition: 'middle'
                            }}
                            colors={{ scheme: 'category10' }}
                            pointSize={10}
                            pointColor={{ theme: 'background' }}
                            pointBorderWidth={2}
                            pointBorderColor={{ from: 'serieColor' }}
                            pointLabelYOffset={-12}
                            useMesh={true}

                        />
                    </Box>
                </CardMedia>
            </Card>
        </Box>

    );
}


export default SmallLineChart;