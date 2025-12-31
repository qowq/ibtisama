import React from 'react';
import { MapPin, Phone, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">Ibtisama Clinic</h3>
            <p className="text-sm text-slate-400 max-w-xs">
              Your trusted partner for specialized dental care in Bahrain. Delivering smiles with expertise and compassion.
            </p>
            <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=100064209271838" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Facebook Page"
                >
                  <Facebook size={20} />
                </a>
            </div>
          </div>

          {/* Quick Links (Visual Filler) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
                <li>Orthodontics (Invisalign)</li>
                <li>General Dentistry</li>
                <li>Cosmetic Dentistry</li>
                <li>Oral Hygiene</li>
            </ul>
          </div>

          {/* Contact / Legal Info - CRITICAL FOR VERIFICATION */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact & Location</h4>
            <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                    <MapPin className="text-blue-500 shrink-0 mt-1" size={16} />
                    <span>
                        Shop 13, Building 3759,<br/> 
                        Road 2764, Block 527,<br/> 
                        Sar, Bahrain.
                    </span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="text-blue-500 shrink-0" size={16} />
                    <a href="tel:+97317777088" className="hover:text-white transition-colors">
                        +973 1777 7088
                    </a>
                </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-xs text-slate-500">
            {/* Legal Name Requirement */}
            <p className="mb-2 font-semibold uppercase tracking-wider text-slate-400">
                IBTISAMA CARE SPECIALIST DENTAL CENTER W.L.L
            </p>
            <p>
                © {new Date().getFullYear()} Ibtisama Care Specialist Dental Center W.L.L. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}