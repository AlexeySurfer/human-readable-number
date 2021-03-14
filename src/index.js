module.exports = function toReadable(number) {
    if (number == 0) {
        return 'zero'
    }
    let res = []; let r, rde, rhe, rd;
    let h = number / 100;
    let he = number % 100;
    let d = he / 10;
    let de = he % 10;
    if (h >= 1) {
        switch (Math.trunc(h)) {
            case 1: r = 'one'; break;
            case 2: r = 'two'; break;
            case 3: r = 'three'; break;
            case 4: r = 'four'; break;
            case 5: r = 'five'; break;
            case 6: r = 'six'; break;
            case 7: r = 'seven'; break;
            case 8: r = 'eight'; break;
            case 9: r = 'nine'; break;
            case 10: r = 'ten'; break;
            case 11: r = 'eleven'; break;
            case 12: r = 'twelve'; break;
            case 13: r = 'thirteen'; break;
            case 14: r = 'fourteen'; break;
            case 15: r = 'fifteen'; break;
            case 16: r = 'sixteen'; break;
            case 17: r = 'seventeen'; break;
            case 18: r = 'eighteen'; break;
            case 19: r = 'nineteen'; break;
            default: r = '';
        }
        res.push(r); res.push('hundred');
    }
    if (he < 20 && he > 0) {
        switch (he) {
            case 0: rhe = 'zero'; break;
            case 1: rhe = 'one'; break;
            case 2: rhe = 'two'; break;
            case 3: rhe = 'three'; break;
            case 4: rhe = 'four'; break;
            case 5: rhe = 'five'; break;
            case 6: rhe = 'six'; break;
            case 7: rhe = 'seven'; break;
            case 8: rhe = 'eight'; break;
            case 9: rhe = 'nine'; break;
            case 10: rhe = 'ten'; break;
            case 11: rhe = 'eleven'; break;
            case 12: rhe = 'twelve'; break;
            case 13: rhe = 'thirteen'; break;
            case 14: rhe = 'fourteen'; break;
            case 15: rhe = 'fifteen'; break;
            case 16: rhe = 'sixteen'; break;
            case 17: rhe = 'seventeen'; break;
            case 18: rhe = 'eighteen'; break;
            case 19: rhe = 'nineteen'; break;
            default: rhe = '';

        }
        res.push(rhe);
    }
    else if (d > 0) {
        switch (Math.trunc(d)) {
            case 2: rd = 'twenty'; break;
            case 3: rd = 'thirty'; break;
            case 4: rd = 'forty'; break;
            case 5: rd = 'fifty'; break;
            case 6: rd = 'sixty'; break;
            case 7: rd = 'seventy'; break;
            case 8: rd = 'eighty'; break;
            case 9: rd = 'ninety'; break;
        }
        res.push(rd);

        switch (de) {

            case 1: rde = 'one'; break;
            case 2: rde = 'two'; break;
            case 3: rde = 'three'; break;
            case 4: rde = 'four'; break;
            case 5: rde = 'five'; break;
            case 6: rde = 'six'; break;
            case 7: rde = 'seven'; break;
            case 8: rde = 'eight'; break;
            case 9: rde = 'nine'; break;
        }
        if (de > 0) {
            res.push(rde);
        }

    }
    return res.join(' ');
}