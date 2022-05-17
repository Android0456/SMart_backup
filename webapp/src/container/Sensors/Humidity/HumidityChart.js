import React from "react";
import { Line } from "react-chartjs-2";


function LineChart(props) {
  return (
    <div>
      <Line data={props.chartData} options={props.chartScales} />
    </div>
  );
}

export default LineChart;
