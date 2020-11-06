const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../media/products"));
  },
  filename: (req, file, cb) => {
    const [name, extension] = file.originalname.split(".");
    const uniqueName = `${name}_${Date.now()}.${extension}`;

    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  try {
    const supportedTypes = ["image/jpg", "image/png", "image/JPG", "image/PNG"];
    if (supportedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  } catch (error) {
    cb(error);
  }
};

const upload = multer({
  storage: storage,
  fileFilter,
});

module.exports = upload;
