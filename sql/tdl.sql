-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 19 avr. 2021 à 09:57
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `tdl`
--

-- --------------------------------------------------------

--
-- Structure de la table `taches`
--

DROP TABLE IF EXISTS `taches`;
CREATE TABLE IF NOT EXISTS `taches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `utilisateur_fk` int(11) NOT NULL,
  `description` text NOT NULL,
  `finish_tasks` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `taches`
--

INSERT INTO `taches` (`id`, `utilisateur_fk`, `description`, `finish_tasks`) VALUES
(1, 1, '<li id=\"li_task\"><p class=\"my_taks\"><span id=\"txt_tache\">sg</span><span id=\"txt_date\"> le lundi 19 2021 à 11h52</span></p><p class=\"cross_check\"><i class=\"fa fa-check\" id=\"check\"></i><i class=\"fa fa-times\" id=\"croix\"></i></p></li>', '<li id=\"li_task\"><p class=\"my_taks\"><span id=\"txt_tache\">NIKEL</span><span id=\"txt_date\"> le lundi 19 2021 à 11h50</span></p><p class=\"cross_check\"><i class=\"fa fa-check\" id=\"check\"></i><i class=\"fa fa-times\" id=\"croix\"></i></p>lundi 19 2021 à 11h50</li><li id=\"li_task\"><p class=\"my_taks\"><span id=\"txt_tache\">NIKEL</span><span id=\"txt_date\"> le lundi 19 2021 à 11h50</span></p><p class=\"cross_check\"><i class=\"fa fa-check\" id=\"check\"></i><i class=\"fa fa-times\" id=\"croix\"></i></p>lundi 19 2021 à 11h51</li><li id=\"li_task\"><p class=\"my_taks\"><span id=\"txt_tache\">rzge</span><span id=\"txt_date\"> le lundi 19 2021 à 11h51</span></p><p class=\"cross_check\"><i class=\"fa fa-check\" id=\"check\"></i><i class=\"fa fa-times\" id=\"croix\"></i></p>lundi 19 2021 à 11h51</li>'),
(2, 2, '<li id=\"li_task\"><p class=\"my_taks\"><span id=\"txt_tache\">test1</span><span id=\"txt_date\"> le lundi 19 2021 à 11h55</span></p><p class=\"cross_check\"><i class=\"fa fa-check\" id=\"check\"></i><i class=\"fa fa-times\" id=\"croix\"></i></p></li>', '<li id=\"li_task\"><p class=\"my_taks\"><span id=\"txt_tache\">test2</span><span id=\"txt_date\"> le lundi 19 2021 à 11h55</span></p><p class=\"cross_check\"><i class=\"fa fa-check\" id=\"check\"></i><i class=\"fa fa-times\" id=\"croix\"></i></p>lundi 19 2021 à 11h55</li>');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(155) NOT NULL,
  `pass` varchar(155) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `login`, `pass`) VALUES
(1, 'bapt', 'test'),
(2, 'dexter', 'morgan');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
