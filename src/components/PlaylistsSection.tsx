import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { playlists, Playlist } from '@/data/playlists'

const PlaylistsSection: React.FC = () => {
  const [selected, setSelected] = useState<Playlist | null>(null)
  const [loading, setLoading] = useState(false)

  const openPlaylist = (pl: Playlist) => {
    setSelected(pl)
    setLoading(true)
  }

  return (
    <section id="playlists" className="py-20 px-4 bg-muted/20">
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
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {playlists.map((playlist) => (
              <motion.button
                key={playlist.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openPlaylist(playlist)}
                className="text-left"
              >
                <Card className="cursor-pointer hover:shadow-lg transition-all">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={playlist.image}
                      alt={playlist.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{playlist.name}</h3>
                    {playlist.description && (
                      <p className="text-sm text-muted-foreground">
                        {playlist.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {selected.name}
            </h3>
            {selected.description && (
              <p className="text-muted-foreground mb-4">
                {selected.description}
              </p>
            )}
            <ul className="mb-6 divide-y border rounded-md">
              {selected.tracks.map((track) => (
                <li key={track.number} className="flex items-center px-4 py-2 text-sm">
                  <span className="w-6 text-muted-foreground">{track.number}</span>
                  <span className="flex-1 font-medium pl-2">{track.title}</span>
                  <span className="text-muted-foreground italic pr-2">
                    {track.artist}
                  </span>
                  <span className="w-12 text-right text-muted-foreground">
                    {track.duration}
                  </span>
                </li>
              ))}
            </ul>
            <div className="w-full h-[380px] border rounded-lg overflow-hidden relative">
              {loading && <Skeleton className="absolute inset-0" />}
              <iframe
                src={selected.spotifyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full h-full"
                onLoad={() => setLoading(false)}
              ></iframe>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default PlaylistsSection
