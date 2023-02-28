# ECMAScriptモジュールのテスト ―― Babelの設定

ECMAScriptモジュール (ESM) とは、JavaScriptをモジュールとして再利用できるようにするための仕組みです。

Node.js標準でESMを取り扱えるようにするためには `package.json` ファイルに `"type": "module"` プロパティを加えます。

```json
{
  "type": "module"
}
```

このように書き加えると、プロジェクトの `.js` ファイルはESMとして取り扱われます。

一方、Jestに関しては、2023年3月現在、Node.js標準のESMをサポートしていません。
そのため、JestでESMをテストするには、さらにJavaScriptのコードを変換するための設定を行う必要があります。

ESMのJavaScriptのコードを変換するには、たとえば、下記の方法があります。

- `babel-jest` … Babelを使用して変換 (Jestのデフォルト)
- `ts-jest` … tscを使用して変換
- `esbuild-jest` … esbuildを使用して変換
- `@swc/jest` … swcを使用して変換

ここでは、Babelを使用して変換する方法を説明します。

まず、`@babel/preset-env` を `npm` コマンドによってインストールし、Babelの設定を行います。

```bash
npm i -D @babel/preset-env
```

Babelには、調整済みの設定を利用するためのプリセットと呼ばれるパッケージがあります。
`@babel/preset-env` は、Babelが公式で提供する一般的なJavaScriptの変換を行うためのプリセットです。

`babel.config.json` を作成し、下記の設定を書き加えます。

```json
{
  "presets": ["@babel/preset-env"]
}
```

Babelを使用するプロジェクトは、`babel.config.json` というファイルなどによって設定を行います。
より詳しい設定項目に関する情報は [Babel公式ドキュメント > Config Reference](https://babeljs.io/docs/en/options) をご参照ください。

これでBabelの設定ができたので、JestからESMをテストできるようになりました。それではさっそくテストしてみましょう。
