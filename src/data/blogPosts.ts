
export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  url: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "The Future of Pharmacy Tech",
    date: "2024-06-19",
    excerpt:
      "Exploring how automation and AI are transforming pharmaceutical workflows and patient care delivery.",
    url: "/blog/pharmacy-tech-future",
    category: "Healthtech",
  },
  {
    title: "Embracing Virtual Care",
    date: "2024-07-02",
    excerpt: "How telemedicine is reshaping patient engagement and healthcare delivery models.",
    url: "/blog/embracing-virtual-care",
    category: "Telemedicine",
  },
  {
    title: "Design Thinking in Healthtech",
    date: "2024-06-25",
    excerpt: "Exploring how human-centered design drives innovation in digital health solutions.",
    url: "/blog/design-thinking-healthtech",
    category: "Design",
  },
  {
    title: "AI Ethics in Clinical Decision Support",
    date: "2024-06-30",
    excerpt: "Addressing the ethical considerations of deploying AI in patient care recommendations.",
    url: "/blog/ai-ethics-clinical-decision-support",
    category: "AI",
  },
  {
    title: "The Power of Creative Hobbies",
    date: "2024-07-10",
    excerpt: "Why stepping away from the screen to pursue crafts keeps me sane and inspired.",
    url: "/blog/creative-hobbies",
    category: "Lifestyle",
  },
  {
    title: "Breaking Down Complex Systems",
    date: "2024-07-15",
    excerpt: "A practical approach for tackling big engineering problems one step at a time.",
    url: "/blog/breaking-down-complex-systems",
    category: "Engineering",
  },
];
