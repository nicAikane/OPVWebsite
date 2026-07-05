import { links } from '@/lib/site';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full text-white py-6" style={{ background: 'linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold" data-testid="text-footer-title">Oʻahu Pride Volleyball</p>
            <p className="text-sm opacity-90" data-testid="text-footer-tagline">Inclusive • Community-Led</p>
          </div>
          <div className="text-center text-sm opacity-90">
            <p data-testid="text-footer-copyright">© Oʻahu Pride Volleyball / Aikāne ʻOhana (501(c)(3))</p>
            <p className="mt-1 space-x-4">
              <a 
                href={links.rules}
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
                data-testid="link-footer-rules"
              >
                Rules
              </a>
              <span>•</span>
              <a 
                href={links.donate}
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
                data-testid="link-footer-donate"
              >
                Donate
              </a>
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <a 
              href={links.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition"
              aria-label="Follow us on Facebook"
              data-testid="link-footer-facebook"
            >
              <FaFacebook className="h-8 w-8 text-gray-800" />
            </a>
            <a 
              href={links.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition"
              aria-label="Follow us on Instagram"
              data-testid="link-footer-instagram"
            >
              <FaInstagram className="h-8 w-8 text-gray-800" />
            </a>
            <a 
              href={links.social} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition"
              data-testid="link-footer-social"
            >
              <img 
                src="/linktree-logo.png" 
                alt="Linktree" 
                width={43}
                height={43}
                className="h-[43px] w-auto object-contain rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
