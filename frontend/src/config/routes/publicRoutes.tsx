import { Home } from '@/pages/Home'
import { SingIn } from '@/pages/SignIn'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CREATE_USER } from './paths'

const PublicRoutes = () => {
	/*  */

	return (
		<Suspense>
			<Routes>
				<Route path={CREATE_USER} element={<SingIn/>}/>
				<Route path={'/'} element={<Home/>}/>
			</Routes>
		</Suspense>
	)
}

export default PublicRoutes
