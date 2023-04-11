<template>
    <div>
        <h3 class="subheading">
            Your Groups
        </h3>
        <section>
            <div class="q-list bordered separator">
                <div class="q-item clickable v-ripple"
                    v-for="(group, group_index) in groups"
                        :to="'/group/'+group.id"
                        :key="'g'+group_index"
                >
                    <span v-html="group.name"></span>
				</div>
            </div>
        </section>
		<!-- Add a HTML button -->
		
        <button
            class="blue_button s_small"
            to="/group/add"
        >Add new group</button>
	</div>
</template>

<script>
import dummy_server from '../../Dummy_Server/Data'

let groups = dummy_server.groups



export default {

	name:'Your_Groups',

    data() {
        return {
            groups:     groups
        }
    }

}



let lo = function (to_log) {
  console.log(to_log)
}

</script>

<style>

</style>
