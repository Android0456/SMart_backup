import React, { useState } from "react";
import Info from "./InfoQuality";
import LineChart from "./QualityChart";
import { SensorData } from "./Dataquality";
import styled from "@emotion/styled";

const AirQualityInfo = (props) => {
  const Box = styled.div`
    border-radius: 70px 30px 70px 30px;
    display: flex;
    background-color: #86003c;
  `;
  const [userData, setUserData] = useState({
    labels: SensorData.map((data) => data.time),
    datasets: [
      {
        label: SensorData[0].sensor,
        data: SensorData.map((data) => data.mesurement),
        borderColor: "rgb(255, 255, 255)",
        backgroundColor: "rgb(255,255,255)",
      },
    ],
  });
  const options = {};
  return (
    <Box>
      <Info quality={["Air Quality", "25%", "ppm"]} />
      <div>
        <LineChart chartData={userData} chartOptions={options} />
      </div>
    </Box>
  );
};

export default AirQualityInfo;
