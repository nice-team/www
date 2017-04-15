module.exports = {
	build: {
		extend(config, {isDev, isClient}) {
			config.module.rules.push({
				test: /\.md/,
				loaders: ['json-loader',require.resolve('./assets/meta-marked-loader')]
			})
		},
		postcss:[
			//require('postcss-less-engine')(),
			require('postcss-nested')()
		]
	},
	head:{
		titleTemplate: '%s - NiceTeam',
		meta:[
			{ charset: 'utf-8' }
		],
		// global resources
		script: [
			{src:'/bootstrap.js'}
		],
		link:[
			{ rel: 'stylesheet', href:'/styles/theme.css' }
		]
	},
	css: [
		//{ src: '~assets/theme.less' , lang:'less'}, // 0.10現在 各htmlに展開されるっぽいので、手動コンパイル＆static/stylesに配置しておく
		'~static/styles/global.css'
	],
	router: {
		base: '/'
	}
}
