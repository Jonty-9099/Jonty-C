
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Instagram, Facebook, X } from 'lucide-react';

const ContactPopover: React.FC = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jontysayshi/',
      icon: Instagram,
      ariaLabel: 'Follow Jonty on Instagram'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/jonty.chudasama/',
      icon: Facebook,
      ariaLabel: 'Connect with Jonty on Facebook'
    },
    {
      name: 'VSCO',
      url: 'https://vsco.co/jontychudasama303/gallery',
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ),
      ariaLabel: 'View Jonty\'s VSCO gallery'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@jontychudasama',
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      ariaLabel: 'Follow Jonty on TikTok'
    },
    {
      name: 'X',
      url: 'https://x.com/jonty46637104?s=21',
      icon: X,
      ariaLabel: 'Follow Jonty on X (Twitter)'
    }
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.08 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 transition-transform duration-200"
          >
            Drop Me a Hello 👋
          </Button>
        </motion.div>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center">Let's Connect!</h3>
          <div className="grid grid-cols-3 gap-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-6 h-6" />
                  <span className="text-sm font-medium">{link.name}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ContactPopover;
