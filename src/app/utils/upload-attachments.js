const mongoose = require('mongoose');
const conn = mongoose.connection;
const { v4: uuidv4 } = require('uuid');


module.exports.uploadAttachment = async (file) => {

  return new Promise((resolve, reject) => {
    const gridfsBucketoptions = {
      bucketName : 'reports',
      chunkSizeBytes : 5242880
    };
    const gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db,gridfsBucketoptions);
    const options = {
      contentType: file.headers['content-type']
    };
    const writeStream = gridFSBucket.openUploadStreamWithId(uuidv4(),file.filename,options);

    file.pipe(writeStream);
    writeStream.on('end', (file) => {
      const object = {
        reportId: file._id,
        attachementSize: file.length,
        attachmentName: file.filename,
        attachmentUrl: '/asc/patients/report/'+file._id
      };
      resolve(object);
    });
    writeStream.on('finish', (file) => {
      const object = {
        attachementsId: file._id,
        attachementSize: file.length,
        attachmentName: file.filename,
        attachmentUrl: '/asc/patients/report/'+file._id
      };
      resolve(object);
    });
    writeStream.on('error', (error) => {
      reject(error);
    });

  });

};

module.exports.downloadAttacment = async (req, res) => {

  const gridfsBucketoptions = {
    bucketName : 'reports'
  };
  const gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db,gridfsBucketoptions);
  var query = await conn.db.collection('reports.files').find({_id : req.params.file_id }).toArray();
  const image=query[0];
  const ReadStream = gridFSBucket.openDownloadStream( image._id );
  res.setHeader('Content-disposition', 'inline; filename=' + image.filename);
  res.contentType(image.contentType);
  return ReadStream.pipe(res);

};
