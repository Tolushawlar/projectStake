class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(otherVec) {
    return new Vec(this.x + otherVec.x, this.y + otherVec.y);
  }

  minus(otherVec) {
    return new Vec(this.x - otherVec.x, this.y - otherVec.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
