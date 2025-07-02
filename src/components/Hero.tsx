
import React from 'react'
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ContactPopover from './ContactPopover';
import { useTheme } from '@/contexts/ThemeContext'

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { theme } = useTheme()

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center px-4 ${theme === 'night' ? 'bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]' : ''}`}
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-6xl text-primary-foreground font-bold shadow-2xl">
            J
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Outside the social feed, there’s a whole other me.
        </motion.h1>

        <motion.p
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Here’s the stuff that doesn’t fit in a reel or a tweet. Come poke around — it’s safe, I swear.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('#projects')}
            className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-200"
          >
            Peek at My Projects
          </Button>
          <ContactPopover />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
