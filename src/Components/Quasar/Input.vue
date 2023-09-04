<template>
	<div class="q_input">
		<label for="title">
			Title
		</label>
		<div class="corrector">
		</div>
		<input type="text" :name="name" :value="value" />
	</div>
</template>

<script>
import $ from 'jquery'

$(document).ready(function() {
	$('.q_input input').on('focus', function() {
		if (!$(this).parent().hasClass('small_title')) {
			$(this).parent().addClass('small_title')
		}
	})

	$('.q_input input').on('blur', function() {
		if (!$(this).val()) {
			$(this).parent().removeClass('small_title')
		}
	})
})


export default {
	name: 		'q_input',
	props:		{	
		name:		{
			type: 		String,
			required: 	true
		},
		value:		{
			type: 		String,
			required: 	true
		},
	}
}

</script>

<style>

.q_input {
	position: relative;
}

.q_input label {
	position: absolute;
	top: 19px;
	left: 14px;
	color: #717171;
}

.q_input.small_title label {
	font-size: 12px;
	top: 10px;
}

.q_input input {
	line-height: 24px;
	font-size: 14px;
	padding: 24px 14px 8px;
}



</style>