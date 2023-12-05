import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";

const StatBox = ({ title, increase, icon, description }) => {
  const theme = useTheme();
  return (
    <Box
      gridColumn="span 3"
      gridRow="span 2"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
    >
      <FlexBetween>
        <Typography variant="h2" sx={{ color: theme.palette.secondary[100] }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>
      <FlexBetween gap="1rem">
        <Typography>{description}</Typography>
      </FlexBetween>
      <FlexBetween>
        <Typography
          variant="h5"
        >
          <b>Primary/preferred city:</b> New York, NY
        </Typography>
      </FlexBetween>
      <FlexBetween>
        <Typography
          variant="h5"
        >
          <b>Unacceptable:</b> Empire State, Gpo, Greeley Square,<br />
          Macys Finance, Manhattan, New York City, NY, Ny City, Nyc
        </Typography>
      </FlexBetween>
      <FlexBetween>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase}
        </Typography>
      </FlexBetween>
      <FlexBetween>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase}
        </Typography>
      </FlexBetween>
      <FlexBetween>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase}
        </Typography>
      </FlexBetween>
    </Box>
  );
};

export default StatBox;
