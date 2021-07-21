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
-- Cấu trúc bảng cho bảng `species`
--

CREATE TABLE `species` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `spe_cat_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  `active` int(11) DEFAULT '1',
  `cat_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `image1` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image2` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image3` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `description_seo` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title_seo` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content1` text COLLATE utf8mb4_unicode_ci,
  `content2` text COLLATE utf8mb4_unicode_ci,
  `content3` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `species`
--

INSERT INTO `species` (`id`, `name`, `slug`, `spe_cat_id`, `status`, `active`, `cat_id`, `user_id`, `image1`, `image2`, `image3`, `description`, `description_seo`, `title`, `title_seo`, `content1`, `content2`, `content3`, `created_at`, `updated_at`) VALUES
(1, 'Thanh long', 'thanh-long', 6, 1, 1, 3, NULL, '2020-12-13__thanh-long-6023-1441709794.jpg', '2020-12-13__t-1509077015662-00-53-28-494.jpg', '2020-12-13__003-1118.jpg', 'tại các vùng chuyên canh ở tỉnh Tiền Giang liên tục xuống thấp khiến nhiều nông dân lo lắng.', 'Sau thời gian tăng cao, chỉ trong vòng 1 tuần qua, giá thanh long ...', 'Nông dân lao đao vì thanh long bất ngờ mất giá', 'Nông dân lao đao vì thanh long', '<p>Nếu như 1 tuần trước, các nhà vườn tại huyện Chợ Gạo, tỉnh Tiền Giang có thể bán được thanh long ruột đỏ loại 1 với giá khoảng 20.000 đồng/kg, thì nay thương lái chỉ thu mua ở mức trên dưới 10.000 đồng/kg. Còn đối với những trái thanh long không đủ tiêu chuẩn xuất khẩu, bà con chỉ bán được với giá dưới 2.000 đồng/kg.</p>', '<p>Tỉnh Tiền Giang có gần 8.000 ha cây thanh long chuyên canh, tập trung nhiều ở các huyện: Chợ Gạo, Gò Công Tây, Tân Phước. Đầu ra của trái thanh long có đến 70% xuất khẩu sang thị trường Trung Quốc. Khi nhu cầu cao thì giá cao và hút hàng, còn khi nhu cầu ít thì người dân bị động.</p>', '<p>Theo Cục Chế biến và Phát triển thị trường nông sản (Bộ Nông nghiệp và Phát triển nông thôn), hiện nhu cầu nhập khẩu Trung Quốc không ổn định, nước này lại kiểm soát chặt chẽ vận chuyển qua lại cửa khẩu làm cho đầu ra của trái cây bấp bênh. Trong đó, trái thanh long là một trong những loại nông sản chịu thiệt hại nặng nề nhất.</p>', '2020-12-13 06:54:34', '2020-12-17 08:08:16'),
(2, 'Khoai lang', 'khoai-lang', 7, 1, 1, 3, NULL, '2020-12-13__khoailang-fenb.jpg', '2020-12-13__anh2-rvmz.jpg', '2020-12-13__unnamed.jpg', 'Xã Chư A Thai, H.Phú Thiện (Gia Lai) có gần 200 ha trồng khoai lang. Nay giá khoai giảm mạnh khiến nhiều hộ dân ôm nợ.', 'Xã Chư A Thai, H.Phú Thiện (Gia Lai) có gần 200 ha trồng ...', 'Khoai lang rớt giá thảm, chính quyền kêu gọi \'giải cứu\'', 'Khoai lang rớt giá thảm,...', '<p>Gia đình anh Lưu Văn Quang (36 tuổi, ở thôn D’Lâm, xã Chư A Thai) thuê 13 ha đất để trồng khoai. Để có vốn đầu tư hơn 700 triệu đồng, anh phải bán đàn bò và vay thêm ngân hàng 200 triệu đồng. “Thời điểm đầu mùa, thương lái đến mua khoai giá rất cao, khoảng 10.000 đồng/kg, nhưng thấy khoai còn nhỏ nên tôi chưa bán. Ít ngày sau, giá khoai rớt xuống còn 3.000 đồng/kg. Tiếc của, tôi thuê người thu hoạch 6 ha khoai lên bán nhưng chỉ thu được 165 triệu đồng. Tính ra tiền thuê nhân công còn cao hơn tiền bán khoai nên gia đình tôi đành bỏ trắng 7 ha khoai còn lại. Vụ khoai này nhà tôi lỗ hơn 500 triệu đồng, chả biết xoay đâu ra tiền trả nợ ngân hàng nữa”, anh Quang than thở.</p>', '<p>Trong khi đó, anh Nguyễn Văn Thu (34 tuổi, cũng ở thôn D’Lâm) là thương lái thu mua khoai rồi vận chuyển đi bán ở các tỉnh khác, cho biết: “Tôi thu mua khoai đã hơn 7 năm, nhưng chưa năm nào thua lỗ như năm nay. Thời điểm giá khoai cao, tôi mua đứt hơn 15 ha của bà con với giá 2,3 tỉ đồng (150 triệu đồng/ha). Nhưng chưa thu hoạch xong thì giá khoai đột nhiên giảm còn 3.000 đồng/kg (90 triệu đồng/ha). Tôi cấp tốc thuê nhân công thu hoạch nhưng khi đem bán hết số khoai cũng chỉ được hơn 1 tỉ, lỗ hơn 1,3 tỉ đồng”.</p>', '<p>Mặc dù giá khoai giảm mạnh nhưng nhiều người vẫn phải thu hoạch vì nếu để lâu củ sẽ bị hư hỏng, không thể bán được. Ông Phùng Trung Toàn, Chủ tịch UBND xã Chư A Thai, mong muốn các ngành chức năng kêu gọi doanh nghiệp đến thu mua, giúp bà con trong xã ổn định sản xuất. Ông cho biết điều kiện thổ nhưỡng, khí hậu trên địa bàn xã rất thích hợp với khoai lang Nhật. Thông thường, mỗi héc ta khoai cho thu hoạch từ 20 - 25 tấn củ, cá biệt có nơi còn thu 40 tấn củ/ha, những mùa vụ trước mang về lợi nhuận không dưới 100 triệu/ha cho bà con nông dân, gấp hai lần so với cây lúa. Tuy nhiên, chính quyền địa phương cũng khuyến cáo bà con không nên mở rộng diện tích trồng khoai trong các năm tới, tránh tình trạng được mùa rớt giá, gây thiệt hại cho người nông dân.&nbsp;</p>', '2020-12-13 07:03:58', '2020-12-13 07:06:30'),
(3, 'Rùa biển quý hiếm', 'rua-bien-quy-hiem', 5, 1, 1, 4, NULL, '2020-12-13__6596002825363851664270224063759186297618432n-1562303541965530920970.jpg', '2020-12-13__6595944822416791192809954061047880817836032n-15623034248121031925987.jpg', '2020-12-13__rua.png', 'Chiều 4-7, phó giám đốc Vườn quốc gia Côn Đảo Trần Đình Huệ cho biết Hạt Kiểm lâm của vườn vừa cứu một con rùa biển quý hiếm nặng 5 - 6kg mắc kẹt trong lưới nhựa đánh cá bị loại thải.', 'Chiều 4-7, phó giám đốc Vườn quốc gia Côn Đảo Trần Đình Huệ cho biết Hạt Kiểm lâm của vườn vừa cứu một con rùa biển quý...', 'Cứu rùa biển quý hiếm khỏi lưới nhựa ở Côn Đảo', 'Cứu rùa biển quý hiếm khỏi lưới ...', '<p>Cụ thể, lực lượng Kiểm lâm Bãi Dương thuộc Hạt Kiểm lâm Vườn quốc gia Côn Đảo đang tuần tra thì phát hiện một con rùa biển thuộc chủng loại đồi mồi (tên khoa học là Eretmochelysimbricata) mắc kẹt trong lưới nhựa đánh cá bị loại thải.</p>', '<p>Sau khi được cắt lưới rùa đã bơi nhanh ra biển.</p><p>Đây là cá thể rùa biển thuộc loài động vật nguy cấp, quý, hiếm được ưu tiên bảo vệ, nằm trong Sách đỏ và đang có nguy cơ tuyệt chủng trên thế giới.&nbsp;</p><p>Từ đầu năm 2019 đến nay Vườn quốc gia Côn Đảo đã giải cứu được bốn con rùa biển. Trong đó có ba con thuộc chủng loại đồi mồi, một con thuộc chủng loại vích đều thuộc cấp nguy cấp, quý hiếm theo Sách đỏ của Việt Nam và của Liên minh Bảo tồn thiên nhiên thế giới (IUCN).</p><p>Thạc sĩ Lê Xuân Đà, chuyên viên bảo tồn rùa biển thuộc Phòng bảo tồn biển và đất ngập nước Vườn quốc gia Côn Đảo, cho biết: Trong số bốn con rùa biển được vườn giải cứu từ đầu năm đến nay thì hai con đồi mồi là do ngư dân bắt được trên biển rồi bán lại. Người mua đã mang đến trao cho ườn để chăm sóc và trả lại tự nhiên.</p>', '<p>Con đồi mồi mới được giải cứu cùng một con thuộc họ vích trước đó đều ở tình trạng mắc kẹt trong rác thải nhựa trôi trên biển (gồm lưới nhựa đánh cá và các loại rác thải khác).</p><p>Rác thải nhựa là mối đe dọa nguy hiểm đối với sinh vật biển. Côn Đảo là một quần đảo có nhiều sinh vật biển quý hiếm sinh sống. Rác thải nhựa trôi biển có nhiều nguồn gốc khác nhau, nhưng một trong những nguyên nhân chính là do ngư dân bỏ lại trên biển những mảnh lưới hư, rách, dây dù không còn sử dụng được.</p><p>Hàng năm Vườn quốc gia Côn Đảo đều có chương trình phối hợp với các lực lượng trên địa bàn tổ chức ra các đợt ra quân thu gom, xử lý rác thải nhựa biển, nhưng lượng rác thải biển vẫn còn trôi dạt vào đảo rất nhiều.</p><p>Phó giám đốc Vườn quốc gia Côn Đảo Trần Đình Huệ nhấn mạnh: Giảm thiểu rác thải nhựa cần có sự chung tay hành động của tất cả mọi người.</p>', '2020-12-13 07:24:49', '2020-12-13 07:25:22'),
(4, 'Gấu', 'gau', 9, 1, 1, 4, NULL, '2020-12-13__anh2g-ggdj.jpg', '2020-12-13__anh1g-fnbm.jpg', '2020-12-13__anh3g-amjt.jpg', 'Sau khi giải cứu gấu bị nuôi nhốt ở Bình Dương, tổ chức bảo vệ động vật hoang dã đã chuyển 2 cá thể gấu về cơ sở bảo tồn gấu ở Ninh Bình.', 'Sau khi giải cứu gấu bị nuôi nhốt ở Bình Dương, tổ chức bảo vệ động vật hoang dã ...', 'Giải cứu gấu bị nuôi nhốt ở Bình Dương', 'Giải cứu gấu bị nuôi nhốt ...', '<p>Sáng 11.3, Trung tâm bảo tồn động vật hoang dã nước Việt (Four Paws Viet) phối hợp tổ chức <a href=\"https://thanhnien.vn/thoi-su/giai-cuu-cap-vo-chong-gau-ngua-tha-ve-tu-nhien-749733.html\">giải cứu gấu</a> được nuôi nhốt lấy mật ở P.Bình Chuẩn (TX.Thuận An, Bình Dương).</p><p><a href=\"https://thanhnien.vn/tai-chinh-kinh-doanh/thoai-trao-nuoi-gau-lay-mat-997541.html\">Hai con gấu</a> được giải cứu lần này của một gia đình ở P.Bình Chuẩn (TX.Thuận An) có trọng lượng trên 110 kg/con, khoảng 15 năm tuổi, nuôi nhốt nhiều năm nay.</p>', '<p>Sau khi được kiểm tra về chuyên môn, 2 con gấu đã được đưa lên xe chuyên dụng để đưa về cơ sở <a href=\"https://thanhnien.vn/thoi-su/4-con-gau-chet-trong-luc-cho-ban-giao-cho-trung-tam-bao-ton-1055570.html\">bảo tồn</a> gấu ở Ninh Bình.</p>', '<p>Four Paws Viet là tổ chức phi lợi nhuận hoạt động trong lĩnh vực <a href=\"https://thanhnien.vn/giao-duc/hoc-sinh-lop-11-tro-thanh-dai-su-to-chuc-bao-ve-dong-vat-hoang-da-838767.html\">bảo vệ động vật hoang dã</a> chuyên giải cứu và chăm sóc các cá thể gấu nuôi nhốt bị lạm dụng để lấy mật.</p>', '2020-12-13 07:29:45', '2020-12-13 07:29:54'),
(5, 'Hoa cúc', 'hoa-cuc', 8, 1, 1, 3, NULL, '2020-12-13__img-5157-1jpg-015523.jpg', '2020-12-13__img-5154-1jpg-015522.jpg', '2020-12-13__img-5153-1jpg-015522.jpg', 'Chỉ hơn một giờ nữa là giao thừa nhưng hoa cúc vẫn còn đầy rẫy các bãi bán từ TP Quy Nhơn đến TX An Nhơn và huyện Phù Cát (Bình Định).', 'Chỉ hơn một giờ nữa là giao thừa nhưng hoa cúc vẫn còn đầy rẫy các bãi bán từ TP Quy Nhơn ...', 'Hoa cúc hạ giá quá nửa vẫn ế ẩm gần giao thừa', 'Hoa cúc hạ giá quá nửa vẫn ế ẩm...', '<p>Từ trưa ngày 30 tết những chậu cúc tuyển vừa to vừa đẹp được bày bán ở TP Quy Nhơn đã có sức mua rất yếu. Đến 21 giờ cùng ngày, các bãi bán cúc vẫn còn đầy rẫy. Càng về khuya, những chủ bán cúc tết càng ể oải vì thi thoảng mới có người đến mua nhưng trả với giá thấp hơn 1 nửa so với mấy ngày trước.</p><p>Ở TX An Nhơn cúc tết cũng ế ẩm chẳng kém, đến 21 giờ tối 30 tháng Chạp mà bãi bán ở khu siêu thị Co.opmart An Nhơn vẫn còn chật kín những chậu cúc vàng rực hoa.</p><p>Anh Bùi Văn Long, 1 người ở xã Phước Lộc (huyện Tuy Phước) lên TX An Nhơn mua hoa tết, cho biết: “Hoa cúc tết đêm 30 hạ gía kinh khủng. Tôi vừa mua 1 chậu hoa cúc khá đẹp, cành tỏa đều, bông dày, kín lá chân mà chỉ có 200.000đ. Cũng 1 chậu đẹp tương tự nhưng cách đây 2 ngày em gái tôi mua đến 550.000đ, tôi được mua rẻ đến hơn 1 nửa”</p>', '<p>Tương tự, gần hết đêm 30 mà hoa cúc bày bán ở phường Đập Đá (TX An Nhơn) và thị trấn Ngô Mây (huyện Phù Cát) vẫn còn \"đầy đất chật bãi\".</p><p>An Nguyễn Văn Nam ở xã Cát Tân (huyện Phù Cát), cho biết: “Chiều tối 30 tôi đi dạo mua hoa cúc ở thị trấn Ngô Mây (huyện Phù Cát) thì mới biết năm nay cúc rẻ hơn năm ngoái rất nhiều. Nếu như năm ngoái 1 chậu cúc đẹp có giá đến 700.000đ/chậu thì năm nay chậu hoa đẹp nhất bãi chỉ có giá chừng 300.000đ. Mãi đến tối mà hoa còn rất nhiều, người mua thì thưa thớt”.</p>', '<p>Nguyên nhân hoa cúc năm nay ế được các chủ bán hoa giải thích: “Do năm nay thời tiết thuận lợi nên hoa cúc phát triển rất tốt, không bị hư như những năm trước. Do đó, lượng hoa cúc tung ra thị trường bán trong dịp tết này rất nhiều, cung vượt cầu nên mất giá”.</p><p>Theo ông Nguyễn Anh Dũng, Chủ tịch UBND phường Bình Định (TX An Nhơn), chỉ riêng tại địa phương này, vụ hoa tết năm nay có 75 hộ nông dân ở các khu vực Vĩnh Liêm, Mai Xuân Thưởng, Kim Châu, Nguyễn Thị Minh Khai, Trần Phú, Liêm Trực trồng đến 21.000 chậu hoa cúc pha lê và đại đóa, tăng 3.000 chậu so với năm ngoái.</p>', '2020-12-13 07:36:09', '2020-12-13 07:36:29'),
(6, 'Sầu riêng', 'sau-rieng', 6, 1, 1, 3, NULL, '2020-12-13__sau-rieng-15432196553101992948469.png', '2020-12-13__1581823266144-sau-rieng-01.jpg', '2020-12-13__dai-hoi-giai-cuu-sau-rieng-tran-ngap-mxh-loan-gia-chat-luong-chi-duoc-dam-bao-bang-nhung-loi-hua-suong-2a30a1.jpg', 'Dù vô cùng tích cực ra tay giải cứu số lượng lớn sầu riêng cho các nhà vườn, thế nhưng nhiều người sau khi mua sầu riêng về lại không hài lòng với chất lượng, thậm chí nghi ngờ xuất xứ của những trái sầu riêng này.', 'Dù vô cùng tích cực ra tay giải cứu số lượng lớn sầu riêng cho các nhà vườn, thế nhưng nhiều người ...', 'Giá sầu riêng giảm \"sập sàn\" chỉ còn 28k 1 ký mà vẫn ế, hệ lụy từ dịch bệnh coronavirus', 'Giá sầu riêng giảm ...', '<p>Từ sau khi dịch bệnh corona bùng phát ở Trung Quốc và nhiều nước châu Á, tình hình kinh tế các nước cũng đình trệ theo vì thị trường nhập khẩu lớn nhất thế giới này đóng cửa biên giới. Các mặt hàng từ trái cây như dưa hấu, thanh long ở&nbsp;các tỉnh Gia Lai, Bình Thuận cho đến sầu riêng ở Tiền Giang đều đang trong tình trạng kêu gọi giải cứu.&nbsp;</p><p>Rất nhiều bài viết được đăng tải, kêu gọi giúp đỡ người nông dân mua dưa, mua thanh long với cái giá \"trong mơ\" chỉ 4000 - 7000/kg khiến người dân đổ xô nhau đi \"giải cứu\". Đây quả thật là cái giá chưa từng có từ trước đến này trên thị trường.</p>', '<p>Hiện tại ở Tiền Giang, chỉ tính riêng Cai Lậy đã có 15.000 ha chuyên canh sầu riêng, đây là khu vực có sản lượng sầu riêng cao nhất DBSCL. Trong vụ mùa này có khoảng 40.000 tấn sầu riêng / 2.200 ha đang cho quả vẫn chưa biết đẩy đi đâu. Giá sầu riêng cũng đã \"kịch sàn\" chỉ còn chưa đến 30.000/kg.&nbsp;Trong khi trước thời điểm dịch bệnh diễn ra, giá sầu riêng vẫn ổn định trong khoảng từ 55.000 - 60.000 đồng/kg.</p>', '<p>Dự tính với giá cả dao động từ 28.000-30.000/1 kg, một số nhà vườn có thể lấy lại vốn hoặc cùng lắm là không lỗ quá nặng. Nếu tình trạng này tiếp tục kéo dài, nông dân sẽ không đủ tiền xoay vòng vốn cho mùa vụ sau.</p>', '2020-12-13 07:41:13', '2020-12-16 07:51:52'),
(7, 'Xoài', 'xoai', 6, 1, 0, 3, NULL, '2020-12-13__d6e330fb407986881d1417cbb39ec189.jpg', '2020-12-13__xoai.jpg', '2020-12-13__1-qfjj.jpg', 'Sau rau màu bị bỏ chết đầy đồng, dưa hấu, củ sắn giá một kg chưa bằng cốc trà đá thì đến nay, hàng nghìn nhà vườn xoài lại tiếp tục chịu cảnh xoài đầy cây, thối đầy gốc mà đỏ mắt cũng chẳng thể tìm ra thương lái.', 'Sau rau màu bị bỏ chết đầy đồng, dưa hấu, củ sắn giá một kg chưa bằng cốc trà đá...', 'Nông dân ĐBSCL khổ vì xoài ế', 'Nông dân ĐBSCL khổ ...', '<p><strong>Xoài thối đầy vườn</strong></p><p>Cuối tháng 4, chúng tôi có mặt tại khu vực trồng xoài lớn nhất nhì tỉnh An Giang quanh núi Cấm (xã An Hảo, huyện Tịnh Biên), câu chuyện trái xoài không thể tiêu thụ là đề tài gây bức xúc nhất của bà con những ngày qua.</p><p>Phó Chủ tịch UBND xã An Hảo Lê Văn Đạt nói: “Cả xã có 150 ha trồng xoài, mấy năm qua trái xoài là nguồn thu lớn giúp bà con phát triển mạnh mô hình xen canh vườn rừng. Vậy mà mấy ngày qua, đi đến đâu cũng nhận được câu hỏi làm sao giúp bà con nông dân tiêu thụ được xoài khi mà trái chính đầy cây mà đỏ mắt cũng không thể tìm được thương lái tiêu thụ”.</p><p>Dẫn chúng tôi vào ấp Tà-Lọt, nơi chuyên canh xoài lớn nhất nơi đây, chủ vườn Nguyễn Văn Nhựt lắc đầu: “Mua bán được gì đâu, các chú muốn hái bao nhiêu mang về được thì mang. Để nó thúi đầy gốc chứ có ai mà mua”.</p><p>Vườn xoài gần hai ha của gia đình ông Nhựt gồm xoài thanh ca, xoài ghép bưởi trái quằn cây nhưng không thể tiêu thụ vì không có người mua. Chủ vườn Nguyễn Thị Ánh Tuyết có ba ha chuyên canh xoài ở hai khu vực Tà-Lọt và Trường bắn Chi Lăng nói: “Chưa năm nào mà trái xoài khốn đốn như thế này. Giá một kg xoài cát Hòa Lộc loại một tức (từ một đến ba trái/kg) chỉ bằng ly cà-phê (khoảng 7 đến 10 nghìn đồng) nhưng muốn bán cũng có được đâu. Còn xoài ghép bưởi, cát chu, thái… thì chỉ có bỏ cho thúi (thối) trên cây luôn chứ đâu có ai thèm đếm xỉa mà mua”.</p><p>Vào sâu ven chân núi Cấm, chủ vườn Bùi Thanh Tâm có hơn bảy ha đất trồng xoài còn khốn đốn hơn. Anh cho biết: “Vụ xoài năm nay, chi phí phun xịt thuốc mấy nghìn gốc xoài ăn đứt cả bốn mươi mấy triệu đồng. Vậy mà bây giờ vào mùa thu hoạch bán từng ký mà cũng khó nữa. Phá sản là cái chắc”. Ngay thời điểm chúng tôi đến thăm vườn, anh đang hái từng trái một theo yêu cầu của anh Quang, một lái buôn nhỏ, những trái xoài đã chín ươm ướp, sang bóng, to tròn với giá 2.500 đồng/kg.</p>', '<p>Cùng chung cảnh ngộ trên, tại huyện Cao Lãnh và khu vực cồn trên sông Hậu của TP Cao Lãnh, nhà vườn cũng đang khốn đốn trong tiêu thụ. Anh Nguyễn Văn Dớt ở khu vực Cồn Lân (TP Cao Lãnh, Đồng Tháp) nói: Khoảng nửa tháng trước, giá xoài cát Hòa Lộc loại một cũng được giá 15 đến 20 nghìn đồng/ký. Thế nhưng, một tuần trở lại đây, giá đã xuống dưới 10 nghìn đồng mà thương lái không thấy, một vài chủ vườn đã nhận cọc thì lái báo chấp nhận bỏ cọc, còn nếu bán phải giảm giá xuống sáu đến tám nghìn đồng/kg, nhưng phải lựa chỉ lấy loại một và hai.</p><p>Tại tỉnh Tiền Giang, địa phương có diện tích trồng xoài hàng đầu khu vực ĐBSCL có hơn 4.000 ha vườn trồng xoài, tập trung nhiều tại huyện Cái Bè, Cai Lậy... đang bước vào vụ thu hoạch xoài, tuy giá có nhỉnh hơn so với các tỉnh còn lại trong khu vực nhưng cũng đang trên đà rớt giá. Theo đó, thương lái mua tại vườn giá 18.000 đến 20.000/kg đối với cát Hòa Lộc, xoài Đài Loan với giá 13.000 đồng, xoài ghép giá 5.000 đến 6.000 đồng/kg… chỉ với xoài loại một, có bao da bảo đảm chất lượng trái đẹp, ngon. Theo các chủ vườn, do năm nay sâu bệnh nhiều nên với giá trên thì người trồng xoài phá huề đến lỗ.</p>', '<p>Anh Bé Ba - một thương lái mua xoài khu vực huyện Cái Bè nói: “Giá xoài mấy ngày qua “sựng ngược” đỡ hổng nổi. Tui đã bỏ cọc nhà vườn gần 30 tấn xoài giá 12.000 đồng/kg, giờ bán ra 6.000 đồng/kg, xoài đang chín rộ mà không hái được, mỗi ngày chỉ hái được chừng một tấn”. Nhiều thương lái đặt cọc nhà vườn đã chấp nhận bỏ cọc. Xoài rớt giá không chỉ bà con chủ vườn chết điếng mà chính thương lái cũng ngậm ngùi theo.</p><p>Anh Nguyễn Văn Tuấn, ngụ xã Tấn Mỹ (huyện Chợ Mới, An Giang) người có thâm niên hơn 20 năm gắn bó với cây xoài, vừa là thương lái vừa là chủ vựa cho biết: Sở dĩ xoài năm nay bị rớt giá thảm hại vì hai nguyên nhân: Nguyên nhân thứ nhất là vụ mùa năm nay xoài trúng năng suất ở tất cả các chủ vườn từ khu vực Đông Nam bộ đến miền Tây. Năng suất bình quân cây lên đến 500 kg có cây lên 700 kg/cây. Thứ đến, Trung Quốc đang “ăn hàng” ngon bỗng ngưng ngang nên chẳng ai đỡ nổi khi mà xoài đã vào ngay mùa rộ. Ngoài ra, việc vận chuyển đang gặp khó khăn khi qua các trạm cân tải trọng xe, chủ xe đòi tăng giá nếu chở đúng tải, còn chở quá tải như trước thì không chịu. Giá đã xuống mà tăng tiền vận chuyển thì thương lái còn gì đất sống. Đường nào cũng chết nên thôi chịu lỗ tiền cọc còn hơn.</p><p>Đồng chí Phạm Văn Thanh, Trưởng Phòng NN&amp;PTNT huyện Cái Bè cho biết, toàn huyện có hơn 3.000 ha xoài các loại. Trong đó, xã Hòa Hưng có hơn 1.000 ha trồng chuyên canh xoài cát Hòa Lộc. Chúng tôi rất hy vọng, khi xoài rộ cuối vụ giá xoài tăng trở lại.</p>', '2020-12-13 07:44:35', '2020-12-17 09:48:30');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `species`
--
ALTER TABLE `species`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `species`
--
ALTER TABLE `species`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
