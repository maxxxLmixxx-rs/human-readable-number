module.exports = function toReadable (number) {
    const DIGITS = {
      LESS_20: [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
       'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ],
      GREATER_20: [ '--', '--', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ]
    };
    
    if (number === 0) return DIGITS.LESS_20[0];
    if (!number) return false;

    let readable = ""; number = String(number);
    let dozens = number.length > 2 ? number.slice(1) : number;
    let hundreds = number.length > 2 ? number.slice(0, 1) : null;

    if (hundreds) readable += DIGITS.LESS_20[+hundreds] + " hundred ";
    if (dozens < 20) readable += DIGITS.LESS_20[+dozens];
        else readable += DIGITS.GREATER_20[+dozens[0]] + " " + DIGITS.LESS_20[+dozens[1]];

    return readable.replace(/zero/g, "").trim();
}
