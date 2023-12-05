// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
import { ResponsivePie } from "@nivo/pie";

import ChartHeader from "../Common/ChartHeader";
import { Box, useTheme } from "@mui/material";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const PieChartBottom = ({ data, title }) => {
  const theme = useTheme();

  return (
    <Box
      m="1rem 0"
      display="flex"
      gridColumn="span 12"
      gridRow="span 3"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor="#f9f9f9"
      borderRadius="0.55rem"
    >
      <ChartHeader title={title}></ChartHeader>
      <Box
        pb="4rem"
        height="60vh"
        sx={{
          color: theme.palette.secondary[500]
        }}
      >
        <ResponsivePie
          data={data}
          theme={{
            fontSize: 20,
            textColor: theme.palette.secondary[100]
          }}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ scheme: "set1" }}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]]
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#ffd166"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]]
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          fill={[
            {
              match: {
                id: "booking.com"
              },
              id: "dots"
            },
            {
              match: {
                id: "makemytrip.com"
              },
              id: "dots"
            },
            {
              match: {
                id: "agoda.com"
              },
              id: "dots"
            }
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 50,
              translateY: 70,
              itemsSpacing: 0,
              itemWidth: 170,
              itemHeight: 30,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000"
                  }
                }
              ]
            }
          ]}
        />
      </Box>
    </Box>
  );
};

export default PieChartBottom;
