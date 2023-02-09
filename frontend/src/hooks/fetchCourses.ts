import ClientAxios from "@/config/axios";
import { coursesRoutes } from "@/config/routes/endpoints";
import { ICourse } from "@/interface";
import { Abortable } from "events";
import { useEffect, useState } from "react";

export const useCourses = () => {
    const [courses, setCourses] = useState<ICourse[]>([]);
    const fetchCourses = async (controller: Abortable) => {
        const data = await ClientAxios.get(coursesRoutes.listCourses, { signal: controller.signal })
        setCourses(data.data.data)
    }
    useEffect(() => {
        const controller = new AbortController();
        fetchCourses(controller);

        return () => {
            controller.abort();
        }
    }, [])
    return courses
}