const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

describe('Manager', () => {
  test('Can set office number via constructor argument', () => {
    const testValue = 100;
    const e = new Manager({
      name: 'Foo',
      id: 1,
      email: 'test@test.com',
      officeNumber: testValue,
    });
    expect(e.officeNumber).toBe(testValue);
  });

  test('getRole() should return "Manager"', () => {
    const testValue = 'Manager';
    const e = new Manager({
      name: 'Foo',
      id: 1,
      email: 'test@test.com',
      officeNumber: testValue,
    });
    expect(e.getRole()).toBe(testValue);
  });

  test('Can get office number via getOffice()', () => {
    const testValue = 100;
    const e = new Manager({
      name: 'Foo',
      id: 1,
      email: 'test@test.com',
      officeNumber: testValue,
    });
    expect(e.getOfficeNumber()).toBe(testValue);
  });
});
