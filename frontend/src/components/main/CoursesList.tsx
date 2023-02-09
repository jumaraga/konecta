import { useCourses } from "@/hooks/fetchCourses"
import React, { FunctionComponent } from "react"
import { CourseCard } from "../card"

export const CourseList: FunctionComponent = () => {
    const courses = useCourses();
    return <>
        <h1 className="text-4xl mb-4 font-bold mx-48 ">Our Courses</h1>
        <div className=" mx-48 px-3">
            {courses.map((course, index) => (
                <CourseCard key={`${index}Course`} name={course.name} description={course.description} img_url={course.img_url} />
            ))}
        </div>
    </>
}