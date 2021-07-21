-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th12 17, 2020 lúc 06:16 PM
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
-- Cấu trúc bảng cho bảng `species_category`
--

CREATE TABLE `species_category` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(99) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `cat_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `species_category`
--

INSERT INTO `species_category` (`id`, `name`, `slug`, `active`, `status`, `cat_id`, `created_at`, `updated_at`) VALUES
(3, 'Động vật lang thang', 'dong-vat-lang-thang', 1, 1, 4, '2020-12-13 05:55:12', '2020-12-13 06:00:49'),
(4, 'Hải sản', 'hai-san', 1, 0, 4, '2020-12-13 05:55:28', '2020-12-13 06:21:01'),
(5, 'Động vật trong sách đỏ', 'dong-vat-trong-sach-do', 1, 1, 4, '2020-12-13 06:00:15', '2020-12-13 06:00:15'),
(6, 'Các loại quả', 'cac-loai-qua', 1, 1, 3, '2020-12-13 06:01:09', '2020-12-13 06:01:40'),
(7, 'Các loại củ', 'cac-loai-cu', 1, 0, 3, '2020-12-13 06:01:27', '2020-12-13 06:10:23'),
(8, 'Các loại hoa', 'cac-loai-hoa', 1, 0, 3, '2020-12-13 06:01:54', '2020-12-16 07:06:36'),
(9, 'Động vật hoang dã', 'dong-vat-hoang-da', 1, 0, 4, '2020-12-13 07:26:01', '2020-12-16 07:06:32');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `species_category`
--
ALTER TABLE `species_category`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `species_category`
--
ALTER TABLE `species_category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
