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
			<label class="qstyle" for="title">
				<div class="label">
					Title
				</div>
				<div class="corrector">
				</div>
				<input type="text" name="title" id="title" />
			</label>
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

<script>
import $ from 'jquery'
import { inject } from "vue"
import q_input from "@/Components/Quasar/Input.vue"

$(document).ready(function() {
	$('.qstyle input').on('focus', function() {
		if (!$(this).parent().hasClass('small_title')) {
			$(this).parent().addClass('small_title')
		}
	})

	$('.qstyle input').on('blur', function() {
		if (!$(this).val()) {
			$(this).parent().removeClass('small_title')
		}
	})
})


export default {
	name: 			'Add_Film_Page',
	components: {
		q_input
	},
	methods: {
		test() {
			alert(this.search_term)
		},
		on_submit() {

			let query_url = 'http://www.omdbapi.com/?apikey=67a0cf67&s='+this.search_term

			let fn = {

				on_success(data, status, request) {
					let response = data
					console.log(data)
					if (response.Response === 'False') {
						switch (response.Error) {
							case 'Too many results.':
								alert('Too many results. Try searching for a more specific title, or search on IMDB [LINK] and get the IMDB ID (e.g. tt0800369) from the URL')
								break
							default:
								alert('Error: '+response.Error)
								break
    					}
                        return
					}
					this.store.sections.add_film.search_results = response.Search
					this.store.sections.add_film.search_count = response.totalResults
					this.$router.push('/search_results')
				},

				on_error(request, status, error) {
					alert('error 423612')
				},

			}

            fn.on_success = fn.on_success.bind(this)
			$.ajax({
				url:		query_url,
                success:    function(data, status, request) {
                    fn.on_success(data, status, request)
                },
                error:      function(request, status, error){
                    fn.on_error(request, status, error)
                }
			})
		},
	},
	data() {
		const store = inject("store").state
		// ↓ Reset
		store.sections.add_film = {}
		return {
			search_type:		'title',
			search_term:		'',
			store: 				store
		}
	}
}


let lo = function (to_log) {
		console.log(to_log)
}

</script>

<style>

.qstyle {
	position: relative;
}

.qstyle .label {
	position: absolute;
	top: 19px;
	left: 14px;
	color: #717171;
}

.qstyle.small_title .label {
	font-size: 12px;
	top: 10px;
}

.qstyle input {
	line-height: 24px;
	font-size: 14px;
	padding: 24px 14px 8px;
}



</style>