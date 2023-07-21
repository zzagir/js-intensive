import { AboutUs } from '../components/screens/abous-us copy/about-us.component'
import { Auth } from '../components/screens/auth/auth.component'
import { Home } from '../components/screens/home/home.component'

export const ROUTES = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/auth',
		component: Auth
	},
	{
		path: '/about-us',
		component: AboutUs
	}
]
