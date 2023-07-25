<template>
    <div id="page">

      <h2 v-html="group.name">
      </h2>

        <Group_Films_Table :group="group.id" />

		<div class="button_row">
			<router-link to="/add" class="blue_button s_medium">
				Add Film
			</router-link>
		</div>

    </div>
</template>

<script>
import { inject } from "vue"

import dummy_server from '../../Dummy_Server/Data'
import api from '@/auxiliary/api'

import Group_Films_Table from '../../views/Films/Table'

let groups = dummy_server.groups

export default {
    name:           'Group_Films_Page',
    components:     {
        Group_Films_Table
    },
	created() {
		let gid = this.$route.params.id
		this.store.sections.add_film.previous_page = '/group/'+gid
		api.get('?action=get_groups').then((response) => {
			this.group = response.body.groups[gid]
		})
	},
    data() {
		let store_parent = inject("store")
		
		return {
			store: 			store_parent.state,
			group:			{
				name:		'group name',
				id: 		this.$route.params.id
			}
		}
    }
}


let lo = function (to_log) {
  console.log(to_log)
}

</script>
