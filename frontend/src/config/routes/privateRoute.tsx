import { AdminPanel } from '@/pages/AdminPanel'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ADMIN_PANEL } from './paths'

const PrivateRoutes = () => {
	return (
		<Suspense>
			<Routes>
				<Route path={ADMIN_PANEL} element={<AdminPanel/>} />
			</Routes>
		</Suspense>
	)
}

export default PrivateRoutes
