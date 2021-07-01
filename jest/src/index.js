const githubApi = require('./configs/github.api');

async function getBiggestRepoName() {
  const url = '/orgs/facebook/repos';
  let biggest = null;

  const handleSuccess = function(response) {
    for(const repo of response.data) {
      if(biggest === null || biggest.length < repo.name.length) {
        biggest = repo.name;
      }
    }
  }

  const handleError = function(err) {
    console.log('An error has occurred:' + err);
  }

  await githubApi.get(url)
    .then(handleSuccess)
    .catch(handleError);

  return biggest;

}

class AbcRun {
  a() {
    return 'a';
  }

  b() {
    return 'b';
  }

  c() {
    return 'c';
  }

  run() {
    return [this.a(), this.b(), this.c()];
  }
}

module.exports = {
  getBiggestRepoName,
  AbcRun
};
