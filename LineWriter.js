class LineWriter {
  constructor(fn, encoder) {
    this.f = null;
    this.fn = fn;
    this.textencoder = encoder || new TextEncoder();
    this.eof = false;
  }
  async writeLine(line) {
    if (this.eof) {
      throw new Error("closed");
    }
    if (!this.f) {
      this.f = await Deno.open(this.fn, {
        write: true,
        create: true,
        truncate: true,
      });
    }
    await this.f.write(this.textencoder.encode(line + "\n"));
  }
  close() {
    if (!this.f) {
      return;
    }
    this.f.close();
    this.eof = true;
  }
}

export { LineWriter };
