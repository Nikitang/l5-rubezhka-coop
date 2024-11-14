class Shaping {
  isValid(user) {
    const validator = Object.keys(user).map((item) => this.schema[item].isValid(user[item]));
    return !validator.includes(false);
  }

  shape(obj) {
    this.schema = obj;
    return this;
  }
}

export default Shaping;
