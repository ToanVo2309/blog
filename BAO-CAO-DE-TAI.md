# BÁO CÁO ĐỀ TÀI TỐT NGHIỆP
## XÂY DỰNG WEBSITE BLOG CÁ NHÂN SỬ DỤNG CÔNG NGHỆ STATIC SITE GENERATOR

---

## MỞ ĐẦU

Ngày nay, với sự bùng nổ của công nghệ thông tin, việc xây dựng một không gian trực tuyến để thể hiện bản thân và chia sẻ kiến thức đã trở thành xu hướng không thể thiếu đối với các lập trình viên. Blog cá nhân không chỉ là công cụ để ghi chép và lưu trữ kiến thức mà còn là phương tiện hiệu quả để xây dựng thương hiệu cá nhân, thu hút cơ hội nghề nghiệp và kết nối với cộng đồng lập trình viên.

Tuy nhiên, các nền tảng blog truyền thống như WordPress hay Medium thường có những hạn chế về mặt kỹ thuật: tốc độ tải trang chậm, khả năng tùy biến hạn chế, và chi phí vận hành cao. Để giải quyết những vấn đề này, công nghệ Static Site Generator (SSG) đã ra đời và ngày càng được ưa chuộng nhờ những ưu điểm vượt trội về hiệu năng, bảo mật và chi phí.

Đề tài "Xây dựng Website Blog cá nhân sử dụng công nghệ Static Site Generator" được thực hiện với mục đích tạo ra một website blog hiện đại, hiệu năng cao, sử dụng các công nghệ web tiên tiến nhất hiện nay. Website được đặt tên "Bảo Toàn Dev Blog" và tập trung vào việc chia sẻ kiến thức về lập trình Java và JavaScript.

---

## CHƯƠNG 1: ĐẶT VẤN ĐỀ

### 1.1 Bối cảnh và lý do chọn đề tài

Trong thời đại số hóa hiện nay, việc thể hiện năng lực và kinh nghiệm của một lập trình viên không chỉ dừng lại ở CV hay portfolio truyền thống. Nhiều nhà tuyển dụng và đồng nghiệp đánh giá cao những lập trình viên có blog cá nhân, nơi họ chia sẻ kiến thức, kinh nghiệm thực tế và quá trình học tập của mình. Đây được gọi là phương pháp "Learning in Public" - học tập công khai, giúp xây dựng uy tín và thương hiệu cá nhân trong cộng đồng.

Tuy nhiên, việc lựa chọn nền tảng để xây dựng blog không phải là điều dễ dàng:

- **WordPress:** Mặc dù phổ biến nhưng tốc độ tải trang chậm do phải query database mỗi lần request, chi phí hosting cao, và dễ bị tấn công nếu không cập nhật thường xuyên.

- **Medium/Blogger:** Dễ sử dụng nhưng khả năng tùy biến giao diện rất hạn chế, không thể thể hiện được kỹ năng lập trình của người viết, và phụ thuộc hoàn toàn vào bên thứ ba.

- **Custom CMS:** Tốn nhiều thời gian và công sức để phát triển, cần server và database, chi phí vận hành cao.

Giải pháp Static Site Generator (SSG) ra đời để giải quyết những vấn đề trên. SSG cho phép tạo ra các website tĩnh với tốc độ tải cực nhanh, bảo mật cao (không có database), và có thể host miễn phí trên các nền tảng như Vercel, Netlify.

Xuất phát từ những nhu cầu và thách thức trên, cùng với mong muốn được áp dụng và nâng cao kiến thức về React, Next.js và các công nghệ web hiện đại, em đã quyết định chọn đề tài "Xây dựng Website Blog cá nhân sử dụng công nghệ Static Site Generator" làm đề tài tốt nghiệp.

### 1.2 Mục tiêu nghiên cứu

#### 1.2.1 Mục tiêu chung

Xây dựng một website blog cá nhân hoàn chỉnh, hiện đại, có hiệu năng cao, sử dụng công nghệ Static Site Generation để tối ưu tốc độ tải trang và trải nghiệm người dùng.

#### 1.2.2 Mục tiêu cụ thể

