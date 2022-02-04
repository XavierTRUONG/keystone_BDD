const pool = require("../config/database");

module.exports = {

// insertUser ---------------------------------------------------------------------------------------------------------------------------------------

    insertUser: async(req, res) => {
        const {prenom, nom, email, password} = req.body;
        let connexion;
        try {
            connexion = await connexion.getConnection();
            const result = await result.query(`CALL insertUser(?, ?, ?, ?)`, [prenom, nom, email, password]);
            console.log(result);
            return res.status(200).json({success: result});
        } catch (error) {
            console.log(error);
            return res.status(400).json({error: error.message});
        } finally {
            if (connexion) connexion.end();
        }
    },

// insertImage ---------------------------------------------------------------------------------------------------------------------------------------

    insertImage: async (req, res) => {
        const { description, ville, pays, code_postal, nom} = req.body;
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query("CALL insertNewImage (?, ?, ?, ?, ?)", [description, ville, pays, code_postal, nom]);
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
            const result = await connexion.query(`CALL updateImageById(?, ?, ?, ?, ?, ?, ?)`, [id, description, ville, pays, code_postal, nom]);
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
            const result = await connexion.query(`CALL updateImageById(?, ?, ?, ?, ?)`, [id, prenom, nom, email, password]);
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

    deleteImage: async(req, res) => {
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

    deleteUser: async(req, res) => {
        const {id} = req.params;
        let connexion;
        try {
            connexion = await connexion.getConnection();
            const result = await result.query(`CALL deleteUser(?)`, [id]);
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

    getAllUsers: async(req, res) => {
        const { email, password} = req.body;
        let connexion;
        try {
            connexion = await connexion.getConnection();
            const result = await result.query(`CALL getAllUsers(?, ?)`, [email, password]);
            console.log(result);
            return res.status(200).json({success: result});
        } catch (error) {
            console.log(error);
            return res.status(400).json({error: error.message});
        } finally {
            if (connexion) connexion.end();
        }
    }
}