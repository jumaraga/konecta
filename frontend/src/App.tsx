import React from 'react'

import { useEffect, useState } from 'react'
import ClientAxios from './config/axios'
import { coursesRoutes } from './config/routes/endpoints'
import { CourseCard } from './components/card'
import { ICourse } from './interface/course.interface'
import PublicRoutes from './config/routes/publicRoutes'
const App = () => {
	const [courses, setCourses] = useState<ICourse[]>([])
	const currentUrl = window.location.pathname.split('/')
	useEffect(() => {
		async function getBooks() {
			const book = await ClientAxios.get(coursesRoutes.listCourses)
			const response = book.data.data;
			setCourses(response)
		}
		getBooks()
	}, [])
	return (
		// <div className='grid m-[20%] bg-orange-400'>
		// 	{
		// 		courses.map((item)=>(
		// 			<CourseCard name={item.name} description={item.description} img_url={item.img_url} ></CourseCard>
		// 		))
		// 	}
		// </div>
		<PublicRoutes/>
	)
}

export default App
