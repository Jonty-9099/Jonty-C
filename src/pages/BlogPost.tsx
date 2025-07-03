import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { blogArticles, getArticleBySlug } from '@/data/blogArticles'

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const article = getArticleBySlug(slug ?? '')

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [slug])

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Article not found.</p>
      </div>
    )
  }

  const related = blogArticles.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-6">
        <div className="container mx-auto max-w-3xl px-4">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/#blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{article.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <motion.h1
            className="text-4xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {article.title}
          </motion.h1>
          <p className="text-sm text-muted-foreground mb-4">
            {new Date(article.date).toLocaleDateString()} • {article.author}
          </p>
          <img
            src={article.image}
            alt=""
            className="w-full h-auto rounded-lg mb-6"
          />
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="outline">{article.category}</Badge>
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            {article.content}
          </article>
          <div className="mt-8">
            <Link
              to="/#blog"
              className="text-primary hover:underline font-medium"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>

        <section className="mt-16 bg-muted/20 py-12">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Link to={`/blog/${post.slug}`} className="block group h-full">
                    <Card className="h-full flex flex-col">
                      <CardHeader className="pb-4">
                        <CardTitle className="group-hover:text-primary text-lg">
                          {post.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground italic">
                          {new Date(post.date).toLocaleDateString()}
                        </p>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-muted-foreground mb-2">
                          {post.category}
                        </p>
                        <p className="text-primary font-medium">Read More →</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default BlogPost
