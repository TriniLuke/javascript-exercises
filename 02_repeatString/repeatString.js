const repeatString = function(Str, num) {
    let repeatedString = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = num; i > 0; i--) {
        repeatedString += Str;
        
    }
        
    return repeatedString;
};
// Do not edit below this line
module.exports = repeatString;
