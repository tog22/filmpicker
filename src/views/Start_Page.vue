<template>
	<div id="page">
		<Your_Groups />
	</div>
</template>

<script>
/*******************
**   ⤵️ IMPORTS   **
*******************/

// External libraries
import { defineComponent } from 'vue'

// Components
import Your_Groups from '../Components/Groups/Your_Groups.vue'

export default defineComponent({
	name: 'Start_Page',
	components: {
		Your_Groups
	}
})


let lo = function (to_log) {
	console.log(to_log)
}

</script>