import react from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ClientAxios from './config/axios'
import { coursesRoutes } from './config/routes/endpoints'
const App = () => {
	const [courses, setCourses] = useState<{name:string}[]>([])
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
		<div className='grid m-[20%] bg-orange-400'>
			{
				courses.map((item)=>(
					item.name
				))
			}
		</div>
	)
}

export default App
