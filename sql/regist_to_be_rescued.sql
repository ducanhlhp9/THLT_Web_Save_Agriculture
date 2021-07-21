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
-- Cấu trúc bảng cho bảng `regist_to_be_rescued`
--

CREATE TABLE `regist_to_be_rescued` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(99) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(99) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(99) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `message` text COLLATE utf8mb4_unicode_ci,
  `spe_name` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `species_category_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `regist_to_be_rescued`
--

INSERT INTO `regist_to_be_rescued` (`id`, `name`, `slug`, `email`, `phone`, `address`, `description`, `message`, `spe_name`, `species_category_id`, `cat_id`, `user_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'hoanganh', 'hoanganh', 'anh@gmail.com', '0853538197', 'abc', 'asdsad', 'sdas', 'Xoài', 3, 4, NULL, 0, '2020-12-13 09:29:26', '2020-12-13 10:02:29'),
(2, 'hoanganh', 'hoanganh', 'user12@gmail.com', '0853538197', 'asd', 'asd', 'asd', 'asd', 3, 4, NULL, 1, '2020-12-13 10:28:29', '2020-12-13 10:32:17'),
(3, 'hoanganh', 'hoanganh', 'user12@gmail.com', '0853538197', 'asd', 'asd', 'asd', 'asd', 3, 4, NULL, 1, '2020-12-13 10:31:38', '2020-12-13 10:32:15'),
(4, 'hoanganh', 'hoanganh', 'user12@gmail.com', '0853538197', 'asd', 'da', 'da', 'hoa da', 3, 4, NULL, NULL, '2020-12-17 07:46:02', '2020-12-17 07:46:02');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `regist_to_be_rescued`
--
ALTER TABLE `regist_to_be_rescued`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `regist_to_be_rescued`
--
ALTER TABLE `regist_to_be_rescued`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
