
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-lbs-charcoal text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">LBS</h3>
            <p className="text-white/70 mb-4">
              Timeless Style, Modern Elegance
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lbs-gold transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lbs-gold transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-lbs-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/70 hover:text-lbs-gold transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-lbs-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-lbs-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-lbs-gold transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-lbs-gold transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-lbs-gold transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-lbs-gold transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-white/70">Email:</span>
                <a
                  href="mailto:info@lbs-clothing.com"
                  className="ml-2 text-white hover:text-lbs-gold transition-colors"
                >
                  info@lbs-clothing.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-white/70">Phone:</span>
                <a
                  href="tel:+201234567890"
                  className="ml-2 text-white hover:text-lbs-gold transition-colors"
                >
                  +20 123 456 7890
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-white/70">Address:</span>
                <span className="ml-2 text-white">
                  123 Fashion Street, Cairo, Egypt
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} LBS Clothing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
