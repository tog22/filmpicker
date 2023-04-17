<template>
	<div id="menu_bar">
		<div id="logo_and_title" @click="$router.push('/')">
			<div id="logo">
				🎞️
			</div>
			<h1 id="app_title">
				Film Picker
			</h1>
		</div>
		<div class="s_right">
			<div class="menu_container">
				<div 
					class="menu_icon" 
					@click="is_menu_open = !is_menu_open"
				>
					☰

					<!-- @mouseover="is_menu_open = true"
					@mouseleave="is_menu_open = false" -->
				</div>
				<div 
					id="menu_position"
				>
					<div 
						v-if="is_menu_open"
						id="basic_menu" 
					>
						<p
							v-for="link in menu_links"
							:key="link.title"
							v-bind="link"
						>
							<a :href="link.url">
								<span v-html="link.title">
								</span>
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Debug_Display/>
</template>

<script>

/*******************
**   ⤵️ IMPORTS   **
*******************/

import { defineComponent } from 'vue';

// Auxiliaries
// import bus from '@/auxiliary/bus'

// Components
// import Debug_Display from '@/components/Debug_Display.vue'


/*********************
**   *️⃣ MAIN CODE   **
*********************/

export default {
	name: 'Menu_Bar',
	components: { 
		// Debug_Display 
	},
	data() {
		return {
			is_menu_open: 		false,
			menu_links:			[
				{
					title:		'Home',
					url:		'/'
				},
				{
					title:		'Log in',
					url:		'/login'
				},
				{
					title:		'Sign up',
					url:		'/signup'
				}
			]
		}
	}
}
</script>


<style scoped>
.menu_icon {
	cursor: pointer;
}

#menu_position {
	position: relative;
}

#basic_menu {
	position: absolute;
	top: -1px;
	right: 0;

	background-color: white;
	border: 1px solid black;

	font-size: 0.8em;
	white-space: nowrap;
	padding: 1em 2em 1.2em;
}

#basic_menu p:first-child {
	margin-top: 0;
}

#basic_menu p:last-child {
	margin-bottom: 0;
}

#basic_menu p,
#basic_menu a,
#basic_menu a:visited,
#basic_menu a:active {
	color: rgb(0,0,238);
	cursor: pointer;
}

#basic_menu a:hover {
	color: black;
}

</style>  