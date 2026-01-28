import React from 'react';
import { Phone, MapPin, Clock, Award, Facebook } from 'lucide-react';
import Button from './Button';
import Footer from './Footer';

// Use specific external links provided for Ibtisama Clinic assets
const IMAGES = {
  logo: 'https://scontent.fbah9-1.fna.fbcdn.net/v/t39.30808-1/302746533_458728382944134_5380216355372768081_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=7pzaq4MjMlEQ7kNvwEBwuLD&_nc_oc=AdkqWjJHnZs318lBnTxXMCHsgsjlze40648rWj_kXPb-fdx94kBwK9X3VxdAcDm6i8s&_nc_zt=24&_nc_ht=scontent.fbah9-1.fna&_nc_gid=kETpnYih7mrCAoPNMGCg6g&oh=00_Afn0U63EEhzSrd0SHl3V10o5ROBjZsySIQTSMqKENk62Pw&oe=695ACD7A',
  banner: 'https://scontent.fbah9-1.fna.fbcdn.net/v/t39.30808-6/305756721_458728379610801_5061423831622357648_n.png?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=--G7FSMAMywQ7kNvwEPppUm&_nc_oc=Adnk5PwnByjtHGcLMqeNE-vimOE2NG-A_u3i9hhMVi0PB-qLEV0v9SqX_cyUlE0qQpw&_nc_zt=23&_nc_ht=scontent.fbah9-1.fna&_nc_gid=kETpnYih7mrCAoPNMGCg6g&oh=00_AfmWej0bYBTwKD1cqzAAKu49LMAAFgBGjdw4vqIvItfGsg&oe=695ADFDC',
  doctor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtmI5zvojC2p20dmRceGUwtLFaRD8CnuHIg&s',
  team: 'https://pbs.twimg.com/media/DYuYmzFWAAAHFCI.jpg',
};

export default function Home() {
  const handleBookAppointment = () => {
    window.location.href = 'tel:+97317777088';
  };

  const handleFacebookVisit = () => {
    window.open('https://www.facebook.com/profile.php?id=100064209271838', '_blank');
  };

  // Robust error handler
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.onerror = null; // Prevent infinite loop
    
    // Fallback to a generated placeholder with the alt text if links expire or fail
    const text = encodeURIComponent(target.alt || 'Image Missing');
    target.src = `https://placehold.co/600x400/e2e8f0/1e3a8a?text=${text}`;
    target.classList.add('opacity-80');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-slate-800">
      {/* Top Bar - Contact Info */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <Phone size={14} /> +973 1777 7088
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Sar, Bahrain
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} /> Sat - Thu: 9:00 AM - 9:00 PM
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 relative overflow-hidden">
                <img 
                    src={IMAGES.logo} 
                    alt="Ibtisama Logo" 
                    className="object-contain h-full w-full rounded-full"
                    onError={handleImageError}
                />
            </div>
            <div>
                <h1 className="text-xl font-bold text-blue-900 leading-tight">IBTISAMA</h1>
                <p className="text-xs text-blue-600 font-medium tracking-wide">SPECIALIST DENTAL CENTER</p>
            </div>
          </div>
          
          <div className="hidden md:flex gap-4">
             <Button variant="outline" onClick={handleFacebookVisit}>
                <Facebook size={18} className="mr-2" />
                Facebook Page
             </Button>
             <Button variant="primary" onClick={handleBookAppointment}>
                Book Appointment
             </Button>
          </div>
          
          {/* Mobile simplistic action */}
          <div className="md:hidden">
             <button onClick={handleBookAppointment} className="bg-blue-600 text-white p-2 rounded-full shadow-lg">
                <Phone size={20} />
             </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-blue-50">
        <div className="w-full">
          <img 
            src={IMAGES.banner} 
            alt="Dental Center Banner" 
            className="w-full h-auto object-cover max-h-[500px]"
            onError={handleImageError}
          />
           <div className="hidden md:block absolute bottom-10 left-0 right-0 text-center pointer-events-none">
              <div className="inline-block bg-white/95 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg pointer-events-auto">
                 <h2 className="text-2xl font-bold text-blue-900">Your Smile, Our Priority</h2>
              </div>
           </div>
        </div>
        
        {/* Mobile CTA below banner */}
        <div className="md:hidden p-6 text-center bg-white space-y-4 border-b">
             <h2 className="text-2xl font-bold text-blue-900">Your Trusted Dental Center</h2>
             <p className="text-gray-600">Highest ranked Invisalign provider in Bahrain.</p>
             <div className="flex flex-col gap-3">
                <Button variant="primary" className="w-full justify-center" onClick={handleBookAppointment}>
                    Book Appointment
                </Button>
                <Button variant="outline" className="w-full justify-center" onClick={handleFacebookVisit}>
                    Visit Facebook
                </Button>
             </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Doctor & Awards Section */}
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <img 
                        src={IMAGES.doctor} 
                        alt="Dr. Nawaf Al Hamar" 
                        className="rounded-lg shadow-xl w-full object-cover max-h-[400px]"
                        onError={handleImageError}
                    />
                    <p className="text-center text-sm text-gray-500 mt-2">Dr. Nawaf Al Hamar - Consultant Orthodontist</p>
                </div>
                <div className="order-1 md:order-2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                        <Award size={16} />
                        Award Winning Care
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Highest Ranked Invisalign Provider in Bahrain</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        For the 5th consecutive year, Ibtisama Clinic is proud to be recognized for excellence in orthodontics. 
                        Under the expert guidance of Dr. Nawaf Al Hamar, we provide world-class dental solutions tailored to your smile.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">✓</div>
                            <span>Specialist Dental Services</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">✓</div>
                            <span>Advanced Technology & Care</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">✓</div>
                            <span>Trusted by Thousands in Bahrain</span>
                        </li>
                    </ul>
                    <div className="pt-4">
                        <Button variant="primary" onClick={handleBookAppointment}>
                            Call to Book: 1777 7088
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Team/Community Section */}
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                 <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">Committed to Community Oral Health</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        At Ibtisama Dental, we believe in more than just treating teeth. We are part of the Sar community, actively promoting oral health awareness and providing accessible care for families.
                    </p>
                    <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-semibold text-blue-900 mb-2">Visit Our Clinic</h3>
                        <p className="text-gray-600">
                           We are conveniently located in Sar. Our team is ready to welcome you with a smile.
                        </p>
                    </div>
                 </div>
                 <div className="relative">
                    <div className="absolute inset-0 bg-blue-600 transform rotate-3 rounded-xl opacity-10"></div>
                    <img 
                        src={IMAGES.team} 
                        alt="Ibtisama Team" 
                        className="relative rounded-lg shadow-lg w-full object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-300 max-h-[400px]"
                        onError={handleImageError}
                    />
                 </div>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}