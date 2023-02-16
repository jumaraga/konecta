import { Button } from "@/components/Button"
import { CourseForm } from "@/components/CourseForm"
import { Header } from "@/components/Header"
import React, { FunctionComponent } from "react"
import {  useNavigate } from "react-router-dom"
export const AdminPanel: FunctionComponent = () => {
    const navegate =useNavigate()
    function goMain() {
        window.location.assign('/')
     }
    return (
        <>
            <div><Button handler={goMain} classes="bg-red-400" title="Home"></Button></div>
            <div className="mx-48">
                <CourseForm />
            </div>
        </>
    )
}