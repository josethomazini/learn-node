const multerConfig = require('../configs/multer');

function store(req, res) {
  let result = {};

  const fields = ['field1', 'field2'];

  for(const field of fields) {
    if(req.files[field]) {
      result[field] = [];
      for(const file of req.files[field]) {
        result[field].push(file.path);
      }
    }
  }

  return res.json(result);
}

const storeFiles = multerConfig.fields([
  { name: 'field1', maxCount: 1 },
  { name: 'field2', maxCount: 2 }
]);

module.exports = {
  store,
  storeFiles
}
