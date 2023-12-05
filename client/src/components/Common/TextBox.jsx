import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const TextBox = ({ subtitle }) => {
    const theme = useTheme()
    return (
        <Box
            mt="2rem"
            className="card"
            display="flex"
            p="2rem"
            borderRadius="6rem"
            backgroundColor="#fdfdfd"
            border="2px solid #17171717"
            boxShadow="2px 2px 2px rgba(0, 0, 0, 0.2)"
            zIndex={1}>
            <Typography variant="h5" color={theme.palette.secondary[100]}

            >
                {subtitle}
            </Typography>
        </Box>

    )
}

export default TextBox