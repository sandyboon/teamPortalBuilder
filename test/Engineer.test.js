const Engineer = require('../lib/Engineer');

describe('Enginer', () => {
  test('Can set GitHUb account via constructor', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer({
      name: 'Foo',
      id: 1,
      email: 'test@test.com',
      github: testValue,
    });
    expect(e.github).toBe(testValue);
  });

  test('getRole() should return "Engineer"', () => {
    const testValue = 'Engineer';
    const e = new Engineer({
      name: 'Foo',
      id: 1,
      email: 'test@test.com',
      github: 'GitHubUser',
    });
    expect(e.getRole()).toBe(testValue);
  });

  test('Can get GitHub username via getGithub()', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer({
      name: 'Foo',
      id: 1,
      email: 'test@test.com',
      github: testValue,
    });
    expect(e.getGithub()).toBe(testValue);
  });
});
