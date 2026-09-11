import { ProjectItem, ExperienceItem, SkillCategory, CertificationItem, MetricItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Arunraj S',
  roleTitles: [
    'AI Engineer',
    'RAG Engineer',
    'AI Automation Engineer',
    'Agentic Systems Developer',
  ],
  headline: 'Engineering autonomous multi-agent systems, resilient RAG pipelines, and enterprise-grade automation solutions that bridge LLMs with real production systems.',
  subheadline: 'Specialized in LangGraph orchestration, Pydantic structured outputs, vector retrieval systems, and end-to-end enterprise API integrations (ServiceNow, Google Workspace, Linux/Ansible).',
  location: 'Chennai, India',
  email: 'arunrajselvarasu@gmail.com',
  phone: '+91-8870127848',
  github: 'https://github.com/arunrajselvarasu',
  githubUsername: 'arunrajselvarasu',
  linkedin: 'https://www.linkedin.com/in/arunraj-s-7a3a12202/',
  linkedinUsername: 'arunraj-s-7a3a12202',
  status: 'Open to AI Engineer, RAG, & Agentic Automation roles',
  photoUrl: '/profile.jpg',
};

export const METRICS: MetricItem[] = [
  {
    value: '60%',
    label: 'Deployment Time Reduced',
    subtext: 'Automated enterprise Linux server patching via Ansible roles',
    iconName: 'Zap',
  },
  {
    value: '4+',
    label: 'Autonomous Agent Pipelines',
    subtext: 'Production LangGraph architectures with dynamic routing & HITL',
    iconName: 'Workflow',
  },
  {
    value: '100%',
    label: 'Schema-Validated Outputs',
    subtext: 'Pydantic structured response contracts & strict guardrails',
    iconName: 'ShieldCheck',
  },
  {
    value: '18',
    label: 'Automated Tests & Docker CI/CD',
    subtext: 'Containerized autonomous pipelines running on GitHub Actions',
    iconName: 'CheckCircle2',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'email-agent',
    title: 'Gmail AI Agent & Multi-Agent Orchestrator',
    subtitle: 'Autonomous Email Triage & Calendar Management with Human-in-the-Loop',
    category: 'agentic',
    featured: true,
    impactMetrics: [
      'Sub-second Groq LLM inference',
      '100% Pydantic schema validation',
      'Zero unauthorized email dispatches via HITL safety checkpoints',
    ],
    techStack: ['LangGraph', 'Groq LLM', 'Gmail API', 'Google Calendar API', 'Pydantic', 'Python'],
    description:
      'Engineered an enterprise-grade agentic workflow that reads, categorizes, summarizes incoming emails, drafts context-aware responses, and autonomously schedules calendar meetings while enforcing strict Human-in-the-Loop (HITL) approval states.',
    bulletPoints: [
      'Orchestrated multi-agent state graph with LangGraph for dynamic routing between email summarization, draft generation, and calendar scheduling agents.',
      'Leveraged Groq Llama 3 for ultra-low latency inference combined with Pydantic structured schemas to guarantee deterministic, type-safe agent responses.',
      'Architected stateful Human-in-the-Loop approval nodes allowing humans to review, modify, or approve outgoing communications and calendar mutations before external execution.',
      'Integrated Google Workspace REST APIs with OAuth token management and granular permission boundaries.',
    ],
    architectureSummary:
      'Ingestion -> LangGraph State Router -> Intent Classifier -> Draft Generator / Calendar Agent -> HITL Approval Gate -> API Execution Dispatcher',
    nodes: [
      { id: 'in', name: 'Email Ingestion', role: 'Fetches unread emails via Gmail API', type: 'input' },
      { id: 'router', name: 'LangGraph Router', role: 'Stateful supervisor evaluating triage priority', type: 'agent' },
      { id: 'draft', name: 'Draft Generator', role: 'Pydantic structured response synthesizer', type: 'agent' },
      { id: 'cal', name: 'Calendar Agent', role: 'Availability analyzer & invite builder', type: 'tool' },
      { id: 'hitl', name: 'HITL Gatekeeper', role: 'Suspends state until explicit human sign-off', type: 'evaluator' },
      { id: 'exec', name: 'API Dispatcher', role: 'Sends email & creates calendar invite', type: 'output' },
    ],
    links: {
      github: 'https://github.com/arunrajselvarasu',
    },
  },
  {
    id: 'agentic-rag',
    title: 'Enterprise Agentic RAG System',
    subtitle: 'Self-Correcting Retrieval Pipeline with Hallucination & Fact Validation Agents',
    category: 'rag',
    featured: true,
    impactMetrics: [
      'Multi-hop retrieval validation',
      'Dual Vector DB search (FAISS & ChromaDB)',
      'Real-time ground truth search via Tavily & Arxiv',
    ],
    techStack: ['LangChain', 'LangGraph', 'FAISS', 'ChromaDB', 'Hugging Face', 'Tavily Search', 'Python'],
    description:
      'Architected an agentic retrieval-augmented generation framework that decomposes complex queries, validates retrieved context against hallucinations, and enriches corporate knowledge bases with live scientific and web tools.',
    bulletPoints: [
      'Decoupled monolithic RAG into 4 specialized autonomous nodes: Query Analysis, Hybrid Vector Retrieval, Fact Verification/Validation, and Answer Synthesis.',
      'Employed FAISS and ChromaDB vector stores with Hugging Face dense sentence-transformer embeddings for semantic chunk matching.',
      'Implemented dedicated Validation Agent that evaluates retrieval relevancy score and initiates web retrieval fallbacks (Tavily, Arxiv, Wikipedia) when internal similarity thresholds fail.',
      'Incorporated self-correction loops that re-decompose and reformulate queries if initial context is judged ambiguous or incomplete.',
    ],
    architectureSummary:
      'User Query -> Query Decomposition -> FAISS/Chroma Retrieval -> Hallucination & Relevance Checker -> [Pass: Synthesizer | Fail: Tavily/Arxiv Fallback] -> Grounded Answer',
    nodes: [
      { id: 'q', name: 'Query Analyst', role: 'Decomposes multi-part questions & extracts entities', type: 'agent' },
      { id: 'ret', name: 'Vector Retriever', role: 'FAISS / ChromaDB semantic similarity search', type: 'tool' },
      { id: 'val', name: 'Validation Agent', role: 'Evaluates context faithfulness & Hallucination score', type: 'evaluator' },
      { id: 'web', name: 'Tavily / Arxiv Tool', role: 'Dynamic external grounding on low confidence', type: 'tool' },
      { id: 'ans', name: 'Synthesizer Agent', role: 'Grounded citation & structured markdown output', type: 'output' },
    ],
    links: {
      github: 'https://github.com/arunrajselvarasu',
    },
  },
  {
    id: 'linkedin-agent',
    title: 'Autonomous LinkedIn AI Content System',
    subtitle: 'End-to-End Multi-Agent Content Pipeline with Guardrails & Automated CI/CD',
    category: 'agentic',
    featured: true,
    impactMetrics: [
      'Twice-daily automated runs via GitHub Actions',
      '18 automated test suites passing',
      'TF-IDF cosine similarity duplicate prevention',
    ],
    techStack: ['LangGraph', 'LangChain', 'Groq', 'Tavily', 'LinkedIn REST API', 'Docker', 'GitHub Actions'],
    description:
      'A production autonomous system running twice daily to research trending AI/ML breakthroughs, craft high-signal technical posts, validate factual accuracy, verify duplicate avoidance, and publish through the LinkedIn API.',
    bulletPoints: [
      'Built multi-agent workflow orchestration with LangGraph and LangChain incorporating recursive self-reflection, retry loops, and strict technical guardrails.',
      'Integrated TF-IDF cosine similarity comparison against persistent SQLite history to ensure 0% duplicate or repetitive thematic generation.',
      'Containerized the entire application with Docker and established automated scheduled execution via GitHub Actions with production vs. dry-run safety modes.',
      'Hardened with 18 automated unit and integration tests covering agent logic, schema validation, network resiliency, and API token refresh.',
    ],
    architectureSummary:
      'Scheduler -> Topic Research (Tavily) -> Post Writer -> Technical Verifier -> TF-IDF Duplicate Detector -> Idempotent LinkedIn API Dispatcher',
    nodes: [
      { id: 'cron', name: 'GitHub Actions', role: 'Automated twice-daily trigger & container boot', type: 'input' },
      { id: 'res', name: 'Research Agent', role: 'Searches AI papers & trending repo news via Tavily', type: 'tool' },
      { id: 'wri', name: 'Writer Agent', role: 'Crafts high-impact engineer & recruiter posts', type: 'agent' },
      { id: 'dedup', name: 'TF-IDF Filter', role: 'Prevents duplicate semantic themes (<0.7 similarity)', type: 'evaluator' },
      { id: 'pub', name: 'LinkedIn REST API', role: 'Authenticated post publishing with media tags', type: 'output' },
    ],
    links: {
      github: 'https://github.com/arunrajselvarasu',
    },
  },
  {
    id: 'service-now-cva',
    title: 'AI CVA Agent for ServiceNow Ticketing',
    subtitle: 'Natural-Language Incident Management Automation at Enterprise Scale',
    category: 'automation',
    featured: false,
    impactMetrics: [
      'Enterprise ServiceNow integration',
      'FastAPI async agent API endpoints',
      'Azure OpenAI LLM integration',
    ],
    techStack: ['Python', 'FastAPI', 'LangGraph', 'Azure LLM', 'ServiceNow REST API', 'Pydantic'],
    description:
      'Engineered a conversational virtual agent (CVA) that translates freeform employee incident reports into standardized, category-mapped ServiceNow tickets with zero manual triage overhead.',
    bulletPoints: [
      'Developed high-throughput async FastAPI endpoints interacting with stateful LangGraph agents.',
      'Leveraged Azure-hosted LLMs to extract severity, impact, asset identifiers, and error traces from conversational prompts.',
      'Mapped parsed parameters directly to ServiceNow incident data models with automated ticket creation and status tracking.',
    ],
    architectureSummary:
      'User Prompt -> FastAPI Endpoint -> LangGraph Parser Agent -> Azure LLM -> Schema Validator -> ServiceNow REST API Creation',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'AI Automation Developer',
    company: 'Tata Consultancy Services (TCS)',
    location: 'Chennai, India',
    period: 'Jul 2025 – Present',
    current: true,
    summary:
      'Driving agentic AI innovation and operational automation across IT service management, predictive ML monitoring, and enterprise infrastructure.',
    achievements: [
      {
        title: 'Agentic AI Anomaly Dashboard (POC)',
        tech: ['Python', 'Random Forest', 'Isolation Forest', 'ServiceNow API'],
        description:
          'Engineered an agentic monitoring proof of concept that streams server health telemetry, classifies potential outages using Random Forest and Isolation Forest anomaly models, and triggers proactive ServiceNow incident tickets before service disruptions impact end users.',
        impact: 'Drastically reduced manual triage effort and incident response latency through automated ML-driven ticketing.',
      },
      {
        title: 'Agentic Asset Management Dashboard & SQL Virtual Assistant',
        tech: ['Python', 'SQL Agent', 'Multi-Source Data Integration', 'MySQL'],
        description:
          'Unified fragmented asset inventories across disparate enterprise sources into a centralized relational warehouse. Built an embedded natural-language SQL agent that translates conversational business queries into optimized SQL statements.',
        impact: 'Slashed manual asset lookup time significantly and enabled non-technical stakeholders to query complex enterprise data effortlessly.',
      },
      {
        title: 'AI Conversational Virtual Agent (CVA) for ServiceNow',
        tech: ['Python', 'FastAPI', 'LangGraph', 'Azure LLM', 'REST APIs'],
        description:
          'Architected an intelligent ticketing assistant leveraging Azure-hosted LLMs and LangGraph state machines to parse natural-language IT incident requests, resolve ambiguities through guided clarifying turns, and dispatch structured ServiceNow API payloads.',
        impact: 'Delivered measurable surge in incident resolution speed and eliminated miscategorized IT tickets.',
      },
      {
        title: 'Linux Server Patching & Infrastructure Automation',
        tech: ['Ansible', 'YAML', 'Linux System Administration', 'Bash'],
        description:
          'Developed idempotent Ansible playbooks and modular roles to automate system patching, vulnerability remediations, dynamic inventory discovery, and scheduled maintenance windows across Linux server clusters.',
        impact: 'Reduced server patch deployment cycle time by approximately 60% while enforcing complete compliance audit trails.',
      },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'agentic-ai',
    name: 'Agentic AI & GenAI',
    iconName: 'Sparkles',
    description: 'Autonomous multi-agent architectures, stateful graph orchestration, and reliable production LLM reasoning.',
    skills: [
      { name: 'LangGraph', level: 'Advanced', featured: true, tag: 'Orchestration' },
      { name: 'LangChain', level: 'Advanced', featured: true, tag: 'Framework' },
      { name: 'Multi-Agent Routing', level: 'Advanced', featured: true, tag: 'Architecture' },
      { name: 'Human-in-the-Loop (HITL)', level: 'Advanced', featured: true, tag: 'Safety' },
      { name: 'Prompt Engineering', level: 'Advanced', featured: true, tag: 'Core' },
      { name: 'Pydantic Structured Outputs', level: 'Advanced', featured: true, tag: 'Reliability' },
      { name: 'Groq LLM Acceleration', level: 'Advanced', featured: true, tag: 'Inference' },
      { name: 'Azure OpenAI & Claude API', level: 'Proficient', featured: true, tag: 'Models' },
      { name: 'Model Evaluation (LangSmith)', level: 'Proficient', tag: 'Eval' },
      { name: 'LLM Guardrails & Retry Logic', level: 'Advanced', tag: 'Resilience' },
    ],
    architectureHighlights: [
      {
        pattern: 'StateGraph Graph Topology',
        detail: 'Dynamic conditional routing with cyclic retry loops, sub-agent delegation, and typed state transitions.',
      },
      {
        pattern: 'Human-in-the-Loop (HITL)',
        detail: 'Safe interrupt checkpoints for critical actions (sending emails, committing ServiceNow records, booking calendar).',
      },
      {
        pattern: 'Pydantic Contract Enforcement',
        detail: '100% schema-validated structured outputs with deterministic field coercion and runtime guardrails.',
      },
      {
        pattern: 'Ultra Low-Latency Inference',
        detail: 'Sub-second reasoning via Groq LPU hardware acceleration paired with Claude & Azure OpenAI models.',
      },
    ],
    productionImpact: 'Powering automated Gmail triage, meeting booking agents, and TCS CVA ServiceNow IT assistants.',
    libraries: ['langgraph', 'langchain-core', 'pydantic', 'groq', 'tenacity', 'fastapi'],
    proficiencyScore: '95% Production Mastery',
  },
  {
    id: 'rag-vector',
    name: 'RAG & Vector Architecture',
    iconName: 'Database',
    description: 'High-precision retrieval systems, semantic embedding pipelines, and hallucination reduction mechanisms.',
    skills: [
      { name: 'FAISS Vector Search', level: 'Advanced', featured: true, tag: 'Vector Store' },
      { name: 'ChromaDB', level: 'Advanced', featured: true, tag: 'Vector Store' },
      { name: 'Hugging Face Embeddings', level: 'Advanced', featured: true, tag: 'Embeddings' },
      { name: 'Query Decomposition', level: 'Advanced', featured: true, tag: 'Agentic RAG' },
      { name: 'Hallucination Validation', level: 'Advanced', featured: true, tag: 'Eval' },
      { name: 'Tavily Search Grounding', level: 'Proficient', tag: 'Live Web' },
      { name: 'Arxiv & Wikipedia Tools', level: 'Proficient', tag: 'Grounding' },
      { name: 'Semantic Chunking Strategies', level: 'Proficient', tag: 'Data Prep' },
    ],
    architectureHighlights: [
      {
        pattern: 'Agentic Retrieval Pipelines',
        detail: 'Dedicated Query Analysis agent rewrites, clarifies, and decomposes complex prompts prior to vector search.',
      },
      {
        pattern: 'Grounding & Hallucination Guard',
        detail: 'Secondary validation agent grades factual consistency against retrieved chunks before synthesizing answers.',
      },
      {
        pattern: 'Hybrid & Dense Vector Indexing',
        detail: 'FAISS and ChromaDB stores powered by Hugging Face sentence-transformers with cosine similarity ranking.',
      },
      {
        pattern: 'Dynamic Live Web Fallback',
        detail: 'Seamlessly escalates to Tavily / Arxiv APIs when internal documents exhibit insufficient relevance scores.',
      },
    ],
    productionImpact: 'Delivering zero-hallucination factual research assistants and technical documentation query engines.',
    libraries: ['faiss-cpu', 'chromadb', 'sentence-transformers', 'tavily-python', 'langchain-community'],
    proficiencyScore: '92% Production Depth',
  },
  {
    id: 'automation-apis',
    name: 'Automation & Enterprise APIs',
    iconName: 'Cpu',
    description: 'Bridging generative AI with real-world enterprise infrastructure, CRM, ticketing, and communications.',
    skills: [
      { name: 'ServiceNow REST API', level: 'Advanced', featured: true, tag: 'ITSM' },
      { name: 'Gmail API Integration', level: 'Advanced', featured: true, tag: 'Workspace' },
      { name: 'Google Calendar API', level: 'Advanced', featured: true, tag: 'Workspace' },
      { name: 'SQL Query Agents', level: 'Advanced', featured: true, tag: 'NL-to-SQL' },
      { name: 'Ansible Automation', level: 'Advanced', featured: true, tag: 'DevOps' },
      { name: 'Playbooks & Roles', level: 'Advanced', tag: 'IaC' },
      { name: 'Task Scheduling & Cron', level: 'Advanced', tag: 'Pipelines' },
      { name: 'Power BI Reporting', level: 'Proficient', tag: 'Analytics' },
    ],
    architectureHighlights: [
      {
        pattern: 'ServiceNow Table & Incident API',
        detail: 'Automated ticket creation, priority mapping, sys_id querying, and bidirectional status synchronization.',
      },
      {
        pattern: 'Google Workspace API Automation',
        detail: 'OAuth2/Service account integration for automated Gmail inbox polling, drafting, and Google Calendar event creation.',
      },
      {
        pattern: 'NL-to-SQL Dynamic Agent',
        detail: 'Safe schema inspection, parameterized SQL generation, and aggregated asset catalog querying with strict sandboxing.',
      },
      {
        pattern: 'Idempotent Ansible Automation',
        detail: 'Modular YAML playbooks and roles automating server patching cycles across Linux fleet environments.',
      },
    ],
    productionImpact: 'Slashed Linux server patching deployment times by ~60% at TCS and automated IT ticket lifecycle.',
    libraries: ['ansible 2.15+', 'google-api-python-client', 'requests', 'sqlalchemy', 'pyyaml'],
    proficiencyScore: '94% Enterprise Delivery',
  },
  {
    id: 'programming-cloud',
    name: 'Programming & Infrastructure',
    iconName: 'Terminal',
    description: 'Clean backend engineering, type safety, Linux system internals, and production CI/CD.',
    skills: [
      { name: 'Python (OOP & Async)', level: 'Advanced', featured: true, tag: 'Primary' },
      { name: 'FastAPI', level: 'Advanced', featured: true, tag: 'Backend' },
      { name: 'Linux System Administration', level: 'Advanced', featured: true, tag: 'OS' },
      { name: 'Docker Containerization', level: 'Proficient', featured: true, tag: 'Containers' },
      { name: 'GitHub Actions & CI/CD', level: 'Proficient', featured: true, tag: 'DevOps' },
      { name: 'MySQL & Relational Data', level: 'Proficient', tag: 'Database' },
      { name: 'Git & Version Control', level: 'Advanced', tag: 'Workflow' },
      { name: 'Random Forest & Isolation Forest', level: 'Proficient', tag: 'ML / Anomaly' },
      { name: 'PowerShell & Bash Scripting', level: 'Advanced', tag: 'Scripting' },
      { name: 'JavaScript / HTML / CSS / Tailwind', level: 'Proficient', tag: 'Frontend' },
    ],
    architectureHighlights: [
      {
        pattern: 'Asynchronous Python & FastAPI',
        detail: 'Concurrent async/await agent endpoints, typed schemas via Pydantic, and high-performance Uvicorn serving.',
      },
      {
        pattern: 'Linux Core Engineering',
        detail: 'Enterprise administration, systemd service units, cron management, bash scripting, and process diagnostics.',
      },
      {
        pattern: 'ML Anomaly Detection',
        detail: 'Trained Isolation Forest and Random Forest pipelines predicting system degradations before failure occurs.',
      },
      {
        pattern: 'Containerization & Test CI/CD',
        detail: 'Production Docker multi-stage containers verified by 18 automated unit and integration test suites in GitHub Actions.',
      },
    ],
    productionImpact: 'Maintained 18 passing test suites and zero-downtime containerized deployments for backend AI services.',
    libraries: ['python 3.11+', 'fastapi', 'scikit-learn', 'docker', 'pytest', 'bash'],
    proficiencyScore: '96% Production Mastery',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Claude Developer Foundations',
    issuer: 'Anthropic Academy',
    badge: 'Agentic & Tool Calling',
    highlight: true,
  },
  {
    title: 'Generative AI',
    issuer: 'Udemy',
    badge: 'LLM Foundations',
    highlight: true,
  },
  {
    title: 'LLM Chatbot Development',
    issuer: 'Udemy',
    badge: 'Agentic Pipelines',
    highlight: true,
  },
  {
    title: 'Advanced Ansible Automation',
    issuer: 'RJP Infotek',
    badge: 'Enterprise DevOps',
    highlight: true,
  },
  {
    title: 'Advanced Linux System Administration',
    issuer: 'RJP Infotek',
    badge: 'Kernel & Systems',
  },
  {
    title: 'PowerShell Scripting',
    issuer: 'RJP Infotek',
    badge: 'Automation',
  },
  {
    title: 'Python Programming',
    issuer: 'GUVI',
    badge: 'Core Software',
  },
];

export const EDUCATION = {
  institution: 'K. Ramakrishnan College of Engineering',
  degree: 'Bachelor of Technology (B.Tech) in Information Technology',
  location: 'Tamil Nadu, India',
  period: 'Aug 2020 – May 2024',
  focusAreas: [
    'Object-Oriented Programming',
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems & Networking',
    'Software Engineering & Cloud Computing',
  ],
};

export const RECRUITER_HIGHLIGHTS = {
  whyHire: [
    {
      title: 'Proven Enterprise Systems Shipped',
      detail:
        'Currently engineering production AI dashboards and automated virtual agents at TCS, handling ServiceNow ticketing, server anomaly detection, and enterprise asset workflows.',
    },
    {
      title: 'Modern Agentic Mastery (LangGraph + Groq + HITL)',
      detail:
        'Does not just do basic prompt wraps. Designs state machines, cyclic agent routing, human-in-the-loop safety gates, and Pydantic structured output contracts for 100% reliable schemas.',
    },
    {
      title: 'Self-Correcting RAG Architectures',
      detail:
        'Builds multi-agent RAG with dedicated Query Analysts, Hybrid Vector Search (FAISS/ChromaDB), and Hallucination Validation agents backed by Tavily & Arxiv search fallbacks.',
    },
    {
      title: 'Quantifiable Operational Impact',
      detail:
        '60% reduction in Linux server patch deployment cycles, sub-second Groq inference times, and end-to-end containerized pipelines with 18 automated tests.',
    },
    {
      title: 'Dual Software & Infrastructure Depth',
      detail:
        'Rare combination of Python/FastAPI AI engineering with deep Linux system administration, Docker containerization, and Ansible infrastructure-as-code automation.',
    },
  ],
  targetRoles: [
    'AI Engineer',
    'RAG Systems Engineer',
    'AI Automation Engineer',
    'Agentic AI Developer',
    'GenAI Solutions Architect',
  ],
};
