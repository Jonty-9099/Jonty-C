import React from 'react'

export interface BlogArticle {
  slug: string
  title: string
  date: string
  author: string
  image: string
  category: string
  tags: string[]
  content: React.ReactElement
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'pharmacy-tech-future',
    title: 'The Future of Pharmacy Tech',
    date: '2024-06-19',
    author: 'Jonty Chudasama',
    image: 'https://placehold.co/1200x600',
    category: 'Healthtech',
    tags: ['Pharmacy', 'Automation', 'AI'],
    content: (
      <>
        <p>
          Technology is reshaping how pharmacists work day to day. Automation
          handles repetitive dispensing tasks while AI surfaces potential drug
          interactions faster than a human ever could.
        </p>
        <h2 className="mt-8 text-2xl font-bold">Opportunities Ahead</h2>
        <p>
          By embracing digital tools, pharmacies free up staff to focus on
          direct patient education and quality care. Expect to see more remote
          consultations and smart refill reminders in the near future.
        </p>
        <blockquote className="border-l-4 pl-4 my-4 italic text-muted-foreground">
          "Automation should augment pharmacists, not replace them."
        </blockquote>
        <p>
          The transition won&apos;t always be smooth, but teams that iterate early
          will build healthier operations for everyone involved.
        </p>
        <ul className="list-disc ml-6 mt-4">
          <li>Better adherence tracking</li>
          <li>Increased medication safety</li>
          <li>Improved workflow efficiency</li>
        </ul>
      </>
    )
  },
  {
    slug: 'embracing-virtual-care',
    title: 'Embracing Virtual Care',
    date: '2024-07-02',
    author: 'Jonty Chudasama',
    image: 'https://placehold.co/1200x600',
    category: 'Telemedicine',
    tags: ['Telehealth', 'Patient Experience'],
    content: (
      <>
        <p>
          Virtual care isn&apos;t just a pandemic trend—it&apos;s a fundamental shift in
          how we approach patient engagement. The convenience of video visits
          keeps more people on track with follow ups and routine screenings.
        </p>
        <p>
          However, building trust in a digital setting requires thoughtful design
          and clear communication. Strong provider-patient relationships remain
          the cornerstone of great health outcomes.
        </p>
      </>
    )
  },
  {
    slug: 'design-thinking-healthtech',
    title: 'Design Thinking in Healthtech',
    date: '2024-06-25',
    author: 'Jonty Chudasama',
    image: 'https://placehold.co/1200x600',
    category: 'Design',
    tags: ['UX', 'Innovation'],
    content: (
      <>
        <p>
          Human-centered design methods help uncover hidden pain points within
          clinical workflows. By prototyping early and often, teams discover
          elegant solutions that truly serve clinicians and patients alike.
        </p>
        <p>
          From journey mapping to usability testing, the design thinking toolkit
          keeps development grounded in empathy.
        </p>
      </>
    )
  },
  {
    slug: 'ai-ethics-clinical-decision-support',
    title: 'AI Ethics in Clinical Decision Support',
    date: '2024-06-30',
    author: 'Jonty Chudasama',
    image: 'https://placehold.co/1200x600',
    category: 'AI',
    tags: ['Ethics', 'Machine Learning'],
    content: (
      <>
        <p>
          Powerful algorithms can surface treatment recommendations within
          seconds. Yet clinicians must understand how those models are built and
          whether any biases lurk in the training data.
        </p>
        <p>
          Transparency and ongoing monitoring are key to keeping AI a helpful
          partner instead of a risky black box.
        </p>
      </>
    )
  }
]

export const getArticleBySlug = (slug: string) =>
  blogArticles.find((a) => a.slug === slug)
