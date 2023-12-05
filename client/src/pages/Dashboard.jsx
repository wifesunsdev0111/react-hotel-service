import { React, useState } from "react";
import {
  Box,
  useMediaQuery,
  Button,
  Paper,
  InputBase,
  Typography,
  useTheme,
  Grid,
  Alert,
  AlertTitle,
  Stack
} from "@mui/material";

import Header from "../components/Common/Header";
import firstBackground from "../assets/images/first-background.png";
import booking from "../assets/images/booking.png";
import agoda from "../assets/images/agoda.png";
import makemytrip from "../assets/images/makemytrip.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Download } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import DataTable from "../components/Common/DataTable.tsx";
import {
  useGetZipCodesQuery,
  useGetPopularZipCodesQuery,
  useGetRecentZipCodesQuery
} from "../services/api/api";
import CircularProgress from "@mui/material/CircularProgress";
import isEmpty from "../utils/isEmpty";

const Dashboard = () => {
  const stateData = [
    [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida"
    ],
    [
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana"
    ],
    [
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska"
    ],
    [
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma"
    ],
    [
      "Oregon",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah"
    ],
    [
      "Vermont",
      "Virginia",
      "Washington",
      "Washington, DC",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ]
  ];

  const [searchValue, setSearchValue] = useState("start search");
  const [inputValue, setInputValue] = useState("");

  const { data: recentZipCodesData, isLoading: recentZipCodesLoading } =
    useGetRecentZipCodesQuery();
  const { data: popularZipCodeData, isLoading: popularZipCodesLoading } =
    useGetPopularZipCodesQuery();

  const { data, isLoading } = useGetZipCodesQuery({
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

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: "60px"
  }));

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
            backgroundImage: `url(${firstBackground})`,
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
              Download All Hotel Informations
            </Typography>
          </Box>
          <Box
            mt="4rem"
            sx={{ display: { xs: "none", md: "flex" } }}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              sx={{
                height: "4.8rem",
                width: "34vw",
                borderRadius: "1rem",
                backgroundColor: "#ed1c24",
                color: "#fff",
                fontSize: "1.5rem",
                textTransform: "none",
                boxShadow: "#222 1px 0px 5px 0px"
              }}
              onClick={handleButtonClick}
            >
              <Download sx={{ fontSize: "1.8rem", fontWeight: "bold" }} />
              Download All
            </Button>
          </Box>
          <Box
            mt="4rem"
            sx={{ display: { xs: "flex", md: "none" } }}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              sx={{
                height: "4.8rem",
                width: "60%",
                borderRadius: "1rem",
                backgroundColor: "#ed1c24",
                color: "#fff",
                fontSize: "1.5rem",
                textTransform: "none",
                boxShadow: "#222 1px 0px 5px 0px"
              }}
              onClick={handleButtonClick}
            >
              <Download sx={{ fontSize: "1.8rem", fontWeight: "bold" }} />
              Download All
            </Button>
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
          <Header title="All Hotel Informations" />
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
    </Box>
  );
};

export default Dashboard;
