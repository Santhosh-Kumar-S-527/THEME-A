import type { ArticleItem } from '../types';

export const articlesData: ArticleItem[] = [
  {
    id: 'scalable-rag-architectures',
    title: 'Architecting Production RAG: Reducing Latency and Hallucinations in Enterprise Search',
    date: 'Oct 12, 2026',
    category: 'Artificial Intelligence',
    summary: 'A deep-dive into hybrid keyword-vector indexing, re-ranking models, and sub-100ms retrieval pipelines.',
    readTime: '6 min read',
    url: '/technologies#rag',
  },
  {
    id: 'edge-first-microfrontends',
    title: 'The Edge-First Web: Decoupling Monoliths with Astro and Type-Safe Micro-Frontends',
    date: 'Sep 28, 2026',
    category: 'Web Platforms',
    summary: 'How distributed edge workers and static-first architectures eliminate layout shifts and reduce TTFB.',
    readTime: '5 min read',
    url: '/technologies#web',
  },
  {
    id: 'fintech-event-streaming',
    title: 'Zero-Loss Ledger Topologies: Managing Real-Time Settlement with Apache Kafka and ClickHouse',
    date: 'Sep 15, 2026',
    category: 'Data & Finance',
    summary: 'Strategies for event deduplication, idempotency guarantees, and audit compliance in banking systems.',
    readTime: '8 min read',
    url: '/industries#fintech',
  },
  {
    id: 'design-systems-wcag22',
    title: 'Bridging Design Tokens and Engineering: Building Truly Accessible Enterprise Systems',
    date: 'Aug 30, 2026',
    category: 'Design Systems',
    summary: 'Automating WCAG 2.2 AA audits across complex component libraries with zero developer friction.',
    readTime: '4 min read',
    url: '/technologies#ux',
  },
];
