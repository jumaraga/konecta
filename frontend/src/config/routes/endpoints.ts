export const coursesRoutes = {
    listCourses: '/courses',
    updateCourse: (id: string) => (`/courses/${id}`),
    addCourse: `/courses/`,
    removeCourse: (id: string) => (`/courses/${id}`)
}
export const authEndpoints={
    login:'/auth/login',
    signIn:'/auth/signUp',
    getUser:'/auth/'
}