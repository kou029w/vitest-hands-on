# Vitestの機能

Vitestの代表的な機能を紹介します。

## Matcher

マッチャー (matcher) とは、与えた値を検証するためのメソッドです。

### 同一性の検証

- `toBe` … 与えた値との同一性 (`===`) を検証します
- `toEqual` … オブジェクトまたは配列のすべてのプロパティの同一性を再帰的に検証します
- `not` … 検証の結果を反転させます

<iframe
  src="https://stackblitz.com/github/kou029w/vitest-hands-on/tree/main/templates/basic?embed=1&view=editor&terminal=test&file=notToBe.test.js,toEqual.test.js,toBe.test.js"
  style="
    width: 100%;
    height: 640px;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
  "
  title="basic"
></iframe>

### 真偽値とそれに類する値の検証

- `toBeNull` … null
- `toBeUndefined` … undefined
- `toBeDefined` … undefined でない (つまり `not.toBeUndefined` と等価)
- `toBeTruthy` … if ステートメントが真であるとみなすもの
- `toBeFalsy` … if ステートメントが偽であるとみなすもの

### 数値

- `toBeGreaterThan` … >
- `toBeGreaterThanOrEqual` … >=
- `toBeLessThan` … <
- `toBeLessThanOrEqual` … <=
- `toBeCloseTo` … 浮動小数点数の丸め誤差を考慮した同一性

### 文字列

- `toMatch` … 正規表現のパターン

### 配列と反復可能なオブジェクト

- `toContain` … 配列や反復可能なオブジェクトに特定のアイテムが含まれているかを検証します

### 例外

- `toThrow` … 例外を発報するかどうかを検証します

### その他

より詳しい情報は [Vitest公式リファレンス](https://vitest.dev/api/expect) をご覧ください。

## Promise

Vitestは、`test` に渡す関数の前に `async` キーワードを記述するだけで、非同期テストを実行できます。

<iframe
  src="https://stackblitz.com/github/kou029w/vitest-hands-on/tree/main/templates/promise?ctl=1&embed=1&view=editor&terminal=test&file=promise.test.js"
  style="
    width: 100%;
    height: 640px;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
  "
  title="promise"
></iframe>

より詳しい情報は [Vitest公式ドキュメント resolves](https://vitest.dev/api/expect#resolves) をご覧ください。

## beforeEach と afterEach

`beforeEach` と `afterEach` を使用することでテストの実行の前に繰り返し行う準備や、後片付けの処理を宣言できます。

<iframe
  src="https://stackblitz.com/github/kou029w/vitest-hands-on/tree/main/templates/scope?ctl=1&embed=1&view=editor&terminal=test&expanddevtools=1&&file=scope.test.js"
  style="
    width: 100%;
    height: 640px;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
  "
  title="scope"
></iframe>

より詳しい情報は [Vitest公式ドキュメント Setup and Teardown](https://vitest.dev/api/#setup-and-teardown) をご覧ください。

## モック

モック関数を使用することでコード間の繋がりをテストできます。

<iframe
  src="https://stackblitz.com/github/kou029w/vitest-hands-on/tree/main/templates/mock?ctl=1&embed=1&view=editor&terminal=test&file=mock.test.js"
  style="
    width: 100%;
    height: 640px;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
  "
  title="mock"
></iframe>

より詳しい情報は [Vitest公式ドキュメント Mock Functions](https://vitest.dev/api/mock) をご覧ください。
