import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
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
		component: () => import(/* webpackChunkName: "group_chunk" */ '../views/Group/List/Page.vue'),
		meta: {
			title: 'Film Picker'
		}
	},
	{
		path: '/group/:id',
		component: () => import(/* webpackChunkName: "group_chunk" */ '../views/Films/Page.vue'),
		meta: {
			title: 'Film Picker'
		}
	},
	{
		path: '/group/add',
		component: () => import(/* webpackChunkName: "group_chunk" */ '../views/Group/Add/Page.vue'),
		meta: {
			title: 'Film Picker'
		}
	},
	// {
	// 	path: '/group',
	// 	component: () => import(/* webpackChunkName: "group" */ '../views/Group/List/Page.vue'),
	// 	meta: {
	// 		title: 'Film Picker'
	// 	}
	// },
	// {
	// 	path: '/group',
	// 	component: () => import(/* webpackChunkName: "group" */ '../views/Group/List/Page.vue'),
	// 	meta: {
	// 		title: 'Film Picker'
	// 	}
	// },
	// {
	// 	path: '/group',
	// 	component: () => import(/* webpackChunkName: "group" */ '../views/Group/List/Page.vue'),
	// 	meta: {
	// 		title: 'Film Picker'
	// 	}
	// },
	// {
	// 	path: '/group',
	// 	component: () => import(/* webpackChunkName: "group" */ '../views/Group/List/Page.vue'),
	// 	meta: {
	// 		title: 'Film Picker'
	// 	}
	// },
	// {
	// 	path: '/group',
	// 	component: () => import(/* webpackChunkName: "group" */ '../views/Group/List/Page.vue'),
	// 	meta: {
	// 		title: 'Film Picker'
	// 	}
	// },
	// {
	// 	path: '/group',
	// 	component: () => import(/* webpackChunkName: "group" */ '../views/Group/List/Page.vue'),
	// 	meta: {
	// 		title: 'Film Picker'
	// 	}
	// },
	// {
	// 	path: '/group',
	// 	component: () => import(/* webpackChunkName: "group" */ '../views/Group/List/Page.vue'),
	// 	meta: {
	// 		title: 'Film Picker'
	// 	}
	// },
	// {
	// 	path: '/group',
	// 	component: () => import(/* webpackChunkName: "group" */ '../views/Group/List/Page.vue'),
	// 	meta: {
	// 		title: 'Film Picker'
	// 	}
	// },
	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	// 	meta: {
	// 		title: 'About'
	// 	}
	// },
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router