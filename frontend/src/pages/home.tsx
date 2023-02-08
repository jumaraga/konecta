import { Header } from "@/components/Header"
import { CourseList } from "@/components/main/CoursesList"
import React, { FunctionComponent } from "react"
export const Home: FunctionComponent = () => {
    return (
        <>
            <Header />
            <CourseList/>
        </>
    )
}