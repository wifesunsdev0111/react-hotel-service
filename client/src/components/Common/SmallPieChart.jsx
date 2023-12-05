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
import { ResponsivePie } from '@nivo/pie'

import {
    Box, useTheme,
} from "@mui/material";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const SmallPieChart = ({ title, data }) => {
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
                    <Box m="1rem 0"
                        display="flex"
                        gridColumn="span 6"
                        gridRow="span 2"
                        flexDirection="column"
                        justifyContent="space-between"
                        p="1.25rem 1rem"
                        flex="1 1 100%"
                        borderRadius="0.55rem">
                        <Box
                            mt="1rem"
                            pb="2rem"
                            height="18rem"
                            sx={{
                                color: theme.palette.secondary[500]
                            }}
                        >
                            <ResponsivePie
                                data={data}
                                theme={{
                                    fontSize: "1rem",
                                    textColor: theme.palette.secondary[100],
                                }}
                                margin={{ top: 30, right: 10, bottom: 30, left: 10 }}
                                innerRadius={0.5}
                                padAngle={0.7}
                                cornerRadius={3}
                                activeOuterRadiusOffset={8}
                                colors={{ scheme: 'set1' }}
                                borderWidth={1}
                                borderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.2
                                        ]
                                    ]
                                }}
                                arcLinkLabelsSkipAngle={10}
                                arcLinkLabelsTextColor="#ffd166"
                                arcLinkLabelsThickness={2}
                                arcLinkLabelsColor={{ from: 'color' }}
                                arcLabelsSkipAngle={10}
                                arcLabelsTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            2
                                        ]
                                    ]
                                }}
                                defs={[
                                    {
                                        id: 'dots',
                                        type: 'patternDots',
                                        background: 'inherit',
                                        color: 'rgba(255, 255, 255, 0.3)',
                                        size: 4,
                                        padding: 1,
                                        stagger: true
                                    },
                                    {
                                        id: 'lines',
                                        type: 'patternLines',
                                        background: 'inherit',
                                        color: 'rgba(255, 255, 255, 0.3)',
                                        rotation: -45,
                                        lineWidth: 6,
                                        spacing: 10
                                    }
                                ]}
                                fill={[
                                    {
                                        match: {
                                            id: 'ruby'
                                        },
                                        id: 'dots'
                                    },
                                    {
                                        match: {
                                            id: 'c'
                                        },
                                        id: 'dots'
                                    },
                                    {
                                        match: {
                                            id: 'go'
                                        },
                                        id: 'dots'
                                    },
                                    {
                                        match: {
                                            id: 'python'
                                        },
                                        id: 'dots'
                                    },
                                    {
                                        match: {
                                            id: 'scala'
                                        },
                                        id: 'lines'
                                    },
                                    {
                                        match: {
                                            id: 'lisp'
                                        },
                                        id: 'lines'
                                    },
                                    {
                                        match: {
                                            id: 'elixir'
                                        },
                                        id: 'lines'
                                    },
                                    {
                                        match: {
                                            id: 'javascript'
                                        },
                                        id: 'lines'
                                    }
                                ]}
                            />
                        </Box>
                    </Box>
                </CardMedia>
            </Card>
        </Box>

    );
}

export default SmallPieChart;