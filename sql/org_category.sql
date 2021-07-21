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
-- Cấu trúc bảng cho bảng `org_category`
--

CREATE TABLE `org_category` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(99) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `org_category`
--

INSERT INTO `org_category` (`id`, `name`, `slug`, `avatar`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Đội Tình nguyện', 'doi-tinh-nguyen', '2020-12-14__image-removebg-preview.png', 1, '2020-12-14 07:17:23', '2020-12-14 07:54:40'),
(2, 'Doanh nghiệp', 'doanh-nghiep', '2020-12-14__45461002-removebg-preview.png', 1, '2020-12-14 07:21:42', '2020-12-14 07:21:42');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `org_category`
--
ALTER TABLE `org_category`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `org_category`
--
ALTER TABLE `org_category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
