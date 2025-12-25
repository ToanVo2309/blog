# Hướng Dẫn Thiết Lập Blog

## Bước 1: Cài đặt Node.js

Bạn cần cài đặt Node.js trước khi có thể chạy blog này.

### Link tải Node.js cho Windows:

**🔗 Link tải trực tiếp (LTS - Khuyến nghị):**
- **Windows 64-bit:** https://nodejs.org/dist/v20.18.0/node-v20.18.0-x64.msi
- **Windows 32-bit:** https://nodejs.org/dist/v20.18.0/node-v20.18.0-x86.msi

**Hoặc truy cập trang chủ để tải phiên bản mới nhất:**
- https://nodejs.org/ (chọn phiên bản LTS)

### Cách cài đặt:
1. Tải file `.msi` phù hợp với hệ thống của bạn (thường là 64-bit)
2. Chạy file `.msi` vừa tải
3. Làm theo hướng dẫn cài đặt (Next > Next > Install)
4. **Quan trọng:** Khởi động lại terminal/PowerShell sau khi cài đặt
5. Kiểm tra cài đặt thành công:
   ```bash
   node --version
   npm --version
   ```

## Bước 2: Cài đặt Dependencies

Sau khi đã cài Node.js, mở terminal trong thư mục `next-mdx-blog` và chạy:

```bash
npm install
```

## Bước 3: Chạy Blog

Sau khi cài đặt xong, chạy lệnh sau để khởi động blog:

```bash
npm run dev
```

Blog sẽ chạy tại: http://localhost:3000

## Bước 4: Tùy chỉnh Blog

### Thay đổi thông tin blog:
- Mở file `src/config/site.ts` để thay đổi tên blog, mô tả, tác giả, và các liên kết mạng xã hội

### Thêm bài viết mới:
- Thêm file `.mdx` vào thư mục `src/content/blog/`
- Tên file phải dùng dấu gạch ngang (`-`) và không có khoảng trắng
- Ví dụ: `bai-viet-cua-toi.mdx`

## Lệnh hữu ích khác:

- `npm run build` - Build blog để deploy
- `npm run start` - Chạy phiên bản production
- `npm run lint` - Kiểm tra lỗi code

