
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { playlists } from '@/data/playlists';

const PlaylistsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('playlist-0');

  return (
    <section id="playlists" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Playlists</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The soundtracks to my creative process and deep work sessions.
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
              <CardTitle>My Playlists</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-6">
                  {playlists.map((playlist, index) => (
                    <motion.div
                      key={`playlist-${index}`}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.1 }}
                    >
                      <TabsTrigger
                        value={`playlist-${index}`}
                        className="text-sm px-3 py-2"
                      >
                        {playlist.name}
                      </TabsTrigger>
                    </motion.div>
                  ))}
                </TabsList>

                {playlists.map((playlist, index) => (
                  <TabsContent
                    key={`playlist-${index}`}
                    value={`playlist-${index}`}
                    className="mt-0"
                  >
                    <div className="w-full h-[380px]">
                      <iframe
                        src={playlist.spotifyUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading={activeTab === `playlist-${index}` ? "eager" : "lazy"}
                        className="rounded-lg border border-border"
                      ></iframe>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PlaylistsSection;
