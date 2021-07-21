-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th12 17, 2020 lúc 06:15 PM
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
-- Cấu trúc bảng cho bảng `rescue`
--

CREATE TABLE `rescue` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(99) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text COLLATE utf8mb4_unicode_ci,
  `species_id` int(11) DEFAULT NULL,
  `cat_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `rescue`
--

INSERT INTO `rescue` (`id`, `name`, `slug`, `email`, `phone`, `address`, `job`, `message`, `species_id`, `cat_id`, `user_id`, `status`, `created_at`, `updated_at`) VALUES
(2, 'hoanganh', 'hoanganh', 'user12@gmail.com', '0853538197', 'asd', 'ac', 'ac', 6, 6, 3, 1, '2020-12-13 10:50:52', '2020-12-13 10:50:52'),
(3, 'hoanganh', 'hoanganh', 'user12@gmail.com', '0853538197', 'asd', 'hoanganh', 'hoanganh', 6, 6, 3, 1, '2020-12-13 10:52:06', '2020-12-13 10:52:06'),
(4, 'hoanganh', 'hoanganh', 'user12@gmail.com', '0853538197', 'asd', 'asd', 'asdasd', 6, 6, 3, 1, '2020-12-13 10:53:33', '2020-12-13 10:53:33'),
(5, 'hoanganh', 'hoanganh', 'user12@gmail.com', '0853538197', 'asd', '123123', 'ádsda', 6, 6, 3, 1, '2020-12-16 08:17:11', '2020-12-16 08:17:11'),
(6, 'hoanganh', 'hoanganh', 'user12@gmail.com', '0853538197', 'asd', 'abc', 'abc', 7, 6, 3, 1, '2020-12-17 07:45:46', '2020-12-17 07:45:46');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `rescue`
--
ALTER TABLE `rescue`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `rescue`
--
ALTER TABLE `rescue`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
