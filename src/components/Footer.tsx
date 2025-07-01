
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const createConfetti = () => {
    const colors = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--secondary))'];
    
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 2 + 's';
      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 2000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('jonty@example.com');
    createConfetti();
  };

  return (
    <footer id="contact" className="py-20 px-4 bg-muted/10 border-t border-border">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Always excited to discuss new projects, collaborations, or just chat about the intersection of tech and creativity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={copyEmail}
              className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-200"
            >
              Copy Email 📧
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('#', '_blank')}
              className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-200"
            >
              Download Resume 📄
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://twitter.com/jonty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/in/jonty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jonty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
            >
              GitHub
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © 2025 Jonty Chudasama. Built with React, TypeScript, and lots of ☕
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
