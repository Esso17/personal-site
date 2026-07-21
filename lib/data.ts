// ─── PERSONAL INFO ────────────────────────────────────────────────────────────
export const personal = {
  name: 'Ake Esso KAMOUNA',
  title: 'ML Engineer · Delivering Data Products That Drive Business Value',
  tagline: 'Turning Machine Learning Into Business Outcomes',
  bio: 'I bridge data science and business impact — building production ML systems that product teams rely on and business leaders can measure. I partner across functions, communicate complex technical work in plain language, and stay focused on delivery that creates real organizational value.',
  email: 'your.email@company.com',
  links: {
    github: 'https://github.com/Esso17',
    medium: 'https://medium.com/@akeessokamouna17',
    resume: '/resume.pdf',
  },
}

// ─── PLATFORM CONTEXT ─────────────────────────────────────────────────────────
export const platformContext = [
  {
    name: 'AlgoDeep',
    role: 'ML APIs powering product team decisions',
    description: 'Built and maintained production ML APIs that product teams integrated into their workflows — reducing manual processes and accelerating data-driven decision-making.',
    emoji: '🧠',
  },
  {
    name: 'Mystat',
    role: 'Analytics tools for business visibility',
    description: 'Delivered internal analytics applications that gave business and data teams direct access to performance insights, shortening the gap between data and decision.',
    emoji: '📊',
  },
]

// ─── IMPACT METRICS ───────────────────────────────────────────────────────────
export type ImpactMetric = {
  label: string
  value: number
  suffix: string
  decimals?: number
  description: string
  icon: string
}

export const impactMetrics: ImpactMetric[] = [
  {
    label: 'Production Systems Shipped',
    value: 50,
    suffix: '+',
    description: 'ML products delivered to product teams and integrated into real workflows',
    icon: 'Zap',
  },
  {
    label: 'Analytics Tools Built',
    value: 50,
    suffix: '+',
    description: 'Dashboards giving business teams direct visibility into their data',
    icon: 'Monitor',
  },
  {
    label: 'System Reliability',
    value: 99.5,
    suffix: '%',
    decimals: 1,
    description: 'SLA — teams can depend on the systems I build',
    icon: 'Shield',
  },
  {
    label: 'Faster Time-to-Value',
    value: 60,
    suffix: '%',
    description: 'Reduction in the time from project kickoff to production launch',
    icon: 'Rocket',
  },
]

// ─── TECHNICAL EXPERTISE ──────────────────────────────────────────────────────
export type CloudSkill = {
  label: string
  size: 'xl' | 'lg' | 'md' | 'sm'
  category: 'ml' | 'mlops' | 'cloud'
}

export const cloudSkills: CloudSkill[] = [
  { label: 'Python',                size: 'xl', category: 'ml'    },
  { label: 'Docker',                size: 'xl', category: 'mlops' },
  { label: 'LLMs',                  size: 'xl', category: 'ml'    },
  { label: 'Google Cloud Platform', size: 'xl', category: 'cloud' },
  { label: 'FastAPI',               size: 'xl', category: 'mlops' },
  { label: 'Vertex AI',             size: 'xl', category: 'mlops' },
  { label: 'PyTorch',               size: 'lg', category: 'ml'    },
  { label: 'NLP',                   size: 'lg', category: 'ml'    },
  { label: 'RAG',                   size: 'lg', category: 'ml'    },
  { label: 'MLflow',                size: 'lg', category: 'mlops' },
  { label: 'GKE',                   size: 'lg', category: 'mlops' },
  { label: 'BigQuery',              size: 'lg', category: 'cloud' },
  { label: 'Kubeflow',              size: 'lg', category: 'mlops' },
  { label: 'scikit-learn',          size: 'md', category: 'ml'    },
  { label: 'Computer Vision',       size: 'md', category: 'ml'    },
  { label: 'LangChain',             size: 'md', category: 'ml'    },
  { label: 'Gemini',                size: 'md', category: 'ml'    },
  { label: 'Cloud Run',             size: 'md', category: 'mlops' },
  { label: 'Terraform',             size: 'md', category: 'cloud' },
  { label: 'PostgreSQL',            size: 'md', category: 'cloud' },
  { label: 'Feature Stores',        size: 'sm', category: 'mlops' },
  { label: 'Pub/Sub',               size: 'sm', category: 'cloud' },
  { label: 'Redis',                 size: 'sm', category: 'cloud' },
]

