import * as t from "https://deno.land/std/testing/asserts.ts";
import { LineWriter } from "../LineWriter.js";
import { LineReader } from "../LineReader.js";

Deno.test("test", async () => {
  const w = new LineWriter("test.csv");
  await w.writeLine("name,value");
  await w.writeLine("abc,123");
  await w.writeLine("def,456");
  w.close();
  const r = new LineReader("test.csv");
  t.assertEquals(await r.readLine(), "name,value");
  t.assertEquals(await r.readLine(), "abc,123");
  t.assertEquals(await r.readLine(), "def,456");
  t.assertEquals(await r.readLine(), null);
  r.close();
});
Deno.test("test2", async () => {
  t.assertEquals(
    await Deno.readTextFile("test.csv"),
    "name,value\nabc,123\ndef,456\n",
  );
});
Deno.test("append", async () => {
  try {
    await Deno.remove("test_append.csv");
  } catch (e) {
  }
  const append = true;
  const w = new LineWriter("test_append.csv", null, append);
  await w.writeLine("name,value");
  await w.writeLine("abc,123");
  w.close();
  const w2 = new LineWriter("test_append.csv", null, append);
  await w2.writeLine("def,456");
  w2.close();

  const r = new LineReader("test_append.csv");
  t.assertEquals(await r.readLine(), "name,value");
  t.assertEquals(await r.readLine(), "abc,123");
  t.assertEquals(await r.readLine(), "def,456");
  t.assertEquals(await r.readLine(), null);
  r.close();

  t.assertEquals(
    await Deno.readTextFile("test_append.csv"),
    "name,value\nabc,123\ndef,456\n",
  );
});
