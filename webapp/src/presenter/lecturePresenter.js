import React from "react";
import LectureInfo from "../container/Lecture/lectureInfo";
import { Course } from "../model/data/Course";
import { Lecture } from "../model/data/Lecture";

function LecturePresenter(props) {
    return <LectureInfo course={Course} lecture={Lecture} />;
}

export default LecturePresenter;
