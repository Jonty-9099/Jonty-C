
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { purchases } from '@/data/purchases';

const PurchasesSection: React.FC = () => {
  const duplicated = [...purchases, ...purchases];

  return (
    <section className="py-20 px-4 bg-muted/20 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Purchases</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Objects that inspire my work and creative process.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-4">
          {duplicated.map((purchase, index) => (
            <motion.div
              key={purchase.item}
              className="w-[300px] shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={purchase.image}
                    alt={purchase.item}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{purchase.item}</h3>
                  <p className="text-primary font-medium mb-1">{purchase.price}</p>
                  <p className="text-muted-foreground text-sm">{purchase.why}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurchasesSection;
