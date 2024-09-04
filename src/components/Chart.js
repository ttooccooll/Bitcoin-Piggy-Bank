import React from "react";
import LineChart from "react-linechart";
import "../../node_modules/react-linechart/dist/styles.css";
import "./Chart.css";

const Chart = ({ chartData }) => {
  if (!chartData && !chartData?.length) return null;

  const maxDataPoints = 500;
  const slicedChartData = chartData.slice(-maxDataPoints);

  const data = [
    {
      color: "steelblue",
      points: slicedChartData,
    },
  ];

  return (
    <div className="chart-container">
      {chartData && chartData.length <= 1 ? (
        <p>Loading</p>
      ) : (
        <LineChart
          xLabel="Time"
          height={300}
          width={500}
          data={data}
          ticks={6}
          hideYLabel={true}
          hideXLabel={true}
          xDisplay={(timestamp) => {
            const options = {
              hour12: false,
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            };
            return new Date(timestamp).toLocaleTimeString("en-US", options);
          }}
          pointRadius={2}
          pointRadiusWithGlow={true}
          strokeWidth={.5}
          interpolate="linear"
        />
      )}
    </div>
  );
};

export default Chart;