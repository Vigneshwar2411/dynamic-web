// const multer = require('multer');

module.exports.buildFormData = (obj, attachmentFieldName) => {
  let formData = {};

  const form = new FormData();
  if (obj[attachmentFieldName]) {
    obj[attachmentFieldName].forEach(file => form.append(attachmentFieldName, file));
  }
  Object.keys(obj).forEach((key) => {
    if (key !== attachmentFieldName) { form.append(key, obj[key]); }
  });

  /* istanbul ignore else */
  if (Object.keys(obj).length) {
    formData = form;
  }

  return formData;
};

// module.exports.uploadHelper = multer({
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 5 * 1024 * 1024, files: 10 },
//   fileFilter: (req, file, cb) => {
//     const regexValidFileType = /^(pdf|PDF)$/;
//     const { length } = file.name.split('.');
//     if (regexValidFileType.test(file.name.split('.')[length - 1])) {
//       return cb(null, true);
//     }
//     const err = new Error('at least one file wasn\'t a valid type');
//     err.invalidFileType = true;
//     return cb(err);
//   },
// });
