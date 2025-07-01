
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { people } from '@/data/people';

const PeopleSection: React.FC = () => {
  console.log('PeopleSection rendering');
  console.log('People data:', people);
  
  return (
    <section id="people" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">People I Like & Why</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Incredible humans who inspire my work and thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {people.map((person, index) => (
            <motion.a
              key={person.name}
              href={person.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.12,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.97 }}
              className="block"
            >
              <Card className="hover:shadow-lg transition-all duration-300 h-full border rounded-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg">{person.name}</h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{person.blurb}</p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
