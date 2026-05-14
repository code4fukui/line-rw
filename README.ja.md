# line-rw

[Deno](https://deno.land/) 向けの、ファイルを1行ずつ読み書きするライブラリです。

## 機能

- `LineReader` および `LineWriter` クラスを提供し、シンプルな1行単位のファイルI/Oを実現します。
- 16KB単位のチャンクで読み書きを行うことで、大容量ファイルを効率的に処理します。
- 独自の `TextDecoder` / `TextEncoder` を指定することで、カスタムテキストエンコーディング（例: Shift-JIS）をサポートします。
- 既存ファイルへの追記をサポートします。
- 外部依存関係はゼロです。

## 使い方

### ファイルへの書き込み

以下のコードは、`test.txt` を新規作成または上書きし、3行のテキストを書き込みます。

```js
import { LineWriter } from "https://code4fukui.github.io/line-rw/LineWriter.js";

const w = new LineWriter("test.txt");
await w.writeLine("abc");
await w.writeLine("");
await w.writeLine("def");
w.close();
```

### ファイルへの追記

上書きではなくファイルに追記するには、`LineWriter` コンストラクタの第3引数に `true` を渡します。

```js
import { LineWriter } from "https://code4fukui.github.io/line-rw/LineWriter.js";

const encoder = new TextEncoder(); // またはnullでデフォルトを使用
const append = true;
const w = new LineWriter("test.txt", encoder, append);
await w.writeLine("ghi");
w.close();
```

### ファイルからの読み込み

以下のコードは、ファイルの終端に達するまで `test.txt` を1行ずつ読み込みます。

```js
import { LineReader } from "https://code4fukui.github.io/line-rw/LineReader.js";

const r = new LineReader("test.txt");
for (;;) {
  const line = await r.readLine();
  if (line === null) { // ファイルの終端
    break;
  }
  console.log(line);
}
r.close();
```

### カスタムエンコーディングでの読み込み

Shift-JIS用などのカスタムデコーダーを指定することで、異なるエンコーディングのファイルを処理できます。

```js
import { LineReader } from "https://code4fukui.github.io/line-rw/LineReader.js";
import { TextDecoderSJIS } from "https://code4sabae.github.io/js/TextDecoderSJIS.js";

// 'test-sjis.csv'がShift-JISでエンコードされていることを前提とします
const r = new LineReader("test-sjis.csv", new TextDecoderSJIS());
const line = await r.readLine(); // Shift-JISのバイト列をUTF-8文字列にデコードします
console.log(line);
r.close();
```

## テスト

```bash
cd test
deno test -A
```

## ライセンス

MIT License
