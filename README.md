# Tên đề tài: Website Thương mại Điện tử 
# Giới thiệu
## Mục tiêu của project
Đây là project của môn học Lập trình ứng dụng Web - UIT. Nội dung là tạo một trang web cho phép người dùng mua hàng thông qua nền tảng mua sắm online, thông minh tiện lợi

Trang web phải đảm bảo được các mục tiêu:
- Giúp người dùng có thể thanh toán nhanh chóng với nhiều giải pháp : thanh toán khi nhận hàng, thanh toán qua nền tảng PayPal
- Tiện lợi cho người admin quản lý và thống kê thông tin của nền tảng.
- Giao diện hiện đại, thu hút, load nhanh.
## Các thành viên tham gia project

| STT| Họ tên                   | Email                  |
|:--:|--------------------------|------------------------|
| 1  | Nguyễn Duy Trọng Nhân    | 20520669@gm.uit.edu.vn |
| 2  | Nguyễn Quang Dũng            | 22520287@gm.uit.edu.vn |
| 3  | Phạm Huy Hoàng             | 21522098@gm.uit.edu.vn |
| 4  | Trương Nguyên Phương    | 20521780@gm.uit.edu.vn |
| 5  | Nguyễn Trọng Nhân         | 19520801@gm.uit.edu.vn |