**Về mặt kỹ thuật:**
- Nắm vững và áp dụng Next.js 14 với App Router trong việc xây dựng ứng dụng web.
- Hiểu rõ cơ chế hoạt động của Static Site Generation và cách Next.js thực hiện SSG.
- Làm chủ việc sử dụng MDX (Markdown + JSX) để viết nội dung blog một cách linh hoạt.
- Sử dụng TypeScript để đảm bảo type safety và giảm thiểu lỗi trong quá trình phát triển.
- Tối ưu hóa hiệu năng website để đạt điểm cao trên các công cụ đánh giá như Google Lighthouse.
- Triển khai website lên Vercel và thiết lập quy trình CI/CD tự động.

**Về mặt sản phẩm:**
- Xây dựng giao diện đẹp mắt, chuyên nghiệp với phong cách thiết kế tối giản (Minimalism).
- Tích hợp đầy đủ các tính năng: Portfolio cá nhân, Blog, Dark/Light mode, Responsive design.
- Tạo ra hệ thống nội dung phong phú về lập trình Java và JavaScript.
- Đảm bảo website hoạt động tốt trên mọi thiết bị (desktop, tablet, mobile).

### 1.3 Phạm vi và giới hạn của đề tài

#### 1.3.1 Phạm vi đối tượng sử dụng

- **Người quản trị (Admin):** Tác giả blog, có quyền thêm, sửa, xóa bài viết thông qua việc chỉnh sửa file MDX trong thư mục `src/content/blog/`.

- **Người dùng (User):** Độc giả truy cập website để đọc bài viết, xem thông tin cá nhân, chứng chỉ và dự án của tác giả.

#### 1.3.2 Phạm vi nội dung

- **Nội dung blog:** Tập trung vào các chủ đề kỹ thuật về Java (OOP, Collections Framework, Exception Handling, JVM) và JavaScript (Variables, Functions, Promises, DOM Manipulation).

- **Trang Portfolio:** Bao gồm thông tin cá nhân, kỹ năng chuyên môn, chứng chỉ đạt được, dự án cá nhân đã thực hiện, và sở thích.

#### 1.3.3 Công nghệ sử dụng

- **Framework:** Next.js 14 với App Router
- **Ngôn ngữ:** TypeScript
- **UI Library:** React 18
- **Styling:** Tailwind CSS và shadcn/ui components
- **Content:** MDX với Velite (Type-safe content layer)
- **Build & Deploy:** Next.js Static Site Generation, Vercel

### 1.4 Phương pháp nghiên cứu

Đề tài được thực hiện theo các bước sau:

**Bước 1: Nghiên cứu và khảo sát**
- Tìm hiểu về các mô hình render website (SSR, CSR, SSG).
- So sánh các công cụ SSG phổ biến (Gatsby, Next.js, Hugo, Astro).
- Nghiên cứu cách Next.js thực hiện Static Site Generation.
- Tìm hiểu về MDX và cách tích hợp vào Next.js.

**Bước 2: Thiết kế hệ thống**
- Thiết kế wireframe cho các trang chính.
- Xác định cấu trúc dữ liệu cho blog posts (MDX frontmatter).
- Thiết kế các component tái sử dụng.
- Lựa chọn color scheme và typography.

**Bước 3: Phát triển**
- Giai đoạn 1: Setup project, cấu hình Next.js, Tailwind CSS.
- Giai đoạn 2: Xây dựng layout cơ bản (Header, Footer).
- Giai đoạn 3: Implement blog system với MDX và dynamic routing.
- Giai đoạn 4: Xây dựng trang Portfolio với các tính năng slider.
- Giai đoạn 5: Tích hợp Dark/Light mode và tối ưu responsive.

**Bước 4: Kiểm thử và tối ưu**
- Test trên nhiều trình duyệt và thiết bị khác nhau.
- Đo lường hiệu năng bằng Google Lighthouse.
- Tối ưu hóa bundle size và loading time.
- Kiểm tra SEO cơ bản.

**Bước 5: Triển khai**
- Deploy lên Vercel.
- Thiết lập CI/CD với GitHub.
- Kiểm tra lại toàn bộ tính năng trên production.

