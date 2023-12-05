import { Typography, Box, useTheme } from "@mui/material";

const ChartHeader = ({ title, subtitle }) => {
    const theme = useTheme();
    return (
        <Box>
            <Typography
                variant="h3"
                color={theme.palette.secondary[100]}
                fontWeight="bold"
                sx={{ mb: "5px" }}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={theme.palette.secondary[300]}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default ChartHeader;
