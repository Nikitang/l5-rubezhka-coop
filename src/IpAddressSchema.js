class IpAddressValid {
  constructor() {
    this.ipValues = false;
    this.ip = '';
  }

  isValid(ip) {
    this.ip = ip.toString();
    return this.ipValues === true
      ? typeof ip === 'string' && ip.startsWith('27.') && this.validationAddress()
      : typeof ip === 'string' && ip.startsWith('27.');
  }

  validationAddress() {
    const array = this.ip.split('.').filter((item) => Number(item) >= 0 && Number(item) <= 255);
    return array.length === 4;
  }

  ipAddressValues() {
    this.ipValues = true;
    return this;
  }
}

export default IpAddressValid;
