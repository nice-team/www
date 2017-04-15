NiceTeam Web site
=====================
https://nice.team 用の静的サイトジェネレータアプリケーション


スクリプト
---------------------
* `npm start`
  * HotModuleReloadありでの開発用サーバの立ち上げ
* `npm run demo`
  * プロダクションモードでの開発用サーバの立ち上げ
* `npm run build`
  * webpackでアプリケーションをビルド
* `npm run gen`
  * アプリケーションをビルドし、静的ファイルとして生成

ディレクトリ構成
----------------------

* assets
    * LESS、SASS、JavaScriptなどのコンパイルされていないアセット
        * blog
            * ブログ記事のmarkdownソース
* components
    * Vue.js のコンポーネントファイル
* layouts
    * テンプレートのベースとなるレイアウト
* pages
    * このディレクトリ内のすべての.vueファイルを読み込み、アプリケーションのルーターを作成
* plugins
    * vue.jsアプリケーションをインスタンス化する前に実行するJavaScriptプラグイン
* static
    * 静的ファイル。robots.txt や favicon など。
* store
    * vuex store ファイル

ブログ記事の書き方
---------------------
1. 任意のmarkdownエディタを用いて、思いつくがままの記事を書く  
    基本的にはgithub準拠のmarkdownは利用可能  

2. `assets/blog/${id}.md` に任意の`id`で記事ファイルを作成する
3. 2で作成したファイルの頭に、id,title,created,updated,tagsのyaml形式のmetaを付ける
4. 静的レンダリング用に、`pages/blog/${id}.vue`ファイルを作成する
    中身は下の内容にする
```html
<template>
	<Marked :src="src" />
</template>

<script>
	import src from '~assets/blog/${ここにid}.md'
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
```

5. `blog/index.vue`の`list`に書いた記事idを追記する
6. 完了したら デプロイしてリリースする

####参考
* https://grow-group.jp/archives/554/
* https://javascript.nju33.work/start-nuxtjs/posts/look-at-the-generated-files/ 
* http://qiita.com/massa142/items/7de17b214cefb5b9a1d6

