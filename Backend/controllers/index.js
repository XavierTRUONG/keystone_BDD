const pool = require("../config/database");
const {imageUpload} = require ('../middlewares/multer')

module.exports = {


// insertUser ---------------------------------------------------------------------------------------------------------------------------------------

    insertNewUser: async(req, res) => {
        const {prenom, nom, email, password} = req.body;
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query('CALL InsertNewUser(?, ?, ?, ?)', [prenom, nom, email, password]);
            console.log(result);
            return res.status(200).json({success: result});
        } catch (error) {
            console.log(error);
            return res.status(400).json({error: error.message});
        } finally {
            if (connexion) connexion.end();
        }
    },

// upload ---------------------------------------------------------------------------------------------------------------------------------------

    upload: (req, res, next) => {
        imageUpload.single('file')(req, res, (err) => {
            if(err) {
              return res.status(400).send(err.message);
             }
             // return res.send(req.file);
             return next(null, req);
        })
    },
    
// insertImage ---------------------------------------------------------------------------------------------------------------------------------------

    insertImage: async (req, res) => {
        const { description, ville, pays, code_postal} = req.body;
        const {file} = req;
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query("CALL insertNewImage (?, ?, ?, ?, ?)", [description, ville, pays, code_postal, file.filename]);
            return res.status(200).json({ success: result })
        } catch (error) {
            return res.status(400).json({ error: error.message});
        } finally {
            if (connexion) connexion.end()
        }
    },

// updateImageById ---------------------------------------------------------------------------------------------------------------------------------------

    updateImageById: async ( req , res) => {
        const {id} = req.params;
        const { description, ville, pays, code_postal, nom} = req.body;
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query(`CALL updateImageById(?, ?, ?, ?, ?, ?)`, [id, description, ville, pays, code_postal, nom]);
            console.log(result);
            return res.status(200).json({success: result});
        } catch (error) {
            console.log(error);
            return res.status(400).json({error: error.message});
        } finally {
            if (connexion) connexion.end();
        }
    },

// updateUserById ---------------------------------------------------------------------------------------------------------------------------------------

    updateUserById: async ( req , res) => {
        const {id} = req.params;
        const { prenom, nom, email, password} = req.body;
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query(`CALL updateUserById(?, ?, ?, ?, ?)`, [id, prenom, nom, email, password]);
            console.log(result);
            return res.status(200).json({success: result});
        } catch (error) {
            console.log(error);
            return res.status(400).json({error: error.message});
        } finally {
            if (connexion) connexion.end();
        }
    },

// deleteImage ---------------------------------------------------------------------------------------------------------------------------------------

    deleteImageById: async(req, res) => {
        const {id} = req.params;
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query(`CALL deleteImage(?)`, [id]);
            console.log(result);
            return res.status(200).json({success: result});
        } catch (error) {
            console.log(error);
            return res.status(400).json({error: error.message});
        } finally {
            if (connexion) connexion.end();
        }
    },

// deleteUser ---------------------------------------------------------------------------------------------------------------------------------------

    deleteUserById: async(req, res) => {
        const {id} = req.params;
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query(`CALL deleteUser(?)`, [id]);
            console.log(result);
            return res.status(200).json({success: result});
        } catch (error) {
            console.log(error);
            return res.status(400).json({error: error.message});
        } finally {
            if (connexion) connexion.end();
        }
    },

// getAllUsers ---------------------------------------------------------------------------------------------------------------------------------------

    getAllUsers: async(_, res) => {
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query(`CALL getAllUsers`);
            console.log(result);
            return res.status(200).json({success: result});
        } catch (error) {
            console.log(error);
            return res.status(400).json({error: error.message});
        } finally {
            if (connexion) connexion.end();
        }
    },

// identificationUser ---------------------------------------------------------------------------------------------------------------------------------------

    identificationUser: async(req, res) => {
        const { email, password}  = req.body;
        let connexion;
        try {
          connexion = await pool.getConnection();
          const result = await connexion.query('CALL identificationUser (?, ?)', [email, password]);
        if (!result[0].length) {
          res.status(401).json({ error: "Identifiant Invalide" });
        }
        return res.status(200).json({ success: result });
      } catch (error) {
        return res.status(400).json({ error: error.message });
      } finally {
        if (connexion) connexion.end();
      }
    },
}