import { Award, Code, Shield } from "lucide-react";
import type { ComponentType } from "react";

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  icon: ComponentType<{ className?: string }>;
  file: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2024",
    icon: Shield,
    file: "/images/certifications/Introduction_to_Cybersecurity_certificate_toanvo3789-gmail-com_e2b0ba38-b4d6-49af-bac9-77c1ab380282_page-0001.jpg",
    image: "/images/certifications/Introduction_to_Cybersecurity_certificate_toanvo3789-gmail-com_e2b0ba38-b4d6-49af-bac9-77c1ab380282_page-0001.jpg",
  },
  {
    name: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy & OpenEDG JavaScript Institute",
    year: "2024",
    icon: Code,
    file: "/images/certifications/JavaScript_Essentials_1_certificate_toanvo3789-gmail-com_e6c7b83d-3fca-4a5f-acc1-e07120c67604_page-0001.jpg",
    image: "/images/certifications/JavaScript_Essentials_1_certificate_toanvo3789-gmail-com_e6c7b83d-3fca-4a5f-acc1-e07120c67604_page-0001.jpg",
  },
  {
    name: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy & OpenEDG JavaScript Institute",
    year: "2024",
    icon: Code,
    file: "/images/certifications/JavaScriptEssentials2Update20251225-31-arc19b_page-0001.jpg",
    image: "/images/certifications/JavaScriptEssentials2Update20251225-31-arc19b_page-0001.jpg",
  },
  {
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    year: "2024",
    icon: Award,
    file: "/images/certifications/VoTranBaoToan_2280616366_page-0001.jpg",
    image: "/images/certifications/VoTranBaoToan_2280616366_page-0001.jpg",
  },
];

