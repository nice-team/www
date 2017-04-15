<style scoped>
	form,
	.result{
		max-width: 30em;
		margin: auto;
	}
	form>dl{
		margin-top: 0;
	}
	form>dl>dd>textarea{
		resize: none;
	}
	button{
		display: block;
		width: 100%;
		background: olivedrab;
		line-height: 2em;
		text-align: center;
		color: white;
		transition: all 0.25s ease;
		cursor: pointer;
	}
	button:disabled{
		cursor: not-allowed;
		background: #999 !important;
	}
	button:hover{
		background: #578526;
	}
	/* honey pod area */
	textarea.message{
		margin: 0 0 -3em -2000em;
		background:transparent;
		border:none;
		outline:none;
	}
	.form-input{
		display: initial;
		width: inherit;
		position: static;
	}
</style>

<template>
	<div>
		<h1>お問い合わせ</h1>
		<form @submit="send" v-if="!form.done">
			<textarea class="message" name="message" v-model="form.honeypod"></textarea>
			<dl>
				<dt>お名前</dt>
				<dd>
					<input
						class="form-input"
						title="お名前の氏をご入力ください"
						name="last"
						type="text"
						placeholder="山田"
						size="5"
						required
						aria-required="true"
						v-model="form.name.last"
						@keyup.enter.stop.prevent=""
					>
					<input
						class="form-input"
						title="お名前の名をご入力ください"
						name="first"
						type="text"
						placeholder="太郎"
						size="5"
						required
						aria-required="true"
						v-model="form.name.first"
						@keyup.enter.stop.prevent=""
					>
				</dd>

				<dt>メールアドレス</dt>
				<dd>
					<input
						class="form-input"
						title="ご連絡先メールアドレスをご入力ください"
						name="email"
						type="email"
						placeholder="yamada@example.com"
						size="28"
						required
						aria-required="true"
						v-model="form.email"
						@keyup.enter.stop.prevent=""
					>
					<div><small>(* アドレスの入力間違いにご注意ください。)</small></div>
				</dd>

				<dt>お問い合わせ内容</dt>
				<dd>
				<textarea
					class="form-input"
					title="お問い合わせ内容をご入力ください。"
					name="q"
					cols="48"
					rows="15"
					required
					aria-required="true"
					v-model="form.message"
				></textarea>
				</dd>

				<dt>個人情報保護へ同意</dt>
				<dd>
					<label>
						<input title="同意頂けない場合、お問い合わせの送信が出来ません。" type="checkbox" required aria-required="true">
						「<nuxt-link to="/policy/" target="_blank">個人情報保護方針</nuxt-link>」に同意します。
				</label>
					<div style="margin-top:0.5em;fontt-size:0.9em;color:#777">＊ 同意頂けない場合、お問い合わせの送信が出来ません。</div>
				</dd>

				<dt><br></dt>
				<dd>
					<button v-if="!progress">送信する</button>
					<button v-else disabled>
						<i class="fa fa-spinner fa-pulse fa-spin fa-fw"></i>
						送信中です...
					</button>
				</dd>
			</dl>
		</form>
		<div v-else class="result">
			<ContactSuccess v-if="success" :form="form" />
			<ContactFail v-else :form="form" />
			<nuxt-link to="/"><i class="fa fa-home"></i>トップページへ戻る</nuxt-link>
		</div>
	</div>
</template>

<script>
	import ContactSuccess from '~components/contact/ContactSuccess'
	import ContactFail from '~components/contact/ContactFail'
	export default {
		head:{
			title: 'お問い合わせ'
		},
		components:{
			ContactSuccess,
			ContactFail
		},
		data(){
			return {
				progress: false,
				success: false,
				form:{
					done: false,
					name:{
						first: '',
						last: ''
					},
					email: '',
					message: '',
					honeypod: ''
				}
			}
		},
		methods:{
			send(e){
				const vm = this
				e.preventDefault()
				if(vm.form.honeypod) return false

				function done(){
					vm.form.done = true
					if(document) {
						document.body.scrollTop = 0
						const head = document.querySelector('.headroom')
						if(head){
							head.style.transform = null
							head.style.position = 'static'
						}
					}
				}
				fetch('https://prod-12.japaneast.logic.azure.com/workflows/907c99bfda95429696316987e001d246/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=eTX16R8rGhTpJsbhkO0_AcyM2Y94TDYcl_ylgw2zIR0',{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(vm.form)
				}).then(response=>{
					vm.success = true
					done()
				}).catch(()=>{
					vm.success = false
					done()
				})

				vm.progress = true

				return false
			}
		}
	}
</script>
