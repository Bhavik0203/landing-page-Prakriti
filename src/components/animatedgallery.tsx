import React, { useState, useEffect } from 'react';
import { Play, Heart, Share2, Eye, ZoomIn, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';
// @ts-ignore
import mistyForest from "../assets/img2.jpg";
import mountainPeak from "../assets/img3.jpg";
import oceanWaves from "../assets/img4.jpg";
import forestPath from "../assets/img5.jpg";
import sunsetLake from "../assets/img1.png";
import valleyView from "../assets/img.png";
import valleyView1 from "../assets/img6.jpg";

 

// Adjust the path as necessary
const AnimatedGallery = () => {
  const [isVisible, setIsVisible] = useState({ gallery: false });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Gallery images - first 4 will be displayed as main grid
  const galleryImages = [
  { 
    url: mistyForest,
    title: "Misty Forest",
    category: "Nature",
    views: "2.3k"
  },
  { 
    url: mountainPeak,
    title: "Mountain Peak",
    category: "Landscape",
    views: "1.8k"
  },
  { 
    url: oceanWaves,
    title: "Ocean Waves",
    category: "Seascape",
    views: "3.1k"
  },
  { 
    url: forestPath,
    title: "Forest Path",
    category: "Adventure",
    views: "2.7k"
  },
  { 
    url: sunsetLake,
    title: "Sunset Lake",
    category: "Reflection",
    views: "4.2k"
  },
  { 
    url: valleyView,
    title: "Valley View",
    category: "Vista",
    views: "1.9k"
  },
  { 
    url: valleyView1,
    title: "Valley View",
    category: "Vista",
    views: "1.9k"
  },
 
];


  const mainImages = galleryImages.slice(0, 4);
  const sliderImages = galleryImages.slice(4);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(sliderImages.length / itemsPerSlide);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({ gallery: true });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Handle modal functions
  const openModal = (imageIndex) => {
    setModalImageIndex(imageIndex);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Handle keyboard navigation in modal
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (modalOpen) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextModalImage();
        if (e.key === 'ArrowLeft') prevModalImage();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [modalOpen]);

  const toggleLike = (index) => {
    const newLiked = new Set(likedImages);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedImages(newLiked);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const renderImageCard = (image, index, isSlider = false) => (
    <div 
      key={index} 
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
        isVisible.gallery ? 'animate-fade-in-up' : 'opacity-0'
      } ${isSlider ? 'flex-shrink-0' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHoveredIndex(isSlider ? `slider-${index}` : index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => openModal(isSlider ? index + 4 : index)} // Adjust index for slider images
    >
      <div className="relative overflow-hidden">
        <img 
          src={image.url} 
          alt={image.title}
          className="w-full h-72 object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          
          {/* <div className="absolute top-4 right-4 flex space-x-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleLike(isSlider ? `slider-${index}` : index);
              }}
              className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 ${
                likedImages.has(isSlider ? `slider-${index}` : index) 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Heart className={`w-4 h-4 ${likedImages.has(isSlider ? `slider-${index}` : index) ? 'fill-current' : ''}`} />
            </button>
            <button 
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div> */}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-all duration-500 hover:bg-white shadow-lg">
              <ZoomIn className="w-8 h-8 text-gray-800" />
            </div>
          </div>

          {/* <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full font-medium">
                {image.category}
              </span>
              <div className="flex items-center text-white/80 text-xs">
                <Eye className="w-3 h-3 mr-1" />
                {image.views}
              </div>
            </div>
            <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
            <div className="flex items-center">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
              <span className="text-white/80 text-xs ml-2">4.8</span>
            </div>
          </div> */}
        </div>

        <div className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ${
          hoveredIndex === (isSlider ? `slider-${index}` : index) ? 'translate-x-full' : ''
        }`}></div>

        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-400/50 transition-all duration-500"></div>
      </div>

      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-bounce"></div>
    </div>
  );

  return (
    <div className="bg-blue-50">
      <section 
        id="gallery" 
        className={`py-10 transition-all duration-1000 transform ${
          isVisible.gallery ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Animated Header */}
          <div className="text-center mb-10 relative">
            <div className="absolute inset-0  blur-3xl -z-10 rounded-full"></div>
            <h2 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.gallery ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
            }`}>
             
            </h2>
              <h2 className="text-5xl md:text-5xl font-black text-gray/900 mb-4 leading-tight drop-shadow-2xl">
 Our <span className=" text-green-400"> Gallery </span>
          </h2>
            <div className={`h-1 w-32 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6 rounded-full transition-all duration-1000 ${
              isVisible.gallery ? 'scale-100' : 'scale-0'
            }`}></div>
            <p className="text-2xl text-gray-600 font-light">Click on any image to view full size</p>
            <div className="flex justify-center space-x-2 mt-4">
              {[1,2,3].map((i) => (
                <div key={i} className={`w-2 h-2 bg-green-400 rounded-full animate-bounce`} style={{animationDelay: `${i * 0.2}s`}}></div>
              ))}
            </div>
          </div>

          {/* Main Featured Gallery - 4 Images */}
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Collection</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mainImages.map((image, index) => renderImageCard(image, index))}
            </div>
          </div>

          {/* More Adventures Slider */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-gray-800">More Adventures</h3>
              <div className="flex space-x-2">
                <button 
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-green-50 group"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-green-50 group"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
                </button>
              </div>
            </div>

            {/* Slider Container */}
            <div className="relative overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full flex gap-6">
                    {sliderImages
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((image, imageIndex) => (
                        <div key={imageIndex} className="flex-1">
                          {renderImageCard(image, slideIndex * itemsPerSlide + imageIndex, true)}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-green-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* View All Button */}
          {/* <div className="text-center">
            <button className="group bg-gradient-to-r from-green-500 to-blue-500 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <span className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                View All {galleryImages.length} Photos
                <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</div>
              </span>
            </button>
          </div> */}
        </div>
      </section>

      {/* Modal Lightbox */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 transform hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevModalImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextModalImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Main Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={galleryImages[modalImageIndex].url}
                alt={galleryImages[modalImageIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Info */}
              {/* <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{galleryImages[modalImageIndex].title}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="bg-green-500 px-2 py-1 rounded-full text-xs">
                        {galleryImages[modalImageIndex].category}
                      </span>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {galleryImages[modalImageIndex].views}
                      </div>
                      <div className="flex items-center">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-1 text-xs">4.8</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm">
                    {modalImageIndex + 1} / {galleryImages.length}
                  </div>
                </div>
              </div> */}
            </div>

            {/* Thumbnail Navigation */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto p-2">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setModalImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    modalImageIndex === index 
                      ? 'ring-2 ring-white scale-110' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AnimatedGallery;