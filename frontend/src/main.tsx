import './main.css'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/userProvider'
// import { ModalDetailsProvider } from '@/hooks/contextApi/providers'
ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
).render(
	<React.StrictMode>
		<Suspense>
			<BrowserRouter>
				<UserProvider>
					<App />
				</UserProvider>
			</BrowserRouter>
		</Suspense>
	</React.StrictMode>
)
