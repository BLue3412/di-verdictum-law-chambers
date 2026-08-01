const companiesImg = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop'
const divorceImg = 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1400&auto=format&fit=crop'
const arbitrationImg = 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1400&auto=format&fit=crop'

export const INSIGHTS = [
  {
    slug: 'companies-amendment-rules',
    tag: 'Corporate Law',
    title: 'Understanding the New Companies (Amendment) Rules: What Businesses Should Know',
    date: 'Placeholder',
    readTime: '6 min read',
    image: companiesImg,
    excerpt: 'A look at recent amendments to Indian company law and their practical impact on compliance and governance.',
    body: [
      'This article is a placeholder. Replace this paragraph with the firm\u2019s actual commentary on recent amendments to the Companies Act and associated rules.',
      'Cover what changed, which entities are affected, key compliance deadlines, and any practical steps businesses should take in response.',
      'Close with the firm\u2019s standard note: this article is for general informational purposes only and does not constitute legal advice. Readers should consult an advocate regarding their specific circumstances.',
    ],
  },
  {
    slug: 'divorce-proceedings-indian-personal-law',
    tag: 'Family Law',
    title: 'Navigating Divorce Proceedings Under Indian Personal Law: A Practical Guide',
    date: 'Placeholder',
    readTime: '5 min read',
    image: divorceImg,
    excerpt: 'An overview of how divorce proceedings work across the personal laws applicable in India.',
    body: [
      'This article is a placeholder. Replace this paragraph with the firm\u2019s actual guidance on divorce proceedings under the personal law(s) relevant to your practice.',
      'Cover grounds for divorce, the general procedural path (mediation, filing, hearings), timelines, and considerations around maintenance and custody.',
      'Close with the firm\u2019s standard note: this article is for general informational purposes only and does not constitute legal advice. Readers should consult an advocate regarding their specific circumstances.',
    ],
  },
  {
    slug: 'arbitration-vs-litigation',
    tag: 'Dispute Resolution',
    title: 'Arbitration vs. Litigation: Choosing the Right Forum for Commercial Disputes',
    date: 'Placeholder',
    readTime: '7 min read',
    image: arbitrationImg,
    excerpt: 'Weighing the practical trade-offs between arbitration and traditional litigation for commercial disputes.',
    body: [
      'This article is a placeholder. Replace this paragraph with the firm\u2019s actual comparison of arbitration and litigation for commercial disputes.',
      'Cover factors such as speed, cost, confidentiality, enforceability of outcomes, and when each forum tends to be more suitable.',
      'Close with the firm\u2019s standard note: this article is for general informational purposes only and does not constitute legal advice. Readers should consult an advocate regarding their specific circumstances.',
    ],
  },
]

export function getInsight(slug) {
  return INSIGHTS.find((item) => item.slug === slug)
}