### 1.5 Tiêu chí đánh giá

Website được coi là hoàn thiện khi đáp ứng các tiêu chí sau:

1. **Về mặt kỹ thuật:**
   - Build thành công không có lỗi.
   - Tất cả các route được generate thành HTML tĩnh.
   - Không có lỗi JavaScript runtime.
   - Code tuân thủ best practices và clean code principles.

2. **Về mặt hiệu năng:**
   - Điểm Performance trên Lighthouse ≥ 90.
   - First Contentful Paint (FCP) < 1.8s.
   - Largest Contentful Paint (LCP) < 2.5s.

3. **Về mặt trải nghiệm người dùng:**
   - Giao diện không bị vỡ trên mobile, tablet, desktop.
   - Tất cả các tính năng hoạt động đúng: Dark mode, sliders, modal.
   - Navigation mượt mà, không có lag.

4. **Về mặt triển khai:**
   - Website deploy thành công trên Vercel.
   - Có thể truy cập công khai qua domain.
   - CI/CD hoạt động đúng (auto deploy khi push code).

---

## CHƯƠNG 2: CƠ SỞ LÝ THUYẾT VÀ CÔNG NGHỆ

### 2.1 Các mô hình render website

#### 2.1.1 Static Website và Static Site Generator

**Website tĩnh (Static Website)** là loại website đơn giản nhất, mỗi trang là một file HTML độc lập được lưu trữ trên server. Khi người dùng yêu cầu, server chỉ cần gửi file HTML đó về mà không cần xử lý gì thêm. Điều này mang lại tốc độ tải cực nhanh và độ bảo mật cao.

Tuy nhiên, việc viết tay hàng trăm file HTML là không khả thi. **Static Site Generator (SSG)** ra đời để giải quyết vấn đề này. SSG là công cụ tự động hóa việc tạo ra các file HTML tĩnh từ các file nguồn như Markdown, MDX, hoặc JSON kết hợp với các template.

**Quy trình hoạt động của SSG:**
1. Trong quá trình build, SSG đọc tất cả các file nguồn (Markdown/MDX).
2. SSG render các file này thành HTML bằng cách sử dụng template và component.
3. Kết quả là một tập hợp các file HTML tĩnh sẵn sàng để deploy.

**Ưu điểm của SSG:**
- **Tốc độ:** Không cần query database, HTML đã được render sẵn.
- **Bảo mật:** Không có server-side code, không có database, giảm thiểu điểm tấn công.
- **Chi phí:** Có thể host miễn phí trên GitHub Pages, Vercel, Netlify.
- **SEO:** Nội dung đã có sẵn trong HTML, bot tìm kiếm dễ dàng index.

#### 2.1.2 Client-Side Rendering (CSR)

CSR là mô hình được sử dụng bởi các Single Page Application (SPA) như React mặc định. Server chỉ gửi về một file HTML rỗng và các file JavaScript. Trình duyệt tải JavaScript về và thực thi để render giao diện.

**Nhược điểm của CSR:**
- **SEO kém:** Bot tìm kiếm chỉ thấy HTML rỗng, không thấy nội dung thực tế.
- **First Contentful Paint chậm:** Người dùng phải đợi JavaScript tải và chạy xong mới thấy nội dung.
- **Tốn tài nguyên client:** Máy người dùng phải xử lý việc render.

#### 2.1.3 Server-Side Rendering (SSR)

Với SSR, mỗi khi có request, server sẽ chạy code, query database, và tạo ra HTML hoàn chỉnh rồi gửi về cho client.

**Nhược điểm của SSR:**
- **Tốn tài nguyên server:** Phải xử lý mỗi request, tốn CPU và memory.
- **Chậm khi server quá tải:** Nếu có nhiều người truy cập cùng lúc, server có thể bị quá tải.
- **Chi phí cao:** Cần server có khả năng chạy Node.js, chi phí hosting cao hơn.

#### 2.1.4 Static Site Generation (SSG) - Giải pháp của đề tài

SSG kết hợp những ưu điểm của cả CSR và Static Website:

