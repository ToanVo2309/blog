import React from "react";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Mail, Phone, Gamepad2, Film, Music, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-5xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Về Tôi
            </h1>
            <p className="text-lg text-muted-foreground">
              Tìm hiểu thêm về Bảo Toàn
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          {/* Profile Card */}
          <div className="mb-12 flex flex-col items-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-blue-400 to-cyan-400 opacity-20 blur-xl"></div>
              <Image
                src={siteConfig.authorImage}
                width={120}
                height={120}
                alt={siteConfig.name}
                className="relative rounded-full border-4 border-border bg-card shadow-lg"
              />
            </div>
            <h2 className="mb-2 text-2xl font-bold">{siteConfig.author}</h2>
            <p className="mb-6 text-muted-foreground">
              Sinh viên năm cuối ngành Công nghệ Thông tin, chuyên ngành An ninh mạng
            </p>
            <div className="mb-8 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <Link
                  key={social.label}
                  href={social.path}
                  rel="noreferrer"
                  target="_blank"
                  className={cn(
                    "group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-all hover:border-primary hover:bg-primary/10 hover:shadow-lg",
                  )}
                >
                  <social.icon className="h-5 w-5 text-foreground transition-colors group-hover:text-primary" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Liên hệ</h3>
              <div className="space-y-3">
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Email (Contact for work)
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-sm sm:text-base">{siteConfig.contact.email}</span>
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Số điện thoại
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="text-sm sm:text-base">{siteConfig.contact.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction Content */}
          <div className="prose prose-lg dark:prose-invert mx-auto max-w-none">
            <div className="space-y-6 text-base leading-relaxed text-foreground sm:text-lg">
              <p>
                Xin chào! Mình là <strong className="text-foreground">Bảo Toàn</strong>, sinh viên năm cuối ngành{" "}
                <strong className="text-foreground">Công nghệ Thông tin</strong>, chuyên ngành{" "}
                <strong className="text-foreground">An ninh mạng</strong>.
              </p>
              
              <p>
                Trong quá trình học tập và thực hành, mình đặc biệt quan tâm đến các lĩnh vực như{" "}
                <strong className="text-foreground">lập trình Java</strong>,{" "}
                <strong className="text-foreground">JavaScript</strong>,{" "}
                <strong className="text-foreground">phát triển web</strong> và các vấn đề liên quan đến{" "}
                <strong className="text-foreground">bảo mật hệ thống</strong>,{" "}
                <strong className="text-foreground">an toàn thông tin</strong>. 
                Mình luôn cố gắng kết hợp giữa kiến thức lý thuyết trên giảng đường và việc tự học, 
                thực hành thông qua các dự án cá nhân.
              </p>
              
              <p>
                <strong className="text-foreground">Blog Bảo Toàn Dev</strong> được tạo ra nhằm mục đích chia sẻ lại những kiến thức 
                mình đã học, các kinh nghiệm lập trình, cũng như những ghi chú quan trọng về{" "}
                <strong className="text-foreground">Java</strong> và{" "}
                <strong className="text-foreground">JavaScript</strong> trong quá trình học tập. 
                Hy vọng những bài viết trên blog sẽ giúp ích cho các bạn sinh viên CNTT và những người mới bắt đầu tìm hiểu về lập trình.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-5xl px-4 py-16 md:py-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Sở Thích
            </h2>
            <p className="text-lg text-muted-foreground">
              Những điều mình yêu thích ngoài lập trình
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Chơi game */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg hover:scale-105">
              <div className="mb-4 flex flex-col items-center text-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 transition-transform group-hover:scale-110">
                  <Gamepad2 className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Chơi Game
                </h3>
              </div>
            </div>

            {/* Xem phim */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg hover:scale-105">
              <div className="mb-4 flex flex-col items-center text-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 transition-transform group-hover:scale-110">
                  <Film className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Xem Phim
                </h3>
              </div>
            </div>

            {/* Nghe nhạc */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg hover:scale-105">
              <div className="mb-4 flex flex-col items-center text-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 transition-transform group-hover:scale-110">
                  <Music className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Nghe Nhạc
                </h3>
              </div>
            </div>

            {/* Đi phượt */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg hover:scale-105">
              <div className="mb-4 flex flex-col items-center text-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/10 to-red-500/10 transition-transform group-hover:scale-110">
                  <MapPin className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Đi Phượt
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
