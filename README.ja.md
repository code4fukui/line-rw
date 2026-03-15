# line-rw

Denoで使えるファイルの行単位読み書きライブラリです。

## 機能
- `LineReader`と`LineWriter`クラスを提供し、ファイルの行単位での読み書きができます
- テキストモードとバイナリモードの両方に対応しています
- 大容量ファイルにも対応するため、バッチ処理で読み書きを行います
- ファイルI/Oの一般的な操作を簡単に行えるAPIを提供しています

## 使い方
### ファイルへの書き込み
```js
import { LineWriter } from "https://code4fukui.github.io/line-rw/LineWriter.js";

const w = new LineWriter("test.txt");
await w.writeLine("abc");
await w.writeLine("");
await w.writeLine("def");
w.close();
```

ファイルへの追記:
```js
const encoder = new TextEncoder(); // or null
const append = true;
const w = new LineWriter("test.txt", encoder, append);
```

### ファイルからの読み込み
```js
import { LineReader } from "https://code4fukui.github.io/line-rw/LineReader.js";

const r = new LineReader("test.txt");
for (;;) {
  const s = await r.readLine();
  if (s == null) {
    break;
  }
  console.log(s);
}
r.close();
```

## テスト
```bash
cd test
deno test -A
```

## ライセンス
MIT License