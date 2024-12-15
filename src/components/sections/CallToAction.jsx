import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-luxury-dark/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-luxury-light">
            اطلبه الآن قبل نفاد الكمية!
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            كن من المحظوظين واحصل على عطر Euphoria Essence الفاخر. 
            عطر استثنائي يجمع بين الأصالة والفخامة، ويمنحك إحساسًا فريدًا بالتميز.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>اطلب الآن</Button>
            <Button className="bg-black/50 border-2 border-luxury-light">
              تواصل معنا
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}