const createError = require('http-errors');
const { checkSignIn } = require('../auth/auth-middleware');

test('should pass thru user with active session', () => {
    const next = jest.fn();
    const res = () => {};
    const req = { session: {user: {} } };

    checkSignIn(req, res, next);

    expect(next).toBeCalledTimes(1);
    expect(next).toHaveBeenCalledWith();
})

test('should block without active session', () => {
    const next = jest.fn();
    const res = () => {};
    const req = { session: {} };

    checkSignIn(req, res, next);

    expect(next).toBeCalledTimes(1);
    expect(next).toHaveBeenCalledWith(createError(401));
})