# Demo Front-end
1. Giao diện đăng nhập
![signinpage](https://github.com/xina99999/Doanweb/blob/master/giaodiendangnhap.png)

2. Giao diện chính
![mainpage_1](https://github.com/xina99999/Doanweb/blob/master/giaodienchinh.png)


# Về Backend hệ thống 
Các bạn truy cập link này để cài đặt backend cho hệ thống

https://github.com/DavidChelsea1806/Doanweb-Backend 
# Các công nghệ sử dụng trong project
- Front-end: Reactjs
- Back-end: Nodejs
- Database: MongoDB 
# Các modules

# Yêu cầu hệ thống
Cài đặt Reactjs , Nodejs 

# Cài đặt và sử dụng
Cài đặt Reactjs 
 - Dùng lệnh sau :
     ```
    npm install -g create-react-app
     ```
 - Vào terminal chạy lệnh sau:
    ```
    npm install .
    ```
 - Sau khi chạy xong bạn tiếp tục chạy lệnh:
    ```
    npm start
    ```
 - Bằng cách này bạn vào địa chỉ http://www.14kshop.live để xem giao diện trang Web
# Trả lời các câu hỏi liên quan đến Spring Boot
**Câu 1: Spring Boot MVC hoạt động như thế nào?** 

Spring MVC (Model-View-Controller) là một phần quan trọng của Spring Framework và là một trong những framework phát triển ứng dụng web phổ biến nhất. Nó giúp bạn tách biệt logic trong ứng dụng web thành các phần riêng biệt, giúp quản lý và phát triển dễ dàng hơn. Cách thức hoạt động của nó như sau:  
+	DispatcherServlet đóng vai trò là điểm trung tâm, nhận tất cả các yêu cầu HTTP đến và chuyển tiếp cho các thành phần khác để xử lý. 
+ Controller nhận yêu cầu từ DispatcherServlet, xử lý logic nghiệp vụ và tương tác với các service/repository để lấy dữ liệu. Sau đó, nó trả về một đối tượng Model chứa dữ liệu và chỉ định View để hiển thị.
+ View là giao diện người dùng (thường là trang HTML) được tạo ra từ Model và có thể sử dụng các template engine như Thymeleaf, JSP, Freemarker. 
+ Model chứa dữ liệu cần hiển thị trên View. 

**Hình ảnh minh hoạ mô hình chức năng của Spring MVC:**
![image](https://github.com/xina99999/Doanweb/assets/162609209/295b2aeb-a337-44d0-ba0a-719e044deefa)

**Câu 2: Làm thế nào để xây dựng microservices sử dụng Spring Boot?** 

Spring Boot cung cấp các tính năng hỗ trợ tốt cho việc xây dựng microservices:
-	Spring Cloud: Cung cấp các thư viện và công cụ để xây dựng, triển khai và quản lý các microservices.
-	Spring Cloud Netflix: Tích hợp với Netflix OSS để cung cấp các tính năng như Service Discovery (Eureka), Circuit Breaker (Hystrix), Client-side Load Balancing (Ribbon), và API Gateway (Zuul).
-	Spring Cloud Config: Cho phép tập trung quản lý cấu hình cho các microservices.
-	Spring Cloud Sleuth và Zipkin: Hỗ trợ truy vết phân tán (Distributed Tracing) để gỡ lỗi các vấn đề liên quan đến giao tiếp giữa các microservices.

**Câu 3: Việc học Spring Boot là dễ hay khó, trung bình mất bao lâu thời gian?** 

-	Mức độ khó dễ trong việc học Spring Boot phụ thuộc vào kinh nghiệm và nền tảng kiến thức của người học. Đối với người mới bắt đầu, Spring Boot có thể khá khó khăn vì nó bao gồm nhiều khái niệm và tính năng phức tạp. Tuy nhiên, đối với những người đã có kinh nghiệm với Java và các framework khác, việc học Spring Boot sẽ dễ dàng hơn.
-	Thời gian cần thiết để học Spring Boot cũng khác nhau tùy thuộc vào mục tiêu và cách học của từng người. Trung bình, để nắm vững các khái niệm cơ bản và có thể xây dựng một ứng dụng đơn giản, có thể mất từ 2 đến 4 tuần. Để trở thành một chuyên gia Spring Boot và có khả năng xây dựng các ứng dụng phức tạp hơn, có thể mất từ 3 đến 6 tháng hoặc hơn. 

**Câu 4: Tại sao dùng Spring Boot trong khi nó rườm rà và phức tạp?**  

Mặc dù Spring Boot có thể được coi là phức tạp đối với người mới bắt đầu, nhưng nó cung cấp nhiều lợi ích quan trọng cho việc phát triển ứng dụng:
-	Cấu hình tự động (Auto-configuration): Spring Boot tự động cấu hình các thành phần cơ bản như server web, database, logging, security, v.v. giúp giảm bớt công việc cấu hình thủ công.
-	Khởi chạy nhanh (Opinionated): Spring Boot có cấu trúc dự án và cách triển khai theo "opinionated" giúp ứng dụng khởi chạy nhanh hơn.
-	Embedded Server: Spring Boot tích hợp sẵn server web (Tomcat, Jetty, Undertow) giúp triển khai ứng dụng dễ dàng hơn.
-	Hỗ trợ tốt cho Microservices: Spring Boot cung cấp nhiều tính năng hỗ trợ tốt cho việc xây dựng và triển khai microservices.
-	Cộng đồng lớn và tài liệu phong phú: Spring Boot có cộng đồng phát triển lớn và tài liệu phong phú, giúp dễ dàng tìm kiếm hỗ trợ. 

**--> Dù ban đầu khá phức tạp nhưng Spring Boot đem lại nhiều lợi ích về hiệu suất, khả năng mở rộng và bảo trì dài hạn cho các ứng dụng.**

**Câu 5: Làm sao để tạo một ứng dụng sử dụng Spring Initializer?** 

Spring Initializer là một công cụ trực tuyến giúp tạo nhanh một dự án Spring Boot với cấu trúc và các phụ thuộc cơ bản. Để tạo một ứng dụng sử dụng Spring Initializer, bạn có thể làm như sau:
-	Truy cập vào Website: https://start.spring.io/
-	Chọn các tùy chọn phù hợp như phiên bản Spring Boot, ngôn ngữ lập trình (Java, Kotlin, Groovy), metadata (tên dự án, nhóm, đóng gói).
-	Thêm các phụ thuộc cần thiết cho ứng dụng của bạn, ví dụ: Spring Web, Spring Data JPA, MySQL Driver, v.v.
-	Sau khi đã chọn xong, nhấn nút "Generate" để tải xuống dự án đã được khởi tạo dưới dạng file ZIP.
-	Giải nén file ZIP và import dự án vào IDE của bạn (ví dụ: IntelliJ IDEA, Eclipse, VS Code).
-	Trong IDE, bạn có thể bắt đầu phát triển ứng dụng của mình bằng cách sửa đổi các file mã nguồn và cấu hình.

**Hình ảnh minh hoạ Website:**
![image](https://github.com/xina99999/Doanweb/assets/162609209/63af40cd-2334-4d65-ae5e-f0f0a4d40ffc)

**--> Spring Initializer giúp tạo nhanh một dự án Spring Boot với cấu trúc chuẩn và các phụ thuộc cần thiết, giúp tiết kiệm thời gian và tập trung vào việc phát triển ứng dụng.**