- **Ở build time:** Render tất cả các trang thành HTML tĩnh (tốt cho SEO, nhanh).
- **Ở runtime:** Người dùng nhận HTML tĩnh ngay lập tức, sau đó JavaScript hydrate để biến trang thành SPA, cho phép navigation mượt mà không cần reload.

**Next.js SSG hoạt động như sau:**

1. **Build Time:**
   - Next.js scan tất cả các route trong `app/` directory.
   - Với mỗi route, Next.js render component thành HTML.
   - Với dynamic routes như `/blog/[slug]`, Next.js sẽ generate HTML cho mỗi bài viết MDX.
   - Tất cả HTML được lưu vào `.next/` directory.

2. **Runtime:**
   - Người dùng request một trang → Nhận HTML đã có sẵn nội dung (hiển thị ngay).
   - Trình duyệt tải JavaScript → JavaScript hydrate React components.
   - Sau khi hydrate, trang trở thành SPA, navigation không cần reload.

### 2.2 Công nghệ sử dụng trong đề tài

#### 2.2.1 Next.js 14

Next.js là một React framework được phát triển bởi Vercel, cung cấp nhiều tính năng mạnh mẽ:

**App Router (Next.js 13+):**
- Hệ thống routing mới dựa trên file system.
- Hỗ trợ nested layouts và shared layouts.
- Loading states và error boundaries tự động.
- Server Components và Client Components.

**Static Site Generation:**
- Tự động generate HTML tĩnh tại build time.
- Hỗ trợ `generateStaticParams` để pre-render dynamic routes.
- Tích hợp sẵn, không cần cấu hình phức tạp.

**Image Optimization:**
- Component `next/image` tự động optimize hình ảnh.
- Lazy loading và responsive images.

**API Routes:**
- Có thể tạo API endpoints nếu cần (mặc dù không sử dụng trong đề tài này).

Trong đề tài, Next.js 14 được chọn vì:
- SSG tích hợp sẵn, dễ sử dụng.
- Hỗ trợ MDX tốt thông qua các plugin.
- Ecosystem phong phú, tài liệu đầy đủ.
- Tối ưu hiệu năng tự động.

#### 2.2.2 React 18 và TypeScript

**React 18:**
- Thư viện UI phổ biến nhất hiện nay.
- Sử dụng Virtual DOM để tối ưu hóa việc cập nhật UI.
- Hooks API (`useState`, `useEffect`, `useRef`) để quản lý state và side effects.
- Component-based architecture giúp code dễ maintain và reuse.

**TypeScript:**
- Superset của JavaScript với type system.
- Giúp phát hiện lỗi sớm trong quá trình development.
- Cải thiện developer experience với IntelliSense.
- Tăng tính maintainability của codebase.

Trong đề tài, TypeScript được sử dụng để:
- Định nghĩa interfaces cho BlogPost, Certification, Project.
- Đảm bảo type safety khi làm việc với dữ liệu.
- Giảm thiểu lỗi runtime.

#### 2.2.3 MDX (Markdown + JSX)

MDX là một format đặc biệt cho phép viết Markdown với JSX bên trong. Điều này mang lại sự linh hoạt lớn:

- **Viết nội dung dễ dàng:** Sử dụng Markdown syntax quen thuộc.
- **Nhúng React components:** Có thể sử dụng custom components trong bài viết.
- **Tái sử dụng:** Components có thể được reuse trong nhiều bài viết.

**Cấu trúc file MDX:**
```markdown
---
title: "Tiêu đề bài viết"
description: "Mô tả"
date: "2024-12-20"
author: "Bảo Toàn"
---

## Nội dung

Có thể viết markdown bình thường...

<CustomComponent prop="value" />

Hoặc code blocks với syntax highlighting.
```

Trong đề tài, tất cả bài viết được viết bằng MDX trong `src/content/blog/`, được xử lý bởi Velite để tạo ra type-safe data.

#### 2.2.4 Velite

Velite là một công cụ giúp chuyển đổi Markdown/MDX thành TypeScript types an toàn. Nó:

- Đọc các file MDX và extract frontmatter.
- Generate TypeScript types tự động.
- Cung cấp API để query content trong code.

