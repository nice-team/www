<style global>
	.headroom{
		background: white;
	}
	.contents {
		max-width: 1100px;
		margin:0 auto;
	}
	.contents > div > h1{
		border-bottom: solid 5px #759e2e;
		margin-top: 0.5em;
		margin-bottom: 5px;
	}
	.contents > div > h1:before{
		content: attr(data-label)"";
		color: white;
		background: #759e2e;
		padding: 0 0.5em;
		margin-right: 0.25em;
		border-radius: 1em 1em 1em 1em/1em 0;
	}
	.contents > div > section > h2:before{
		content: "■";
		color: #759e2e;
	}

	a:link,
	a:visited{
		color: #598527;
	}
	a:link:hover{
		color: #759E2E;
	}
</style>
<style scoped>
	*{
		font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", "ＭＳ Ｐゴシック", "MS P Gothic", sans-serif;
	}
	.nt_root{
		display:block;
		background: #F1F2F3;
		min-height:100%;
		position:relative;
	}
	.push-footer{
		padding-bottom: 100px;
	}
</style>

<template>
	<div class="nt_root">
		<HeadRoom :style="{height:headerHeight+'px'}" ref="head">
			<PageHeader />
		</HeadRoom>
		<div class="contents push-footer">
			<nuxt/>
		</div>
		<PageFooter />
	</div>
</template>

<script>
	import HeadRoom from 'vue-headroom'
	import PageHeader from '~components/PageHeader.vue'
	import PageFooter from '~components/PageFooter.vue'
	const handlers = {
		resize(){
			this.headerHeight = document.body.clientWidth < 660 ? 55 : 88
		}
	}
	export default {
		head:{
			link:[
				{rel:'stylesheet',href:'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
			]
		},
		components: {
			HeadRoom,
			PageHeader,
			PageFooter
		},
		data(){
		    return {
		        headerHeight: null
			}
		},
		watch:{
		    $route(to,from){
		        if(to.name.startsWith('blog-')){
		            this.$refs.head.translate = '0'
				}
			}
		},
		mounted(){
			addEventListener('resize', handlers.resize.bind(this))
		},
		beforeDestroy(){
			removeEventListener('resize', handlers.resize.bind(this))
		}
	}
</script>
