import {readFileSync, readdirSync} from 'fs';
import  {S3, config, SharedIniFileCredentials } from 'aws-sdk';
const { resolve } = require('path');


var credentials = new SharedIniFileCredentials({profile: 'personal'});
config.credentials = credentials;

const BUCKET_NAME = 'brianhadley.dev';
const s3 = new S3();



const getFiles = (dir) => {
  const dirents = readdirSync(dir, { withFileTypes: true });
  const files = dirents.map((dirent) => {
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  });

  return Array.prototype.concat(...files);
}

const files = getFiles('./dist/interactive-resume/');


const uploadFile = (filePath) => {
    // Read content from the file
    const fileContent = readFileSync(filePath);
    const contentTypes = {"map":"application/json", "js":"text/javascript", "html": "text/html", "css": "text/css", "jpeg": "image/jpeg", "png": "image/png", "json": "application/json", "ico": "image/x-icon"};
    const fileName = filePath.split("interactive-resume/")[2];
    const extension = fileName.split('.').slice(-1);
    const contentType = contentTypes[extension] || "text/html";

    const params = {
        Bucket: BUCKET_NAME,
        Key: filePath.split("interactive-resume/")[2], 
        Body: fileContent,
        Delimiter: "/",
        ContentType: contentType
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

files.forEach(file=>{
    uploadFile(file);
});