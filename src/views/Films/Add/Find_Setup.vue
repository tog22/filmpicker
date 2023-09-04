<template>
	<div id="page">
		<h1>
				Find Film
		</h1>
		<form
				@submit.prevent="on_submit"
				@keydown.enter="on_submit"
				class="full_width_form q-gutter-y-md"
		>
			<!-- <label class="qstyle" for="title">
				<div class="label">
					Title
				</div>
				<div class="corrector">
				</div>
				<input type="text" name="title" id="title" />
			</label> -->
			<q_input name="title" :value="search_term" />
			<div @click="test">ff</div>
			<!-- <input
					label="Title"
					v-model="search_term"
					outlined
					:rules="[val => !!val || 'Enter a title']"
			/> -->
			<div className="no_top">
				<input
						type="submit"
						value="Search"
				/>
			</div>
			<div id="banner" class="hidden text-white bg-red">
					Please enter a title or IMDB ID
			</div>
		</form>
	</div>
</template>

<script setup>

import { ref } from "vue"
import q_input from "@/Components/Quasar/Input.vue"

let search_term = ref('ff')

function test() {
	alert(search_term.value)
}


</script>