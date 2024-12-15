import { motion } from "framer-motion";
import { FaStar, FaClock, FaGem, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaStar />,
    title: "تركيبة حصرية",
    description:
      "مزيج متناغم من النفحات الشرقية والزهور الفاخرة المصممة لتناسب أرقى الأذواق.",
  },
  {
    icon: <FaClock />,
    title: "ثبات يدوم طويلاً",
    description:
      "يوفر رائحة جذابة تدوم لساعات طويلة، لتبقى متألقًا طوال اليوم.",
  },
  {
    icon: <FaGem />,
    title: "تصميم زجاجة فاخر",
    description:
      "يعكس الفخامة والذوق الرفيع، مثالي كهدية أو إضافة إلى مجموعتك الخاصة.",
  },
  {
    icon: <FaUsers />,
    title: "مناسب للجنسين",
    description: "عطر راقٍ يناسب الرجال والنساء على حد سواء.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-luxury-dark/20 to-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-luxury-light rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-luxury-light">
            لماذا تختار
            <br /> Euforia Esece؟
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-luxury-light via-luxury to-luxury-dark"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card Background with Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-luxury-light to-luxury rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

              {/* Card Content */}
              <div className="relative bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-luxury/20 hover:border-luxury/40 transition-colors">
                <div className="text-4xl text-luxury-light mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-luxury-light">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
