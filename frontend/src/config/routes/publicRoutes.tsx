import { SingIn } from '@/pages/signIn'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CREATE_USER } from './paths'

const PublicRoutes = () => {
	/*  */

	return (
		<Suspense>
			<Routes>
				<Route path={CREATE_USER} element={<SingIn/>}/>
			</Routes>
		</Suspense>
	)
}

export default PublicRoutes
