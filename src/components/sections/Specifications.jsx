import { motion } from 'framer-motion';
import { FaVial, FaClock, FaLeaf, FaRecycle } from 'react-icons/fa';

const specs = [
  {
    icon: <FaVial />,
    title: "حجم الزجاجة",
    description: "100 مل"
  },
  {
    icon: <FaClock />,
    title: "تركيز العطر",
    description: "Eau de Parfum، لضمان الثبات"
  },
  {
    icon: <FaLeaf />,
    title: "المكونات",
    description: "مستوردة من فرنسا ومنتقاة بعناية"
  },
  {
    icon: <FaRecycle />,
    title: "التصميم",
    description: "زجاجة أنيقة وقابلة لإعادة التدوير"
  }
];

export default function Specifications() {
  return (
    <section className="py-20 bg-gradient-to-b from-luxury-dark/20 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-luxury-light">
          المواصفات الأساسية
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="spec-card group"
            >
              <div className="text-3xl text-luxury-light mb-4 flex justify-center transform group-hover:scale-110 transition-transform">
                {spec.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-luxury-light">
                {spec.title}
              </h3>
              <p className="text-gray-300 text-center">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}