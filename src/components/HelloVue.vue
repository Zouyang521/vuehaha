<template>
	<div class="login-container" style="background-color: #141a48;margin: 0px;overflow: hidden;">
		<h1>{{msg}}</h1>

	</div>
</template>

<script>

	export default {
		name:'HelloVue',
		data(){
			return{
				msg:'登录'
			} 
		},
		components: {

		},
		computed: {

		},
		mounted () {
			console.log('mounted')
		}
	}
</script>
<style>
	.login-container a{color: #0078de}
	
</style>
<!-- <style rel="stylesheet/scss" lang="scss" >
	.login-container{
		height: 100vh;
		background-color: #2d3a4b
	}
</style> -->
