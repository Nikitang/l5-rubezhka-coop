import PostalCodeValid from './src/PostalCodeSchema.js';
import IpAddressValid from './src/IpAddressSchema.js';
import Shaping from './src/UserSchema.js';

class Validator {
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
// const aaa = '27.0.0.1.257'.split('.')
//   .filter((item) => Number(item) >= 0 && Number(item) <= 255);
console.log('27.0.0.1.4'.split('.'));

const v = new Validator();

const ipAddressSchema1 = v.ipAddress().ipAddressValues();
console.log(ipAddressSchema1.isValid('27.16'));

const userSchema = v.user().shape({
  postalCode: v.postalCode().setPostalCodeLengthConstraint(7),
  ipAddress: v.ipAddress().ipAddressValues(),
});

console.log(userSchema.isValid({ postalCode: 'ZIP_6789056889', ipAddress: '27.16.0' }));

export default Validator;
