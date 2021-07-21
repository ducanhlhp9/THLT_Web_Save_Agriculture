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
-- Cấu trúc bảng cho bảng `organization`
--

CREATE TABLE `organization` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title_seo` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `description_seo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `content1` text COLLATE utf8mb4_unicode_ci,
  `content2` text COLLATE utf8mb4_unicode_ci,
  `content3` text COLLATE utf8mb4_unicode_ci,
  `image1` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image2` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image3` varchar(99) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cat_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `active` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `organization`
--

INSERT INTO `organization` (`id`, `name`, `title`, `title_seo`, `slug`, `description`, `description_seo`, `content1`, `content2`, `content3`, `image1`, `image2`, `image3`, `cat_id`, `user_id`, `status`, `active`, `created_at`, `updated_at`) VALUES
(1, 'Đội sinh viên tình nguyện Đồng Hương Hà Nam Ninh', 'Đội sinh viên tình nguyện Đồng Hương Hà Nam Ninh', 'Đội sinh viên tình nguyện Đồng Hương Hà Nam Ninh', 'doi-sinh-vien-tinh-nguyen-dong-huong-ha-nam-ninh', 'Sinh viên Kinh tế Quốc dân và các trường Đại học khác đồng hương 3 tỉnh : Hà Nam, Nam Định, Ninh Bình với công tác tình nguyện.', 'Sinh viên Kinh tế Quốc dân và các trường Đại học khác đồng hương...', '<p>Đội SVTN đồng hương Hà Nam Ninh là mái nhà chung của các bạn sinh viên tới từ 3 tỉnh Hà Nam , Nam Định , Ninh Bình và nhiều vùng quê ngoại tỉnh khác. Nhìn LOGO của Đội, có lẽ ai cũng sẽ nhận ra đó chính là những danh thắng của 3 vùng đất anh hùng , giàu truyền thống : Núi Đọi (Hà Nam), chùa Bái Đính ( Ninh Bình) và Biển xanh ở Nam Định... Thành lập vào ngày 16/03/2012 tại KTX trường đại học Kinh tế Quốc Dân, trải qua những tháng ngày tham gia hoạt động năng nổ nhiệt tình, Đội đã khẳng định được sự nhiệt huyết \"TUỔI TRẺ - NIỀM TIN - HI VỌNG\" của 1 tổ đội tình nguyện - 1tổ chức sinh viên.</p><p>Mặc dù là 1 đội mới thành lập nhưng Đội luôn luôn tự hào với những nỗ lực và cống hiến cho cộng đồng trong suốt thời gian vừa qua. Thành viên của Đội không chỉ là các bạn sinh viên của trường Đại học Kinh tế Quốc dân mà còn có cả các bạn sinh viên đang học ở các trường đại học khác trên khắp địa bàn thành phố Hà Nội như Xây dựng, Bách Khoa, Phương Đông, Ngoại thương, Kinh doanh công nghệ…Tham gia Đội SVTN Hà Nam Ninh, các thành viên có thể tìm thấy những người đồng chí, những người anh em trong 1 gia đình gắn bó thân thiết, là nơi chia sẻ những niềm vui nỗi buồn , giúp đỡ nhau khi gặp...phải những khó khăn trong học tập, cuộc sống... Thực sự Đội đã trở thành một gia đình thứ 2 cho những người con đi học xa nhà, là nơi giúp cho sinh viên trở nên năng động, sáng tạo và linh hoạt hơn, hỗ trợ hoàn thiện các kỹ năng mềm cho sinh viên...</p>', '<p>Thời gian vừa qua, được sự giúp đỡ của Hội sinh viên trường , các tổ đội tình nguyện trong trường, các tổ chức, cá nhân … Đội đã tham gia tích cực nhiều hoạt động để lại dấu ấn sâu đậm trong các bạn sinh viên trong cũng như ngoài trường. Vào thời gian đầu, Đội đã phối hợp làm việc cùng C25 Bách Khoa trong chương trình đi bộ phòng chống Lao – Vì sức khỏe cộng đồng. Đó là khi màu áo xanh đầu tiên của Đội SVTN Đồng hương Hà Nam Ninh xuất hiên trên những con phố, “màu áo xanh sinh viên mang trái tim tình nguyện”, Đội đã cùng với C25 vận động thanh niên hiến máu cứu người trong suốt thời gian chương trình diễn ra. Với sự thành công vang dội của chương trình ấy, Hà Nam thực sự đã gây ấn tượng với màn mở đầu tuyệt vời cho 1 chuỗi hoạt động tình nguyện sau này, 1 làn sóng “TUỔI TRẺ - NIỀM TIN - HI VỌNG” đã trào dâng mạnh mẽ trong lòng những người con của vùng đất Hà Nam Ninh giàu truyền thống.</p><p>Tiếp đó, Đội đã tổ chức các hoạt động tình nguyện tại chỗ như Dọn vệ sinh ở Hồ Gươm vào các buổi sáng chủ nhật hàng tuần. Anh chị, em cùng nhau dọn dẹp quanh bờ hồ, quét dọn nhặt rác bẩn trên những thảm cỏ; lòng, lề đường. Những buổi như thế, Đội có cơ hội được đóng góp 1 phần công sức nhỏ bé của mình vào việc xây dựng văn minh của đô thị, giữ gìn môi trường xanh sạch đẹp… Ngoài ra, Đội còn được giao lưu gặp gỡ, cùng phối hợp làm việc với các tổ đội tình nguyện khác trên địa bàn thành phố Hà Nội : Đội SVTN Đồng hương Hải Dương ( Đại học Kinh tế Quốc Dân), Đội SVTN trường Đại học Giao thông vận tải, … . Sau những giờ phút lao động hăng say ấy, mọi người lại ngồi lại quây quần bên nhau , quanh chiếc guitar , cùng nhau hát những bài ca tình nguyện, tình yêu gia đình, yêu đời, yêu cuộc sống… Hay cùng nhau chơi những trò chơi tập thể vui nhộn, ăn kem bờ hồ cũng là những trải nghiệm vô cùng thú vị mà cuộc đời sinh viên rất hiếm khi có những dịp như thế…</p><p>Đối với những hoạt động bên trong trường Đại học Kinh tế Quốc dân, Đội cũng tham gia hết sức nhiệt tình và năng nổ. Cũng trong khoảng thời gian hoạt động ấy, Đội tích lũy được biết bao những kinh nghiệm quý báu trong những công tác tình nguyện, góp phần xây dựng lên Hà Nam Ninh ngày càng phát triển, vững mạnh . Đó chính là những dịp được tham gia làm an ninh cho chương trình I-couples thường niên của Liên chi hội Đầu tư, đi cùng Đội SVTN Đồng hương Hải Dương trong những dịp lễ lớn ở ngôi chùa Bằng hay hỗ trợ các em K54 nhập trường, tham gia giải bóng đá SVTN mở rộng do CLB SV tuyên truyền phòng chống tệ nạn xã hội và HIV/AIDS tổ chức… Được giúp đỡ cho xã hội, cho cộng đồng đó là 1 niềm vinh dự, niềm hạnh phúc cho Đội hay chính các thành viên trong Đội, sẽ ngày càng trưởng thành, được rèn giũa trong môi trường tình nguyện. Trong tương lai không xa, họ có thể mang “ TRÁI TIM TÌNH NGUYỆN” của màu áo xanh sinh viên gửi gắm vô vàn yêu thương trải ra khắp muôn nơi…</p><p>Nhưng thành công nhất với Đội có lẽ đó chính là chiến dịch “ Mùa hè TNTN 2012” vừa rồi với hai hoạt động lớn là “Tiếp sức mùa thi” và “Mùa hè xanh 2012”. Trong đợt hoạt động đầu tiên “Tiếp sức mùa thi” , khi những bóng áo xanh lại rộn ràng về nơi nơi, trên khắp các néo đường, các áo xanh Hà Nam Ninh hòa cùng không khí tưng bừng, sục sôi ấy, hỗ trợ các em thí sinh tại địa điểm thi: trường Tiểu học Tân Mai rất hăng say, tận tình. Không quản nắng mưa, họ đã hoàn thành tốt nhiệm vụ, góp sức mình làm vơi bớt đi cái căng thẳng, vất vả của thí sinh và các bậc phụ huynh trong cái không khí của kì thi Đại học đầy cam go, quyết liệt... Sau đợt “Tiếp sức mùa thi” đó, họ tiếp tục lên đường đi tình nguyện ở vùng đất Ninh Thành - Ninh Giang cùng với các anh chị và các bạn Đội SVTN Đồng hương Hải Dương. Mặc dù tới 1 nơi không phải là quê hương của mình, nhưng chỉ cần trong những con người ấy bầu máu nóng tình nguyện vẫn đang chảy thì họ sẽ mang tất cả sự nhiệt huyết của “ Tuổi trẻ - Niềm tin - Hi Vọng” để cống hiến. Những giọt mồ hôi, những giọt nước mắt, những nụ cười, những cái ôm của tình đồng chí đồng đội đã khiến họ dần trưởng thành hơn rất nhiều.</p><p>Thời gian tới, Đội sẽ phấn đấu trở thành 1 thành viên của Hội sinh viên Trường Đại học Kinh tế Quốc Dân - ngôi nhà chung sinh viên trường với bề dày xây dựng và phát triển... Đội sẽ có thêm điều kiện giúp đỡ nhiều hơn cho những hoạt động hướng về lợi ích của cộng đồng. Mặt khác, Đội hi vọng cũng có thể đóng góp 1 phần công sức nhỏ bé của mình hướng về quê hương Hà Nam - Nam Định - Ninh Bình yêu dấu...</p>', '<p>Đội SVTN đồng hương Hà Nam Ninh luôn mong muốn nhận được sự giúp đỡ của các doanh nghiệp, các cá nhân, các nhà hảo tâm.. những người con của quê hương đang công tác ở khắp trong và ngoài nước có thể đỡ đầu tài trợ cả về vật chất lẫn tinh thần, Đội có điều kiện giúp đỡ cộng đồng, quê hương, phát triển bền vững lâu dài...</p><p>Đội SVTN đồng hương Hà Nam Ninh luôn mở rộng chào đón không chỉ những người con Hà Nam Ninh mà đó là tất cả những ai mang trong mình nhiệt huyết tình nguyện..! Hãy tới với chúng tôi, hãy cùng thắp lên ngọn lửa Hà Nam Ninh truyền thống mãi luôn rực cháy , cùng nhau mang yêu thương đến từ trái tim tình nguyện trải ra khắp muôn nơi..&gt;</p>', '2020-12-17__129115785-4987952434578925-5599798099941653872-n.jpg', '2020-12-17__20525556-1723580294349505-2258847841734379808-n.jpg', '2020-12-17__55957763-2755335567840634-4468743249049157632-n.jpg', 1, NULL, 1, 1, '2020-12-17 08:03:26', '2020-12-17 08:09:14'),
(2, 'Ông Kao Siêu Lực', '“Vua bánh mỳ thanh long” Kao Siêu Lực: Quảng bá nông sản Việt Nam qua bánh', '“Vua bánh mỳ thanh long” Kao Siêu Lực', 'ong-kao-sieu-luc', 'Là Giám đốc Công ty ABC Bakery, đồng thời là Chủ tịch Hiệp hội Bánh mì quốc tế khu vực Đông Nam Á, ông Kao Siêu Lực cho rằng, hiện nay, Việt Nam còn rất nhiều nông sản giá trị khác như: Bơ, khoai môn, củ dền… Bằng kinh nghiệm nhiều năm tích lũy được trong nghề làm bánh, ông sẽ dần dần nghiên cứu và tìm cách để nâng cao giá trị của những nông sản ấy để quảng bá đến bạn bè quốc tế.', 'Là Giám đốc Công ty ABC Bakery, đồng thời là Chủ tịch Hiệp hội Bánh mì quốc tế khu vực Đông Nam Á, ông Kao Siêu Lực cho rằng, hiện nay, Việt Nam còn rất nhiều nông sản giá trị khác như: Bơ, khoai môn, củ dền… Bằng kinh nghiệm nhiều năm tích lũy được trong nghề làm bánh...', '<p>Nhắc đến cái tên Kao Siêu Lực có lẽ không còn nhiều người thấy xa lạ, bởi thương hiệu bánh mỳ thanh long ra đời vào đúng thời điểm Việt Nam vừa hết đợt cách ly do dịch bệnh COVID-19.</p><p>Tìm đến cơ sở sản xuất của Công ty Trách nhiệm hữu hạn Một thành viên Bánh kẹo Á Châu (ACB Bakery) vào một ngày cuối tháng 9 năm 2020, cùng với những công nhân của mình, ông Kao Siêu Lực vẫn miệt mài tìm hiểu, nghiên cứu cho ra đời những sản phẩm mới, sử dụng nông sản Việt Nam làm nguyên liệu.</p><p>Sau bánh mỳ thanh long, ông Lực khoe: Mùa Trung thu năm 2020, đã có hàng ngàn chiếc bánh trung thu sầu riêng 6 RI được đưa ra thị trường. Đây là mùa trung thu đầu tiên công ty của ông sử dụng nguyên liệu làm từ trái sầu riêng 6 RI thay vì sầu riêng Musang King – nguyên liệu nhập khẩu từ nước ngoài như trước đây.</p><p>Ông cho biết, sầu riêng 6 RI là nông sản thứ hai (sau thanh long ruột đỏ) được ABC lựa chọn sử dụng, khai thác và chế biến trong làm bánh. Trước đó, ông từng được nhiều người biết đến với tên gọi “Vua bánh mỳ thanh long”.</p><p>Chia sẻ về cơ duyên có tên gọi ấy, ông Kao Siêu Lực kể:&nbsp;\"Cuối năm 2019, tôi đi khảo sát ở Vĩnh Long, mục đích là xem có nông sản nào phù hợp để làm bánh. Đang lựa chọn sầu 6 RI, bỗng có một người nông dân mắt mũi đỏ hoe đến gần cầu cứu: Anh Kao ơi, 300 công - tơ - nơ thanh long ruột đỏ không xuất đi Trung Quốc được, còn nhiều thanh long ở vườn sắp thu hoạch nữa, nếu không bán được chỉ cho bò ăn.</p><p>Ban đầu tôi nghĩ, chắc sẽ mua 1-2 tấn thanh long, phát cho công nhân ABC ăn, ủng hộ bà con. Nhưng trên đường về, hình ảnh của người nông dân ấy cứ trở đi, trở lại trong đầu. Tôi băn khoăn, nếu mua giúp thanh long cho nông dân theo kiểu \"giải cứu\" thì chỉ được ít thôi, lại không thể mua lâu dài. Về văn phòng công ty, cùng với Phòng Nghiên cứu - Phát triển (R&amp;D), tôi đưa ra ý tưởng \"cứu thanh long\" bằng cách sản xuất bánh mì thanh long&nbsp;\". – Ông Kao Siêu Lực kể lại.</p>', '<p>Nhiều năm nằm trong ban giám khảo những cuộc thi bánh quốc tế nên ông Kao đặt ra tiêu chuẩn cho bánh mì thanh long phải đảm bảo thẩm mỹ, hương vị và cấu trúc bánh. “Ba lần thử nghiệm, hương vị, cấu trúc bánh không đạt. Thêm vài lần tìm nguyên nhân rồi cải tiến, cuối cùng chúng tôi đã có những chiếc bánh mì thanh long mà khách hàng ưa chuộng.” – ông Lực nhớ lại.</p><p>Ông cho biết, cầm chiếc bánh nóng xốp, giòn rộm, có màu hồng tự nhiên của thanh long ruột đỏ, hương vị thoang thoảng mùi thanh long, vỏ bánh lẫn những hạt đen li ti rất đẹp mắt, thớ bánh dẻo và dai, ông hạnh phúc vô cùng. Đích thân ông ra quầy giới thiệu bánh mỳ thanh long, được bà con đón nhận ngoài mong đợi. Ban đầu một ngày ABC làm 300 kg thanh long; 3 ngày sau tăng lên 1 tấn/ngày; 10 ngày sau tăng lên 2,5 tấn/ngày. Cùng với đó, giá thanh long của người nông dân bán ra tăng lên từ 4 nghìn đồng/kg lên 25 nghìn/kg.</p><p>Mấy chục năm gắn bó với nghề làm bánh, từng được nhận nhiều giải thưởng danh giá, nhưng với ông, việc sản xuất được bánh mì thanh long là niềm hạnh phúc rất đặc biệt. “Tôi hạnh phúc bởi được nhìn thấy đồng bào của tôi cười, được đóng góp thêm giá trị cho nông sản Việt Nam.” – ông Kao Siêu Lực chia sẻ.</p><p>Đó cũng là lí do mà ông công khai chia sẻ với cộng đồng công thức làm bánh mỳ thanh long. Ông nói rằng, nguyện vọng lớn nhất của mình là đưa bánh mỳ thanh long trở thành văn hóa ẩm thực của người Việt Nam. Không chỉ là sản phẩm cho người Việt thưởng thức mà còn trở thành sản phẩm văn hóa ẩm thực Việt Nam sẽ vươn xa ra trường quốc tế; khẳng định giá trị của nông sản Việt Nam, khẳng định tâm huyết và bàn tay vàng của người Việt.</p><p>Bánh mỳ thanh long chính là khởi đầu tốt đẹp, tiếp thêm cho ông Kao Siêu Lực và hệ thống ABC trong hành trình nâng cao giá trị nông sản Việt. Nhiều chiếc bánh mỳ, bánh trung thu thanh long và sầu riêng 6 RI mang thương hiệu ABC đã được đưa ra thị trường và lan tỏa ra không chỉ trong nước mà cả các nước trên thế giới.</p>', '<p>Với quan niệm “có quốc mới có gia (tức là có tổ quốc thì mới có nhà)”, thời gian qua, dù gặp phải rất nhiều khó khăn do dịch bệnh COVID – 19 nhưng ông và ABC luôn chung sức giúp đỡ vì một đất nước an toàn, mạnh khỏe. Những chiếc bánh mì thanh long, những chiếc bánh mì đen dinh dưỡng cho các bác sĩ, tạo công ăn việc làm cho hàng ngàn lao động đang làm việc tại Công ty …là minh chứng cho tấm lòng của&nbsp; doanh nhân Kao Siêu Lực.</p><p>Là Giám đốc Công ty ABC Bakery; đồng thời là Chủ tịch Hiệp hội Bánh mì quốc tế khu vực Đông Nam Á, ông Kao Siêu Lực cho rằng, ngành chế biến thực phẩm luôn gắn liền với mặt hàng nông sản. Hiện nay, Việt Nam còn rất nhiều nông sản giá trị khác như: Bơ, khoai môn, củ dền… Ông Lực cho biết, bằng kinh nghiệm nhiều năm tích lũy được trong nghề, sẽ dần dần nghiên cứu và tìm cách để nâng cao giá trị của những nông sản ấy.</p>', '2020-12-17__ong-luc-3.jpg', '2020-12-17__4-15820408207611181994478-15820410951101632192021.png', '2020-12-17__ong-luc-phan-thuong.jpg', 2, NULL, 1, 1, '2020-12-17 08:24:42', '2020-12-17 08:24:42'),
(3, 'CÔNG TY CỔ PHẦN MÍA ĐƯỜNG SƠN LA', 'CÔNG TY CỔ PHẦN MÍA ĐƯỜNG SƠN LA', 'CÔNG TY CỔ PHẦN MÍA ĐƯỜNG SƠN LA', 'cong-ty-co-phan-mia-duong-son-la', 'CÔNG TY CỔ PHẦN MÍA ĐƯỜNG SƠN LA (SON LA SUGAR JOINT STOCK COMPANY). Địa chỉ: Thị trấn Hát Lót, huyện Mai Sơn, tỉnh Sơn La. Điện thoại: 0212 3843274 - Fax: 0212 3843406', 'CÔNG TY CỔ PHẦN MÍA ĐƯỜNG SƠN LA (SON LA SUGAR JOINT STOCK COMPANY). Địa chỉ: Thị trấn Hát Lót, huyện Mai Sơn, tỉnh Sơn La. Điện thoại: 0212 3843274 - Fax: 0212 3843406', '<p><strong>QUÁ TRÌNH THÀNH LẬP CÔNG TY</strong><br><br>Công ty cổ phần Mía đường Sơn La tiền thân là Nhà máy Đường trực thuộc Nông trường quốc doanh Tô Hiệu Sơn La quản lý, được khởi công xây dựng ngày 16/9/1995.<br><br>Ngày 12/8/1997,UBND tỉnh Sơn La đã Quyết định Thành lập doanh nghiệp Nhà nước: Công ty Mía đường Sơn La trực thuộc Uỷ ban nhân dân tỉnh Sơn La quản lý.<br><br>Ngày 26/11/2007, Uỷ ban nhân dân tỉnh Sơn La đã phê duyệt phương án cơ cấu tài chính và chuyển đổi sở hữu Công ty Mía đường Sơn La từ Công ty 100% vốn Nhà nước sang công ty cổ phần, Nhà nước chiếm 58,68% vốn Điều lệ.<br><br>Ngày 01/02/2008 Công ty cổ phần Mía đường Sơn La tổ chức thành công Đại hội đồng cổ đông thành lập Công ty cổ phần Mía đường Sơn La.<br><br>Ngày 31/10/2015, Công ty Mua bán nợ Việt Nam đại diện phần vốn góp Nhà nước đã chính thức thoái hết phần vốn góp của Nhà nước tại Công ty cổ phần mía đường Sơn La. Công ty cổ phần mía đường Sơn La không còn vốn nhà nước tại thời điểm này.</p>', '<p>Diện tích vùng nguyên liệu: 8.000ha.<br><br>Ký hợp đồng trồng và thu mua mía với 8.637 hộ trồng mía.</p><p>• Công suất ép: 5.000 tấn mía/ngày.<br><br>• Hệ thống quản lý chất lượng: ISO 9001:2015.<br><br>• Hệ thống quản lý môi trường: ISO 14001:2015.</p><p><strong>TIÊU CHÍ HOẠT ĐỘNG CỦA CÔNG TY</strong><br><br>&nbsp;&nbsp; • Đầu tư phát triển vùng nguyên liệu ổn định, lâu dài trên cơ sở đảm bảo lợi ích hài hòa của Công ty và người trồng mía.<br><br>&nbsp;&nbsp; • Nâng cao chất lượng sản phẩm, tối đa hóa lợi ích của khách hàng để tạo giá trị gia tăng chung cho công ty và xã hội.<br><br>&nbsp;&nbsp; • Tăng trưởng bền vững.<br><br>&nbsp;&nbsp; • Đảm bảo hài hòa lợi ích của cổ đông và thu nhập của người lao động.<br><br>&nbsp;&nbsp; • Đóng góp thiết thực cho ngân sách địa phương và quan tâm đến công tác an sinh xã hội của cộng đồng.<br><br><strong>HOẠT ĐỘNG TÀI CHÍNH MINH BẠCH</strong><br><br>&nbsp;&nbsp; • Ngày niêm yết cổ phiếu: 13/9/2012.<br><br>&nbsp;&nbsp; • Ngày giao dịch đầu tiên: 16/10/2012.<br><br>&nbsp;&nbsp; • Sàn giao dịch chứng khoán: HNX.<br><br>&nbsp;&nbsp; • Mã chứng khoán: SLS.<br><br>&nbsp;&nbsp; • Vốn Điều lệ (tháng 9/2017): 81.599.830.000 đồng.</p>', '<p><strong>CÁC THÀNH TÍCH ĐẠT ĐƯỢC</strong><br><br>&nbsp;&nbsp; • Thủ tướng Chính phủ tặng Cờ thi đuahoàn thành xuất sắc, toàn diện nhiệm vụ công tác, dẫn đầu phong trào thi đua yêu nước của tỉnh Sơn La;<br><br>&nbsp;&nbsp; • Chủ tịch nước tặng Huân chương Lao động hạng Ba;<br><br>&nbsp;&nbsp; • Ủy ban nhân dân tỉnh Sơn La tặng Cờ thi đua xuất sắc cho Công ty đã có thành tích xuất sắc trong phong trào thi đua yêu nước và nhiều Bằng khen;<br><br>&nbsp;&nbsp; • Tổng cục trưởng Tổng cục thuế tặng Bằng khen cho công ty đã có thành tích thực hiện tốt chính sách pháp luật thuế.<br><br>&nbsp;&nbsp; • Tổng giám đốc BHXH Việt Nam tặng Bằng khen cho công ty đã thực hiện tốt chính sách BHXH, BHYT;<br><br>&nbsp;&nbsp; • Ban Chấp hành Tổng Liên đoàn Lao động Việt Nam tặng Bằng khen cho Công đoàn cơ sở Công ty cổ phần Mía đường Sơn La \"Đã có thành tích xuất sắc trong phong trào thi đua lao động giỏi và xây dựng tổ chức Công đoàn vững mạnh;<br><br>&nbsp;&nbsp; • Công đoàn ngành Nông nghiệp và phát triển nông thôn tỉnh Sơn La tặng cờ dẫn đầu phong trào \"Xanh-sạch-đẹp, bảo đảm ATVSLĐ\"...</p>', '2020-12-17__canhdongmianguyenlieuvu2017.jpg', '2020-12-17__slide-sls11.jpg', '2020-12-17__slide-sls2.jpg', 2, NULL, 1, 1, '2020-12-17 08:28:08', '2020-12-17 08:28:08'),
(4, 'Ngũ cốc Long Liên', 'Ngũ cốc Long Liên - Ngũ cốc cao cấp cho người Việt', 'Ngũ cốc Long Liên - Ngũ cốc cao cấp cho người Việt', 'ngu-coc-long-lien', 'Ngũ cốc Long Liên ra đời với sứ mệnh tạo ra những sản phẩm sạch và thơm ngon bổ dưỡng, giúp các bà nội trợ Việt tiết kiệm được thời gian nhưng vẫn có thể chuẩn bị cho gia đình những bữa ăn đầy đủ dưỡng chất nhất.', 'Ngũ cốc Long Liên ra đời với sứ mệnh tạo ra những sản phẩm sạch và thơm ngon bổ dưỡng, giúp các bà nội trợ Việt tiết kiệm được thời gian nhưng vẫn ...', '<h2><strong>Ngũ cốc Long Liên – Chúng tôi làm gì?</strong></h2><p>Lời đầu tiên, <strong>Long Liên</strong> xin được cảm ơn tất cả anh chị em đã đồng hành với chúng tôi từ những ngày đầu. Những ngày khởi nghiệp trong căn <strong>bếp củi</strong> với cái <strong>chảo gang</strong>.</p><p>Cảm ơn nhiều nhất đến với Dượng Tony (<a href=\"https://www.facebook.com/TonyBuoiSang/\">Tony Buổi Sáng</a>). Người đã truyền cảm hứng và động lực để Long Liên có được các dòng <strong>Ngũ cốc cao cấp</strong>. Vươn ra thế giới!</p>', '<h3><strong>Những ngày đầu</strong></h3><p><strong>Ngũ cốc Long Liên</strong> là thương hiệu đi lên từ <strong>hai bàn tay trắng</strong>.</p><p>Từ <strong>chảo Gang</strong>, <strong>bếp củi</strong> với vài loại hạt đậu của người dân xứ nghệ.</p><p>Để từng hạt đậu là an toàn và nguyên vẹn nhất. Chúng tôi kết hợp cùng bà con nơi đây từng bước trong khâu chọn giống, đảm bảo là <strong>hạt thuần chủng</strong>.</p><p>Canh tác tự nhiên, không sử dụng thuốc bảo vệ thực vật.</p><h3><strong>Có được niềm tin</strong></h3><p><a href=\"https://longlien.net/\"><strong>Ngũ cốc Long Liên</strong></a> là thương hiệu của những dòng <strong>bột ngũ cốc cao cấp</strong>.</p><p>Từ các hạt dinh dưỡng tốt nhất mà thiên nhiên ban tặng cho con người.</p><p><strong>Quả óc chó</strong> từ nước <strong>Mỹ</strong> giàu nhất thế giới, đến <strong>hạt chia</strong> của vương quốc chuột túi <strong>Úc</strong>. Kết hợp với mấy hạt đậu dân quê ta <strong>đậu xanh</strong>, <strong>đậu đỏ</strong>, <strong>mè đen.</strong></p><p>Long Liên luôn cố gắng từng giây phút để làm nên các dòng <a href=\"https://chosalebmt.net/ngu-coc-cho-ba-bau/\">bột ngũ cốc</a> <strong>tốt tự nhiên</strong>.</p>', '<h3><strong>Ngay lúc này đây,</strong></h3><p>Khi bạn <strong>uống ngũ cốc Long Liên</strong>, bạn được hưởng thụ <strong>thành quả lao động</strong> hơn 3 năm qua của anh chị em chúng tôi.</p><p>Còn chúng tôi,</p><p>Vẫn tiếp tục nghiên cứu để ngày mai,</p><p>Bạn <strong>có thêm một món quà </strong>cho <a href=\"https://longlien.net/suc-khoe/\">sức khỏe</a>&nbsp;nữa từ thiên nhiên.</p><p>Bạn có thêm một thương hiệu Việt để <strong>tự hào</strong> với bạn bè quốc tế.</p>', '2020-12-17__canh-dong-long-lien.jpg', '2020-12-17__bep-cui-long-lien.jpg', '2020-12-17__banner-long-lien.jpg', 2, NULL, 1, 1, '2020-12-17 08:32:13', '2020-12-17 08:32:13');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `organization`
--
ALTER TABLE `organization`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `organization`
--
ALTER TABLE `organization`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
