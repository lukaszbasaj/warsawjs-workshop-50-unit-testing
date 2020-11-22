const { isEmailAllowed } = require('../utils/email-validator');

test('should email be allowed', () => {
    const email = 'test@warsaw.js'

    const result = isEmailAllowed(email);

    expect(result).toBe(true);
});

test('should block out email without warsawjs domain', () => {
    const result = isEmailAllowed('test@cos.js');

    expect(result).toBe(false);
});

const cases = [
    ['asdasd@as.com', false], 
    ['adam@warsaw.js', true], 
    ['441@warsaw.js', false]
];
describe('email validator', () => {
    test.each(cases)(
        "given %p returns %p",
        (arg, out) => {
            const result = isEmailAllowed(arg);
            expect(result).toBe(out);
        }
    )
});