# はじめてのテスト

ターミナルから `npm` コマンドでVitestをインストールします。

```bash
npm i -D vitest
```

または

```bash
npm install --save-dev vitest
```

いずれかのコマンドを実行することでVitestがインストールされます。
ここでインストールしたVitestは、このプロジェクトの開発用の依存関係として追加されます。
つまり、これ以降このプロジェクトは `npm install` コマンドを実行することでVitestを導入できるようになります。

インストールしたVitestは、`npx vitest` コマンドを使用することで実行できます。

```bash
npx vitest
```

しかし、まだテストが1件も存在しないのでこのコマンドは失敗します。

```console
$ npx vitest
include: **/*.{test,spec}.?(c|m)[jt]s?(x)
exclude:  **/node_modules/**, **/dist/**, **/cypress/**, **/.{idea,git,cache,output,temp}/**, **/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*
watch exclude:  **/node_modules/**, **/dist/**

No test files found, exiting with code 1
```

実際にテストを作成し、実行していきましょう。

次のファイルを作成します。

```js
{{#include getting-started/hello.test.js}}
```

この作成した `hello.test.js` は、`npx vitest` コマンドを実行するときにテストとして実行されるようになります。

```console
$ npx vitest
 ✓ hello.test.js (1)
   ✓ 1と2の合計は3です

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  16:38:04
   Duration  264ms (transform 20ms, setup 0ms, collect 9ms, tests 2ms, environment 0ms, prepare 68ms)


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```

問題なく実行できましたか？
実行終了するには、キーボードの `q` を押します。

```
 ✓ hello.test.js (1)
```

画面に表示されたこの部分は「テスト `hello.test.js` が実行され、そのテストは合格しました ✅」ということを意味しています。

このようにしてVitestは簡単にテストを行うことができます。

## はじめてのテストのコードの説明

テストのコードについてより詳しく説明します。

はじめてのテストのコード:

```js
{{#include getting-started/hello.test.js}}
```

このコードは、「1と2の合計は3です」というテストを意味します。
式 `1 + 2` が、 `3` と等しいことを検証するテストです。

Vitestを使用するため、最初の行は `import` 文によって `vitest` を指定しています。

```js
{{#include getting-started/hello.test.js:2}}
```

そして、下記のVitestの機能が使われています。

`test()` 関数

テストを宣言するための関数です。

- 第一引数には、このテストの説明を人間が読める形式で記述します
- 第二引数には、テストの本体を記述します

`expect()` 関数

引数に与えた値を検証します。

`expect(<検査される値>).toBe(<期待する値>)`

「検査される値」と「期待する値」の同一性を検証します。

このコードは、Vitestの基本的な機能を確認するための極めて単純なテストですが、テスト環境自体の検証を行うことでもあります。
テスト環境の検証は、テストを行う上で最初に確認しておく重要なポイントです。
