const { getBiggestRepoName } = require('../src/index');

describe('getBiggestRepoName', () => {
  test('"facebook-php-business-sdk" is the biggest repo name', async () => {
    const result = await getBiggestRepoName();
    const expected = 'facebook-php-business-sdk';

    expect(result).toBe(expected);
  });
});
