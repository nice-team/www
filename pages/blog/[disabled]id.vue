<template>
	<Marked :src="src" />
</template>

<script>
	import Marked from '~components/Marked.vue'
	export default{
		head:{
			//...Marked.baseHead(src),
		},
		components:{
			Marked
		},
		data(){
			return {
				src: require('~assets/blog/'+ this.$route.params.id+'.md')
			}
		}
	}
</script>