Velite được tích hợp vào Next.js webpack config để tự động chạy khi build, đảm bảo types luôn được sync với content.

#### 2.2.5 Tailwind CSS và shadcn/ui

**Tailwind CSS:**
- Utility-first CSS framework.
- Thay vì viết CSS riêng, sử dụng các utility classes như `flex`, `p-4`, `text-center`.
- Tự động loại bỏ unused CSS trong production build.
- Hỗ trợ Dark Mode dễ dàng với `dark:` prefix.

**shadcn/ui:**
- Bộ component UI đẹp mắt được xây dựng trên Radix UI và Tailwind CSS.
- Components được copy vào project (không phải install từ npm).
- Có thể tùy chỉnh hoàn toàn theo nhu cầu.

#### 2.2.6 Vercel

Vercel là nền tảng deploy được tối ưu cho Next.js:

- **Zero-config:** Tự động detect Next.js và cấu hình.
- **CI/CD tự động:** Mỗi push lên GitHub tự động trigger build và deploy.
- **CDN toàn cầu:** Website được phân phối qua CDN, tốc độ tải nhanh ở mọi nơi.
- **Preview deployments:** Mỗi Pull Request có một URL preview riêng.

Trong đề tài, website được deploy lên Vercel để tận dụng các tính năng trên.

---

## CHƯƠNG 3: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG

### 3.1 Kiến trúc tổng thể

Hệ thống hoạt động theo 3 giai đoạn chính:

**Giai đoạn 1: Development**
- Developer viết code React/TypeScript và style với Tailwind CSS.
- Nội dung blog được viết bằng MDX trong `src/content/blog/`.
- Next.js Dev Server cung cấp Hot Module Replacement (HMR) để xem thay đổi ngay lập tức.

**Giai đoạn 2: Build & Static Generation**
- Next.js đọc tất cả routes trong `src/app/`.
- Velite đọc các file MDX và generate TypeScript types.
- Next.js SSG render tất cả pages thành HTML tĩnh.
- HTML được lưu vào `.next/` directory.

**Giai đoạn 3: Runtime**
- User request → Nhận HTML tĩnh (hiển thị ngay).
- Browser tải JS → Hydrate React components.
- Trang trở thành SPA, navigation mượt mà.

### 3.2 Thiết kế cấu trúc dữ liệu

#### 3.2.1 Blog Post Schema

Mỗi bài viết là một file MDX với frontmatter chứa metadata:

```typescript
interface BlogPost {
  title: string;        // Tiêu đề
  description: string;  // Mô tả ngắn
  image: string;       // Hình ảnh đại diện
  date: string;        // Ngày đăng (YYYY-MM-DD)
  author: string;      // Tác giả
}
```

Nội dung bài viết được viết bằng Markdown/MDX bên dưới frontmatter.

#### 3.2.2 Certification Schema

Chứng chỉ được định nghĩa trong `src/config/certifications.ts`:

```typescript
interface Certification {
  name: string;         // Tên chứng chỉ
  issuer: string;       // Tổ chức cấp
  year: string;         // Năm
  icon: ComponentType;  // Icon từ lucide-react
  file: string;         // Đường dẫn file ảnh
  image: string;        // Đường dẫn để hiển thị
}
```

#### 3.2.3 Skills và Projects Schema

- **Skills:** Array of objects với `name`, `icon`, `color`.
- **Projects:** Array of objects với `title`, `description`, `tech`, `links`.

### 3.3 Thiết kế giao diện

#### 3.3.1 Design Philosophy

Giao diện được thiết kế theo phong cách **Minimalism** - tập trung vào nội dung và trải nghiệm đọc:

- **Màu sắc:** Hệ thống màu của Tailwind với dark mode support.
- **Typography:** Font Inter cho text, Geist Mono cho code.
- **Spacing:** Sử dụng 4px grid system của Tailwind.

#### 3.3.2 Components chính

**Header:**
- Sticky navigation bar.
- Blur effect khi scroll.
- Mobile hamburger menu.

**Footer:**
- Thông tin liên hệ và social links.
- Copyright notice.

**Blog Card:**
- Image, title, description, date.
- Hover effect.

