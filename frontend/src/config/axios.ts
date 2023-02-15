import axios, {
	AxiosResponse,
	AxiosRequestConfig,
} from 'axios'
// import store from '@/redux/store/store'
import { setStorage } from '@/utils/localStorage'
import Cookies from 'js-cookie'
// import { RefreshTokenResponse } from '@/redux/users/types/axiosResponses'
const accessToken = Cookies.get('Authentication');



// Axios instance for candidates use and user login
const ClientAxios = axios.create({
	/* API to which the app is going to connect to the database */
	baseURL:
		'http://localhost:3001',
	withCredentials: true,

},)

// Axios instance for authenticated usersz
const PrivateAxios = axios.create({
	baseURL: 'http://localhost:3001'

})

PrivateAxios.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		if (!config.headers!['Authorization']) {
			config.headers![
				'Authorization'
			] = `Bearer ${accessToken}`
		}
		config.withCredentials = true
		return config
	},
	(error: any) => Promise.reject(error),
)

// PrivateAxios.interceptors.response.use(
// 	(response: AxiosResponse) => response,
// 	async error => {
// 		const prevRequest = error?.config
// 		if (
// 			error?.response?.status === 401 &&
// 			!prevRequest?.sent
// 		) {
// 			prevRequest.sent = true
// 			// const accessToken
// 			prevRequest.headers[
// 				'Authorization'
// 			] = `Bearer ${accessToken}`
// 			return PrivateAxios(prevRequest)
// 		}

// 		return Promise.reject(error)
// 	},
// )

export default ClientAxios
export { PrivateAxios }
