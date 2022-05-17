import React from "react";
import CoursePresenter from "../presenter/coursePresenter";
import AirQualityPresenter from "../presenter/airQualityPresenter";
import TempPresenter from "../presenter/tempPresenter";
import HumidityPresenter from "../presenter/humidtyPresenter";
import LecturePresenter from "../presenter/lecturePresenter";
import ProjectorPresenter from "../presenter/projectorPresenter";

function ActiveLecture() {
    return (
        <div class="row">
            <div class="left">
                <div className="course">
                    <CoursePresenter />
                </div>
            </div>
            <div class="middle">
                <ProjectorPresenter />
                <AirQualityPresenter />
            </div>
            <div class="right">
                <LecturePresenter />
            </div>
        </div>
    );
}

export default ActiveLecture;
