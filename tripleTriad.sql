-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 23, 2019 at 03:21 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tripleTriad`
--
CREATE DATABASE IF NOT EXISTS `tripleTriad` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `tripleTriad`;

-- --------------------------------------------------------

--
-- Table structure for table `Card`
--

CREATE TABLE `Card` (
  `Id` int(11) NOT NULL,
  `Top` int(11) NOT NULL,
  `Bottom` int(11) NOT NULL,
  `Left` int(11) NOT NULL,
  `Right` int(11) NOT NULL,
  `CardOwner` text,
  `Image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Card`
--

INSERT INTO `Card` (`Id`, `Top`, `Bottom`, `Left`, `Right`, `CardOwner`, `Image`) VALUES
(1, 9, 7, 3, 6, NULL, NULL),
(2, 9, 8, 4, 4, NULL, NULL),
(3, 4, 8, 9, 4, NULL, NULL),
(4, 3, 9, 6, 7, NULL, NULL),
(5, 9, 2, 8, 6, NULL, NULL),
(6, 9, 2, 9, 5, NULL, NULL),
(7, 2, 9, 4, 9, NULL, NULL),
(8, 5, 9, 9, 1, NULL, NULL),
(9, 8, 6, 2, 9, NULL, NULL),
(10, 9, 4, 2, 10, NULL, NULL),
(11, 8, 10, 4, 4, NULL, NULL),
(12, 7, 6, 10, 4, NULL, NULL),
(13, 5, 8, 3, 10, NULL, NULL),
(14, 3, 10, 10, 1, NULL, NULL),
(15, 4, 9, 10, 4, NULL, NULL),
(16, 7, 1, 7, 10, NULL, NULL),
(17, 8, 3, 5, 10, NULL, NULL),
(18, 10, 7, 7, 1, NULL, NULL),
(19, 7, 7, 10, 2, NULL, NULL),
(20, 10, 3, 3, 10, NULL, NULL),
(21, 6, 6, 10, 7, NULL, NULL),
(22, 9, 10, 2, 6, NULL, NULL),
(23, 4, 2, 10, 10, NULL, NULL),
(24, 6, 10, 4, 9, NULL, NULL),
(25, 10, 6, 4, 8, NULL, NULL),
(26, 10, 6, 9, 4, NULL, NULL),
(27, 10, 2, 8, 7, NULL, NULL),
(28, 8, 10, 6, 5, NULL, NULL),
(29, 9, 9, 2, 3, NULL, NULL),
(30, 10, 2, 6, 8, NULL, NULL),
(31, 2, 9, 10, 6, NULL, NULL),
(32, 6, 4, 9, 7, NULL, NULL),
(33, 5, 3, 9, 10, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `__EFMigrationsHistory`
--

CREATE TABLE `__EFMigrationsHistory` (
  `MigrationId` varchar(150) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `__EFMigrationsHistory`
--

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`) VALUES
('20190717161354_initialcreate', '2.2.6-servicing-10079');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Card`
--
ALTER TABLE `Card`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `__EFMigrationsHistory`
--
ALTER TABLE `__EFMigrationsHistory`
  ADD PRIMARY KEY (`MigrationId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Card`
--
ALTER TABLE `Card`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
