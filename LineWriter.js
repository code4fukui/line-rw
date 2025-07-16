class LineWriter {
  constructor(fn, encoder, append = false) {
    this.f = null;
    this.fn = fn;
    this.textencoder = encoder || new TextEncoder();
    this.eof = false;
    this.append = append;
  }
  async writeLine(line) {
    if (this.eof) {
      throw new Error("closed");
    }
    if (!this.f) {
      this.f = await Deno.open(this.fn, {
        write: true,
        create: true,
        truncate: !this.append,
        append: this.append,
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
