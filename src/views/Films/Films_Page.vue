<template>
    <div id="page">

      <h2 v-html="group.name">
      </h2>

        <Group_Films_Table />

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

import Group_Films_Table from '../../views/Films/Table'

let groups = dummy_server.groups

export default {
    name:           'Group_Films_Page',
    components:     {
        Group_Films_Table
    },
	created() {
		this.store.sections.add_film.previous_page = '/group/'+this.group.id // from quasar version, not sure if used yet
	},
    data() {
      
      let group = groups[this.$route.params.id]
      let store_parent = inject("store")

      return {
        store: 			store_parent.state,
        group:      group
      }
    }
}


let lo = function (to_log) {
  console.log(to_log)
}

</script>
