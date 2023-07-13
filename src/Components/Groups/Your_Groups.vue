<template>
	<div>
		<h3 class="subheading">
			Your Groups
		</h3>
		<section>
			<div class="q-list bordered separator">
				<router-link class="q-item clickable v-ripple"
				v-for="(group, group_index) in groups"
				:to="'/group/'+group.id"
				:key="'g'+group_index"
				>
					<span v-html="group.name"></span>
				</router-link>
			</div>
		</section>
		
		<router-link
		class="blue_button s_small"
		to="/group/add"
		>
			Add new group
			
		</router-link>
	</div>
</template>

<script>
// import dummy_server from '../../Dummy_Server/Data'
// let groups = dummy_server.groups

import api from '@/auxiliary/api'




export default {
	
	name:'Your_Groups',

	created() {
		api.get('?action=get_groups').then((response) => {
			this.groups = response.body.groups
		})
	},
	
	data() {
		return {
			groups:     {}
		}
	}
	
}



let lo = function (to_log) {
	console.log(to_log)
}

</script>

<style>

</style>
