// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveBar } from "@nivo/bar";
import ChartHeader from "../Common/ChartHeader";
import { Box, useTheme } from "@mui/material";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const BarChart = ({ title, data, keys }) => {
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
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
    >
      <ChartHeader title={title}></ChartHeader>
      <Box
        pb="8rem"
        height="60vh"
        sx={{
          color: theme.palette.secondary[500]
        }}
      >
        <ResponsiveBar
          data={data}
          keys={keys}
          theme={{
            fontSize: 20,
            textColor: theme.palette.secondary[100]
          }}
          indexBy="xname"
          margin={{ top: 50, right: 0, bottom: 100, left: 0 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          fill={[]}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]]
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: 32
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: -40
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]]
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 50,
              translateY: 70,
              itemsSpacing: 0,
              itemWidth: 200,
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
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          }
        />
      </Box>
    </Box>
  );
};

export default BarChart;
