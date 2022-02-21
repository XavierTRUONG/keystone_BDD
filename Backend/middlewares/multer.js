const multer = require('multer'); // importe le paquet multer

let storage = multer.diskStorage({   
    destination: function(_, _, cb) { 
       cb(null, './public/images');    
    }, 
    filename: function (_, file, cb) { 
       cb(null , file.originalname);   
    }
});

module.exports = {
   imageUpload: multer({ storage: storage })
}