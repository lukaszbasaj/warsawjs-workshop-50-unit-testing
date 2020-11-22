const { isEmailAllowed } = require('./email-validator');

test('should email be allowed', () => {
    const result = isEmailAllowed('test@warsaw.js');

    expect(result).toBe(true);
    console.log({ result });
});

test('should block out email without warsawjs domain', () => {
    const result = isEmailAllowed('test@cos.js');

    expect(result).toBe(false);
    console.log({ result });
});

test('should contain alphanumerical', () => {
    const result = isEmailAllowed('test@cos.js');

    expect(isEmailAllowed('!asdasd@warsaw.js')).toBe(false);
    expect(isEmailAllowed('@asdasd@warsaw.js')).toBe(false);
    expect(isEmailAllowed('_asdasd@warsaw.js')).toBe(false);
    expect(isEmailAllowed('3asdasd@warsaw.js')).toBe(false);
});