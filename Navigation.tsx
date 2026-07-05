import { usePrideMode } from '@/contexts/PrideModeContext';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { links } from '@/lib/site';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Navigation() {
  const { isPrideMode, togglePrideMode } = usePrideMode();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: links.home, label: "Home", testId: "link-home" },
    { href: links.donate, label: "Donate", testId: "link-donate" },
    { href: links.rules, label: "Rules", testId: "link-rules" },
    { href: links.photos, label: "Photos", testId: "link-photos" },
    { href: "#tournament", label: "Tournament", testId: "link-tournament", isAnchor: true },
    { href: links.store, label: "Store", testId: "link-store" },
    { href: links.aikaneOhana, label: "Aikāne ʻOhana", testId: "link-aikane" },
    { href: "#sponsors", label: "Sponsors", testId: "link-sponsors", isAnchor: true },
  ];

  return (
    <nav 
      id="main-nav" 
      className="bg-background shadow-sm sticky top-0 z-40 transition-all duration-300 ease-in-out"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          
          {/* Logo (add explicit right margin so Pride Mode never crowds) */}
          <div className="flex-shrink-0 mr-6 xl:mr-10">
            <a 
              href={links.home}
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="OPV Homepage" 
              className="block rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
              data-testid="link-home-logo"
            >
              <img 
                className="h-12 md:h-16 w-auto" 
                src="/opv-logo.png" 
                alt="Oʻahu Pride Volleyball Logo" 
                loading="lazy"
              />
            </a>
          </div>

          {/* Desktop Navigation (no-wrap, single row, with overflow scroll) */}
          <div className="hidden lg:flex items-center flex-nowrap gap-6">
            {/* Pride Mode: fixed-size cluster */}
            <div className="pride-toggle-switch-container flex items-center shrink-0 gap-x-4 lg:gap-x-5 xl:gap-x-6">
              <span
                id="pride-toggle-label"
                className="font-semibold pride-text-animated whitespace-nowrap leading-none"
              >
                Pride Mode
              </span>
              <label className="pride-toggle-switch">
                <input
                  type="checkbox"
                  id="prideToggle"
                  checked={isPrideMode}
                  onChange={togglePrideMode}
                  aria-labelledby="pride-toggle-label"
                  aria-label="Pride Mode"
                  data-testid="toggle-pride-mode"
                />
                <span className="pride-switch-track">
                  <span className="pride-switch-thumb"></span>
                </span>
              </label>
            </div>

            {/* Nav Links: flexible, single-line, hide Aikāne ʻOhana at tight widths */}
            <div className="flex items-center flex-1 min-w-0 flex-nowrap justify-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 whitespace-nowrap">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.isAnchor ? undefined : "_blank"}
                  rel={link.isAnchor ? undefined : "noopener noreferrer"}
                  className={`nav-link text-foreground hover:text-muted-foreground px-2 lg:px-3 xl:px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shrink-0 ${
                    link.testId === "link-aikane" ? "hidden xl:inline-flex" : ""
                  }`}
                  data-testid={link.testId}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Icons: fixed-size cluster */}
            <div className="flex items-center shrink-0 gap-4">
              <a
                href={links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="hover:opacity-80 transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
                data-testid="link-facebook-desktop"
              >
                <FaFacebook className="h-8 w-8 text-foreground" />
              </a>
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="hover:opacity-80 transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
                data-testid="link-instagram-desktop"
              >
                <FaInstagram className="h-8 w-8 text-foreground" />
              </a>
              <a
                href={links.social}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Social Media"
                className="hover:opacity-80 transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
                data-testid="link-social-desktop"
              >
                <img
                  src="/linktree-logo.png"
                  alt="Linktree"
                  width={53}
                  height={53}
                  className="h-[53px] w-auto object-contain shrink-0 rounded-lg"
                  decoding="async"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  aria-label="Open menu"
                  data-testid="button-hamburger-menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72" aria-describedby={undefined}>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-16">
                  
                  {/* Pride Mode Toggle */}
                  <div className="pride-toggle-switch-container flex items-center justify-between gap-x-3 pb-4 border-b">
                    <span id="pride-toggle-label-mobile" className="text-base font-medium text-foreground px-4">
                      Pride Mode
                    </span>
                    <label className="pride-toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={isPrideMode}
                        onChange={togglePrideMode}
                        aria-labelledby="pride-toggle-label-mobile"
                        aria-label="Pride Mode"
                        data-testid="toggle-pride-mode-mobile"
                      />
                      <span className="pride-switch-track">
                        <span className="pride-switch-thumb"></span>
                      </span>
                    </label>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <a 
                        key={link.label}
                        href={link.href} 
                        target={link.isAnchor ? undefined : "_blank"}
                        rel={link.isAnchor ? undefined : "noopener noreferrer"}
                className="nav-link text-foreground hover:text-muted-foreground px-4 py-3 rounded-md text-base font-medium hover-elevate focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                data-testid={`${link.testId}-mobile`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
                    ))}
                  </nav>

                  {/* Social Links */}
                  <div className="pt-4 border-t flex flex-col gap-2">
                    <a 
                      href={links.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 px-4 py-3 rounded-md hover-elevate focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      data-testid="link-facebook-mobile"
                      onClick={() => setIsOpen(false)}
                    >
                      <FaFacebook className="h-6 w-6 text-foreground" />
                      <span className="font-medium">Facebook</span>
                    </a>
                    <a 
                      href={links.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 px-4 py-3 rounded-md hover-elevate focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      data-testid="link-instagram-mobile"
                      onClick={() => setIsOpen(false)}
                    >
                      <FaInstagram className="h-6 w-6 text-foreground" />
                      <span className="font-medium">Instagram</span>
                    </a>
                    <a 
                      href={links.social} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 px-4 py-3 rounded-md hover-elevate focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      data-testid="link-social-mobile"
                      onClick={() => setIsOpen(false)}
                    >
                      <img
                        src="/linktree-logo.png"
                        alt="Linktree"
                        width={43}
                        height={43}
                        className="h-[43px] w-auto object-contain shrink-0 rounded-lg"
                      />
                      <span className="font-medium">Social Media</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
