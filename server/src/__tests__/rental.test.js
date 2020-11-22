const Rental = require('../rentals/rental');

test('should change state to deposit paid', () => {
    const rental = new Rental(11, 22, 1, 1000);

    rental.payDeposit();

    expect(rental.getState()).toBe(Rental.DEPOSIT_PAID);
})

test('should change state to take car', () => {
    const rental = new Rental(11, 22, 1, 1000, Rental.DEPOSIT_PAID);

    rental.takeCar();

    expect(rental.getState()).toBe(Rental.CAR_IN_USE);
})