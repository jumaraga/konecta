import React from 'react'
import PrivateRoutes from './config/routes/privateRoute'
import PublicRoutes from './config/routes/publicRoutes'
const App = () => {
	const currentUrl = window.location.pathname.split('/')
	return (
		currentUrl[1]==='admin'?<PrivateRoutes/>:<PublicRoutes/>
	)
}

export default App
