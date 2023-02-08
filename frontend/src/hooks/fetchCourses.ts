import ClientAxios from "@/config/axios";
import { coursesRoutes } from "@/config/routes/endpoints";
import { ICourse } from "@/interface";
import axios from "axios";
import { useEffect, useState } from "react";

export const useCourses = () => {
    const [courses, setCourses] = useState<ICourse[]>([]);
    const fetchCourses = async () => {
        const data = await ClientAxios.get(coursesRoutes.listCourses)
        setCourses(data.data.data)
    }
    useEffect(()=>{
        fetchCourses()
    })
    return courses
}