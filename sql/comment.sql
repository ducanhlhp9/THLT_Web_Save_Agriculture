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
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `species_id` int(11) NOT NULL,
  `content` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`id`, `user_id`, `species_id`, `content`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 7, 'abc', 1, '2020-12-13 08:40:35', '2020-12-13 08:40:35'),
(2, 3, 7, 'hoana', 1, '2020-12-13 08:51:51', '2020-12-13 08:51:51'),
(3, 3, 7, 'hoanganh', 1, '2020-12-13 08:52:40', '2020-12-13 08:52:40'),
(4, 3, 7, 'hoanganh12', 1, '2020-12-13 08:54:07', '2020-12-13 08:54:07'),
(5, 1, 7, 'abc', 1, '2020-12-13 08:55:03', '2020-12-13 08:55:03'),
(6, 3, 7, 'hoansdasd', 0, '2020-12-13 08:55:11', '2020-12-13 10:48:44'),
(7, 3, 6, 'ngon', 1, '2020-12-14 10:19:56', '2020-12-14 10:19:56'),
(8, 3, 7, 'xin', 1, '2020-12-14 11:03:00', '2020-12-14 11:03:00'),
(9, 3, 7, 'hoan', 1, '2020-12-14 11:03:58', '2020-12-14 11:03:58'),
(10, 3, 7, 'abc', 1, '2020-12-14 11:05:22', '2020-12-14 11:05:22'),
(11, 3, 2, 'hoanganh', 1, '2020-12-17 07:43:02', '2020-12-17 07:43:02'),
(12, 3, 2, 'hoanganh12', 1, '2020-12-17 07:45:10', '2020-12-17 07:45:10'),
(13, 3, 2, 'ducanh', 1, '2020-12-17 07:45:19', '2020-12-17 07:45:19');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
