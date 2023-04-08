<template>
	<div id="menu_bar">
		<div id="logo_and_title">
			<div id="logo">
				🎞️
			</div>
			<h1 id="app_title">
				Film Picker
			</h1>
		</div>
		<div class="s_right">
			<span class="menu_icon" @click="toggle_menu">
				☰
			</span>
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
	methods: {
		toggle_menu() {
			
		}
	}
}
</script>


<style scoped>

</style>  