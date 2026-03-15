# line-rw

File line-by-line read/write library for [Deno](https://deno.land/).

## Features
- Provides `LineReader` and `LineWriter` classes for reading and writing files line-by-line
- Supports reading and writing files in both text and binary modes
- Handles large files by reading and writing in batches
- Provides an easy-to-use API for common file I/O operations

## Usage

### Writing to a file
```js
import { LineWriter } from "https://code4fukui.github.io/line-rw/LineWriter.js";

const w = new LineWriter("test.txt");
await w.writeLine("abc");
await w.writeLine("");
await w.writeLine("def");
w.close();
```

To append to a file:
```js
const encoder = new TextEncoder(); // or null
const append = true;
const w = new LineWriter("test.txt", encoder, append);
```

### Reading from a file
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

## Testing
```bash
cd test
deno test -A
```

## License
MIT License