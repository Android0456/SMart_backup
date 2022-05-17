import React, { useEffect, useState } from "react";
import axios from "axios";
import Info from "./InfoTemperature";
import LineChart from "./TempChart";

import styled from "@emotion/styled";

const TempInfo = (props) => {
  const Box = styled.div`
    border-radius: 70px 30px 70px 30px;
    display: flex;
    background-color: #86003c;
  `;
  const [listOfTemps, setListOfTemps] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/temp").then((respons) => {
      setTimeout(() => {
        setListOfTemps(respons.data);
      }, 5000);
    });
  });

  const data = {
    labels: listOfTemps.map((temp) => temp.time),
    datasets: [
      {
        label: "Temperature",
        data: listOfTemps.map((temp) => temp.mesurement),
        borderColor: " rgb(180, 248, 248)",
        backgroundColor: " rgb(180, 248, 248)",
      },
    ],
  };

  const options = {};
  return (
    <Box>
      <Info theTemp={listOfTemps[listOfTemps.length - 1]} />
      <div>
        <LineChart chartData={data} chartOptions={options} />
      </div>
    </Box>
  );
};

export default TempInfo;
