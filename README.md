# Bảo Toàn Dev - Personal Blog

Blog cá nhân chia sẻ kiến thức về Java, JavaScript và phát triển web. Được xây dựng với Next.js 14 và MDX.

## Giới thiệu

Blog Bảo Toàn Dev là nơi chia sẻ những kiến thức, kinh nghiệm lập trình về Java và JavaScript trong quá trình học tập. Blog được thiết kế với giao diện hiện đại, tối giản và dễ đọc.

## Tính năng

- ✨ **MDX Components** - Viết blog với MDX, hỗ trợ JSX trong Markdown
- 🎨 **Responsive Design** - Thiết kế responsive với Tailwind CSS và shadcn/ui
- 📝 **Syntax Highlighting** - Highlight code với theme đẹp mắt
- 🎯 **Personal Portfolio** - Trang chủ với profile, skills, certifications và projects
- 📱 **Mobile Friendly** - Tối ưu cho mọi thiết bị

## Công nghệ sử dụng

- **Next.js 14** - React framework với Static Site Generation (SSG)
- **MDX** - Markdown với JSX support
- **Velite** - Type-safe data layer từ Markdown/MDX
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **TypeScript** - Type safety

## Cài đặt và chạy

### Yêu cầu

- Node.js 18+ 
- npm, yarn hoặc pnpm

### Các bước

1. **Clone repository:**

   ```bash
   git clone https://github.com/ToanVo2309/bao-toan-dev-blog.git
   cd bao-toan-dev-blog
   ```

2. **Cài đặt dependencies:**

   ```bash
   npm install
   # hoặc
   yarn install
   # hoặc
   pnpm install
   ```

3. **Chạy development server:**

   ```bash
   npm run dev
   # hoặc
   yarn dev
   # hoặc
   pnpm dev
   ```

   Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000)

4. **Build cho production:**

   ```bash
   npm run build
   npm start
   ```

## Thêm bài viết mới

Để thêm bài viết mới, tạo file `.mdx` trong thư mục `src/content/blog/`:

```markdown
---
title: "Tiêu đề bài viết"
description: "Mô tả ngắn gọn"
image: "/images/blog/your-image.svg"
date: "2024-12-20"
author: "Bảo Toàn"
---

Nội dung bài viết ở đây...
```

**Lưu ý:** Tên file phải dùng dấu gạch ngang (`-`) và không có khoảng trắng. Ví dụ: `java-collections-framework.mdx`

## Cấu trúc dự án

```
next-mdx-blog/
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # React components
│   ├── config/          # Configuration files
│   ├── content/         # Blog posts (MDX files)
│   ├── lib/             # Utility functions
│   └── styles/          # Global styles
├── public/              # Static assets
│   ├── images/         # Images và certifications
│   └── ...
└── package.json
```

## Deploy

Blog có thể deploy lên:

- **Vercel** (khuyến nghị) - [vercel.com](https://vercel.com)
- **Netlify** - [netlify.com](https://netlify.com)
- **GitHub Pages** - Cần build static trước

## Tác giả

**Bảo Toàn** - Sinh viên năm cuối ngành Công nghệ Thông tin, chuyên ngành An ninh mạng

- GitHub: [@ToanVo2309](https://github.com/ToanVo2309)
- Facebook: [Bảo Toàn](https://www.facebook.com/bao.toan.535017/)
- Email: toanvo3789@gmail.com

## License

MIT License - Xem file LICENSE để biết thêm chi tiết.
