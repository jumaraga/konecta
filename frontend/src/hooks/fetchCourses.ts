import ClientAxios from "@/config/axios";
import { coursesRoutes } from "@/config/routes/endpoints";
import { ICourse } from "@/interface";
import axios from "axios";
import { useEffect, useState } from "react";

export const useCourses = () => {
    const [courses, setCourses] = useState<ICourse[]>([]);
    const controller = new AbortController();
    const fetchCourses = async () => {
        const data = await ClientAxios.get(coursesRoutes.listCourses, { signal: controller.signal })
        setCourses(data.data.data)
    }
    useEffect(() => {
        fetchCourses();

        return () => {
            controller.abort()
        }
    }, [])
    return courses
}