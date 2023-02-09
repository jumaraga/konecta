import { CourseForm } from "@/components/CourseForm"
import { Header } from "@/components/Header"
import React, { FunctionComponent } from "react"
export const AdminPanel: FunctionComponent = () => {
    return (
        <>
            <div className="mx-48">
            <CourseForm/>
            </div>
        </>
    )
}