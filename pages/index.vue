<style scoped>
	hr{
		display:block;
		background: #759e2e;
		outline: none;
		border:none;
		height: 4px;
	}
	.flex{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
	}
	.flex section {
		flex-grow: 1;
		margin: 10px;
		min-height: 150px;
		min-width: 300px;
		background: mediumseagreen;

		color: white;
		text-align: center;
		line-height: 150px;
		font-size: 80px;
	}
</style>

<template>
	<div>
		<h1 data-label="作成中">開発中のWEBサイトのトップページ</h1>
		ここに、ブログとかの新着情報を数件おく予定
		<div class="flex">
		<section>
			A
		</section>

		<section>
			B
		</section>

		<section>
			C
		</section>

		<section>
			D
		</section>

		<section>
			E
		</section>
	</div>
		<hr>
		ここに、提供しているサービスのバナーをおく予定
		<div class="flex">
		<section>
			A
		</section>

		<section>
			B
		</section>

		<section>
			C
		</section>

		<section>
			D
		</section>

		<section>
			E
		</section>
	</div>
	</div>
</template>

<script>
	export default {
		head:{
			titleTemplate:'%s',
			title: 'NiceTeam'
		},
		data: ()=>{
			return {

			}
		}
	}
</script>
