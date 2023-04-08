<template>
	<div id="page">
		<Your_Groups />
	</div>
</template>

<script>
import { defineComponent } from 'vue'
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