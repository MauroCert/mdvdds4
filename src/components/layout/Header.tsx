"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

interface NavItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { 
    name: "About", 
    href: "/about",
    submenu: [
      { name: "Meet the Team", href: "/about/team" },
    ]
  },
  { 
    name: "Services", 
    href: "/services",
    submenu: [
      { name: "Dentistry for Special Needs", href: "/services/special-needs-dentistry" },
      { name: "Sedation Dentistry", href: "/services/sedation-dentistry" },
      { name: "Dental Exams & Cleanings", href: "/services/dental-exams-cleanings" },
      { name: "Root Canals", href: "/services/root-canals" },
      { name: "Dentures", href: "/services/dentures" },
      { name: "Extractions", href: "/services/extractions" },
    ]
  },
  { name: "Destination Nashville", href: "/destination-nashville" },
  { 
    name: "Patient Information", 
    href: "/patient-forms",
    submenu: [
      { name: "Patient Forms", href: "/patient-forms" },
      { name: "FAQs", href: "/faqs" },
    ]
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary-800 text-white">
        <div className="container-padding">
          <div className="flex h-12 items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <Link href="/contact" className="btn btn-topbar bg-primary-700 text-white hover:bg-primary-600 border-primary-700">
                Schedule a Consultation
              </Link>
              <div className="w-8 h-8 bg-primary-700 flex items-center justify-center rounded-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Link href="/contact" className="btn btn-topbar bg-primary-700 text-white hover:bg-primary-600 border-primary-700">
                Referring Doctors
              </Link>
              <Link href="/contact" className="btn btn-topbar bg-primary-700 text-white hover:bg-primary-600 border-primary-700">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Google Maps
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-padding">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Michael D. Vaughan, DDS" 
              width={100} 
              height={100} 
              className="w-24 h-24 object-contain"
              priority 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div className="relative">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={`text-base font-medium transition-colors ${
                          isActive(item.href) 
                            ? "text-accent-600" 
                            : "text-primary-700 hover:text-accent-600"
                        }`}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="ml-1 p-1 text-primary-700 hover:text-accent-600"
                      >
                        <ChevronDownIcon className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`} />
                      </button>
                    </div>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border border-gray-100 rounded-lg py-2 z-50">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`block px-4 py-2 text-base font-medium transition-colors ${
                              isActive(sub.href)
                                ? "bg-accent-50 text-accent-600"
                                : "text-primary-700 hover:bg-neutral-50 hover:text-accent-600"
                            }`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-base font-medium transition-colors ${
                      isActive(item.href) 
                        ? "text-accent-600" 
                        : "text-primary-700 hover:text-accent-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Empty space for layout balance */}
          <div className="hidden lg:block">
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-primary-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container-padding py-4">
            <div className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block text-lg font-medium transition-colors ${
                      isActive(item.href) 
                        ? "text-accent-600" 
                        : "text-primary-700 hover:text-accent-600"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`block text-base transition-colors ${
                            isActive(sub.href)
                              ? "text-accent-600"
                              : "text-primary-600 hover:text-accent-600"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
