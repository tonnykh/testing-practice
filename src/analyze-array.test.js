const arrayAnalysis = require('./analyze-array');

test('array test 1', () => {
    expect(arrayAnalysis([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6        
    });
});

test('array test 2', () => {
    expect(arrayAnalysis([0])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 1,
    });
})