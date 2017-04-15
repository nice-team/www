<style scoped>
	header{
		display:block;
		background:white;
		margin:auto;
		padding:14px;
		padding-bottom: 0;
		opacity: 0.9;
	}
	header .logo {
		display: inline-block;
		user-select: none;
	}
	header .logo img{
		max-height: 68px;
		-webkit-user-drag: none;
	}
	header > nav{
		float: right;
		margin-top: 1.5em;
	}
	header > nav ul{
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
	}
	header > nav > ul > li{
		padding: 5px 15px;
	}
	@media(max-width:665px){
		header .logo img{
			max-height: 34px;
		}
		header > nav{
			margin-top: 0.3em;
		}
		header > nav > ul > li{
			padding-top: 0;
		}
	}
	header > nav li a,
	header > nav li a:link,
	header > nav li a:visited{
		text-decoration: none;
		color: #ccc;
		font-size: 1.2em;
	}
	header > nav > ul > li > a.nuxt-link-active{
		color: #598527;
	}
	header > nav a:hover{
		color: #759E2E;
	}
</style>

<template>
	<header class="contents">
		<a class="logo" href="/">
			<img src="/images/nice.team.wide.png">
		</a>
		<nav>
			<ul>
				<li v-for="item in menu">
					<nuxt-link :to="item.link" :exact="item.link=='/'">{{ item.label }}</nuxt-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default{
		data(){
			return {
				menu: [
					{ link:'/', label:'ホーム' },
					{ link:'/blog/', label:'ブログ'},
					{ link:'/about/', label:'概要'},
					{ link:'/contact/', label:'お問い合わせ'}
				]
			}
		}
	}
</script>
