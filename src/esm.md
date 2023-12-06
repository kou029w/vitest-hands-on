## ECMAScriptモジュールのテスト

ECMAScriptモジュール (ESM) とは、JavaScriptをモジュールとして再利用できるようにするための仕組みです。

Node.jsでESMを取り扱えるようにするためには `package.json` ファイルに `"type": "module"` プロパティを加えます。

```json
{
  "type": "module"
}
```

このように書き加えると、プロジェクトの `.js` ファイルはESMとして取り扱われます。

一方、Vitestに関しては、2023年3月現在、Node.js標準のESMをサポートしていません。
そのため、VitestでESMをテストするには、さらにJavaScriptのコードを変換するための設定を行う必要があります。

ESMのJavaScriptのコードを変換するには、たとえば、下記の方法があります。

- `babel-vitest` … Babelを使用して変換 (Vitestのデフォルト)
- `ts-vitest` … tscを使用して変換
- `esbuild-vitest` … esbuildを使用して変換
- `@swc/vitest` … swcを使用して変換

ここでは、Babelを使用して変換する方法を説明します。

```bash

```

Babelには、調整済みの設定を利用するためのプリセットと呼ばれるパッケージがあります。

`babel.config.json` を作成し、下記の設定を書き加えます。

```json
{}
```

Babelを使用するプロジェクトは、`babel.config.json` というファイルなどによって設定を行います。
より詳しい設定項目に関する情報は [Babel公式ドキュメント > Config Reference](https://babeljs.io/docs/en/options) をご参照ください。

これでBabelの設定ができたので、VitestからESMをテストできるようになりました。それではさっそくテストしてみましょう。
