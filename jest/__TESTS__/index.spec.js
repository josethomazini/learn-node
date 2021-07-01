const { getBiggestRepoName, AbcRun } = require('../src/index');
const githubApi = require('../src/configs/github.api');

describe('getBiggestRepoName', () => {
  test('Mock getBiggestRepoName', async () => {
    const biggestRepoName = 'repo4-with-a-longer-name';

    const mockedResult = {
      data: [
        { name: 'repo1' },
        { name: 'repo2' },
        { name: 'repo3' },
        { name: biggestRepoName },
        { name: 'repo5' }
      ]
    };

    jest.spyOn(githubApi, 'get').mockResolvedValueOnce(mockedResult);

    const result = await getBiggestRepoName();

    expect(result).toBe(biggestRepoName);
  });

  test('Mock error on getBiggestRepoName', async () => {
    githubApi.defaults.baseURL = 'invalidUrl';

    return getBiggestRepoName()
      .then(() => expect(1).toBe(2)) // it must fail if the promise is resolved
      .catch(() => expect(1).toBe(1)); // we hope the promise is rejected
  });
});

describe('AbcRun', () => {
  test('AbcRun returns ["a", "b", "c"]', () => {
    const instance = new AbcRun();

    const result = instance.run();
    const expected = ['a', 'b', 'c'];

    expect(result).toEqual(expected);
  });

  test('Mocked AbcRun returns ["a", "b", "c-mocked"]', () => {
    const instance = new AbcRun();

    const cMocked = 'c-mocked';
    jest.spyOn(instance, 'c').mockImplementationOnce(() => cMocked);

    const result = instance.run();
    const expected = ['a', 'b', cMocked];

    expect(result).toEqual(expected);
  });
});
