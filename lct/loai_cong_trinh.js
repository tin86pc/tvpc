let string_loai_cong_trinh = `
Trụ sở cơ quan nhà nước

Nhà chung cư
Nhà tập thể
Nhà ở ký túc xá
Nhà hỗn hợp

Nhà trẻ, trường mẫu giáo, mầm non
Trường tiểu học
Trường trung học cơ sở
Trường trung học phổ thông
Trường phổ thông có nhiều cấp học
Trường cao đẳng, đại học, học viện
Trường trung cấp chuyên nghiệp
Trường dạy nghề
Cơ sở giao dục thường xuyên
Cơ sở giáo dục khác

Bệnh viện
Phòng khám đa khoa
Phòng khám chuyên khoa
Nhà điều dưỡng
Phục hồi chức năng, chỉnh hình
Nhà dưỡng lão
Cơ sở phòng chống dịch bệnh
Trung tâm y tế
Cơ sở y tế khác

Nhà hát
Rạp chiếu phim
Rạp xiếc
Trung tâm hội nghị, tổ chức sự kiện
Nhà văn hóa
Cơ sở kinh doanh dịch vụ karaoke
Vũ trường
Quán bar
Câu lạc bộ
Công viên giải trí
Vườn thú
Thủy cung

Chợ
Trung tâm thương mại, điện máy
Siêu thị
Cơ sở kinh doanh dịch vụ, ăn uống 
Cơ sở kinh doanh hàng hóa dễ cháy, nổ 

Khách sạn
Nhà khách
Nhà nghỉ
Cơ sở lưu trú khác
Nhà trọ

Nhà sử dụng làm trụ sở văn phòng làm việc của doanh nghiệp, tổ chức chính trị, xã hội

Bảo tàng, thư viện
Nhà triển lãm
Nhà trưng bày
Nhà lưu trữ
Nhà sách
Nhà hội chợ
Cơ sở tôn giáo

Nhà của điểm phục vụ bưu chính
Cơ sở khai thác bưu gửi
Cơ sở viễn thông
Trung tâm lưu trữ, quản lý dữ liệu
Cơ sở phát thanh truyền hình
Cơ sở hoạt động xuất bản, in ấn

Sân vận động
Nhà thi đấu thể thao
Cung thể thao trong nhà
Trung tâm thể dục, thể thao
Trường đua
Trường bắn
Cơ sở thể thao khác

Cảng hàng không
Đài kiểm soát không lưu
Hăng ga máy bay
Bến cảng biển
Cảng cạn
Cảng thủy nội địa
Bến xe khách
Trạm dừng nghỉ
Nhà ga đường sắt
Nhà chờ cáp treo vận chuyển người
Công trình tàu điện ngầm
Cơ sở đăng kiểm phương tiện giao thông
Cơ sở kinh doanh, sửa chữa, bảo dưỡng phương tiện giao thông cơ giới

Gara để xe oto
Bãi đỗ xe oto 

Hầm đường bộ
Hầm đường sắt 

Cơ sở hạt nhân
Cơ sở sản xuất, kinh doanh, bảo quản, sử dụng vật liệu nổ công nghiệp và tiền chất thuốc nổ
Kho vật liệu nổ công nghiệp
Tiền chất thuốc nổ
Cảng xuất, nhập vật liệu nổ công nghiệp, tiền chất thuốc nổ
Kho vũ khí, công cụ hỗ trợ

Cơ sở khai thác, chế biến, sản xuất, vận chuyển, kinh doanh, bảo quản dầu mỏ và các sản phẩm dầu mỏ, khí đốt trên đất liền
Kho dầu mỏ và sản phẩm dầu mỏ
Kho khí đốt
Cảng xuất, nhập dầu mỏ và các sản phẩm dầu mỏ, khí đốt
Cửa hàng kinh doanh xăng dầu
Cửa hàng kinh doanh chất lỏng dễ cháy
Cửa hàng kinh doanh khí đốt

Cở sở công nghiệp cho hạng cháy nổ A
Cở sở công nghiệp cho hạng cháy nổ B
Cở sở công nghiệp cho hạng cháy nổ C
Cở sở công nghiệp cho hạng cháy nổ D
Cở sở công nghiệp cho hạng cháy nổ E

Nhà máy điện
Trạm biến áp 

Hầm có hoạt động sản xuất bảo quản, sử dụng chất cháy, nổ
Kho dự trữ quốc gia
Kho hàng hóa, vật tư cháy được
Bãi chứa hàng hóa, vật tư, phế liệu

Cơ sở khác có trạm cấp xăng dầu nội bộ hoặc có sử dụng hệ thống cấp khí đốt trung tâm 

Nhà để ở kết hợp sản xuất, kinh doanh hàng hóa dễ cháy, nổ 


`
let mang_loai_cong_trinh = string_loai_cong_trinh.trim().split(`\n`);



export { mang_loai_cong_trinh }