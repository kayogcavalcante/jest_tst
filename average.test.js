const calculateAverage = require('./average');

test('calcula a media de um conjunto de numeros inteiros', () => {
    expect(calculateAverage(2,2)).toBe(2);
})

test('calcula a media de um conjunto de numeros decimais', () => {
    expect(calculateAverage(3,2)).toBe(2.5);
})

test('retornar NaN para uma matriz vazia', () => {
    expect(calculateAverage()).toEqual(NaN);
})