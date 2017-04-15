<template>
	<Marked :src="src" />
</template>

<script>
	import src from '~assets/blog/example.md'
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
