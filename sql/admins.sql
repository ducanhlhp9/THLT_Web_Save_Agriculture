-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th12 17, 2020 lúc 06:14 PM
-- Phiên bản máy phục vụ: 8.0.17
-- Phiên bản PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `thltweb`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admins`
--

CREATE TABLE `admins` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` char(50) DEFAULT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `active` tinyint(4) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `re_password` varchar(200) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `phone`, `avatar`, `active`, `password`, `re_password`, `created_at`, `updated_at`) VALUES
(2, 'admin', 'admin1@gmail.com', NULL, NULL, NULL, '$2y$10$GTBUxTfZS62lbfgGdYHZauor/LogXv08mb6u.i5O.9ZxzUJ9.smOu', '$2y$10$lV1SmARI2er.DDgu2hjc9OLdwD/A0pETFELrfwfvESR59/n8Yv7Nu', '2020-04-29 03:06:02', '2020-04-29 03:06:02'),
(3, 'admin', 'anh@gmail.com', NULL, NULL, NULL, '123456', NULL, '2020-12-14 09:33:18', '2020-12-14 09:33:18'),
(4, 'admin', 'admin@gmail.com', NULL, NULL, NULL, '$2y$10$oZCtpol.zAfPEmS9XaPw2uGdEe37RYog82A7/CHwbdewBuikrdlPa', NULL, '2020-12-14 09:41:06', '2020-12-14 09:41:06');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
