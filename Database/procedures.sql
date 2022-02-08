use keystone;

DELIMITER //

-- insertNewUser -------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE insertNewUser 
(
    IN p_prenom VARCHAR(255),
    IN p_nom VARCHAR(255), 
    IN p_email VARCHAR(255), 
    IN p_password VARCHAR(255)
)
BEGIN
    INSERT INTO UTILISATEUR 
    (
        PRENOM_UTILISATEUR,
        NOM_UTILISATEUR,
        MAIL_UTILISATEUR,
        MOT_DE_PASSE_UTILISATEUR
    )
    VALUES 
    (
        p_prenom, 
        p_nom, 
        p_email, 
        p_password
    );
END //

-- insertNewImage -------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE insertNewImage 
(
    IN p_description VARCHAR(255),
    IN p_ville VARCHAR(50), 
    IN p_pays VARCHAR(50), 
    IN p_code_postal INT, 
    IN p_nom_image VARCHAR(255)
)
BEGIN
    INSERT INTO 
        `IMAGE` 
    (
        DESCRIPTION_IMAGE,
        VILLE_IMAGE,
        PAYS_IMAGE,
        CODE_POSTAL_IMAGE,
        NOM_IMAGE
    )
    VALUES 
    (
        p_description,
        p_ville, 
        p_pays, 
        p_code_postal, 
        p_nom_image
    );
END //

-- updateImageById -------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE updateImageById 
(
    IN p_id_image BIGINT, 
    IN p_description VARCHAR(255),
    IN p_ville VARCHAR(50), 
    IN p_pays VARCHAR(50), 
    IN p_code_postal INT, 
    IN p_nom_image VARCHAR(255)
)
BEGIN
    UPDATE 
        `IMAGE`
    SET 
        DESCRIPTION_IMAGE = p_description,
        VILLE_IMAGE = p_ville,
        PAYS_IMAGE = p_pays,
        CODE_POSTAL_IMAGE = p_code_postal,
        NOM_IMAGE = p_nom_image
    WHERE 
        ID_IMAGE = p_id_image;
END //

-- updateUserById -------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE updateUserById 
(
    IN p_id_utilisateur INT,
    IN p_prenom VARCHAR(255),
    IN p_nom VARCHAR(255), 
    IN p_email VARCHAR(255), 
    IN p_password VARCHAR(255)
)
BEGIN
    UPDATE 
        UTILISATEUR
    SET 
        PRENOM_UTILISATEUR = p_prenom,
        NOM_UTILISATEUR = p_nom,
        MAIL_UTILISATEUR = p_email,
        MOT_DE_PASSE_UTILISATEUR = p_password
    WHERE 
        ID_UTILISATEUR = p_id_utilisateur;
END //

-- deleteImage -------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE deleteImage 
(
    IN p_id_image BIGINT
)
BEGIN
    DELETE 
    FROM 
        `IMAGE`
    WHERE 
        ID_IMAGE = p_id_image;
END//

-- deleteUser -------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE deleteUser
(
    IN p_id_utilisateur BIGINT
)
BEGIN
    DELETE 
    FROM 
        UTILISATEUR
    WHERE 
        ID_UTILISATEUR = p_id_utilisateur;
END//

-- getAllUsers -------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE getAllUsers
()
BEGIN
    SELECT
        *
    FROM 
        UTILISATEUR;
END //

-- getImageByName -------------------------------------------------------------------------------------------------------------------------------------------------------------------



