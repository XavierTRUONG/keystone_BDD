const multer = require('multer'); // importe le paquet multer

let storage = multer.diskStorage({   
    destination: function(req, res, cb) { 
       cb(null, 'public/images');    
    }, 
    filename: function (req, file, cb) { 
       cb(null , `${Date.now()}_${file.originalname}`); 
    }
});

module.exports = {
   imageUpload: multer({ storage: storage })
}