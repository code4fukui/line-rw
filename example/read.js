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
