let instance = null;
class IdGenerator {
  static id = 1;
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }
  getNextId() {
    return ++IdGenerator.id;
  }
}

module.exports = IdGenerator;
