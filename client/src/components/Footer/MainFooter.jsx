import React from "react";
import {
  Typography,
  useTheme,
  AppBar,
  Toolbar,
  Grid,
  Paper,
  IconButton
} from "@mui/material";
import FlexBetween from "../Common/FlexBetween";
import { styled } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const MainFooter = () => {
  const theme = useTheme();
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "left",
    background: "none",
    boxShadow: "none",
    fontFamily: "Montserrat-Regular",
    fontSize: "18px",
    color: "#b3b3b3"
  }));

  return (
    <AppBar
      sx={{
        display: { xs: "flex", md: "flex" },
        position: "static",
        background: "#f0f0f0",
        boxShadow: "none",
        backgroundColor: "#333333"
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "center",
          marginTop: "3rem",
          marginBottom: "1rem",
          color: theme.palette.primary[500],
          display: { xs: "none", md: "flex" }
        }}
      >
        {/* LEFT SIDE */}
        <Grid container spacing={1}>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}>
            <Item>Home</Item>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Item>Extract all by Hotel</Item>
          </Grid>
          <Grid item xs={5}>
            <Item>
              Data sources include www.booking.com, www.agoda.com, and
              www.makemytrip.com.
            </Item>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}>
            <Item>Extract all by Hotel</Item>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Item>Price comparison</Item>
          </Grid>
          <Grid item xs={5}>
            <IconButton component="a" href="https://twitter.com">
              <Twitter
                sx={{
                  color: theme.palette.primary[500],
                  fontSize: "2rem"
                }}
              ></Twitter>
            </IconButton>
            <IconButton component="a" href="https://www.facebook.com">
              <FacebookIcon
                sx={{
                  color: theme.palette.primary[500],
                  fontSize: "2rem"
                }}
              >
                <Link></Link>
              </FacebookIcon>
            </IconButton>
            <IconButton component="a" href="https://www.linkedin.com">
              <LinkedInIcon
                sx={{
                  color: theme.palette.primary[500],
                  fontSize: "2rem"
                }}
              ></LinkedInIcon>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
      <Toolbar
        sx={{
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          backgroundColor: "#4d4d4d"
        }}
      >
        <FlexBetween height="0.1rem">
          <Typography
            variant="body2"
            color="inherit"
            sx={{ fontSize: "18px", fontFamily: "OpenSans-Medium" }}
          >
            © {new Date().getFullYear()} World Wide Hotels
          </Typography>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default MainFooter;
