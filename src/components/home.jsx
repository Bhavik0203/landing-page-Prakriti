import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Home, Car, TreePine, Waves, Star, ChevronDown, Menu, X, Eye, Maximize, Camera, Zap, Shield, Wifi, ShieldCheck, Square, Trees, Smartphone } from 'lucide-react';
import banner2 from '../assets/banner.png'; // Ensure this path is correct
import dam from '../assets/img_4.png'; // Ensure this path is correct
import img1 from '../assets/img_1.png';
import img2 from '../assets/img_2.png';
import img3 from '../assets/img_3.png';
import img4 from '../assets/img_4.png';
import logo from '../assets/logo.png'; // Ensure this path is correct
import video from '../assets/video.mp4'; // Import video from assets
import video2 from '../assets/video2.mp4'; // Import video from assets
import video1 from '../assets/video1.mp4'; // Import video from assets
import Amenities from './amenities';
import tests from '../assets/frame.png'; // Ensure this path is correct
import tests2 from '../assets/frame.png'; // Ensure this path is correct
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } },
};
// import img5 from '../assets/img_5.png';
// import img6 from '../assets/img_6.png';
const PawnaLakeVillas = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
const [selectedSpec, setSelectedSpec] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setSelectedSpec(prev => (prev + 1) % specifications1.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

const specifications1 = [
  {
    id: 0,
    icon: Home,
    title: "Area & Plot",
    value: "4,200 / 2,400",
    unit: "Built-up / Plot (sq ft)",
    description: "Spacious living across 4,200 sq ft on a 2,400 sq ft premium plot",
    accent: "#FF6B6B",
    pattern: "dots"
  },
  {
    id: 1,
    icon: Car,
    title: "Parking & Backup",
    value: "2 Cars / 100%",
    unit: "Power Coverage",
    description: "Covered parking for 2 cars and 100% power backup for convenience",
    accent: "#45B7D1",
    pattern: "grid"
  },
  {
    id: 2,
    icon: Trees,
    title: "Garden & Pool",
    value: "800 / 15x8",
    unit: "sq ft / ft",
    description: "800 sq ft garden with a personal 15x8 ft infinity pool",
    accent: "#96CEB4",
    pattern: "organic"
  },
  {
    id: 3,
    icon: Shield,
    title: "Security & Smart Home",
    value: "24/7 / IoT",
    unit: "Gated / Enabled",
    description: "Round-the-clock gated security and smart home automation features",
    accent: "#54A0FF",
    pattern: "hexagon"
  },
  {
    id: 4,
    icon: Square,
    title: "Design & Comfort",
    value: "Luxury / Tech",
    unit: "Integrated",
    description: "Modern villa with elegant design and integrated smart climate control",
    accent: "#5F27CD",
    pattern: "circuit"
  }
];


  const currentSpec = specifications1[selectedSpec];
  // Gallery images (using placeholder images with different scenic themes)
  const galleryImages = [img1, img2, img3, img4];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

 const amenities = [
  { icon: Home, title: "5 BHK Luxury Villa", desc: "Spacious waterfront villas with premium finishes" },
  { icon: Waves, title: "Private Swimming Pool", desc: "Your personal oasis for relaxation" },
  { icon: TreePine, title: "Lush Gardens", desc: "Beautifully landscaped private gardens" },
  { icon: Car, title: "Dedicated Parking", desc: "Secure covered parking for your vehicles" },
  { icon: MapPin, title: "Prime Location", desc: "Just 500m from the pristine Pawna Dam" },
  { icon: Star, title: "Exclusive Living", desc: "Only 8 premium villas - ultra-exclusive" },
  { icon: ShieldCheck, title: "Security Cabin", desc: "On-site 24x7 manned security cabin" },
  { icon: Camera, title: "24x7 CCTV", desc: "Round-the-clock surveillance for your safety" },

];


  const specifications = [
    { label: "Villa Type", value: "5 BHK Waterfront" },
    { label: "Plot Area", value: "3500 sq ft" },
    { label: "Built-up Area", value: "2800 sq ft" },
    { label: "Bedrooms", value: "5 Master Bedrooms" },
    { label: "Bathrooms", value: "6 Premium Bathrooms" },
    { label: "Parking", value: "2 Covered Car Spaces" },
    { label: "Swimming Pool", value: "Private 15x30 ft" },
    { label: "Garden Area", value: "1200 sq ft Landscaped" }
  ];

  const locationAdvantages = [
    "500m from Pawna Dam - breathtaking waterfront views",
    "90 minutes from Mumbai & Pune - perfect weekend retreat",
    "Surrounded by Sahyadri mountains - pristine natural beauty",
    "Adventure sports hub - trekking, camping, water sports",
    "Peaceful lakeside environment - away from city chaos",
    "Premium gated community - 24/7 security & maintenance"
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* /* Navigation */ }
        <nav className="fixed top-0 w-full bg-[#ffffff81] backdrop-blur-[28px] shadow-lg z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
            src={logo}
            alt="Pawna Lake Villas Logo"
            className="h-16 w-auto"
              />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'About', 'Amenities', 'Gallery', 'Specifications', 'Location', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50"
            >
              {item}
            </button>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
            </div>
          </div>

          {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Amenities', 'Gallery', 'Specifications', 'Location', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 hover:bg-blue-50"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hidden md:flex relative h-screen items-center justify-center overflow-hidden">
 {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
           muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
            {/* Fallback background image if video doesn't load */}
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${banner2})` }}
            />
          </video>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <ChevronDown
            className="text-white animate-bounce cursor-pointer"
            size={32}
            onClick={() => scrollToSection('footer')}
          />
        </div>
        </div>
      </section>
     <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden lg:hidden">
 {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
           muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video1} type="video/mp4" />
            {/* Fallback background image if video doesn't load */}
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${banner2})` }}
            />
          </video>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <ChevronDown
            className="text-white animate-bounce cursor-pointer"
            size={32}
            onClick={() => scrollToSection('footer')}
          />
        </div>
        </div>
      </section>


      {/* About Section */}
     <section id="about" className={`py-20 bg-gradient-to-r from-blue-50 to-teal-50 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-[#00274d] mb-6">
        Luxury Redefined at
        <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #0a4384, #6392bf)' }}>
          Pawna Lake
        </span>
      </h2>
      <p className="text-xl text-[#00274d] max-w-3xl mx-auto leading-relaxed">
        Experience unparalleled luxury in our exclusive collection of waterfront villas. 
        Nestled just 500 meters from the pristine Pawna Dam, these architectural masterpieces 
        offer the perfect blend of modern sophistication and natural serenity.
      </p>
    </div>

   <div className="grid md:grid-cols-2 gap-12 items-center">
  {/* LEFT: Text Content */}
  <motion.div
    className="space-y-6"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="bg-[#6392bf] bg-opacity-10 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-[#00274d] mb-4">Why Choose Pawna Lake Villas?</h3>
      <ul className="space-y-3 text-[#00274d]">
        <li className="flex items-start">
          <span className="text-[#0a4384] mr-3">✓</span>
          <span>Ultra-exclusive community with only 8 premium villas</span>
        </li>
        <li className="flex items-start">
          <span className="text-[#0a4384] mr-3">✓</span>
          <span>Direct waterfront access with stunning lake views</span>
        </li>
        <li className="flex items-start">
          <span className="text-[#0a4384] mr-3">✓</span>
          <span>Perfect weekend retreat from Mumbai & Pune</span>
        </li>
        <li className="flex items-start">
          <span className="text-[#0a4384] mr-3">✓</span>
          <span>Investment opportunity in premium real estate</span>
        </li>
      </ul>
    </div>

    <div className="bg-[#6392bf] bg-opacity-10 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-[#00274d] mb-4">Luxury Isn't Just About Living</h3>
      <p className="text-[#00274d] leading-relaxed">
        It's about living well. Our villas are designed for those who appreciate the finer things in life – 
        from private swimming pools to meticulously landscaped gardens, every detail has been crafted 
        to provide an unmatched living experience.
      </p>
    </div>
  </motion.div>

  {/* RIGHT: Image */}
  <motion.div
    className="relative"
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div
      className="rounded-2xl p-1 transform hover:rotate-1 transition-all duration-300"
      style={{ backgroundImage: 'linear-gradient(to bottom right, #0a4384, #6392bf)' }}
    >
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&crop=center"
        alt="Luxury Villa"
        className="w-full h-80 object-cover rounded-2xl"
      />
    </div>
    <div className="absolute -bottom-6 -right-6 bg-[#0a4384] text-white p-4 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300">
      <div className="text-center">
        <div className="text-2xl font-bold">8</div>
        <div className="text-xs">Villas Only</div>
      </div>
    </div>
  </motion.div>
</div>

  </div>
</section>
 
{/* <Amenities/> */}
      {/* Amenities Section */}
     <section id="amenities" className={`py-20  transition-all duration-1000 ${isVisible.amenities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  <div className="absolute inset-0 z-0">
          <video
            autoPlay
           muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video2} type="video/mp4" />
            {/* Fallback background image if video doesn't load */}
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${banner2})` }}
            />
          </video>
          
        </div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
    <div className="text-center mb-16 z-30 ">
      <h2 className="text-4xl sm:text-5xl font-bold text-[#00274d] mb-6">
        Premium Amenities &
        <span className="block bg-gradient-to-r from-[#0a4384] to-[#6392bf] bg-clip-text text-transparent">
          Luxury Features
        </span>
      </h2>
      <p className="text-xl text-[#00274d]/80 max-w-3xl mx-auto">
        Every villa comes equipped with world-class amenities designed for your comfort and luxury
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {amenities.map((amenity, index) => (
        <div 
          key={index}
          className="bg-[#ffffff81] backdrop-blur-[28px] p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="bg-gradient-to-br from-[#0a4384] to-[#6392bf] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <amenity.icon className="text-white" size={32} />
          </div>
          <h3 className="text-xl font-bold text-[#00274d] mb-3">{amenity.title}</h3>
          <p className="text-[#00274d]/70 leading-relaxed">{amenity.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Gallery Section */}
     <section
  className="hidden md:block relative px-4 py-10 bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: `url('${tests}')` }}
>

   <section id="gallery" className={` py-10 transition-all duration-1000 ${isVisible.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
  <h2 className="text-4xl sm:text-5xl font-bold text-[#00274d] mb-6">
    Visual Journey of
    <span className="block text-[#6392bf] my-4 ">
      Luxury Living
    </span>
  </h2>
  <p className="text-xl text-[#00274d]/80 max-w-3xl mx-auto">
    Explore the breathtaking beauty and luxurious details of your future home
  </p>
</div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => { setSelectedImage(index); setShowGalleryModal(true); }}
              >
               <img 
      src={image}
      alt={`Villa ${index + 1}`}
      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
    />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <Eye size={24} />
                  </div>
                  <div className="absolute bottom-4 right-4 text-white">
                    <Maximize size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>

         <div className="text-center mt-12">
  <button 
    onClick={() => { setSelectedImage(0); setShowGalleryModal(true); }}
    className="bg-gradient-to-r from-[#0a4384] to-[#6392bf] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-[#0a4384]/40 transform hover:scale-105 transition-all duration-300"
  >
    <Camera className="inline mr-2" size={20} />
    View Full Gallery
  </button>
