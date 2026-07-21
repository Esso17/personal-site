// ─── PERSONAL INFO ────────────────────────────────────────────────────────────
export const personal = {
  name: 'Ake Esso KAMOUNA',
  title: 'ML Engineer & Platform Contributor',
  tagline: 'Building and Shipping Machine Learning Systems',
  bio: 'I build ML models and ship them to production — as APIs on AlgoDeep and as applications on Mystat. My work spans the full lifecycle: from data science and model development to deployment, monitoring, and the infrastructure that keeps systems reliable.',
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
    role: 'ML models deployed as production APIs',
    description: 'Contributed to packaging, serving, and monitoring ML models as REST APIs used by product teams.',
    emoji: '🧠',
  },
  {
    name: 'Mystat',
    role: 'Internal analytics applications',
    description: 'Contributed to web applications that give teams visibility into data outputs and business metrics.',
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
    label: 'Models & APIs in Production',
    value: 50,
    suffix: '+',
    description: 'ML models shipped as APIs on AlgoDeep',
    icon: 'Zap',
  },
  {
    label: 'Web Applications',
    value: 50,
    suffix: '+',
    description: 'Internal apps delivered on Mystat',
    icon: 'Monitor',
  },
  {
    label: 'Platform Uptime',
    value: 99.5,
    suffix: '%',
    decimals: 1,
    description: 'SLA across production systems',
    icon: 'Shield',
  },
  {
    label: 'Deployment Speed',
    value: 60,
    suffix: '%',
    description: 'Faster model deployments via automation',
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
  { label: 'Data Science', description: 'Model development and experimentation' },
  { label: 'ML Engineering', description: 'Training, serving, and model management' },
  { label: 'AI Platforms', description: 'Production infrastructure for ML systems' },
  { label: 'LLMOps / GenAI', description: 'Production LLM serving and evaluation' },
]
