const logger = require('pino');

let level = null;
let separator = null;

if (process.env.NODE_ENV === 'development') {
  level = 'debug';
  separator = 'src';
} else {
  level = 'info';
  separator = 'dist';
}

const prettyPrint = {
  translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
  ignore: 'hostname,pid,filename',
  messageFormat: '{filename} => {msg}',
};

const log = logger({ prettyPrint, level });

function getLogger(filename) {
  return log.child({ filename: filename.split(separator)[1] });
}

module.exports = getLogger;
