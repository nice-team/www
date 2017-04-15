<style scoped>
	footer{
		height: 100px;
		background: darkolivegreen;
		color: #99ca3a;
		padding-top:1.5em;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	footer> .contents nav{
		text-align: right;
		padding-right: 1em;
	}
	ul{
		list-style:none;
		margin: 0;
		padding: 0;
	}
	li{
		display: inline-block;
		font-size: 0.9em;
	}
	li + li::before{
		content: '|';
		display: inline-block;
		margin: 0 0.5em;
	}
	li a:link,
	li a:visited{
		color: #ccc;
		text-decoration: none;
	}
	.copy{
		text-align: center;
	}
</style>

<template>
	<footer>
		<div class="contents">
			<nav>
				<ul>
					<li v-for="item in menu">
						<nuxt-link :to="item.link">{{ item.label }}</nuxt-link>
					</li>
				</ul>
			</nav>
			<div class="copy">Copyright {{ new Date().getFullYear() }} NiceTeam</div>
		</div>
	</footer>
</template>

<script>
	export default {
		data(){
			return {
				menu: [
					{link:'/about/', label:'概要'},
					{link:'/policy/' ,  label:'個人情報保護方針'}
				]
			}
		}
	}
</script>

