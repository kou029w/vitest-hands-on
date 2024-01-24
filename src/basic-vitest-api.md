# 基本的な機能

Vitestの機能について説明します。

## テストファイルの検出

Vitestは、デフォルトで下記のファイルをテストファイルとして検出します。

- 名前の末尾に `.test` あるいは `.spec` の含まれる `.js`、`.jsx`、`.ts`、`.tsx` ファイル

## プロジェクトでのテストコマンドの設定

この設定を行うと、`npm test` コマンドでVitestを実行できるようになります。

`package.json` の `scripts` プロパティの中を下記のように変更します。

```json
{
  "scripts": {
    "test": "vitest run"
  }
}
```

NPMコマンドでのテストの実行:

```bash
npm test
```

`npx vitest` コマンドの実行と同様のテスト結果が得られます。
