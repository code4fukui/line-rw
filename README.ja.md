# line-rw

Denoで使える、ファイルの行単位読み書きライブラリです。

## 機能
- ファイルの行単位での読み書き
- 追記モードでの書き込み

## 使い方
インストール:
```
https://code4fukui.github.io/line-rw/
```

書き込み例:
```js
import { LineWriter } from "https://code4fukui.github.io/line-rw/LineWriter.js";

const w = new LineWriter("test.txt");
await w.writeLine("abc");
await w.writeLine("");
await w.writeLine("def");
w.close();
```

読み込み例:
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