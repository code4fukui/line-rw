import * as t from "https://deno.land/std/testing/asserts.ts";
import { LineWriter } from "../LineWriter.js";
import { LineReader } from "../LineReader.js";
import { TextDecoderSJIS } from "https://js.sabae.cc/TextDecoderSJIS.js";
import { TextEncoderSJIS } from "https://js.sabae.cc/TextEncoderSJIS.js";

Deno.test("test", async () => {
  /*
  const w = new LineWriter("test-sjis.csv", new TextEncoderSJIS());
  await w.writeLine("name,value");
  await w.writeLine("あいう,123");
  await w.writeLine("かきく,456");
  w.close();
  */
  const r = new LineReader("test-sjis.csv", new TextDecoderSJIS());
  t.assertEquals(await r.readLine(), "name,value");
  t.assertEquals(await r.readLine(), "あいう,123");
  t.assertEquals(await r.readLine(), "かきく,456");
  t.assertEquals(await r.readLine(), null);
  r.close();
});
/*
Deno.test("test2", async () => {
  t.assertEquals(
    await Deno.readTextFile("test-sjis.csv"),
    "name,value\nあいう,123\nかきく,456\n",
  );
});
*/