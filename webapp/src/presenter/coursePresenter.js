import React from "react";
import { Course } from "../model/data/Course";
import CourseInfo from "../container/Course/CourseInfo";

function coursePresenter(props) {
    return <CourseInfo course={Course} />;
}

export default coursePresenter;
