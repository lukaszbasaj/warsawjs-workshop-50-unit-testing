const { passwordValidator } = require('../auth/passwordValidator');

describe.only('passwordValidator', () => {
    test.todo('returns true for a valid password')
    // , () => {
    //     const isValid =  passwordValidator('lksamdo32');
    //     expect(isValid).toBe(true);
    // });

    test('returns true for valid password', () => {
        const isValid =  passwordValidator('asdasd@6A');
        expect(isValid).toBe(true);
    });

    test('returns false if password is shorter than 6 characters', () => {
        const isValid =  passwordValidator('lksam');
        expect(isValid).toBe(false);
    });

    test('returns false if password not containinig non-alphanumerical char', () => {
        const isValid =  passwordValidator('asdasd444');
        expect(isValid).toBe(false);
    });

    test('returns false if password not containing a digit', () => {
        const isValid =  passwordValidator('asdasd@');
        expect(isValid).toBe(false);
    });

    test('returns false if password not containing a capital letter', () => {
        const isValid =  passwordValidator('asdasd@1');
        expect(isValid).toBe(false);
    })
});