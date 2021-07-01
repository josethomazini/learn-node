const { promisify } = require('util');
const { writeFile } = require('fs');
const githubApi = require('./configs/github.api');


function simplePromise() {
  const reposPromise = new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: '/orgs/facebook/repos'
    }

    try {
      const result = githubApi(options);
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });

  function handleSuccess(result) {
    console.log(result.data);
  }

  function handleError(err) {
    console.log(err);
  }

  reposPromise
    .then(handleSuccess)
    .catch(handleError);
}

function promiseAll() {
  const sleep5Seconds = new Promise((resolve, reject) => {
    setTimeout(() => resolve('sleep5Seconds'), 5000)
  });

  const sleep10Seconds = new Promise((resolve, reject) => {
    setTimeout(() => resolve('sleep10Seconds'), 10000)
  });

  Promise.all([
    sleep5Seconds,
    sleep10Seconds
  ]).then((values) => {
    console.log(`Return of all promises: ${values}`);
  });
}

function promiseRace() {
  const sleep5Seconds = new Promise((resolve, reject) => {
    setTimeout(() => resolve('sleep5Seconds'), 5000)
  });

  const sleep10Seconds = new Promise((resolve, reject) => {
    setTimeout(() => resolve('sleep10Seconds'), 10000)
  });

  Promise.race([
    sleep5Seconds,
    sleep10Seconds
  ]).then((value) => {
    console.log(`Return of the race\'s first returned promise: ${value}`);
  });
}

function promisifyWriteFile() {
  // promisify the writeFile function
  const writeFilePromisified = promisify(writeFile);

  writeFilePromisified('file.log', 'file content')
    .then(() => console.log('Write file done!'))
    .catch(err => console.log(err));
}


simplePromise();
promiseAll();
promiseRace();
promisifyWriteFile();
