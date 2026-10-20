import type { TechItem } from '../types';

export const technologiesData: TechItem[] = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    category: 'Core AI',
    badge: 'Popular',
    description: 'Custom foundation models, computer vision systems, and autonomous agent workflows embedded into business software.',
    tags: ['AI Strategy', 'Generative AI', 'Computer Vision', 'LLM Fine-tuning', 'Vector Search'],
    capabilities: [
      'Retrieval-Augmented Generation (RAG) at scale',
      'Computer vision inspection pipelines',
      'Proprietary model distillation and hosting',
    ],
  },
  {
    id: 'web-apps',
    name: 'Enterprise Web Applications',
    category: 'Web Platforms',
    description: 'High-performance reactive web systems built with modern frameworks, decoupled micro-frontends, and sub-second page loads.',
    tags: ['Astro', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL', 'WebSockets'],
    capabilities: [
      'Full-stack type-safe architectures',
      'Micro-frontend orchestration',
      'Sub-50ms TTFB global edge delivery',
    ],
  },
  {
    id: 'mobile-apps',
    name: 'Cross-Platform Mobile',
    category: 'Mobile',
    description: 'Native-feel iOS and Android applications delivering offline-first experiences and hardware sensor integration.',
    tags: ['React Native', 'Swift', 'Kotlin', 'Offline-First', 'BLE Sensors'],
    capabilities: [
      'Biometric authentication and secure enclaves',
      'Low-power background sync',
      'Consistent design system implementation',
    ],
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & Infrastructure',
    category: 'Cloud',
    description: 'Zero-trust cloud native infrastructures on AWS, GCP, and Azure with automated GitOps CI/CD pipelines.',
    tags: ['Kubernetes', 'Terraform', 'AWS', 'GCP', 'Docker', 'OpenTelemetry'],
    capabilities: [
      'Multi-region high-availability failover',
      'Infrastructure as Code (IaC) governance',
      'Observability and distributed tracing',
    ],
  },
  {
    id: 'data-engineering',
    name: 'Data & Event Streaming',
    category: 'Data',
    description: 'Real-time distributed streaming architectures transforming raw event feeds into analytical intelligence.',
    tags: ['Apache Kafka', 'ClickHouse', 'PostgreSQL', 'DuckDB', 'dbt'],
    capabilities: [
      'Petabyte-scale analytics querying',
      'Real-time streaming pipeline ETL',
      'Data mesh organizational tooling',
    ],
  },
  {
    id: 'automation',
    name: 'Intelligent Automation',
    category: 'Automation',
    description: 'Eliminate repetitive operational work through deterministic rule engines, robotic process automation, and intelligent orchestrators.',
    tags: ['Process Mining', 'Workflow Orchestration', 'API Gateways', 'Event Triggers'],
    capabilities: [
      'End-to-end auditability and compliance trails',
      'Self-healing automated job queues',
      'Legacy ERP and CRM connector bridges',
    ],
  },
  {
    id: 'ux-ui',
    name: 'Design Systems & UX/UI',
    category: 'Design',
    description: 'Human-centered user experiences grounded in cognitive research, accessible design tokens, and fluid micro-interactions.',
    tags: ['Design Systems', 'WCAG 2.2 AA', 'Interaction Design', 'Figma Tokens'],
    capabilities: [
      'Multi-brand design token distribution',
      'Rigorous WCAG 2.2 AA accessibility audit',
      'Interactive component prototyping',
    ],
  },
];
