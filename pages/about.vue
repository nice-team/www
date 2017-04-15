<style scoped>
	.intro{
		display: flex;
	}
	.intro .image{
		width: 300px;
		font-size: 0;
	}
	.intro .image div{
		border: solid 1px darkolivegreen;
		padding: 4px;
	}
	.intro .image img{
		width: 100%;
	}
	.intro p{
		flex-grow: 1;
		padding: 0 0.5em;
		margin: 0;
		line-height: 1.5em;
	}
</style>

<template>
	<div>
		<h1>概要</h1>
		<div class="intro">
			<div class="image">
				<div>
					<img src="/images/team.jpg">
				</div>
			</div>
			<p>
				<strong>いいチーム作りには、いい環境から！</strong><br>
				仲間グループ、同志の集い、部署、それぞれのチーム向けに、<br>
				円滑なチーム運営を、<br>
				　・アプリケーションシステム<br>
				　・ソフトウェアサービス<br>
				の観点からサポート致します。
			</P>
		</div>
	</div>
</template>

<script>
	export default{
		head:{
			title: '概要'
		}
	}
</script>
