# Hướng Dẫn Push Project Lên GitHub

## Bước 1: Tạo Repository Mới Trên GitHub

1. Truy cập [GitHub](https://github.com) và đăng nhập
2. Click vào nút **"+"** ở góc trên bên phải → chọn **"New repository"**
3. Điền thông tin:
   - **Repository name**: `bao-toan-dev-blog` (hoặc tên bạn muốn)
   - **Description**: "Personal blog sharing knowledge about Java and JavaScript"
   - **Visibility**: Public (hoặc Private nếu bạn muốn)
   - **KHÔNG** tích vào "Initialize this repository with a README"
4. Click **"Create repository"**

## Bước 2: Push Code Lên GitHub

Sau khi tạo repository, chạy các lệnh sau:

```bash
cd C:\ToanVo\next-mdx-blog

# Đảm bảo remote đúng
git remote set-url origin https://github.com/ToanVo2309/bao-toan-dev-blog.git

# Push lên GitHub
git push -u origin main
```

Nếu có lỗi authentication, bạn có thể cần:
- Sử dụng Personal Access Token thay vì password
- Hoặc cấu hình SSH key

## Lưu ý

- Đã xóa thư mục `bao-toan-dev-blog` (Hugo blog cũ)
- Tất cả thay đổi đã được commit
- README.md đã được cập nhật với thông tin blog của bạn