// ─── ARTICLES ─────────────────────────────────────────────────────────────────
export type Article = {
  title: string
  excerpt: string
  readTime: string
  date: string
  url: string
  tags: string[]
}

export const articles: Article[] = [
  {
    title: 'Python Concurrency for AI Engineers: asyncio, Threads, and Processes — What Actually Works',
    excerpt: 'Three years of writing Python for ML systems taught me one thing: reaching for the wrong concurrency tool costs more than not concurring at all. A practical breakdown of what fits which workload.',
    readTime: '13 min',
    date: 'May 2026',
    url: 'https://medium.com/@akeessokamouna17/python-concurrency-for-ai-engineers-asyncio-threads-and-processes-what-actually-works-886c21da522b',
    tags: ['Python', 'MLOps', 'Performance'],
  },
  {
    title: 'Feature Freshness: The Forgotten Problem of MLOps',
    excerpt: 'A 2 AM incident — fraud model precision dropped 18 points, not from model failure but because a feature cache stopped refreshing. The question nobody asks: how old is the data my model is scoring right now?',
    readTime: '7 min',
    date: 'Jun 2026',
    url: 'https://medium.com/@akeessokamouna17/feature-freshness-the-forgotten-problem-of-mlops-7817da7e2ca7',
    tags: ['MLOps', 'Feature Store', 'Production'],
  },
  {
    title: 'From Memory-Constrained CSV Engine to Production Streaming Feature Store',
    excerpt: 'Computing row and column means from 46 MB under a 53 KB memory budget — no external libraries. A constraint that mirrors real production systems: when you cannot store data, design to forget intelligently.',
    readTime: '6 min',
    date: 'Jun 2026',
    url: 'https://medium.com/@akeessokamouna17/from-memory-constrained-csv-engine-to-production-streaming-feature-store-678a0307d9d3',
    tags: ['Architecture', 'Streaming', 'MLOps'],
  },
  {
    title: 'Recency as Strategy: The Engineering Logic Behind LRU Cache',
    excerpt: 'I used LRU cache daily — Redis, embedding pipelines, model serving — and could explain what it does but not why it works. This is the piece that closes that gap.',
    readTime: '7 min',
    date: 'May 2026',
    url: 'https://medium.com/@akeessokamouna17/recency-as-strategy-the-engineering-logic-behind-lru-cache-29f1034dbf02',
    tags: ['Engineering', 'Caching', 'Systems'],
  },
]

// ─── SOFT SKILLS ──────────────────────────────────────────────────────────────
export type SoftSkill = {
  label: string
  description: string
  icon: string
}

export const softSkills: SoftSkill[] = [
  {
    label: 'Cross-functional Communication',
    description: 'Translating ML complexity into clear language for product, data, and business stakeholders.',
    icon: 'MessageCircle',
  },
  {
    label: 'Technical Documentation',
    description: 'Writing runbooks, specs, and postmortems that teams actually reference weeks later.',
    icon: 'FileText',
  },
  {
    label: 'Async Collaboration',
    description: 'Contributing effectively across distributed teams — clear threads, structured updates, no bottlenecks.',
    icon: 'Users',
  },
  {
    label: 'Knowledge Sharing',
    description: 'Teaching through writing, internal demos, and code walkthroughs that build team capability.',
    icon: 'BookOpen',
  },
  {
    label: 'Constructive Feedback',
    description: 'Giving and receiving code reviews with context and intent — improving the work, not just pointing out flaws.',
    icon: 'GitPullRequest',
  },
  {
    label: 'Active Listening',
    description: 'Gathering requirements deeply before proposing solutions — fewer rewrites, more first-pass quality.',
    icon: 'Ear',
  },
]

// ─── INTERNAL MOBILITY ────────────────────────────────────────────────────────
export const mobilityTargets = [
  { label: 'Data Science', description: 'Leading experiments tied to business hypotheses and measurable KPIs' },
  { label: 'ML Engineering', description: 'Owning the reliability and scalability of ML systems teams depend on' },
  { label: 'AI Platforms', description: 'Building shared infrastructure that multiplies team delivery speed' },
  { label: 'LLMOps / GenAI', description: 'Shipping language model applications that reach real users' },
]
