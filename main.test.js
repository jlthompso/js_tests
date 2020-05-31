const main = require('./main')

test('Capitalizes First Letter', () => {
    expect(main.capitalize('test string.')).toBe('Test string.')
})

test ('Reverses Letters', () => {
    expect(main.reverse('test')).toBe('tset')
})

test ('Adds', () => {
    expect(main.Calculator.add(1, 2)).toBe(3)
})

test ('Subracts', () => {
    expect(main.Calculator.subtract(1, 2)).toBe(-1)
})

test ('Divides', () => {
    expect(main.Calculator.divide(1, 2)).toBeCloseTo(0.5)
})

test ('Multiplies', () => {
    expect(main.Calculator.multiply(1, 2)).toBe(2)
})

test ('Encrypts', () => {
    expect(main.Caesar.encrypt('Test String.', 5)).toBe('Yjxy Xywnsl.')
})

test ('Doesn\'t shift', () => {
    expect(main.Caesar.encrypt('test string.')).toBe('test string.')
})

test ('Analyzes Array', () => {
    expect(main.analyze([1,8,3,4,2,6])).toEqual(
    {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})