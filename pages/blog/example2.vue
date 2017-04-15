<template>
	<Marked :src="src" />
</template>

<script>
	import src from '~assets/blog/example2.md'
	import Marked from '~components/Marked.vue'
	export default{
		head:{
			...Marked.baseHead(src),
		},
		components:{
			Marked
		},
		data(){
			return {
				src
			}
		}
	}
</script>
