import { motion } from "framer-motion";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const faqs = [
  {
    question: "هل العطر مناسب للبشرة الحساسة؟",
    answer: "نعم، العطر مصنوع من مكونات طبيعية وآمنة لجميع أنواع البشرة.",
  },
  {
    question: "كم يدوم ثبات العطر؟",
    answer:
      "بفضل تركيز Eau de Parfum، العطر يدوم حتى 12 ساعة على البشرة وأكثر على الملابس.",
  },
  {
    question: "هل يمكنني إرجاع المنتج؟",
    answer: "نعم، نوفر ضمان استبدال أو إرجاع خلال 30 يومًا من الشراء.",
  },
  {
    question: "هل يناسب العطر جميع المناسبات؟",
    answer: "بالتأكيد، يناسب العطر الاستخدام اليومي والمناسبات الخاصة.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-[#9d84b7] font-bold text-center mb-12 text-gold-light">
          الأسئلة الشائعة
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-right bg-[#2d1f44] p-4 rounded-lg flex justify-between items-center z-10 relative"
              >
                <span className="font-bold">{faq.question}</span>
                <span className="text-gold-light">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "linear" }}
                  className="bg-[#5b3e8a] p-4 pb-4 rounded-b-lg -mt-1 z-1"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
