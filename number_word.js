/**
Number to words ToolsBy7prny
 */

(function () {
    if (!String.prototype.trim) {
      String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      };
    }

    var numberMap = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
        1000: 'thousand',
        100000: 'lakh',
        100000000: 'crore',
    };

    var numberList = [
        100000000,
        100000,
        1000,
        100,
        90,
        80,
        70,
        60,
        50,
        40,
        30,
        20,
        19,
        18,
        17,
        16,
        15,
        14,
        13,
        12,
        11,
        10,
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2,
        1,
        0
    ];

    var _shouldPrefixWithOne = function (n) {
        return n >= 100;
    };

    var _shouldHyphenate = function (n) {
        return n >= 20 && n <= 99;
    };

    window.numberToWords = function (numToConvert) {
        var i, n, words = "", prefixNum,  remainder;

        // Make sure number is an integer.
        numToConvert = parseInt(numToConvert, 10);

        if (isNaN(numToConvert)) {
            return "not a number";
        }

        if (!isFinite(numToConvert)) {
            return "infinity";
        }

        if (numToConvert < 0) {
            words += 'negative ';
            numToConvert *= -1;
        }

        for (i = 0; i < numberList.length; i++) {
            n = numberList[i];

            if (numToConvert === n) {
                if (_shouldPrefixWithOne(n)) {
                    words += 'one ';
                }
                words += numberMap[n];
                return words;
            }

            if (numToConvert > n) {
                break;
            }
        }

        prefixNum = Math.floor(numToConvert / n);
        if (prefixNum !== 1 || _shouldPrefixWithOne(n)) {
            words += numberToWords(prefixNum) + ' ';
        }
        words += numberMap[n];
        remainder = numToConvert - (prefixNum * n);
        if (remainder > 0 && _shouldHyphenate(n)) {
            words += '-';
        } else {
            words += ' ';
        }
        if (remainder > 0) {
            words += numberToWords(remainder);
        }
        return words.trim();
    };

})();
