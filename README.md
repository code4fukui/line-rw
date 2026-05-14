# line-rw

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A file line-by-line read/write library for [Deno](https://deno.land/).

## Features

-   Provides `LineReader` and `LineWriter` classes for simple, line-by-line file I/O.
-   Efficiently handles large files by reading and writing in 16KB chunks.
-   Supports custom text encodings (e.g., Shift-JIS) by providing your own `TextDecoder`/`TextEncoder`.
-   Supports appending to existing files.
-   Zero external dependencies.

## Usage

### Writing to a file

This will create or overwrite `test.txt` and write three lines to it.

```js
import { LineWriter } from "https://code4fukui.github.io/line-rw/LineWriter.js";

const w = new LineWriter("test.txt");
await w.writeLine("abc");
await w.writeLine("");
await w.writeLine("def");
w.close();
```

### Appending to a file

To append to a file instead of overwriting it, pass `true` as the third argument to the `LineWriter` constructor.

```js
import { LineWriter } from "https://code4fukui.github.io/line-rw/LineWriter.js";

const encoder = new TextEncoder(); // or null to use default
const append = true;
const w = new LineWriter("test.txt", encoder, append);
await w.writeLine("ghi");
w.close();
```

### Reading from a file

This reads `test.txt` line by line until the end of the file is reached.

```js
import { LineReader } from "https://code4fukui.github.io/line-rw/LineReader.js";

const r = new LineReader("test.txt");
for (;;) {
  const line = await r.readLine();
  if (line === null) { // End of file
    break;
  }
  console.log(line);
}
r.close();
```

### Reading with a custom encoding

You can process files with different encodings by providing a custom decoder, such as one for Shift-JIS.

```js
import { LineReader } from "https://code4fukui.github.io/line-rw/LineReader.js";
import { TextDecoderSJIS } from "https://code4sabae.github.io/js/TextDecoderSJIS.js";

// Assumes 'test-sjis.csv' is encoded in Shift-JIS
const r = new LineReader("test-sjis.csv", new TextDecoderSJIS());
const line = await r.readLine(); // Decodes SJIS bytes into a UTF-8 string
console.log(line);
r.close();
```

## Testing

```bash
cd test
deno test -A
```

## License

MIT License