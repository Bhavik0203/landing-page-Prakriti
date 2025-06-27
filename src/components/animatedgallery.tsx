import React, { useState, useEffect } from 'react';
import { Play, Heart, Share2, Eye, ZoomIn, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const AnimatedGallery = () => {
  const [isVisible, setIsVisible] = useState({ gallery: false });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery images - first 4 will be displayed as main grid
  const galleryImages = [
    { 
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=400&fit=crop",
      title: "Misty Forest",
      category: "Nature",
      views: "2.3k"
    },
    { 
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      title: "Mountain Peak",
      category: "Landscape",
      views: "1.8k"
    },
    { 
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=400&fit=crop",
      title: "Ocean Waves",
      category: "Seascape",
      views: "3.1k"
    },
    { 
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=400&fit=crop",
      title: "Forest Path",
      category: "Adventure",
      views: "2.7k"
    },
    // Slider images
    { 
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&h=400&fit=crop",
      title: "Sunset Lake",
      category: "Reflection",
      views: "4.2k"
    },
    { 
      url: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&h=400&fit=crop",
      title: "Valley View",
      category: "Vista",
      views: "1.9k"
    },
    { 
      url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&h=400&fit=crop",
      title: "Wildflowers",
      category: "Flora",
      views: "2.5k"
    },
    { 
      url: "https://images.unsplash.com/photo-1506330968436-82b6ba113b9c?w=500&h=400&fit=crop",
      title: "River Rapids",
      category: "Water",
      views: "3.4k"
    },
    { 
      url: "https://images.unsplash.com/photo-1464822759844-d150baec013a?w=500&h=400&fit=crop",
      title: "Rocky Coast",
      category: "Coast",
      views: "2.1k"
    },
    { 
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=400&fit=crop",
      title: "Starry Night",
      category: "Sky",
      views: "5.2k"
    }
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
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible.gallery ? 'animate-fade-in-up' : 'opacity-0'
      } ${isSlider ? 'flex-shrink-0' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHoveredIndex(isSlider ? `slider-${index}` : index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image.url} 
          alt={image.title}
          className="w-full h-72 object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          
          <div className="absolute top-4 right-4 flex space-x-2">
            <button 
              onClick={() => toggleLike(isSlider ? `slider-${index}` : index)}
              className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 ${
                likedImages.has(isSlider ? `slider-${index}` : index) 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Heart className={`w-4 h-4 ${likedImages.has(isSlider ? `slider-${index}` : index) ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all duration-300 transform hover:scale-110">
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-all duration-500 hover:bg-white cursor-pointer shadow-lg">
              <ZoomIn className="w-8 h-8 text-gray-800" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
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
          </div>
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
    <div className=" bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      <section 
        id="gallery" 
        className={`py-20 transition-all duration-1000 transform ${
          isVisible.gallery ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Animated Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-3xl -z-10 rounded-full"></div>
            <h2 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.gallery ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
            }`}>
              Gallery 📸
            </h2>
            <div className={`h-1 w-32 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6 rounded-full transition-all duration-1000 ${
              isVisible.gallery ? 'scale-100' : 'scale-0'
            }`}></div>
            <p className="text-2xl text-gray-600 font-light">Experience the natural beauty of Prakriti</p>
            <div className="flex justify-center space-x-2 mt-4">
              {[1,2,3].map((i) => (
                <div key={i} className={`w-2 h-2 bg-green-400 rounded-full animate-bounce`} style={{animationDelay: `${i * 0.2}s`}}></div>
              ))}
            </div>
          </div>

          {/* Main Featured Gallery - 4 Images */}
          <div className="mb-20">
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
          <div className="text-center">
            <button className="group bg-gradient-to-r from-green-500 to-blue-500 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <span className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                View All {galleryImages.length} Photos
                <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</div>
              </span>
            </button>
          </div>
        </div>
      </section>

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