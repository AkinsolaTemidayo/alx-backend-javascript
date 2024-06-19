const Utils = {
  calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    // You can extend this with other operations if needed.
  }
};

module.exports = Utils;
