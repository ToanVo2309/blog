"use client";

import { useState, useRef, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Award, Code, Shield, Globe, BookOpen, Network, Lock, Brain, BarChart3, Terminal, Layers, Zap, ChevronLeft, ChevronRight, ExternalLink, Github, Cake } from "lucide-react";
import CertificateModal from "@/components/certificate-modal";
import { certifications } from "@/config/certifications";

export default function Home() {
  const [selectedCert, setSelectedCert] = useState<{
    image: string;
    title: string;
    pdfUrl?: string;
  } | null>(null);

  const skillsScrollRef = useRef<HTMLDivElement>(null);
  const certsScrollRef = useRef<HTMLDivElement>(null);
  const projectsScrollRef = useRef<HTMLDivElement>(null);
  const skillsScrollContainerRef = useRef<HTMLDivElement>(null);
  const certsScrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingSkills = useRef(false);
  const isScrollingCerts = useRef(false);
  const isScrollingProjects = useRef(false);

  const skills = [
    { name: "Java", icon: Code, color: "from-orange-500/10 to-orange-600/10" },
    { name: "JavaScript", icon: Zap, color: "from-yellow-500/10 to-yellow-600/10" },
    { name: "Python", icon: Code, color: "from-blue-500/10 to-cyan-600/10" },
    { name: "Web Development", icon: Globe, color: "from-green-500/10 to-emerald-600/10" },
    { name: "Cyber Security", icon: Shield, color: "from-red-500/10 to-rose-600/10" },
    { name: "An ninh mạng", icon: Lock, color: "from-purple-500/10 to-violet-600/10" },
    { name: "Machine Learning", icon: Brain, color: "from-pink-500/10 to-fuchsia-600/10" },
    { name: "Data Analysis", icon: BarChart3, color: "from-indigo-500/10 to-blue-600/10" },
    { name: "Network Security", icon: Network, color: "from-teal-500/10 to-cyan-600/10" },
    { name: "Penetration Testing", icon: Terminal, color: "from-gray-500/10 to-slate-600/10" },
    { name: "React.js", icon: Layers, color: "from-cyan-500/10 to-blue-600/10" },
    { name: "Node.js", icon: Layers, color: "from-green-500/10 to-emerald-600/10" },
  ];

  // Initialize scroll position for infinite loop (Skills) - start at copy 2
  useEffect(() => {
    if (skillsScrollRef.current && skills.length > 0) {
      const cardWidth = 200 + 16;
      const startPosition = skills.length * cardWidth; // Start at copy 2 (real items)
      skillsScrollRef.current.scrollLeft = startPosition;
    }
  }, [skills.length]);

  // Initialize scroll position for infinite loop (Certifications) - start at copy 2
  useEffect(() => {
    if (certsScrollRef.current && certifications.length > 0) {
      const cardWidth = 320 + 24;
      const startPosition = certifications.length * cardWidth; // Start at copy 2 (real items)
      certsScrollRef.current.scrollLeft = startPosition;
    }
  }, [certifications.length]);

  // Handle infinite loop for Skills - TẠM TẮT để kiểm tra
  // useEffect(() => {
  //   const container = skillsScrollRef.current;
  //   if (!container) return;

  //   const handleScroll = () => {
  //     if (isScrollingSkills.current) return;
      
  //     const cardWidth = 200 + 16;
  //     const scrollLeft = container.scrollLeft;
  //     const realItemsWidth = skills.length * cardWidth;

  //     // If scrolled to copy 5 (last copy), instantly jump to copy 2 (seamless)
  //     if (scrollLeft >= realItemsWidth * 4) {
  //       isScrollingSkills.current = true;
  //       const offset = scrollLeft - realItemsWidth * 4;
  //       container.scrollLeft = realItemsWidth + offset;
  //       isScrollingSkills.current = false;
  //     }
  //     // If scrolled to copy 1 (first copy), instantly jump to copy 4 (seamless)
  //     else if (scrollLeft < realItemsWidth) {
  //       isScrollingSkills.current = true;
  //       const offset = scrollLeft;
  //       container.scrollLeft = realItemsWidth * 4 - (realItemsWidth - offset);
  //       isScrollingSkills.current = false;
  //     }
  //   };

  //   container.addEventListener('scroll', handleScroll);
  //   return () => container.removeEventListener('scroll', handleScroll);
  // }, [skills.length]);

  // Handle infinite loop for Certifications - TẠM TẮT để kiểm tra
  // useEffect(() => {
  //   const container = certsScrollRef.current;
  //   if (!container) return;

  //   const handleScroll = () => {
  //     if (isScrollingCerts.current) return;
      
  //     const cardWidth = 320 + 24;
  //     const scrollLeft = container.scrollLeft;
  //     const realItemsWidth = certifications.length * cardWidth;

  //     // If scrolled to copy 5 (last copy), instantly jump to copy 2 (seamless)
  //     if (scrollLeft >= realItemsWidth * 4) {
  //       isScrollingCerts.current = true;
  //       const offset = scrollLeft - realItemsWidth * 4;
  //       container.scrollLeft = realItemsWidth + offset;
  //       isScrollingCerts.current = false;
  //     }
  //     // If scrolled to copy 1 (first copy), instantly jump to copy 4 (seamless)
  //     else if (scrollLeft < realItemsWidth) {
  //       isScrollingCerts.current = true;
  //       const offset = scrollLeft;
  //       container.scrollLeft = realItemsWidth * 4 - (realItemsWidth - offset);
  //       isScrollingCerts.current = false;
  //     }
  //   };

  //   container.addEventListener('scroll', handleScroll);
  //   return () => container.removeEventListener('scroll', handleScroll);
  // }, [certifications.length]);


  const scrollSkills = (direction: "prev" | "next") => {
    if (!skillsScrollRef.current || isScrollingSkills.current) return;
    const cardWidth = 200 + 16;
    const currentScroll = skillsScrollRef.current.scrollLeft;
    const scrollAmount = direction === "next" ? cardWidth : -cardWidth;
    skillsScrollRef.current.scrollTo({
      left: currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollCerts = (direction: "prev" | "next") => {
    if (!certsScrollRef.current || isScrollingCerts.current) return;
    const cardWidth = 320 + 24;
    const currentScroll = certsScrollRef.current.scrollLeft;
    const scrollAmount = direction === "next" ? cardWidth : -cardWidth;
    certsScrollRef.current.scrollTo({
      left: currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollProjects = (direction: "prev" | "next") => {
    if (!projectsScrollRef.current || isScrollingProjects.current) return;
    const container = projectsScrollRef.current;
    const cardWidth = 380 + 32; // Card width (380px) + gap (32px)
    const scrollAmount = direction === "next" ? cardWidth * 2 : -cardWidth * 2; // Scroll 2 cards at a time
    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Width */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-background to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Social Icons */}
            <div className="mb-8 flex items-center justify-center gap-3">
          {SOCIALS.map((social) => (
            <Link
              key={social.label}
              href={social.path}
              rel="noreferrer"
              target="_blank"
              className={cn(
                    "group relative flex items-center justify-center rounded-full border border-border bg-card transition-all hover:border-primary hover:bg-primary/10 hover:shadow-lg size-11",
              )}
            >
                  <social.icon className="text-foreground transition-colors group-hover:text-primary size-5" />
              <span className="sr-only">{social.label}</span>
            </Link>
          ))}
        </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-foreground">Xin chào, tôi là </span>
              <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Bảo Toàn
              </span>
        </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Sinh viên năm cuối ngành <span className="font-semibold text-foreground">Công nghệ Thông tin</span>, 
              chuyên ngành <span className="font-semibold text-foreground">An ninh mạng</span>
            </p>

            {/* CTA Button */}
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/blog"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group relative overflow-hidden bg-primary text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105",
                )}
              >
                <BookOpen className="mr-2 size-5" />
                Khám phá Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Về Tôi
          </h2>
          <div className="space-y-4 text-center text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Trong quá trình học tập và thực hành, mình đặc biệt quan tâm đến các lĩnh vực như{" "}
              <span className="font-semibold text-foreground">lập trình Java</span>,{" "}
              <span className="font-semibold text-foreground">JavaScript</span>,{" "}
              <span className="font-semibold text-foreground">phát triển web</span> và các vấn đề liên quan đến{" "}
              <span className="font-semibold text-foreground">bảo mật hệ thống</span>,{" "}
              <span className="font-semibold text-foreground">an toàn thông tin</span>.
            </p>
            <p className="text-lg leading-relaxed">
              Mình luôn cố gắng kết hợp giữa kiến thức lý thuyết trên giảng đường và việc tự học, 
              thực hành thông qua các dự án cá nhân.
            </p>
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-foreground">Blog Bảo Toàn Dev</span> được tạo ra nhằm mục đích chia sẻ lại những kiến thức 
              mình đã học, các kinh nghiệm lập trình, cũng như những ghi chú quan trọng về Java và 
              JavaScript trong quá trình học tập. Hy vọng những bài viết trên blog sẽ giúp ích cho 
              các bạn sinh viên CNTT và những người mới bắt đầu tìm hiểu về lập trình.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Kỹ Năng & Sở Thích
          </h2>
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => scrollSkills("prev")}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg transition-all hover:bg-background"
              aria-label="Trước"
            >
              <ChevronLeft className="text-foreground size-5" />
            </button>
            <button
              onClick={() => scrollSkills("next")}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg transition-all hover:bg-background"
              aria-label="Sau"
            >
              <ChevronRight className="text-foreground size-5" />
            </button>

            <div 
              ref={skillsScrollRef}
              className="overflow-x-auto scrollbar-hide scroll-smooth"
            >
              <div ref={skillsScrollContainerRef} className="flex gap-4 pb-4 scroll-snap-x">
                {/* First copy for infinite loop */}
                {skills.map((skill, index) => {
                  const Icon = skill.icon || Code;
                  return (
                    <div
                      key={`skill-1-${index}`}
                      className="group relative h-[180px] min-w-[200px] shrink-0 overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg scroll-snap-start"
                    >
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                        skill.color || "from-primary/5 to-primary/10"
                      )}></div>
                      <div className="relative flex flex-col items-center gap-3 text-center">
                        <div className="flex items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 size-12">
                          <Icon className="text-primary transition-transform duration-300 group-hover:scale-110 size-6" />
                        </div>
                        <h3 className="text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                          {skill.name}
                        </h3>
                      </div>
                    </div>
                  );
                })}
                {/* Second copy (real items - starting position) */}
                {skills.map((skill, index) => {
                  const Icon = skill.icon || Code;
                  return (
                    <div
                      key={`skill-2-${index}`}
                      className="group relative h-[180px] min-w-[200px] shrink-0 overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg scroll-snap-start"
                    >
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                        skill.color || "from-primary/5 to-primary/10"
                      )}></div>
                      <div className="relative flex flex-col items-center gap-3 text-center">
                        <div className="flex items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 size-12">
                          <Icon className="text-primary transition-transform duration-300 group-hover:scale-110 size-6" />
                        </div>
                        <h3 className="text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                          {skill.name}
                        </h3>
                      </div>
                    </div>
                  );
                })}
                {/* Third copy for infinite loop */}
                {skills.map((skill, index) => {
                  const Icon = skill.icon || Code;
                  return (
                    <div
                      key={`skill-3-${index}`}
                      className="group relative h-[180px] min-w-[200px] shrink-0 overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg scroll-snap-start"
                    >
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                        skill.color || "from-primary/5 to-primary/10"
                      )}></div>
                      <div className="relative flex flex-col items-center gap-3 text-center">
                        <div className="flex items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 size-12">
                          <Icon className="text-primary transition-transform duration-300 group-hover:scale-110 size-6" />
                        </div>
                        <h3 className="text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                          {skill.name}
                        </h3>
                      </div>
                    </div>
                  );
                })}
                {/* Fourth copy for infinite loop */}
                {skills.map((skill, index) => {
                  const Icon = skill.icon || Code;
                  return (
                    <div
                      key={`skill-4-${index}`}
                      className="group relative h-[180px] min-w-[200px] shrink-0 overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg scroll-snap-start"
                    >
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                        skill.color || "from-primary/5 to-primary/10"
                      )}></div>
                      <div className="relative flex flex-col items-center gap-3 text-center">
                        <div className="flex items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 size-12">
                          <Icon className="text-primary transition-transform duration-300 group-hover:scale-110 size-6" />
                        </div>
                        <h3 className="text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                          {skill.name}
                        </h3>
                      </div>
                    </div>
                  );
                })}
                {/* Fifth copy for infinite loop */}
                {skills.map((skill, index) => {
                  const Icon = skill.icon || Code;
                  return (
                    <div
                      key={`skill-5-${index}`}
                      className="group relative h-[180px] min-w-[200px] shrink-0 overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg scroll-snap-start"
                    >
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                        skill.color || "from-primary/5 to-primary/10"
                      )}></div>
                      <div className="relative flex flex-col items-center gap-3 text-center">
                        <div className="flex items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 size-12">
                          <Icon className="text-primary transition-transform duration-300 group-hover:scale-110 size-6" />
                        </div>
                        <h3 className="text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                          {skill.name}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Award className="text-primary size-8" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Chứng Chỉ & Bằng Cấp
            </h2>
          </div>
        </div>
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scrollCerts("prev")}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg transition-all hover:bg-background"
            aria-label="Trước"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={() => scrollCerts("next")}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg transition-all hover:bg-background"
            aria-label="Sau"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          <div 
            ref={certsScrollRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
          >
            <div ref={certsScrollContainerRef} className="flex gap-6 pb-4 scroll-snap-x">
              {/* First copy for infinite loop */}
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={`cert-1-${index}`}
                    onClick={() => {
                      if (cert.image) {
                        setSelectedCert({
                          image: cert.image,
                          title: cert.name,
                          pdfUrl: cert.file,
                        });
                      }
                    }}
                    className="group relative flex shrink-0 cursor-pointer items-center overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:scale-[1.02] hover:border-primary hover:shadow-lg scroll-snap-start h-[180px] w-[320px]"
                  >
                    <div className="flex w-full items-center gap-4">
                      <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20 size-14">
                        <Icon className="text-primary size-7" />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <h3 className="mb-2 text-lg font-semibold leading-tight text-foreground line-clamp-2">
                          {cert.name}
                        </h3>
                        <p className="mb-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">{cert.issuer}</p>
                        <p className="mt-auto text-xs text-muted-foreground">{cert.year}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Second copy (real items - starting position) */}
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={`cert-2-${index}`}
                    onClick={() => {
                      if (cert.image) {
                        setSelectedCert({
                          image: cert.image,
                          title: cert.name,
                          pdfUrl: cert.file,
                        });
                      }
                    }}
                    className="group relative flex shrink-0 cursor-pointer items-center overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:scale-[1.02] hover:border-primary hover:shadow-lg scroll-snap-start h-[180px] w-[320px]"
                  >
                    <div className="flex w-full items-center gap-4">
                      <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20 size-14">
                        <Icon className="text-primary size-7" />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <h3 className="mb-2 text-lg font-semibold leading-tight text-foreground line-clamp-2">
                          {cert.name}
                        </h3>
                        <p className="mb-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">{cert.issuer}</p>
                        <p className="mt-auto text-xs text-muted-foreground">{cert.year}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Third copy for infinite loop */}
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={`cert-3-${index}`}
                    onClick={() => {
                      if (cert.image) {
                        setSelectedCert({
                          image: cert.image,
                          title: cert.name,
                          pdfUrl: cert.file,
                        });
                      }
                    }}
                    className="group relative flex shrink-0 cursor-pointer items-center overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:scale-[1.02] hover:border-primary hover:shadow-lg scroll-snap-start h-[180px] w-[320px]"
                  >
                    <div className="flex w-full items-center gap-4">
                      <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20 size-14">
                        <Icon className="text-primary size-7" />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <h3 className="mb-2 text-lg font-semibold leading-tight text-foreground line-clamp-2">
                          {cert.name}
                        </h3>
                        <p className="mb-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">{cert.issuer}</p>
                        <p className="mt-auto text-xs text-muted-foreground">{cert.year}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Fourth copy for infinite loop */}
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={`cert-4-${index}`}
                    onClick={() => {
                      if (cert.image) {
                        setSelectedCert({
                          image: cert.image,
                          title: cert.name,
                          pdfUrl: cert.file,
                        });
                      }
                    }}
                    className="group relative flex shrink-0 cursor-pointer items-center overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:scale-[1.02] hover:border-primary hover:shadow-lg scroll-snap-start h-[180px] w-[320px]"
                  >
                    <div className="flex w-full items-center gap-4">
                      <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20 size-14">
                        <Icon className="text-primary size-7" />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <h3 className="mb-2 text-lg font-semibold leading-tight text-foreground line-clamp-2">
                          {cert.name}
                        </h3>
                        <p className="mb-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">{cert.issuer}</p>
                        <p className="mt-auto text-xs text-muted-foreground">{cert.year}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Fifth copy for infinite loop */}
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={`cert-5-${index}`}
                    onClick={() => {
                      if (cert.image) {
                        setSelectedCert({
                          image: cert.image,
                          title: cert.name,
                          pdfUrl: cert.file,
                        });
                      }
                    }}
                    className="group relative flex shrink-0 cursor-pointer items-center overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:scale-[1.02] hover:border-primary hover:shadow-lg scroll-snap-start h-[180px] w-[320px]"
                  >
                    <div className="flex w-full items-center gap-4">
                      <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20 size-14">
                        <Icon className="text-primary size-7" />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <h3 className="mb-2 text-lg font-semibold leading-tight text-foreground line-clamp-2">
                          {cert.name}
                        </h3>
                        <p className="mb-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">{cert.issuer}</p>
                        <p className="mt-auto text-xs text-muted-foreground">{cert.year}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {selectedCert && (
          <CertificateModal
            isOpen={!!selectedCert}
            onClose={() => setSelectedCert(null)}
            imageUrl={selectedCert.image}
            title={selectedCert.title}
            pdfUrl={selectedCert.pdfUrl}
          />
        )}
      </section>

      {/* Projects Section */}
      <section className="border-t border-border bg-background">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Dự Án Cá Nhân
            </h2>
            <p className="text-lg text-muted-foreground">
              Các dự án mình đã thực hiện trong quá trình học tập và nghiên cứu
            </p>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => scrollProjects("prev")}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg transition-all hover:bg-background"
              aria-label="Trước"
            >
              <ChevronLeft className="size-5 text-foreground" />
            </button>
            <button
              onClick={() => scrollProjects("next")}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg transition-all hover:bg-background"
              aria-label="Sau"
            >
              <ChevronRight className="size-5 text-foreground" />
            </button>

            <div 
              ref={projectsScrollRef}
              className="overflow-x-auto scroll-smooth scrollbar-hide"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              <div className="flex gap-8 pb-4">
                {/* Duplicate first 2 projects for infinite scroll */}
                {/* Project 1: Web đánh giá game */}
                <div className="group relative shrink-0 overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg scroll-snap-align-start min-w-[380px] max-w-[380px]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center rounded-lg bg-primary/10 size-12">
                  <Globe className="text-primary size-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Web Đánh Giá Game
                </h3>
              </div>
              <p className="mb-4 text-muted-foreground">
                Website cho phép người dùng đánh giá và xem review các tựa game. 
                Tích hợp tính năng rating, comment và tìm kiếm game theo thể loại.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  Web Development
                </span>
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  JavaScript
                </span>
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  React.js
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  <Github className="size-4" />
                  Code
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80"
                >
                  <ExternalLink className="size-4" />
                  Demo
                </a>
              </div>
                </div>

                {/* Project 2: Thiết kế bảo mật 2 lớp cho SSH server */}
                <div className="group relative shrink-0 overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg scroll-snap-align-start min-w-[380px] max-w-[380px]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Bảo Mật 2 Lớp SSH Server
                </h3>
              </div>
              <p className="mb-4 text-muted-foreground">
                Thiết kế và triển khai hệ thống bảo mật 2 lớp (2FA) cho SSH server 
                sử dụng TOTP và key-based authentication để tăng cường an ninh hệ thống.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  Cyber Security
                </span>
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  Network Security
                </span>
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  Linux
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  <Github className="size-4" />
                  Code
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80"
                >
                  <ExternalLink className="size-4" />
                  Docs
                </a>
              </div>
            </div>

                {/* Project 3: Hệ thống phát hiện tấn công qua lưu lượng mạng */}
                <div className="group relative shrink-0 overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg scroll-snap-align-start min-w-[380px] max-w-[380px]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Hệ Thống Phát Hiện Tấn Công
                </h3>
              </div>
              <p className="mb-4 text-muted-foreground">
                Xây dựng hệ thống phân tích lưu lượng mạng để phát hiện các cuộc tấn công 
                như DDoS, BruteForce, C2, và các hoạt động đáng ngờ khác sử dụng Machine Learning với 5 datasets (CICIDS2017, UNSW-NB15, CICDDoS2019, Bot-IoT, CICIDS2018).
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  Network Security
                </span>
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  Machine Learning
                </span>
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  Python
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/ToanVo2309/DACN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  <Github className="size-4" />
                  Code
                </a>
                <a
                  href="https://github.com/ToanVo2309/DACN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80"
                >
                  <ExternalLink className="size-4" />
                  README
                </a>
              </div>
                </div>

                {/* Project 4: Website chúc mừng sinh nhật */}
                <div className="group relative shrink-0 overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg scroll-snap-align-start min-w-[380px] max-w-[380px]">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/10 to-rose-500/10 size-12">
                      <Cake className="text-pink-500 size-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Website Chúc Mừng Sinh Nhật
                    </h3>
                  </div>
                  <p className="mb-4 text-muted-foreground">
                    Website tương tác vui vẻ để chúc mừng sinh nhật với animations đẹp mắt, 
                    hiệu ứng confetti, nhạc nền và các tính năng tương tác thú vị. Tạo niềm vui và kỷ niệm đáng nhớ!
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-md bg-pink-500/10 px-2 py-1 text-xs font-medium text-pink-600">
                      Web Development
                    </span>
                    <span className="rounded-md bg-pink-500/10 px-2 py-1 text-xs font-medium text-pink-600">
                      JavaScript
                    </span>
                    <span className="rounded-md bg-pink-500/10 px-2 py-1 text-xs font-medium text-pink-600">
                      HTML/CSS
                    </span>
                    <span className="rounded-md bg-pink-500/10 px-2 py-1 text-xs font-medium text-pink-600">
                      Animations
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-md bg-pink-500/10 px-3 py-2 text-sm font-medium text-pink-600 transition-colors hover:bg-pink-500/20"
                    >
                      <Github className="size-4" />
                      Code
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80"
                    >
                      <ExternalLink className="size-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto max-w-4xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Khám Phá Blog
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Đọc các bài viết về Java, JavaScript và phát triển web
            </p>
          <Link
            href="/blog"
            className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105",
            )}
          >
              <BookOpen className="mr-2 h-5 w-5" />
              Xem Tất Cả Bài Viết
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
}
