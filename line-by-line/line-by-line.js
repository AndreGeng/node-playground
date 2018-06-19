const { Readable } = require('stream');

class LineByLine extends Readable {
  constructor(stream, options = {}) {
    super(options);
    this._stream = stream;
    this._encoding = options.encoding || 'utf8';
    this._lines = [];
    this._stream.setEncoding(this._encoding);
		this._ready = false;
    this._stream.on('readable', () => {
			this._ready = true;
			console.log('within readable');
      this.readFromSource();
    });
  }
  readFromSource() {
    const str = this._stream.read();
    let hasLineSegment;
    if (str) {
      this._lines = [...this._lines, ...str.split(/(?:\n|\r\n|\r)/g)];
      hasLineSegment = true;
    } else {
      hasLineSegment = false;
    }
    while(this._lines.length > (hasLineSegment ? 1 : 0)) {
      const line = this._lines.shift();
      if (this.push(line)) {
        this.emit('line', line);
      } else {
        break;
      }
    }
    if (!str && this._lines.length <= 0) {
      this.push(null);
    }
  }
  _read() {
    console.log('within _read');
		if (this._ready) {
			this.readFromSource();
		}
  }

}

module.exports = LineByLine;
