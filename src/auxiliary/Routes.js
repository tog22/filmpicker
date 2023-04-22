import { createRouter, createWebHistory } from 'vue-router'
import Start_Page from '../views/Start_Page.vue'

const routes = [
	{
		path: '/',
		name: 'Film Picker',
		component: Start_Page,
		meta: {
			title: 'Film Picker'
		}
	},
	{
		path: '/group',
		component: () => import(/* webpackChunkName: "main_chunk" */ '../views/Group/List/Page.vue'),
		meta: {
			title: 'Film Picker'
		}
	},
	{
		path: '/group/:id',
		component: () => import(/* webpackChunkName: "main_chunk" */ '../views/Films/Films_Page.vue'),
		meta: {
			title: 'Film Picker'
		}
	},
	{
		path: '/group/add',
		component: () => import(/* webpackChunkName: "edit_chunk" */ '../views/Group/Add/Add_Group.vue'),
		meta: {
			title: 'Film Picker'
		}
	},
	{
		path: '/add',
		component: () => import(/* webpackChunkName: "adding_films" */ '../views/Films/Add/Find.vue'),
		meta: {
			title: 'Film Picker'
		}
	},
	{
		path: '/search_results',
		component: () => import(/* webpackChunkName: "adding_films" */ '../views/Films/Add/Search_Results.vue'),
		meta: {
			title: 'Film Picker'
		}
	},
	{
		path: '/film/new/:id',
		component: () => import(/* webpackChunkName: "adding_films" */ '../views/Films/After_Adding/After_Adding.vue'),
		meta: {
			title: 'Film Picker'
		}
	},
	{
		path: '/help/imdb_id',
		component: () => import(/* webpackChunkName: "adding_films" */ '../views/Help/IMDB_ID.vue'),
		meta: {
			title: 'Film Picker'
		}
	},
	{
		path: '/login',
		component: () => import(/* webpackChunkName: "login" */ '../views/Login/Login.vue'),
		meta: {
			title: 'Film Picker'
		}
	},
	{
		path: '/signup',
		component: () => import(/* webpackChunkName: "login" */ '../views/Login/Signup.vue'),
		meta: {
			title: 'Film Picker'
		}
	},
	// {
	// 	path: '/ooooooooo',
	// 	component: () => import(/* webpackChunkName: "group" */ '../views/ooooooooo'),
	// 	meta: {
	// 		title: 'Film Picker'
	// 	}
	// },
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router