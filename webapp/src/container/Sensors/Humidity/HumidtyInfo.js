import React, { useState, useEffect } from "react";
import axios from "axios";
import Info from "./InfoHumidity";
import LineChart from "./HumidityChart";

import styled from "@emotion/styled";

const HumidityInfo = (props) => {
    const Box = styled.div`
    border-radius: 70px 30px 70px 30px;
    display: flex;
    background-color: #86003c;
  `;
    const [listOfHumidities, setListOfHumidities] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/humidity").then((respons) => {
            setTimeout(() => {
                setListOfHumidities(respons.data);
            }, 5000);
        });
    });

    const data = {
        labels: listOfHumidities.map((humid) => humid.time),
        datasets: [
            {
                label: "Temperature",
                data: listOfHumidities.map((humid) => humid.mesurement),
                borderColor: " rgb(180, 248, 248)",
                backgroundColor: " rgb(180, 248, 248)",
            },
        ],
    };

    const options = {};
    return (
        <Box>
            <Info theHumid={listOfHumidities[listOfHumidities.length - 1]} />
            <div>
                <LineChart chartData={data} chartOptions={options} />
            </div>
        </Box>
    );
};

export default HumidityInfo;
