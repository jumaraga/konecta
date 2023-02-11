export const coursesRoutes = {
    listCourses: '/courses',
    updateCourse: (id: string) => (`/courses/${id}`),
    addCourse: `/courses/`,
    removeCourse: (id: string) => (`/courses/${id}`)
}
export const authEndpoints={
    login:'',
    signIn:'/auth'
}