const caeserCipher = require('./caeser-cipher');

test('"abcz" becomes "bcda"', () => {
    expect(caeserCipher("abcz")).toBe("bcda");
});

test('"aAabBbzZz" becomes "bBbcCcaAa"', () => {
    expect(caeserCipher('aAabBbzZz')).toBe('bBbcCcaAa');
});

test('"a1ab#bc c.!#^&" becomes "b1bc#cd d.!#^&"', () => {
    expect(caeserCipher('a1ab#bc c.!#^&')).toBe('b1bc#cd d.!#^&');
});