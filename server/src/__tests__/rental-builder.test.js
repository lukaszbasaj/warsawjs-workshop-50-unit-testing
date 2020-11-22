const Rental = require('../rentals/rental');
const RentalBuilder = require('../rentals/rental-builder');

test('should return rental state', () => {
  const rental = new RentalBuilder()
    .rentBy(1)
    .selectCar(1)
    .depositAmount(5000)
    .inState(Rental.RESERVED)
    .build();

  expect(rental).toMatchSnapshot();
});

test('should return rental paid', () => {
  const rental = new RentalBuilder().buildPaid();

  expect(rental.getState()).toMatchInlineSnapshot(`"DEPOSIT_PAID"`);
});
