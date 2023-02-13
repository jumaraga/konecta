import { Home } from '@/pages/Home'
import { Login } from '@/pages/Login'
import { SingIn } from '@/pages/SignIn'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CREATE_USER, LOGIN } from './paths'

const PublicRoutes = () => {
	/*  */

	return (
		<Suspense>
			<Routes>
				<Route path={CREATE_USER} element={<SingIn/>}/>
				<Route path={'/'} element={<Home/>}/>
				<Route path={LOGIN} element={<Login/>}/>
			</Routes>
		</Suspense>
	)
}

export default PublicRoutes
