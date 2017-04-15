<style>
	.markdown-container{
		margin-bottom: 2em;
	}
	section.markdown-body {

	}
	section.markdown-body > h1{
		border-bottom: solid 5px #759e2e;
		margin-bottom: 5px;
	}
	section.markdown-body > h1:before{
		content: attr(data-label)"";
		color: white;
		background: #759e2e;
		padding: 0 0.5em;
		margin-right: 0.25em;
		border-radius: 1em 1em 1em 1em/1em 0;
	}
	section.markdown-body > h1 > .tags{
		float:right;
	}
	section.markdown-body > h1 > .tags > .chip{
		border: solid 1px;
		background: #efe;
		height: 2rem;
		font-size: 1.5rem;
	}
	section.markdown-body > .updated{
		text-align: right;
	}
	section.markdown-body > table{
		border: solid 1px #aaa;
		border-collapse: collapse;
	}
	section.markdown-body > table th,
	section.markdown-body > table td{
		border: solid 1px #aaa;
	}
</style>

<template>
	<div class="markdown-container">
		<section class="markdown-body" v-html="html"></section>
		<nuxt-link v-if="short" :to="`/blog/${meta.id}`">詳細を見る</nuxt-link>
	</div>
</template>

<script>
	import hljs from 'highlightjs'

	import marked from 'marked'

	const renderer = new marked.Renderer();

	renderer.image = function (href, title, alt) {
		function sanitize(str) {
			return str.replace(/&<"/g, function (m) {
				if (m === "&") return "&amp;"
				if (m === "<") return "&lt;"
				return "&quot;"
			})
		}
		let exec = /\s=\s*(\d*)\s*x\s*(\d*)\s*$/.exec(href);
		let res = '<img src="' + (exec?sanitize(href.substr(0,exec.index)):href) + '" alt="' + sanitize(alt)
		if (exec && exec[1]) res += '" height="' + exec[1]
		if (exec && exec[2]) res += '" width="' + exec[2]
		return res + '">'
	}
	renderer.heading = function heading_new(text, level, raw){
		if(!renderer.heading.cache) renderer.heading.cache = {};
		const cache = renderer.heading.cache;
		let id = this.options.headerPrefix + raw.replace(/ /g, '_');
		if(cache[id]){
			cache[id]++;
			id += cache[id];
		}else{
			cache[id] = 1
		}
		return `<h${level} id="${id}">${text}</h${level}>\n`;
	}
	renderer.table = function(header,body){
		return [
			'<table class="table table-striped">',
			'<thead>',
			header,
			'</thead>',
			'<tbody>',
			body,
			'</tbody>',
			'</table>',
			''
		].join('\n')
	}
	marked.setOptions({
		renderer,
		gfm: true,
		tables: true,
		breaks: true,
		pedantic: true,
		smartLists: true,
		smartypants: true,
		langPrefix: 'hljs ',
		highlight: (code,lang)=>{
			return hljs.highlight(lang,code).value;
		}
	});

	export default{
	    props:{
	        src:{
	            required:true,
				'default':()=>({
					markdown: 'no content',
					meta:{
					    title:'NoTitle',
					    updated: 0,
						tags:[]
					},
					html: ''
				})
			},
			short:{}
		},
	    baseHead(src){
	        return {
	            title: src.meta.title,
				link: [
					{
						rel: 'stylesheet',
						href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/idea.min.css'
					}
				]
			}
		},
		data(){
	        const vm = this
			if(!vm.src) return { html:' ' }
			const [intro,body] = vm.src.markdown.split('<!--more-->')
			const meta = vm.src.meta
			const header =
`<h1>${meta.title}<div class="tags">${
	meta.tags.sort().map(tag=>`<label class="chip">${tag}</label>`).join(' ')
}</div></h1>
<div class="updated">更新日:<time>${new Date(meta.updated).toLocaleDateString()}</time></div>`
			const src =
vm.short?
// short
`${header}
${intro} `:
// full
`${header}
${intro}
${body||''}`
			return {
	            meta,
				html: marked(src)
			}
		}
	}
</script>
