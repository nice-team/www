<template>
	<div>
		<h2>送信完了</h2>
		<p>
			以下の内容で、お問い合わせを受け付け致しました。<br>
			対応までお時間をいただくこと、ご了承願います。<br>
			今後とも宜しくお願い致します。
		</p>
		<ContactPreview :form="form" />
	</div>
</template>

<script>
	import ContactPreview from './ContactPreview.vue'
	export default{
		components:{
			ContactPreview
		},
		props:['form'],
		data(){
			return {

			}
		}
	}
</script>
