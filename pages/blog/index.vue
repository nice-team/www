<template>
	<div>
		<div v-for="item in list">
			<Marked :src="item" short="true" />
		</div>
		<InfiniteLoading :on-infinite="onInfinite" ref="infiniteLoading">
			<span slot="no-results"></span>
			<span slot="no-more"></span>
		</InfiniteLoading>
	</div>
</template>

<script>
	import InfiniteLoading from 'vue-infinite-loading/src/components/Infiniteloading.vue'
	import Marked from '~components/Marked.vue'

	const index = [
		'example',
		'example',
		'example',
		'example',
		'example',
		'example2',
		'example2',
		'example2',
		'example2',
		'example2',
		'example2',
		'example3',
		'example3',
		'example3',
		'example3',
		'example3',
		'example3',
		'example3',
		'example3',
		'example3',
		'example3',
		'example3',
		'example4',
		'example4',
		'example4',
	]
	const LOAD_SIZE = 5
	let pointer = LOAD_SIZE

	export default{
		head:{
			title: 'Blog'
		},
		components:{
			InfiniteLoading,
			Marked
		},
		data(){
			return {
				list:index.slice(0,5).map(item=>require('~assets/blog/'+item+'.md'))
			}
		},
		methods:{
		    onInfinite(){
		        const vm = this
				Promise.all(
					index.slice(pointer,pointer+=LOAD_SIZE).map(item=>import('~assets/blog/'+item+'.md'))
				).then((list)=>{
		            if(!list || !list.length){
					   vm.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
					   return
				   }
		            vm.list = vm.list.concat(list)
					vm.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
				}).catch(err=>{
					vm.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
				})

			}
		}
	}
</script>
