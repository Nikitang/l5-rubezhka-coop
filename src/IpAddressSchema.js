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

export default IpAddressValid;
