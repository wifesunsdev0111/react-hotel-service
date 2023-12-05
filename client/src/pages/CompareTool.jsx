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
import { Search } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import DataTable from "../components/Common/DataTable.tsx";
import {
  useGetZipCodesQuery,
  useGetPopularZipCodesQuery,
  useGetRecentZipCodesQuery
} from "../services/api/api";
import CircularProgress from "@mui/material/CircularProgress";
import isEmpty from "../utils/isEmpty";
import LineChart from "../components/Common/LineChart.jsx";
import BarChart from "../components/Common/BarChart.jsx";
import PieChartBottom from "../components/Common/PieChartBottom.jsx";

const CompareTool = () => {
  const barchartData = [
    {
      xname: "booking.com",
      "booking.com": 124,
      "1939Color": "hsl(68, 70%, 50%)"
    },
    {
      xname: "makemytripe.com",
      "makemytripe.com": 234,
      "1940sColor": "hsl(292, 70%, 50%)"
    },
    {
      xname: "agoda.com",
      "agoda.com": 143,
      sandwichColor: "hsl(290, 70%, 50%)"
    }
  ];

  const barchartKey = ["booking.com", "makemytripe.com", "agoda.com"];

  const lineData = [
    {
      id: "booking.com",
      color: "hsl(237, 70%, 50%)",
      data: [
        {
          x: "hotel1",
          y: 65
        },
        {
          x: "hotel2",
          y: 294
        },
        {
          x: "hotel3",
          y: 236
        },
        {
          x: "hotel4",
          y: 165
        },
        {
          x: "hotel5",
          y: 183
        },
        {
          x: "hotel6",
          y: 217
        },
        {
          x: "hotel7",
          y: 296
        },
        {
          x: "hotel8",
          y: 105
        },
        {
          x: "hotel9",
          y: 289
        },
        {
          x: "hotel10",
          y: 108
        },
        {
          x: "hotel11",
          y: 155
        },
        {
          x: "hotel12",
          y: 67
        }
      ]
    },
    {
      id: "agoda.com",
      color: "hsl(51, 70%, 50%)",
      data: [
        {
          x: "hotel1",
          y: 34
        },
        {
          x: "hotel2",
          y: 34
        },
        {
          x: "hotel3",
          y: 141
        },
        {
          x: "hotel4",
          y: 299
        },
        {
          x: "hotel5",
          y: 28
        },
        {
          x: "hotel6",
          y: 23
        },
        {
          x: "hotel7",
          y: 143
        },
        {
          x: "hotel8",
          y: 157
        },
        {
          x: "hotel9",
          y: 226
        },
        {
          x: "hotel10",
          y: 225
        },
        {
          x: "hotel11",
          y: 165
        },
        {
          x: "hotel12",
          y: 298
        }
      ]
    },
    {
      id: "makemytipe.com",
      color: "hsl(332, 70%, 50%)",
      data: [
        {
          x: "hotel1",
          y: 164
        },
        {
          x: "hotel2",
          y: 85
        },
        {
          x: "hotel3",
          y: 31
        },
        {
          x: "hotel4",
          y: 2
        },
        {
          x: "hotel5",
          y: 132
        },
        {
          x: "hotel6",
          y: 139
        },
        {
          x: "hotel7",
          y: 285
        },
        {
          x: "hotel8",
          y: 46
        },
        {
          x: "hotel9",
          y: 32
        },
        {
          x: "hotel10",
          y: 137
        },
        {
          x: "hotel11",
          y: 186
        },
        {
          x: "hotel12",
          y: 131
        }
      ]
    }
  ];

  const pieData = [
    {
      id: "booking.com",
      label: "booking.com",
      value: 355465,
      color: "hsl(33, 70%, 50%)"
    },
    {
      id: "agoda.com",
      label: "agoda.com",
      value: 336548,
      color: "hsl(274, 70%, 50%)"
    },
    {
      id: "makemytrip.com",
      label: "makemytrip.com",
      value: 225614,
      color: "hsl(264, 70%, 50%)"
    }
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
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="260px"
        gap="20px"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12"
          }
        }}
      >
        <LineChart title={"Price Comparison"} data={lineData}></LineChart>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="260px"
        gap="20px"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12"
          }
        }}
      >
        <PieChartBottom
          title={"Compare total number of hotels"}
          data={pieData}
        ></PieChartBottom>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="260px"
        gap="20px"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12"
          }
        }}
      >
        <BarChart
          title={"Compare hotel average prices"}
          data={barchartData}
          keys={barchartKey}
        ></BarChart>
      </Box>
    </Box>
  );
};

export default CompareTool;
