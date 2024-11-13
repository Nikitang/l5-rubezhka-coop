class PostalCodeValid {
  constructor() {
    this.minLength = 0;
    this.maxLength = Infinity;
  }

  isValid(str) {
    if (typeof str !== 'string' || !str.startsWith('ZIP_')) return false;
    const afterZIP = str.length - 4;
    return afterZIP >= this.minLength && afterZIP <= this.maxLength;
  }

  setPostalCodeLengthConstraint(min, max = Infinity) {
    this.minLength = min;
    this.maxLength = max;
    return this;
  }
}

export default PostalCodeValid;
