import React, { PropsWithChildren } from "react";
import SiteHeader from "@/components/site-header";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function App({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border bg-background py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Created by{" "}
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.social.github}
                className="font-semibold text-primary transition-colors hover:text-primary/80"
              >
                {siteConfig.author}
              </Link>
            </p>
            <div className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="font-medium">Liên hệ:</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-primary transition-colors hover:text-primary/80"
                  title="Email contact for work"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <span className="hidden text-muted-foreground sm:inline">•</span>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
