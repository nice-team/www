<style scoped>
	ul{
		margin: 0;
	}
</style>

<template>
	<div>
		<h2>送信エラー</h2>
		<p style="color:deeppink;font-weight: bold">
			大変申し訳ございません、<br>
			お問い合わせの送信に失敗してしまいました。
		</p>
		<p>
			お手数ですが、次の方法をご検討ください。
		</p>
		<ul>
			<li>時間をあけて再度試す</li>
			<li>フォームを使わずに<a :href="mail()">こちら</a>から直接メールで送信する</li>
		</ul>
		<br/>
		<p>ご面倒をお掛けして申し訳ございません。</p>
		<ContactPreview :form="form"></ContactPreview>
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
				mail(){
					const vm = this
					console.log(vm)
					const mail1 = 'mail@ni'
					const mail2 = 'ce.team' // スパム対策
					const body = ()=>
						`お名前: ${vm.form.name.last} ${vm.form.name.first} 様\n\n${vm.form.message}`
							.replace(/\n/g,'\r\n')
					return `mailto:${mail1}${mail2}?subject=${'NiceTeamに関するお問い合わせ'}&body=${encodeURI(body())}`
				}
			}
		}
	}
</script>
