module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    var turns = Math.pow(2, disksNumber) - 1;
    var speed = turnsSpeed / 3600;
    return {
        turns: turns,
        seconds: turns / speed
    }
}
