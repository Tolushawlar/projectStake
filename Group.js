class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    const index = this.members.indexOf(value);
    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(iterable) {
    const group = new Group();
    for (const value of iterable) {
      group.add(value);
    }
    return group;
  }
}