**Sliders (Skills/Certifications/Projects):**
- Horizontal scroll với infinite loop.
- Navigation buttons.
- Scroll snap.

**Certificate Modal:**
- Overlay với background blur.
- Hiển thị ảnh chứng chỉ full size.
- Close button và click outside to close.

### 3.4 Cấu trúc thư mục

```
next-mdx-blog/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx      # Home/Portfolio
│   │   ├── about/        # About page
│   │   └── blog/         # Blog pages
│   ├── components/       # React components
│   ├── config/           # Config files
│   ├── content/          # MDX blog posts
│   ├── constants/        # Constants
│   ├── lib/              # Utilities
│   └── styles/           # Global CSS
├── public/               # Static assets
└── package.json
```

---

## CHƯƠNG 4: TRIỂN KHAI VÀ THỰC HIỆN

### 4.1 Trang chủ (Portfolio)

Trang chủ được thiết kế như một portfolio cá nhân với các section:

#### 4.1.1 Hero Section

- Giới thiệu tên và vai trò.
- Mô tả ngắn về blog.
- CTA buttons đến Blog và About.

#### 4.1.2 Skills Section

Hiển thị kỹ năng dưới dạng horizontal slider với infinite loop:

**Tính năng:**
- Infinite scroll: Khi scroll đến cuối, tự động quay về đầu.
- Navigation buttons để điều hướng.
- Mỗi skill có icon và gradient background riêng.

**Kỹ năng:** Java, JavaScript, Python, Web Dev, Cyber Security, ML, Data Analysis, Network Security, Penetration Testing, React.js, Node.js.

**Implementation:**
- Sử dụng `useRef` để reference scroll container.
- Tạo 5 bản sao của danh sách để tạo infinite loop.
- `useEffect` detect khi scroll đến biên và jump về vị trí tương ứng.

#### 4.1.3 Certifications Section

Tương tự Skills section, hiển thị chứng chỉ với slider:

**Tính năng:**
- Infinite scroll loop.
- Click vào card mở modal hiển thị ảnh chứng chỉ.

**Chứng chỉ:**
- Introduction to Cybersecurity (Cisco)
- JavaScript Essentials 1 & 2 (Cisco & OpenEDG)
- Networking Basics (Cisco)

#### 4.1.4 Projects Section

Hiển thị các dự án đã làm:

**Mỗi project card:**
- Icon đại diện.
- Tên và mô tả.
- Tech stack tags.
- Links: GitHub, Demo/Docs.

**Dự án:**
- Web Đánh Giá Game
- Bảo Mật 2 Lớp SSH Server
- Hệ Thống Phát Hiện Tấn Công
- Website Chúc Mừng Sinh Nhật

### 4.2 Trang Blog

#### 4.2.1 Trang danh sách (`/blog`)

- Grid layout hiển thị các bài viết.
- Mỗi card có image, title, description, date.
- Hover effect.
- Responsive: 3 cột (desktop), 2 cột (tablet), 1 cột (mobile).

#### 4.2.2 Trang chi tiết (`/blog/[...slug]`)

- Dynamic routing với catch-all route.
- Render MDX content với syntax highlighting.
- Auto-generated table of contents.
- Styling đẹp cho các elements.

**Nội dung bài viết:**
- Java: OOP, Collections, Exception Handling, JVM.
- JavaScript: Variables, Functions, Promises, DOM.
- So sánh Java vs JavaScript.

### 4.3 Trang About Me

#### 4.3.1 Thông tin cá nhân

- Tên, vai trò, mô tả.
- Avatar.

#### 4.3.2 Thông tin liên hệ

- Email: toanvo3789@gmail.com (Contact for work)
- Phone: 0934044503
- Clickable links.

#### 4.3.3 Kỹ năng

- Danh sách kỹ năng với icons.

#### 4.3.4 Sở thích

Grid layout với 4 hobbies:
- Chơi Game (purple/pink gradient)
- Xem Phim (blue/cyan gradient)
- Nghe Nhạc (green/emerald gradient)
- Đi Phượt (orange/red gradient)

Mỗi card có hover effect (scale + shadow).

