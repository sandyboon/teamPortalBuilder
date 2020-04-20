let instance = null;
class IdGenerator {
  static id = 0;
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
