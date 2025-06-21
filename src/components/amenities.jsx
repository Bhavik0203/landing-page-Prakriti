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

const Amenities = ({ isVisible }) => {
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

  return (
    <section
      id="amenities"
      className={`py-20 bg-[#b8cce0] transition-all duration-1000 ${
        isVisible.amenities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white/30 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-white/20 group"
            >
              <div className="bg-gradient-to-br from-[#0a4384] to-[#6392bf] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-[10deg] transition-all duration-300">
                <amenity.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#00274d] mb-3">{amenity.title}</h3>
              <p className="text-[#00274d]/70 leading-relaxed">{amenity.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;
