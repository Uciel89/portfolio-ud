-- MySQL Workbench Synchronization
-- Generated: 2022-06-04 18:02
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Uciel PC

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `mydb`.`Persona` (
  `id_Persona` INT(11) NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(200) NOT NULL,
  `Apellido` VARCHAR(200) NOT NULL,
  `Domicilio` VARCHAR(200) NOT NULL,
  `Email` VARCHAR(200) NOT NULL,
  `Telefono` VARCHAR(200) NOT NULL,
  `Sobre_mi` VARCHAR(1000) NOT NULL,
  `Url_perfil` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id_Persona`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mydb`.`Estudio` (
  `id_Estudio` INT(11) NOT NULL AUTO_INCREMENT,
  `Sobre_estudios` VARCHAR(200) NOT NULL,
  `Nombre_estudio` VARCHAR(45) NOT NULL,
  `Descripcion_estudio` VARCHAR(200) NOT NULL,
  `Url_estudio` VARCHAR(200) NOT NULL,
  `Persona_idPersona` INT(11) NOT NULL,
  PRIMARY KEY (`id_Estudio`),
  INDEX `fk_Estudios_Persona_idx` (`Persona_idPersona` ASC) VISIBLE,
  CONSTRAINT `fk_Estudios_Persona`
    FOREIGN KEY (`Persona_idPersona`)
    REFERENCES `mydb`.`Persona` (`id_Persona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mydb`.`Demo` (
  `id_Demo` INT(11) NOT NULL AUTO_INCREMENT,
  `Nombre_demo` VARCHAR(45) NOT NULL,
  `Descripcion_demo` VARCHAR(200) NOT NULL,
  `Url_demo` VARCHAR(45) NOT NULL,
  `Persona_idPersona` INT(11) NOT NULL,
  PRIMARY KEY (`id_Demo`),
  INDEX `fk_Demos_Persona1_idx` (`Persona_idPersona` ASC) VISIBLE,
  CONSTRAINT `fk_Demos_Persona1`
    FOREIGN KEY (`Persona_idPersona`)
    REFERENCES `mydb`.`Persona` (`id_Persona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mydb`.`Habilidad` (
  `id_Habilidad` INT(11) NOT NULL AUTO_INCREMENT,
  `Nombre_habilidad` VARCHAR(45) NOT NULL,
  `Porcentaje` VARCHAR(45) NOT NULL,
  `Url_habilidad` VARCHAR(45) NOT NULL,
  `Persona_idPersona` INT(11) NOT NULL,
  PRIMARY KEY (`id_Habilidad`),
  INDEX `fk_Habilidades_Persona1_idx` (`Persona_idPersona` ASC) VISIBLE,
  CONSTRAINT `fk_Habilidades_Persona1`
    FOREIGN KEY (`Persona_idPersona`)
    REFERENCES `mydb`.`Persona` (`id_Persona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mydb`.`Experiencia` (
  `id_Experiencia` INT(11) NOT NULL AUTO_INCREMENT,
  `Nombre_experiencia` VARCHAR(100) NOT NULL,
  `Trabajo` VARCHAR(45) NOT NULL,
  `Descripcion_experiencia` VARCHAR(45) NOT NULL,
  `Fecha_inicio` VARCHAR(45) NOT NULL,
  `Fecha_final` VARCHAR(45) NULL DEFAULT NULL,
  `Persona_idPersona` INT(11) NOT NULL,
  PRIMARY KEY (`id_Experiencia`),
  INDEX `fk_experiencia_persona1_idx` (`Persona_idPersona` ASC) VISIBLE,
  CONSTRAINT `fk_experiencia_persona1`
    FOREIGN KEY (`Persona_idPersona`)
    REFERENCES `mydb`.`Persona` (`id_Persona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mydb`.`Rol` (
  `idRol` INT(11) NOT NULL AUTO_INCREMENT,
  `Rol_nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idRol`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `idUser` INT(11) NOT NULL AUTO_INCREMENT,
  `Usuario` VARCHAR(45) NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mydb`.`Usuario_rol` (
  `User_idUser` INT(11) NOT NULL,
  `rol_idRol` INT(11) NOT NULL,
  PRIMARY KEY (`User_idUser`, `rol_idRol`),
  INDEX `fk_User_has_rol_rol1_idx` (`rol_idRol` ASC) VISIBLE,
  INDEX `fk_User_has_rol_User1_idx` (`User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_User_has_rol_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_rol_rol1`
    FOREIGN KEY (`rol_idRol`)
    REFERENCES `mydb`.`Rol` (`idRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
