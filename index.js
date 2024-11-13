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

class IpAddressValid {
  constructor() {
    this.ipValues = false;
  }

  isValid(ip) {
    this.ip = ip;
    return typeof ip === 'string' && ip.startsWith('27.') && this.ipValues;
  }

  ipAddressValues() {
    let array = '';
    if (typeof this.ip === 'string') {
      array = this.ip.split('.')
      .filter((item) => Number(item) >= 0 && Number(item) <= 255);
      this.ipValues = array.length === 4;
    }
    return this;
  }
}

class Shaping {
  isValid() {

  }

  shape() {
    
  }
}

class Validator {
  constructor() {
    this.startsWith = 'ZIP_';
  }

  postalCode() {
    return new PostalCodeValid();
  }

  ipAddress() {
    return new IpAddressValid();
  }

  user() {
    return new Shaping();
  }
}


const valid = new Validator();
const postal = valid.postalCode().setPostalCodeLengthConstraint(2);

console.log(postal.isValid('ZIP_123'));
console.log(postal.isValid('ZII_123'));
console.log(postal.isValid(123));
const aaa = '27.0.0.1.257'.split('.')
      .filter((item) => Number(item) >= 0 && Number(item) <= 255);
console.log('27.0.0.1.4'.split('.'))

const v = new Validator();

const ipAddressSchema1 = v.ipAddress().ipAddressValues();
console.log(ipAddressSchema1.isValid('22'));


export default Validator;