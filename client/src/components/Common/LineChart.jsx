// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from "@nivo/line";
import ChartHeader from "../Common/ChartHeader";
import { Box, useTheme } from "@mui/material";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const LineChart = ({ title, data }) => {
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
        mt="10vh"
        pb="10vh"
        height="60vh"
        sx={{
          color: theme.palette.secondary[500]
        }}
      >
        <ResponsiveLine
          data={data}
          theme={{
            fontSize: 20,
            textColor: theme.palette.secondary[100]
          }}
          margin={{ right: 50, bottom: 70, left: 50 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 10,
            tickPadding: 0,
            tickRotation: 0,
            legend: "",
            legendOffset: 50,
            legendPosition: "middle"
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: -50,
            legendPosition: "middle"
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 70,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 200,
              itemHeight: 30,
              itemOpacity: 0.75,
              symbolSize: 18,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1
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

export default LineChart;
