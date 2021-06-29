import _ from 'lodash';

const x = 10;
let result = null;

const double = (val) => {
  return val * 2;
}

result = double(x);
console.log(result);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = _.concat(array1, array2);
console.log(array3);
