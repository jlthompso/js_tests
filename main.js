function capitalize (string) {
    let char = string.charAt(0)
    return string.replace(char, char.toUpperCase())
}

function reverse (string) {
    chars = string.split('')
    let ret = []
    for (let i = 0; i < chars.length; i++) {
        ret.unshift(chars[i])
    }
    return ret.join('')
}

const Calculator = {
    add (a, b) {
        return a + b
    },

    multiply (a, b) {
        return a * b
    },

    divide (a, b) {
        return a / b
    },

    subtract (a, b) {
        return a - b
    }
}

const Caesar = (function () {
    const _lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const _upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const _re = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\d\s]/

    function _getChar (char, shift) {
        let ret = ''
        if (char === char.toLowerCase()) {
            let i = (_lowerCaseLetters.indexOf(char) % 26) + shift
            if (i >= 26) i -= 26
            ret = _lowerCaseLetters.charAt(i)
        } else {
            let i = (_upperCaseLetters.indexOf(char) % 26) + shift
            if (i >= 26) i -= 26
            ret = _upperCaseLetters.charAt(i)
        }
        return ret
    }

    return {
        encrypt(string, shift) {
            if (arguments[1] === undefined) shift = 0

            chars = string.split('')
            ret = []
            chars.forEach(char => {
                _re.test(char) ? ret.push(char) : ret.push(_getChar(char, shift))
            })
            return ret.join('')
        }
    }
}())

function analyze(array) {
    let average, min, max, length

    length = array.length
    min = array.sort()[0]
    max = array.sort()[length - 1]
    let sum = 0
    for (let i = 0; i < length; i++) {
        sum += array[i]
    }
    average = sum / length

    return {average, min, max, length}
}

module.exports = {capitalize, reverse, Calculator, Caesar, analyze}