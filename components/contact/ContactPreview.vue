<style scoped>
	dl{
		border: solid 1px #ccc;
		background: white;
		padding: 1em;
		margin: 0;
		margin-bottom: 1em;
		max-width: 30em;
	}
	dd{
		min-height: 1em;
	}
	pre{
		margin:0;
		padding: 0;
	}
</style>

<template>
	<div>
		<div>ご入力内容</div>
		<dl v-if="form">
			<dt>お名前</dt>
			<dd>
				{{form.name.last}} {{form.name.first}}
			</dd>

			<dt>メールアドレス</dt>
			<dd>
				{{form.email}}
			</dd>

			<dt>お問い合わせ内容</dt>
			<dd>
				<pre>{{form.message}}</pre>
			</dd>
		</dl>
	</div>
</template>

<script>
	export default{
		props:['form'],
		data(){
			console.log(this)
			return {

			}
		}
	}
</script>
