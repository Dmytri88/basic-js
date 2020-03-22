const chainMaker = {
  arrChain: [],

  getLength() {
    return this.arrChain.length
  },
  addLink(value) {
    this.arrChain.push(`( ${value + ''} )`)
    return this
  },
  removeLink(position) {
    if(Number.isInteger(position) && 1 <= position && position <= this.arrChain.length) {
      this.arrChain.splice(position - 1, 1)
      return this
    } else {
      this.arrChain = [];
      throw 'error'
    };
  },
  reverseChain() {
    this.arrChain.reverse()
    return this
  },
  finishChain() {
    const result = this.arrChain.join('~~');
    this.arrChain = []
    return result
  }
};

module.exports = chainMaker;
