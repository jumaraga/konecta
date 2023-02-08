import React from 'react'

import { useEffect, useState } from 'react'
import ClientAxios from './config/axios'
import { coursesRoutes } from './config/routes/endpoints'
import { CourseCard } from './components/card'
import { ICourse } from './interface/course.interface'
import PublicRoutes from './config/routes/publicRoutes'
const App = () => {
	const currentUrl = window.location.pathname.split('/')
	return (
		<PublicRoutes/>
	)
}

export default App
