import React from 'react'
import PrivateRoutes from './config/routes/privateRoute'
import PublicRoutes from './config/routes/publicRoutes'
import { initialState } from './context'
import { UserProvider } from './context/userProvider'
const App = () => {
	const currentUrl = window.location.pathname.split('/')
	return (
		<UserProvider>
			{currentUrl[1] === 'admin'
				? <PrivateRoutes />
				: <PublicRoutes />}
		</UserProvider>
	)
}

export default App
