
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const PodcastsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('my-first-million');

  const podcasts = [
    {
      id: 'my-first-million',
      name: 'My First Million',
      embedUrl: 'https://open.spotify.com/embed/show/3mliji9352UAk3XnWElnDV'
    },
    {
      id: 'hidden-brain',
      name: 'Hidden Brain', 
      embedUrl: 'https://open.spotify.com/embed/show/20Gf4IAauFrfj7RBkjcWxh'
    },
    {
      id: 'other-shows',
      name: 'Other Shows',
      embedUrl: null
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Podcasts on Repeat</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Long-form conversations that keep my curiosity buzzing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Featured Shows</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  {podcasts.map((podcast) => (
                    <motion.div
                      key={podcast.id}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.1 }}
                    >
                      <TabsTrigger
                        value={podcast.id}
                        className="text-sm px-3 py-2"
                      >
                        {podcast.name}
                      </TabsTrigger>
                    </motion.div>
                  ))}
                </TabsList>

                <AnimatePresence mode="wait">
                  {podcasts.map((podcast) => (
                    <TabsContent
                      key={podcast.id}
                      value={podcast.id}
                      className="mt-0"
                    >
                      {podcast.embedUrl ? (
                        <div className="w-full h-40 sm:h-52 md:h-[232px]">
                          <iframe
                            src={podcast.embedUrl}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading={activeTab === podcast.id ? "eager" : "lazy"}
                            className="rounded-lg border border-border w-full h-full"
                          ></iframe>
                        </div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.4 }}
                          className="flex items-center justify-center h-40 sm:h-52 md:h-[232px] bg-muted/50 rounded-lg border border-border"
                        >
                          <p className="text-muted-foreground text-center max-w-md px-6 leading-relaxed">
                            The mega-shows everybody quotes? I skim them, but not often enough to give them real estate here.
                          </p>
                        </motion.div>
                      )}
                    </TabsContent>
                  ))}
                </AnimatePresence>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PodcastsSection;
