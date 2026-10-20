import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'ai-ml',
    tabLabel: 'AI & ML',
    title: 'AI & Machine Learning',
    subtitle: 'Autonomous Systems & Generative Workflows',
    description:
      'We architect bespoke AI capabilities directly into enterprise workflows—from fine-tuned generative LLM pipelines and RAG vector systems to edge computer vision models that automate complex decisions with auditability.',
    tags: ['AI Strategy', 'Generative AI', 'Computer Vision', 'LLM Fine-tuning', 'Vector Search'],
    capabilities: [
      'Enterprise-grade RAG infrastructure with sub-100ms retrieval',
      'Computer vision inspection pipelines for quality assurance',
      'Proprietary model distillation and secure on-premise inference',
    ],
    visualType: 'neural-matrix',
  },
  {
    id: 'web-apps',
    tabLabel: 'Web Apps',
    title: 'Enterprise Web Applications',
    subtitle: 'High-Concurreny Reactive Platforms',
    description:
      'Modern web applications built with type-safe architectures, decoupled micro-frontends, and sub-second global edge delivery. We focus on resilient state management and uncompromising accessibility.',
    tags: ['Astro', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Micro-frontends'],
    capabilities: [
      'Full-stack type safety across browser and server boundaries',
      'Distributed micro-frontend orchestration for agile teams',
      'Sub-50ms TTFB global edge caching and CDN distribution',
    ],
    visualType: 'web-mesh',
  },
  {
    id: 'mobile-apps',
    tabLabel: 'Mobile Apps',
    title: 'Cross-Platform Mobile Ecosystems',
    subtitle: 'Native Performance & Hardware Synergy',
    description:
      'Native-feel iOS and Android applications delivering offline-first data sync, biometric security enclaves, and low-latency Bluetooth/telemetry sensor integrations.',
    tags: ['React Native', 'Swift', 'Kotlin', 'Offline-First', 'BLE Sensors', 'Secure Enclave'],
    capabilities: [
      'Biometric authentication and cryptographic token management',
      'Low-power background sync for unreliable field connectivity',
      'Shared multi-platform design system components',
    ],
    visualType: 'mobile-stack',
  },
  {
    id: 'cloud',
    tabLabel: 'Cloud',
    title: 'Cloud Architecture & DevOps',
    subtitle: 'Zero-Trust Infrastructure as Code',
    description:
      'Mission-critical cloud foundations engineered on AWS, GCP, and Azure with multi-region active-active failover, automated GitOps CI/CD pipelines, and deep OpenTelemetry observability.',
    tags: ['Kubernetes', 'Terraform', 'AWS', 'GCP', 'Docker', 'OpenTelemetry', 'GitOps'],
    capabilities: [
      'Multi-region high-availability failover architectures',
      'Declarative Infrastructure as Code (IaC) governance',
      'Distributed tracing and automated incident mitigation',
    ],
    visualType: 'cloud-cluster',
  },
  {
    id: 'data',
    tabLabel: 'Data',
    title: 'Data & Event Streaming',
    subtitle: 'Real-time Analytical Pipelines',
    description:
      'Distributed event streaming architectures that process millions of events per second, converting disparate transaction logs into actionable analytical intelligence and live dashboards.',
    tags: ['Apache Kafka', 'ClickHouse', 'PostgreSQL', 'DuckDB', 'dbt', 'Iceberg'],
    capabilities: [
      'Petabyte-scale analytical querying with columnar speed',
      'Real-time streaming pipeline ETL with schema validation',
      'Decentralized data mesh architecture and governance',
    ],
    visualType: 'event-stream',
  },
  {
    id: 'automation',
    tabLabel: 'Automation',
    title: 'Intelligent Automation',
    subtitle: 'Deterministic Process Orchestration',
    description:
      'Eliminate repetitive operational overhead through deterministic rule engines, self-healing queues, and automated integration bridges between modern systems and legacy ERP/CRM software.',
    tags: ['Process Mining', 'Workflow Orchestration', 'API Gateways', 'Event Triggers', 'RPA'],
    capabilities: [
      'End-to-end auditability and compliance trails',
      'Self-healing automated job queues with dead-letter retries',
      'Bi-directional ERP and legacy database synchronization',
    ],
    visualType: 'workflow-engine',
  },
  {
    id: 'ui-ux',
    tabLabel: 'UI/UX',
    title: 'Design Systems & UX/UI',
    subtitle: 'Human-Centered Digital Interfaces',
    description:
      'We craft clear, delightful user experiences rooted in behavioral research, accessible design tokens, and fluid micro-interactions that elevate productivity across enterprise software.',
    tags: ['Design Systems', 'WCAG 2.2 AA', 'Interaction Design', 'Figma Tokens', 'Prototyping'],
    capabilities: [
      'Multi-brand design token distribution across platforms',
      'Rigorous WCAG 2.2 AA accessibility validation',
      'Interactive motion design and user journey mapping',
    ],
    visualType: 'design-tokens',
  },
];
