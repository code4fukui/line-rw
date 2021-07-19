# line-rw

Deno用 ファイルの行単位読み書きライブラリ

```
import { LineWriter } from "https://code4fukui.github.io/line-rw/LineWriter.js";

const w = new LineWriter("test.txt");
await w.writeLine("abc");
await w.writeLine("");
await w.writeLine("def");
w.close();
```

```
import { LineReader } from "https://code4fukui.github.io/line-rw/LineReader.js";

const r = new LineReader("test.txt");
for (;;) {
  const s = await r.writeLine();
  if (s == null) {
    break;
  }
  console.log(s);
}
r.close();
```
