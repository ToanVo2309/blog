"use client";

import React from "react";
import { X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  pdfUrl?: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  imageUrl,
  title,
  pdfUrl,
}: CertificateModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -right-2 -top-2 z-10 rounded-full bg-background p-2 shadow-lg transition-colors hover:bg-muted"
          aria-label="Đóng"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative rounded-lg bg-background p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold">{title}</h3>
            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                onClick={(e) => e.stopPropagation()}
              >
                <Download className="h-3.5 w-3.5" />
                Tải PDF
              </a>
            )}
          </div>
          <div className="overflow-auto max-h-[80vh] rounded-md border">
            {imageUrl.endsWith('.pdf') ? (
              <iframe
                src={`${imageUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                className="h-[80vh] w-full"
                title={title}
              />
            ) : (
              <img
                src={imageUrl}
                alt={title}
                className="h-auto w-full object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

