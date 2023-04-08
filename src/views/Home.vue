<template>
	<div>
		Hello world
	</div>
</template>

<script>

/*******************
**   ⤵️ IMPORTS   **
*******************/

// External libraries
import { inject } from 'vue'

// Auxiliaries
import bus from '@/auxiliary/bus'

// Components
// import Debug_Display from '@/components/Debug_Display.vue'


/*********************
**   *️⃣ MAIN CODE   **
*********************/

export default {
	name: 'Home',
	components: {
		// Debug_Display
	},
    data() 
    {
		const store_parent = inject("store")
		
		return {
			store:					store_parent.state
		};
		
	}
}
</script>