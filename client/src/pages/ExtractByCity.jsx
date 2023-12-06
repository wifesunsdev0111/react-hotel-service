import { React, useState } from "react";
import {
  Box,
  useMediaQuery,
  Button,
  Paper,
  InputBase,
  Typography,
  useTheme,
  Grid
} from "@mui/material";

import Header from "../components/Common/Header.jsx";
import background from "../assets/images/background-city.jpg";
import booking from "../assets/images/booking.png";
import agoda from "../assets/images/agoda.png";
import makemytrip from "../assets/images/makemytrip.png";
import { Search } from "@mui/icons-material";
import DataTable from "../components/Common/DataTable.tsx";
import {
  useGetZipCodesQuery,
  useGetPopularZipCodesQuery,
  useGetRecentZipCodesQuery
} from "../services/api/api.js";
import isEmpty from "../utils/isEmpty.jsx";

const ExtractByCity = () => {
  const [searchValue, setSearchValue] = useState("start search");
  const [inputValue, setInputValue] = useState("");

  const { data: recentZipCodesData } = useGetRecentZipCodesQuery();
  const { data: popularZipCodeData } = useGetPopularZipCodesQuery();

  const { data } = useGetZipCodesQuery({
    searchValue
  });

  const handleButtonClick = () => {
    if (inputValue === "") {
      setSearchValue("start search");
    } else {
      setSearchValue(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent form submission and page reload
    // Process the input value or perform any other necessary action
    if (inputValue === "") {
      setSearchValue("start search");
    } else {
      setSearchValue(inputValue);
    }
  };

  //Search by State info click
  const handleStateSearch = (data) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth" // Optionally, you can add smooth scrolling behavior
    });
    setInputValue(data);
    setSearchValue(data);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const theme = useTheme();

  return (
    <Box mt="8rem">
      <Box
        display="grid"
        backgroundColor="#f9f9f9"
        gridTemplateColumns="repeat(12, 1fr)"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12"
          }
        }}
      >
        <Box
          gridColumn="span 12"
          sx={{
            backgroundColor: "#f9f9f9 !important",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh" // Adjust the height as needed
          }}
        >
          <Box pt="6.5rem">
            <Typography
              fontSize="52px"
              color={theme.palette.secondary[100]}
              fontFamily="font-header"
              textAlign="center"
              sx={{ mb: "5px" }}
            >
              Extract all hotels based on City Name or City ID
            </Typography>
          </Box>
          <Box
            mt="4rem"
            sx={{ display: { xs: "none", md: "flex" } }}
            alignItems="center"
            justifyContent="center"
          >
            <Paper
              component="form"
              onSubmit={handleFormSubmit}
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 700,
                height: 75,
                backgroundColor: "#fff",
                color: "#222",
                borderRadius: "1rem 0 0 1rem",
                boxShadow: "#222 0px 0px 5px 0px"
              }}
            >
              <InputBase
                value={inputValue}
                onChange={handleInputChange}
                sx={{ ml: 1, flex: 1, color: "#222", fontSize: "1.5rem" }}
                placeholder="Input City Name or City ID"
              />
            </Paper>
            <Button
              sx={{
                height: "4.8rem",
                width: "10rem",
                borderRadius: "0 1rem 1rem 0",
                backgroundColor: "#ed1c24",
                color: "#fff",
                fontSize: "1.5rem",
                textTransform: "none",
                boxShadow: "#222 1px 0px 5px 0px"
              }}
              onClick={handleButtonClick}
            >
              <Search sx={{ fontSize: "1.8rem", fontWeight: "bold" }} />
              Search
            </Button>
          </Box>
          <Box
            mt="4rem"
            sx={{ display: { xs: "flex", md: "none" } }}
            alignItems="center"
            justifyContent="center"
          >
            <Paper
              component="form"
              onSubmit={handleFormSubmit}
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 300,
                height: 50,
                backgroundColor: "#fff",
                color: "#666666",
                borderRadius: "1rem",
                boxShadow: "#222 0px 0px 5px 0px"
              }}
            >
              <InputBase
                value={inputValue}
                onChange={handleInputChange}
                sx={{ ml: 1, flex: 1, color: "#222", fontSize: "1rem" }}
                placeholder="Search..."
              />
              <Search sx={{ fontSize: "1.8rem", fontWeight: "bold" }} />
            </Paper>
          </Box>
        </Box>
      </Box>
      <Box
        p="6rem"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12"
          }
        }}
      >
        <Box pb="2rem" gridColumn="span 12">
          <Header title="Search Results" />
        </Box>
        {!isEmpty(data) &&
          !isEmpty(data.message) &&
          searchValue !== "start search" &&
          data.message === "no match" && (
            <Box
              sx={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center"
              }}
            >
              {isEmpty(data.result) && (
                <Box
                  m="6rem"
                  backgroundColor="rgb(252, 237, 237)"
                  borderRadius="1rem"
                  textAlign="center"
                  justifyContent="center"
                >
                  <Typography
                    fontSize="1.3rem"
                    color="red"
                    fontFamily="font-header"
                    textAlign="center"
                    justifyContent="center"
                    sx={{ p: "1rem" }}
                  >
                    No results found for that location
                  </Typography>
                </Box>
              )}
            </Box>
          )}

        {data !== undefined &&
          data.message !== "no match" &&
          data.message !== "start search" && (
            <Box
              m="6rem"
              textAlign="center"
              alignContent="center"
              justifyContent="center"
            >
              <DataTable rows={data}></DataTable>
            </Box>
          )}
      </Box>
      <Box
        p="6rem"
        display="grid"
        backgroundColor="#f9f9f9"
        gridTemplateColumns="repeat(12, 1fr)"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12"
          }
        }}
      >
        <Box pb="2rem" gridColumn="span 12">
          <Header title="Featured In" />
        </Box>
        <Box gridColumn="span 12">
          <Box
            display="grid"
            backgroundColor="#f9f9f9"
            gridTemplateColumns="repeat(12, 1fr)"
            sx={{
              "& > div": {
                gridColumn: isNonMediumScreens ? undefined : "span 12"
              }
            }}
          >
            <Box gridColumn="span 4" textAlign="center" justifyContent="center">
              <img
                className="image-cursor"
                alt="booking"
                src={booking}
                onClick={() => window.open("https://booking.com", "_blank")}
              ></img>
            </Box>
            <Box gridColumn="span 4" textAlign="center" justifyContent="center">
              <img
                className="image-cursor"
                src={agoda}
                alt="agoda"
                onClick={() => window.open("https://agoda.com", "_blank")}
              ></img>
            </Box>
            <Box gridColumn="span 4" textAlign="center" justifyContent="center">
              <img
                className="image-cursor"
                src={makemytrip}
                alt="makemytrip"
                onClick={() => window.open("https://makemytrip.com", "_blank")}
              ></img>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        p="6rem"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12"
          }
        }}
      >
        <Box pb="2rem" gridColumn="span 12">
          <Header title="Popular City Searches" />
        </Box>
        <Box
          mt="3rem"
          gridColumn="span 12"
          textAlign="center"
          justifyContent="center"
        >
          {!isEmpty(popularZipCodeData) &&
            !isEmpty(popularZipCodeData.datas) && (
              <Grid
                container
                spacing={{ xs: 0, md: 0 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {popularZipCodeData.datas.map((data, index) => (
                  <Grid
                    item
                    xs={2}
                    sm={1.3}
                    md={1.3}
                    key={index}
                    sx={{ backgroundColor: "none !important" }}
                  >
                    <Button
                      sx={{ fontSize: "1.2rem", color: "#666666" }}
                      onClick={() => handleStateSearch(data.zip)}
                    >
                      {data.zip}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            )}
        </Box>
      </Box>
      <Box
        p="6rem"
        display="grid"
        backgroundColor="#f8f9fa"
        gridTemplateColumns="repeat(12, 1fr)"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12"
          }
        }}
      >
        <Box pb="2rem" gridColumn="span 12">
          <Header title="Recent City Searches" />
        </Box>
        <Box
          mt="3rem"
          gridColumn="span 12"
          textAlign="center"
          justifyContent="center"
        >
          {!isEmpty(recentZipCodesData) &&
            !isEmpty(recentZipCodesData.datas) && (
              <Grid
                container
                spacing={{ xs: 0, md: 0 }}
                columns={{ xs: 4, sm: 8, md: 12, backgroundColor: "#f9f9f9" }}
              >
                {recentZipCodesData.datas.map((zipCode, index) => (
                  <Grid
                    item
                    xs={2}
                    sm={1.3}
                    md={1.3}
                    key={index}
                    sx={{ backgroundColor: "#f9f9f9" }}
                  >
                    <Button
                      sx={{ fontSize: "1.2rem", color: "#666666" }}
                      onClick={() => handleStateSearch(zipCode.zip)}
                    >
                      {zipCode.zip}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            )}
        </Box>
      </Box>
    </Box>
  );
};

export default ExtractByCity;
