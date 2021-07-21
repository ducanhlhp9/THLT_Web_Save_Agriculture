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
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(99) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(99) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(13) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(99) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(99) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `address`, `avatar`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Hoang Duc Anh', 'ducanhllhp9@gmail.com', '0942410953', 'Cát thành, Trực Ninh, Nam Định', NULL, 'hoangducanh', NULL, NULL, NULL),
(2, 'anh', 'anh@gmail.com', '12345678', 'ahshadhas', NULL, '$2y$10$CzZnfaB5e.XzrtsLHS4am.nc.r64eA2.4gyhmJQap3/BSxFYWItg2', NULL, '2020-12-13 08:35:26', '2020-12-13 08:35:26'),
(3, 'hoanganh', 'user12@gmail.com', '0853538197', 'asd', NULL, '$2y$10$aWE7p4cmX/MHmShnDSAa1umd3oWwRMA71LxgV/s/pg9hupRmmtWxu', NULL, '2020-12-13 08:36:03', '2020-12-13 08:36:03'),
(4, 'hoanganh', 'user34@gmail.com', '1234567890', '123', NULL, '$2y$10$N3sgFVfRF33qwarY0g2uFuciEXkZ.RKLyUSxH0qZ5caPrz6U0gw2e', NULL, '2020-12-14 09:11:21', '2020-12-14 09:11:21'),
(5, 'hoanganh', 'user1234@gmail.com', '123456789', '123', NULL, '$2y$10$MqihQ3tQKN48dLUO6J1TVudGYg7nknsLUKE8Gh3zikRXU6OasWyqK', NULL, '2020-12-14 09:12:25', '2020-12-14 09:12:25'),
(6, 'hoanganh', 'user1212@gmail.com', '123456', '1234567890', NULL, '$2y$10$PrXdoei16IjJhjb72TcXi.mzu8ambPiSfKqHEN18WB73Fkdo9HiMa', NULL, '2020-12-14 09:14:03', '2020-12-14 09:14:03'),
(7, 'hoanganh', 'user12111@gmail.com', '1234567890', '12345678', NULL, '$2y$10$DuPDdf09HhLQcf7CU3N5hOjiclzZE3Zwd9Qh/pY2Ag1u3pYZnwyOm', NULL, '2020-12-14 09:17:24', '2020-12-14 09:17:24'),
(8, 'hoanganh', 'user1112@gmail.com', '123456789', '1234567891', NULL, '$2y$10$yYM897B5CWTYjIc.H2JQy.aSBjrUXaj6eQrmd9GkmjH2.0fQIhmSS', NULL, '2020-12-14 09:19:21', '2020-12-14 09:19:21'),
(9, 'hoanganh', 'user12345@gmail.com', '1234567890', 'asd', NULL, '$2y$10$EXNI4.vMdRvmX10.qUjiKe3nRBftGSzySF4n2Yyz7JqHP3T6aCdui', NULL, '2020-12-14 09:19:59', '2020-12-14 09:19:59');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
