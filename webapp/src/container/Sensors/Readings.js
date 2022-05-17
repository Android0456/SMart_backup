import React from "react";
import './start.css';
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

function Readings(props) {
    return (
    <div class="content-sign-in" id="content-sign-in" style="display: none;">
        <div class="cards">

        <div class="card">
      <p><i class="fas fa-thermometer-half" style="color:#059e8a;"></i> TEMPERATURE</p>
      <p><span class="reading"><span id="temp"></span> &deg;C</span></p>
    </div>

    <div class="card">
      <p><i class="fas fa-tint" style="color:#00add6;"></i> HUMIDITY</p>
      <p><span class="reading"><span id="hum"></span> &percnt;</span></p>
            </div>

    <           div class="card">
                <p><i class="fas fa-angle-double-down" style="color:#e1e437;"></i> PRESSURE</p>
                <p><span class="reading"><span id="pres"></span> hPa</span></p>
            </div>
        </div>
    </div>
    );
}