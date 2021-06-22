const githubApi = require('../configs/github.api');

class FacebookRepo {
  constructor(api) {
    this.api = api;

    this.options = {
      method: 'GET',
      url: '/orgs/facebook/repos'
    }
  }

  listSuccess(response) {
    for(const repo of response.data) {
      console.log(repo.name);
    }
  }

  error(err) {
    console.error('An error has occurred:' + err);
  }

  list() {
    this.api(this.options)
      .then(this.listSuccess.bind(this))
      .catch(this.error.bind(this));
  }
}

const facebookRepo = new FacebookRepo(githubApi);

module.exports = facebookRepo;
