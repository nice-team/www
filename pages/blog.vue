<style scoped>
	.blog{
		display: flex;
		flex-wrap: wrap;
	}
	.contents{
		flex-grow: 1;
	}
	.side{
		width: 320px;
		padding: 10px;
	}

	.ad.top{
		padding-top: 10px;
	}
	@media(max-width:1065px){
		.blog{
			padding: 1em;
			width: 100%;
		}
		.contents{

		}
		.side{
			width: 100%;
		}
	}
</style>

<template>
	<div class="blog">
		<div class="contents">
			<!--
			<div class="top ad">
				<img src="https://placehold.it/728x90" />
			</div>
			-->
			<nuxt-child />
		</div>
		<div class="side">
			<img src="https://placehold.it/300x250" />

			<img src="https://placehold.it/300x250" />
		</div>
	</div>
</template>

<script>

</script>
