const Intern = require('../lib/Intern');
describe('Intern', () => {
  test('Can set school via constructor', () => {
    const testValue = 'UCLA';
    const e = new Intern({
      namd: 'Foo',
      id: 1,
      email: 'test@test.com',
      school: testValue,
    });
    expect(e.school).toBe(testValue);
  });

  test('getRole() should return "Intern"', () => {
    const testValue = 'Intern';
    const e = new Intern({
      namd: 'Foo',
      id: 1,
      email: 'test@test.com',
      school: 'UCLA',
    });
    expect(e.getRole()).toBe(testValue);
  });

  test('Can get school via getSchool()', () => {
    const testValue = 'UCLA';
    const e = new Intern({
      namd: 'Foo',
      id: 1,
      email: 'test@test.com',
      school: testValue,
    });
    expect(e.getSchool()).toBe(testValue);
  });
});
