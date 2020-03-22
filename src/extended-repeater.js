module.exports = function repeater(str, options) {
    this.repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
    this.separator = options.separator !== undefined ? String(options.separator) : '+';
    this.addition = options.addition !== undefined ? String(options.addition) : '';
    this.additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
    this.additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '+';
    
    var stringExt='';
    
    for (var i = 0; i < this.repeatTimes; i++) {
        stringExt += String(str);
        for (var k = 0; k < this.additionRepeatTimes; k++) {
            stringExt += this.addition;      
            k < (this.additionRepeatTimes-1) ? stringExt += this.additionSeparator : 0;
        }
        i < (this.repeatTimes - 1) ? stringExt += this.separator : 0;
    }

    return stringExt;
};
  
