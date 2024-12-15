import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { FaGift, FaShippingFast, FaCreditCard, FaPercent } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaGift />,
    text: "هدية فاخرة مع كل طلب"
  },
  {
    icon: <FaShippingFast />,
    text: "شحن سريع لجميع المناطق"
  },
  {
    icon: <FaCreditCard />,
    text: "دفع آمن ومضمون"
  },
  {
    icon: <FaPercent />,
    text: "ضمان استرجاع المبلغ"
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-luxury-dark/5 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-luxury-light via-luxury to-luxury-dark rounded-[2rem] blur-lg opacity-50"></div>
            
            {/* Main content */}
            <div className="relative bg-gradient-to-b from-luxury-dark/40 to-black rounded-[2rem] p-8 backdrop-blur-sm">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-luxury-light to-luxury bg-clip-text text-transparent">
                  عرض خاص ومحدود
                </h2>
                <div className="h-1 w-32 mx-auto bg-gradient-to-r from-luxury-light to-luxury"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                <div className="text-center md:text-right">
                  <p className="text-xl mb-4 text-gray-300">
                    كمية محدودة متبقية
                  </p>
                  <div className="inline-block bg-luxury-dark/50 rounded-full px-6 py-2 border border-luxury-light">
                    <p className="text-2xl font-bold text-luxury-light">
                      9 / 200 قطعة فقط
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-lg text-gray-400 mb-2">السعر الأصلي</p>
                  <div className="relative inline-block">
                    <span className="text-3xl text-gray-500 line-through">$300</span>
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-luxury-light transform -rotate-12"></div>
                  </div>
                  <p className="text-lg text-luxury-light mt-4">السعر بعد الخصم</p>
                  <p className="text-5xl font-bold text-luxury-light">$150</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl text-luxury-light mb-2">{benefit.icon}</div>
                    <p className="text-sm text-gray-300">{benefit.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-luxury to-luxury-dark hover:from-luxury-light hover:to-luxury">
                  اطلب الآن
                </Button>
                <Button className="bg-black/50 backdrop-blur-sm border-2 border-luxury hover:border-luxury-light">
                  شحن مجاني للطلبات
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}