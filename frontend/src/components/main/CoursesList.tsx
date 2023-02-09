import { useCourses } from "@/hooks/fetchCourses"
import React, { FunctionComponent } from "react"
import { CourseCard } from "../card"

export const CourseList: FunctionComponent = () => {
    const courses = useCourses();
    return <>
        <h1 className="text-xl mx-48 ">Our Courses</h1>
        <div className=" mx-48">
            {courses.map((course,index) => (
                <CourseCard key={`${index}Course`} name={course.name} description={course.description} img_url={course.img_url} />
            ))}
        </div>
    </>
}