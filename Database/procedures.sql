use keystone;

DELIMITER //

-- insertNewUser -------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE insertNewUser (IN p_prenom VARCHAR(255),IN p_nom VARCHAR(255), IN p_email VARCHAR(255), 
IN p_password VARCHAR(255))
BEGIN
    INSERT INTO `UTILISATEUR` (
    `PRENOM_UTILISATEUR`,
    `NOM_UTILISATEUR`,
    `MAIL_UTILISATEUR`,
    `PASSWORD_UTILISATEUR`)
     VALUES (p_prenom, p_nom, p_email, p_password);
END //

-- insertNewImage -------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE insertNewImage (IN p_description VARCHAR(255),IN p_ville VARCHAR(50), IN p_pays VARCHAR(50), 
IN p_code_postal INT, IN p_image LONGBLOB)
BEGIN
    INSERT INTO `IMAGE` (
    `DESCRIPTION_IMAGE`,
    `VILLE_IMAGE`,
    `PAYS_IMAGE`,
    `CODE_POSTAL_IMAGE`,
    `IMAGE_TOURNAGE`)
     VALUES (p_prenom, p_nom, p_email, p_password,LOAD_FILE(p_image));
END //

-- bookReservation -------------------------------------------------------------------------------------------------------------------------------------------------------------------


CREATE OR REPLACE PROCEDURE  (IN p_date DATE, IN p_organisateur BIGINT, IN p_placeparking BIGINT, IN p_repas BIGINT, IN p_salle BIGINT, IN p_utilisateur BIGINT)
BEGIN
    INSERT INTO `CHERCHER`(
    `DATE_REUNION` ,
    `ID_ORGANISATEUR` ,
    `ID_PLACE_PARKING` ,
    `ID_REPAS` ,
    `ID_SALLE` ,
    `ID_UTILISATEUR`) VALUES (p_date, p_organisateur, p_placeparking, p_repas, p_salle, p_utilisateur);
END //

-- updateReservation -------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE updateReservation (IN p_organisateur BIGINT, IN p_date DATE, IN p_placeparking BIGINT, IN p_repas BIGINT,
IN p_salle BIGINT)
BEGIN
    UPDATE RESERVER
    SET DATE_REUNION = p_date,
    ID_PLACE_PARKING = p_placeparking,
    ID_REPAS = p_repas,
    ID_SALLE = p_salle
    WHERE ID_ORGANISATEUR = p_organisateur;
END //

-- deleteBookReservation -------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE deleteImage (IN p_organisateur BIGINT)
BEGIN
    DELETE 
    FROM RESERVER
    WHERE DATE_REUNION = p_date 
    AND ID_ORGANISATEUR = p_organisateur;
END//

-- identificationUtilisateur-------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE identificationUtilisateur (IN p_email VARCHAR(255),IN p_password VARCHAR(255))
BEGIN
SELECT NOM_UTILISATEUR, PRENOM_UTILISATEUR, MAIL_UTILISATEUR, TELEPHONE_UTILISATEUR, PASSWORD_UTILISATEUR, NOM_LIGUE
FROM UTILISATEUR
INNER JOIN TYPE_LIGUE ON UTILISATEUR.ID_TYPE_LIGUE = TYPE_LIGUE.ID_TYPE_LIGUE
WHERE MAIL_UTILISATEUR = p_email
AND PASSWORD_UTILISATEUR = p_password;
END //

-- identificationAdmin -------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE identificationAdmin (IN p_email VARCHAR(255),IN p_password VARCHAR(255))
BEGIN
SELECT *
FROM ADMINISTRATEUR
WHERE MP_ADMIN = Sha1(p_password);
END //



