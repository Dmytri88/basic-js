module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (arr.findIndex(item => Array.isArray(item)) === -1){
            return 1
        } else {
            var result = []
            arr.forEach((el) => {
                if (Array.isArray(el)) {
                    var calculate = this.calculateDepth(el)
                    result.push(calculate + 1)
                }
            });
            return  result.sort((a,b) => {return b-a})[0]
        }
    }
};