### 4.4 Dark/Light Mode

- Theme lưu trong `localStorage`.
- `useEffect` apply `dark` class vào `<html>`.
- Auto-detect system preference.
- Smooth transition với icon Sun/Moon.

### 4.5 Responsive Design

**Desktop (>1024px):**
- Full menu.
- 3-column blog layout.
- Multiple items visible in sliders.

**Tablet (768-1024px):**
- 2-column blog layout.
- 2-3 items in sliders.

**Mobile (<768px):**
- Hamburger menu.
- 1-column blog layout.
- 1 item in sliders, larger nav buttons.

### 4.6 Hướng dẫn cài đặt

**Yêu cầu:**
- Node.js 18+
- npm/yarn/pnpm

**Các bước:**

1. Clone repository:
```bash
git clone https://github.com/ToanVo2309/blog.git
cd blog
```

2. Install dependencies:
```bash
npm install
```

3. Run dev server:
```bash
npm run dev
```
Truy cập http://localhost:3000

4. Build production:
```bash
npm run build
npm start
```

**Thêm bài viết mới:**

Tạo file `.mdx` trong `src/content/blog/`:

```markdown
---
title: "Tiêu đề"
description: "Mô tả"
image: "/images/blog/image.svg"
date: "2024-12-20"
author: "Bảo Toàn"
---

Nội dung...
```

---

## CHƯƠNG 5: KẾT QUẢ VÀ ĐÁNH GIÁ

### 5.1 Kết quả đạt được

#### 5.1.1 Về mặt kiến thức

- Hiểu sâu về các mô hình render (SSR, CSR, SSG).
- Nắm vững Next.js 14 App Router và SSG.
- Thành thạo MDX và cách tích hợp vào Next.js.
- Sử dụng TypeScript hiệu quả để đảm bảo type safety.

#### 5.1.2 Về mặt sản phẩm

- Website hoàn chỉnh với hiệu năng cao.
- Giao diện đẹp, chuyên nghiệp.
- Tất cả tính năng hoạt động đúng.
- Responsive trên mọi thiết bị.

#### 5.1.3 Về mặt kỹ năng

- Nâng cao kỹ năng debugging và optimization.
- Kỹ năng tự học công nghệ mới.
- Kỹ năng thiết kế UI/UX.

#### 5.1.4 Về mặt triển khai

- Deploy thành công lên Vercel.
- CI/CD tự động hoạt động tốt.

### 5.2 Hạn chế

- **Quản lý nội dung:** Phải chỉnh sửa file MDX trực tiếp, không có admin panel.
- **Tương tác:** Chưa có comment system.
- **Tìm kiếm:** Chưa có search functionality.
- **Analytics:** Chưa tích hợp tracking.

### 5.3 Hướng phát triển

1. **CMS Integration:** Kết nối Headless CMS (Strapi, Contentful).
2. **Comment System:** Tích hợp Giscus hoặc Utterances.
3. **Search:** Implement Fuse.js hoặc Algolia.
4. **SEO:** Auto-generate sitemap, Open Graph tags, JSON-LD.
5. **Blog Features:** Tags, categories, related posts, TOC.
6. **Performance:** Lazy loading, code splitting, PWA.
7. **i18n:** Hỗ trợ đa ngôn ngữ.
8. **Newsletter:** Email subscription với Mailchimp/ConvertKit.

---

## KẾT LUẬN

Đề tài "Xây dựng Website Blog cá nhân sử dụng công nghệ Static Site Generator" đã được hoàn thành thành công. Website "Bảo Toàn Dev Blog" không chỉ là nơi chia sẻ kiến thức mà còn là minh chứng cho khả năng áp dụng các công nghệ web hiện đại. Qua quá trình thực hiện, em đã học được nhiều kiến thức và kỹ năng quý giá về Next.js, React, TypeScript và các công nghệ liên quan.

Website đã được deploy thành công và có thể truy cập công khai, đáp ứng đầy đủ các mục tiêu đã đề ra. Trong tương lai, website sẽ tiếp tục được phát triển và cải tiến với các tính năng mới như đã nêu trong phần hướng phát triển.

---

**Hết báo cáo**
