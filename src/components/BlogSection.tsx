
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';
import type { LucideIcon } from 'lucide-react';
import {
  Cpu,
  Video,
  PenTool,
  Activity,
  Smile,
  Settings,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const categoryIcons: Record<string, LucideIcon> = {
  AI: Cpu,
  Healthtech: Activity,
  Telemedicine: Video,
  Design: PenTool,
  Lifestyle: Smile,
  Engineering: Settings,
};

const getIcon = (category: string): LucideIcon => {
  return categoryIcons[category] || Activity;
};

const BlogSection: React.FC = () => {
  const maxScrolls = 3;
  const [scrollCount, setScrollCount] = React.useState(0);
  const apiRef = React.useRef<CarouselApi | null>(null);

  const handleNext = () => {
    if (scrollCount >= maxScrolls) return;
    apiRef.current?.scrollNext();
    setScrollCount((c) => Math.min(c + 1, maxScrolls));
  };

  const handlePrev = () => {
    if (scrollCount <= 0) return;
    apiRef.current?.scrollPrev();
    setScrollCount((c) => Math.max(c - 1, 0));
  };

  return (
    <section id="blog" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Thoughts</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharing insights on healthcare technology, creative processes, and everything in between.
          </p>
        </motion.div>

        <div className="flex items-center gap-4">
          <Button
            onClick={handlePrev}
            disabled={scrollCount === 0}
            variant="outline"
            size="icon"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Carousel
            setApi={(api) => (apiRef.current = api)}
            opts={{ slidesToScroll: 1, draggable: false }}
            className="flex-1"
          >
            <CarouselContent>
            {blogPosts.map((post, index) => {
              const Icon = getIcon(post.category)
              return (
                <CarouselItem
                  key={post.title}
                  className="basis-full md:basis-1/4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
                  >
                    <Link to={post.url} className="block h-full group">
                      <Card className="h-full min-h-[22rem] flex flex-col border border-border/80 rounded-lg overflow-hidden hover:shadow-lg transition-colors">
                        <CardHeader className="pb-4 flex items-start gap-3">
                          <div className="p-2 rounded-md bg-muted/50">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <CardTitle className="text-lg md:text-xl group-hover:text-primary">
                              {post.title}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground italic">
                              {new Date(post.date).toLocaleDateString()}
                            </p>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col space-y-4">
                          <p className="text-muted-foreground leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="mt-auto">
                            <Badge variant="outline" className="mb-2">
                              {post.category}
                            </Badge>
                            <p className="text-primary font-medium group-hover:underline">
                              Read More →
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                </CarouselItem>
              )
            })}
            <CarouselItem className="basis-full md:basis-1/4">
              <Link to="/blog" className="block h-full group">
                <Card className="h-full min-h-[22rem] flex flex-col items-center justify-center border-dashed border-2">
                  <CardHeader className="pb-2 text-center">
                    <CardTitle>Show More</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl">→</p>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          </CarouselContent>
          </Carousel>

          <Button
            onClick={handleNext}
            disabled={scrollCount === maxScrolls}
            variant="outline"
            size="icon"
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
