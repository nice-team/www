<template>
	<div>
		<h1 data-label="404">Not Found.</h1>
		<div>
			申し訳ございません。<br>
			お探しのページが見つかりませんでした。<br>
			該当のページが移動または削除されているか、誤ったURLが入力された可能性があります。<br>
			<br>
		</div>
		<nav>
			<a href="/">トップページへ</a>
		</nav>
	</div>
</template>

<script>
	export default{
		head:{
			title: 'ページが見つかりません'
		},
		props: ['error']
	}
</script>
