import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function Pricing() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#2d1f44] rounded-2xl p-8 "
          >
            <div className="text-center mb-8 ">
              <h2 className="text-5xl font-bold mb-4 text-gold-light">
                عرض خاص
              </h2>
              <div className="flex flex-col items-center mb-8">
                <div className="text-4xl font-bold mb-2 bg-white rounded-sm text-[#2d1f44] py-2">
                  <span className="line-through text-2xl text-gray-500">
                    $300
                  </span>
                  <span className="text-gold-light text-5xl  mx-3">$150</span>
                </div>
                <p className="text-xl text-gold-light">وفر 50% لفترة محدودة!</p>
              </div>
              <p className="text-xl mb-4">
                يتم إنتاج كميات محدودة من Euforia Esece.
              </p>
              <p className="text-2xl font-bold text-gold-light mb-4">
                9 / 200 قطعة متبقية فقط
              </p>
            </div>

            <div className="text-center">
              <Button className="mb-4">اطلب الآن واحصل على شحن مجاني!</Button>
              <p className="text-sm text-gray-400">
                لا تفوت الفرصة للحصول على هذا العطر الفريد الذي سيغير حياتك
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