</div>

        </div>
      </section>
</section>
       <section
  className="relative px-4 py-10 bg-cover bg-center bg-no-repeat bg-fixed lg:hidden"
  style={{ backgroundImage: `url('${tests2}')` }}
>

   <section id="gallery" className={` py-10 transition-all duration-1000 ${isVisible.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
  <h2 className="text-4xl sm:text-5xl font-bold text-[#00274d] mb-6">
    Visual Journey of
    <span className="block text-[#6392bf] my-4 ">
      Luxury Living
    </span>
  </h2>
  <p className="text-xl text-[#00274d]/80 max-w-3xl mx-auto">
    Explore the breathtaking beauty and luxurious details of your future home
  </p>
</div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => { setSelectedImage(index); setShowGalleryModal(true); }}
              >
               <img 
      src={image}
      alt={`Villa ${index + 1}`}
      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
    />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <Eye size={24} />
                  </div>
                  <div className="absolute bottom-4 right-4 text-white">
                    <Maximize size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>

         <div className="text-center mt-12">
  <button 
    onClick={() => { setSelectedImage(0); setShowGalleryModal(true); }}
    className="bg-gradient-to-r from-[#0a4384] to-[#6392bf] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-[#0a4384]/40 transform hover:scale-105 transition-all duration-300"
  >
    <Camera className="inline mr-2" size={20} />
    View Full Gallery
  </button>
</div>

        </div>
      </section>
</section>
     

      {/* Gallery Modal */}
      {showGalleryModal && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={() => setShowGalleryModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X size={32} />
            </button>
            <img 
              src={galleryImages[selectedImage]}
              alt={`Villa ${selectedImage + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="flex justify-center mt-4 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    selectedImage === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Specifications Section */}
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        {specifications1.map((spec, index) => (
          <div
            key={spec.id}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              selectedSpec === index ? 'opacity-20' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute top-0 right-0 w-1/2 h-full"
              style={{
                background: `radial-gradient(ellipse at center, ${spec.accent}15 0%, transparent 70%)`
              }}
            ></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Main Feature */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="mb-8">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                Premium Villa Features
              </span>
              <h1 className="text-6xl font-black mt-4 mb-6 leading-tight">
                Luxury
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Redefined
                </span>
              </h1>
            </div>

            {/* Feature Showcase */}
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-3xl blur-3xl transition-all duration-700"
                style={{ 
                  background: `linear-gradient(135deg, ${currentSpec.accent}40, transparent)`,
                  transform: `scale(${selectedSpec === currentSpec.id ? 1.1 : 0.9})`
                }}
              ></div>
              
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
                <div className="flex items-center mb-8">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mr-6 transition-all duration-500"
                    style={{ backgroundColor: currentSpec.accent }}
                  >
                    <currentSpec.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {currentSpec.title}
                    </h3>
                    <div className="flex items-baseline">
                      <span className="text-5xl font-black text-white mr-3">
                        {currentSpec.value}
                      </span>
                      <span 
                        className="text-xl font-semibold"
                        style={{ color: currentSpec.accent }}
                      >
                        {currentSpec.unit}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {currentSpec.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Specs Navigator */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="space-y-4">
              {specifications1.map((spec, index) => {
                const IconComponent = spec.icon;
                const isActive = selectedSpec === index;
                
                return (
                  <div
                    key={spec.id}
                    className={`group cursor-pointer transform transition-all duration-500 ${
                      isActive ? 'scale-105' : 'hover:scale-102'
                    }`}
                    onClick={() => setSelectedSpec(index)}
                  >
                    <div className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/10 border-white/30 shadow-2xl' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}>
                      {/* Active Indicator */}
                      {isActive && (
                        <div 
                          className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full transition-all duration-300"
                          style={{ backgroundColor: spec.accent }}
                        ></div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div 
                            className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 ${
                              isActive ? 'scale-110 rotate-12' : 'group-hover:scale-105'
                            }`}
                            style={{ 
                              backgroundColor: isActive ? spec.accent : `${spec.accent}40`,
                              boxShadow: isActive ? `0 10px 30px ${spec.accent}30` : 'none'
                            }}
                          >
                            <IconComponent className={`w-6 h-6 transition-colors duration-300 ${
                              isActive ? 'text-white' : 'text-gray-300'
                            }`} />
                          </div>
                          <div>
                            <h4 className={`font-semibold transition-colors duration-300 ${
                              isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                            }`}>
                              {spec.title}
                            </h4>
                            <div className="flex items-baseline">
                              <span className={`font-bold mr-1 transition-all duration-300 ${
                                isActive ? 'text-2xl text-white' : 'text-lg text-gray-400 group-hover:text-white'
                              }`}>
                                {spec.value}
                              </span>
                              <span 
                                className={`text-sm font-medium transition-colors duration-300 ${
                                  isActive ? 'opacity-100' : 'opacity-70'
                                }`}
                                style={{ color: spec.accent }}
                              >
                                {spec.unit}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? 'border-white bg-white' 
                            : 'border-gray-600 group-hover:border-gray-400'
                        }`}>
                          <div 
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              isActive ? 'scale-100' : 'scale-0'
                            }`}
                            style={{ backgroundColor: spec.accent }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress Indicator */}
            <div className="mt-8 flex space-x-2">
              {specifications1.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    selectedSpec === index ? 'w-12 bg-white' : 'w-4 bg-gray-600'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>


     {/* Location Advantages */}
<section id="location" className={`py-10 bg-white transition-all duration-1000 ${isVisible.location ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
   
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-[#00274d] mb-6">
        Prime Location
        <span className="block bg-gradient-to-r from-[#0a4384] to-[#6392bf] bg-clip-text text-transparent">
          Advantages
        </span>
      </h2>
      <p className="text-xl text-[#00274d]/80 max-w-3xl mx-auto">
        Strategically located for the perfect balance of tranquility and accessibility
      </p>
    </div>

    {/* Advantages Grid */}
   <div className="grid lg:grid-cols-2 gap-12 items-center">
  {/* Image with badge - Slide from Left */}
  <motion.div
    className="relative"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="bg-gradient-to-br from-[#0a4384] to-[#6392bf] rounded-2xl p-1 transform hover:rotate-1 transition-all duration-300">
      <img 
        src={dam}
        alt="Pawna Lake Location"
        className="w-full h-80 object-cover rounded-2xl"
      />
    </div>
    <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-xl transform hover:scale-110 transition-all duration-300">
      <div className="text-center">
        <div className="text-sm font-medium text-[#00274d]/80">Distance to Dam</div>
        <div className="text-2xl font-bold text-[#0a4384]">500m</div>
      </div>
    </div>
  </motion.div>

  {/* Location Advantages - Slide from Right */}
  <motion.div
    className="space-y-6"
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    {locationAdvantages.map((advantage, index) => (
      <div 
        key={index}
        className="flex items-start p-4 bg-gradient-to-r from-[#b8cce0] to-[#6392bf] rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="bg-gradient-to-r from-[#0a4384] to-[#6392bf] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
          {index + 1}
        </div>
        <p className="text-[#00274d] font-medium">{advantage}</p>
      </div>
    ))}
  </motion.div>
</div>


    {/* CTA Button */}
    <div className="mt-16 text-center">
      <a 
        href="https://maps.app.goo.gl/XYP2ZAH4rdxQ47WP7"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-gradient-to-r from-[#0a4384] to-[#6392bf] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-[#0a4384]/25 transform hover:scale-105 transition-all duration-300"
      >
        <MapPin className="mr-2" size={20} />
        View on Google Maps
      </a>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Make This
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Dream Home Yours?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't miss this exclusive opportunity. Only 8 villas available in this premium waterfront community.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
  {/* Left Column - Contact Info & Offer */}
  <div className="space-y-8">
    
    {/* Contact Information Card */}
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
      <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
      <div className="space-y-4 text-white">
        
        {/* Phone */}
        <a
          href="tel:8378966777"
          className="flex items-center text-lg hover:text-yellow-400 transition-colors duration-300"
        >
          <Phone className="mr-4 bg-blue-500 p-2 rounded-full text-white" size={40} />
          <div>
            <div className="font-semibold">Call Now</div>
            <div className="text-gray-300">83 789 66 777</div>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:info@pawnalakevillas.com"
          className="flex items-center text-lg hover:text-yellow-400 transition-colors duration-300"
        >
          <Mail className="mr-4 bg-teal-500 p-2 rounded-full text-white" size={40} />
          <div>
            <div className="font-semibold">Email Us</div>
            <div className="text-gray-300">info@pawnalakevillas.com</div>
          </div>
        </a>

        {/* Location */}
        <a
          href="https://maps.app.goo.gl/XYP2ZAH4rdxQ47WP7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg hover:text-yellow-400 transition-colors duration-300"
        >
          <MapPin className="mr-4 bg-green-500 p-2 rounded-full text-white" size={40} />
          <div>
            <div className="font-semibold">Visit Location</div>
            <div className="text-gray-300">Pawna Lake, Lonavala</div>
          </div>
        </a>
      </div>
    </div>

    {/* Limited Offer Card */}
    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md p-8 rounded-2xl border border-yellow-500/30 text-white">
      <h3 className="text-2xl font-bold mb-4 text-yellow-400">Limited Time Offer!</h3>
      <div className="space-y-3 text-lg">
        <div className="flex justify-between">
          <span>Villa Price:</span>
          <span className="font-bold text-yellow-400">₹2.75 Cr</span>
        </div>
        <div className="flex justify-between">
          <span>Available Units:</span>
          <span className="font-bold text-red-400">Only 8 Left!</span>
        </div>
        <div className="flex justify-between">
          <span>Booking Amount:</span>
          <span className="font-bold text-green-400">₹25 Lakhs</span>
        </div>
      </div>
    </div>
  </div>

  {/* Right Column - Form */}
  <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-white">
    <h3 className="text-2xl font-bold mb-6">Schedule Site Visit</h3>
    <form className="space-y-6">
      
      {/* Name */}
      <input
        type="text"
        placeholder="Your Full Name"
        className="w-full p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />

      {/* Phone */}
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />

      {/* Preferred Time */}
      <select className="w-full p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
        <option className="text-black" value="">Preferred Visit Time</option>
        <option className="text-black" value="morning">Morning (9 AM - 12 PM)</option>
        <option className="text-black" value="afternoon">Afternoon (12 PM - 4 PM)</option>
        <option className="text-black" value="evening">Evening (4 PM - 7 PM)</option>
      </select>

      {/* Notes */}
      <textarea
        placeholder="Any specific requirements or questions?"
        rows="4"
        className="w-full p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-yellow-500/25"
      >
        Book My Site Visit Now
      </button>
    </form>
  </div>
</div>


          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl inline-block">
              <h3 className="text-2xl font-bold mb-4">Why Wait?</h3>
              <p className="text-xl text-gray-300 mb-6">
                "Because luxury isn't just about living—it's about living well."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
  {/* Call Now Button */}
  <a 
    href="tel:8378966777"
    className="bg-gradient-to-r from-[#0a4384] to-[#6392bf] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-[#0a4384]/30 transform hover:scale-105 transition-all duration-300"
  >
    Call Now - 83 789 66 777
  </a>

  {/* WhatsApp Inquiry Button */}
  <button 
    onClick={() => window.open('https://wa.me/918378966777?text=Hi, I am interested in Pawna Lake Villas. Please share more details.', '_blank')}
    className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
  >
    WhatsApp Inquiry
  </button>
</div>

            </div>
          </div>
        </div>
       {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <ChevronDown
            className="text-white animate-bounce cursor-pointer"
            size={32}
            onClick={() => scrollToSection('footer')}
          />
        </div> */}
      </section>

     {/* Footer  */}
        <footer id='footer' className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src={logo}
              alt="Pawna Lake Villas Logo"
              className="h-24 w-auto mb-4"
            />
           
            <p className="text-gray-400 leading-relaxed">
              Your private paradise at Pawna Lake. Exclusive luxury waterfront villas 
              designed for those who appreciate the finest things in life.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a
          href="/Home"
          className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
          Home
              </a>
              {['About', 'Amenities', 'Gallery', 'Specifications', 'Location', 'Contact'].map((link) => (
          <button
            key={link}
            onClick={() => scrollToSection(link.toLowerCase())}
            className="block text-gray-400 hover:text-white transition-colors duration-300"
          >
            {link}
          </button>
              ))}
            </div>
          </div>
          
             <div>
        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
        <div className="space-y-3 text-gray-400">
          <a href="tel:8378966777" className="block cursor-pointer">📞 83 789 66 777</a>
          <a href="mailto:info@pawnalakevillas.com" className="block cursor-pointer">📧 info@pawnalakevillas.com</a>
          <a 
        href="https://maps.app.goo.gl/Zon92PNN4EpR4zvR8" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block cursor-pointer"
          >
        📍 Pawna Lake, Lonavala, Maharashtra
          </a>
          <a href="tel:8378966777" className="block cursor-pointer">💰 Starting from ₹2.75 Cr</a>
        </div>
            </div>

            </div>
            
            <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2025 Pawna Lake Villas. All rights reserved. | RERA Registration Applied</p>
          <div className="mt-4 flex justify-center space-x-6">
            <span className="text-sm">🏆 Premium Real Estate</span>
            <span className="text-sm">🌟 Luxury Living</span>
            <span className="text-sm">🔒 Secure Investment</span>
          </div>
            </div>
          </div>
          
        </footer>

        {/* Floating Call Button */}
   <div className="fixed bottom-6 right-6 z-50">
  <a
    href="tel:8378966777"
    className="flex items-center justify-center bg-gradient-to-r from-[#0a4384] to-[#6392bf] text-white w-14 h-14 rounded-full shadow-lg hover:shadow-[#0a4384]/40 transform hover:scale-110 transition duration-300 animate-pulse"
    aria-label="Call Now"
  >
    <Phone size={24} />
  </a>
</div>


      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button 
          onClick={() => window.open('https://wa.me/918378966777?text=Hi, I am interested in Pawna Lake Villas. Please share more details.', '_blank')}
          className="bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transform hover:scale-110 transition-all duration-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.37-.01-.567-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PawnaLakeVillas;