const multer = require('multer');
const path = require('path');

const destination = path.resolve(__dirname, '..', '..', 'uploads');

const filename = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  const name = path.basename(file.originalname, ext);
  const now = Date.now();

  cb(null, `${name}-${now}${ext}`);
}

const multerConfig = {
  storage: multer.diskStorage({
    destination, filename
  })
};

module.exports = multer(multerConfig);
