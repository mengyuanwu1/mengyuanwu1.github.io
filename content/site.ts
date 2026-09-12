import { withBasePath } from "../lib/sitePaths";

const cvHref = withBasePath("/Mengyuan_Wu_CV_08012026.pdf");

export const siteContent = {
  name: "Mengyuan (Millie) Wu",
  shortName: "Millie Wu",
  logoMark: "Mi.",
  logoImage: "https://milliewu.io/wp-content/uploads/2025/10/Mi_logo-1-e1760573604372.webp",
  favicon: "https://milliewu.io/wp-content/uploads/2025/10/Website_logo-300x300.webp",
  siteTitle: "Mengyuan Wu",
  role: "First-year Ph.D. Student in Computer Science, Columbia University",
  focus: "Human-AI interaction, applied AI, agentic systems, and behavioral health",
  location: "New York, NY",
  email: "mw3209@columbia.edu",
  website: "milliewu.io",
  phone: "(617) 992-4468",
  cvHref,
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/millie-wu/",
    github: "https://github.com/mengyuanwu1",
    orcid: "https://orcid.org/0009-0002-3878-8545",
    googleScholar:
      "https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=3&gmla=AEk_c1vc_wRvXlWMlqtVgY5ZJbJ6rxSgQZuFirObxB-_4WgL3FUk2yBjspevL1SwH8RGORtyxZY0jo6AgYzqT4JBvlpa&user=IM8F8u0AAAAJ",
    email: "mailto:mw3209@columbia.edu",
  },
  navigation: [
    { label: "About", href: withBasePath("/#about") },
    { label: "Publications", href: withBasePath("/#publications") },
    { label: "Experience", href: withBasePath("/#experience") },
    { label: "News", href: withBasePath("/#news") },
    { label: "Projects", href: withBasePath("/#projects") },
    { label: "CV", href: cvHref, external: true },
  ],
  heroTags: ["Researcher", "Developer", "Inventor"],
  heroSummary: [
    "I am a first-year Ph.D. student in Computer Science at Columbia University, advised by Prof. Xuhai \"Orson\" Xu in the SEA Lab.",
    "I design, engineer, and evaluate AI agentic systems that use multimodal context to support personalization, productivity, and well-being.",
    "I also work as a part-time full-stack software engineer at Equa Health, a CMU-funded startup.",
  ],
  researchInterests: ["Applied AI", "Agentic systems", "Human-Computer Interaction", "Behavioral health", "Multimodal AI systems", "Personalization"],
  education: [
    {
      years: "2026-Present",
      school: "Columbia University",
      location: "New York, NY",
      degree: "Ph.D. in Computer Science",
      detail: "",
    },
    {
      years: "2023-2025",
      school: "Columbia University",
      location: "New York, NY",
      degree: "M.S. in Computer Science",
      detail: "GPA: 4.02",
    },
    {
      years: "2017-2019",
      school: "Columbia University",
      location: "New York, NY",
      degree: "B.S. in Operations Research, Minor in Psychology",
      detail: "GPA: 3.94",
    },
  ],
  researchExperience: [
    {
      years: "2024-Present",
      title: "Research Assistant, SEA Lab",
      organization: "Columbia University",
      location: "New York, NY",
      detail: 'Mentor: Xuhai "Orson" Xu',
    },
    {
      years: "2024",
      title: "Research Assistant, LIINC and CGUI",
      organization: "Columbia University",
      location: "New York, NY",
      detail: "Mentors: Steve Feiner and Paul Sajda",
    },
  ],
  industryExperience: [
    {
      years: "2025-Present",
      title: "Full-Stack Software Engineer (Part-time)",
      organization: "Equa Health",
      location: "CMU-funded startup",
      detail: "",
    },
    {
      years: "2021-2023",
      title: "Vice President of Investment Research",
      organization: "Evercore Partners",
      location: "",
      detail: "",
    },
  ],
  honors: [
    "ACM CHI 2026 Honorable Mention Award (top 5%)",
    "Best Poster Award, ACM CHI 2026 Workshop (PAWS)",
    "2nd Place, Intel AI Track Hackathon (HooHacks, University of Virginia)",
    "1st Place, NeuReality AR/VR Competition (Columbia University)",
    "Tau Beta Pi Engineering Honors (top one-eighth)",
    "Davis UWC Scholar",
  ],
  teaching: [
    "Fall 2026: COMS W4995 The Future of Personal Health Assistant, Teaching Assistant",
    "Fall 2024: COMS W4995 Applied Machine Learning, Course Assistant",
    "Spring 2019: IEOR E3609 Advanced Optimization, Course Assistant",
  ],
  mentoring: [
    "2026: Xin Guan (Tsinghua University B.S.)",
    "2026: Irene Nam (Columbia University B.S., M.S.)",
    "2026: Annie Wang (Columbia University B.S.)",
    "2025: Akito Yamauchi (Columbia University B.S.)",
    "2025: Zeyi Tong (Columbia University B.S.)",
  ],
  service: [
    "2026: IEEE Internet Computing",
    "2026: ACM CHI Conference on Human Factors in Computing Systems (2027)",
    "2026: ACM Symposium on User Interface Software and Technology (UIST 2026)",
    "2026: Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)",
    "2025: ACM CHI Conference on Human Factors in Computing Systems (2026)",
    "2025: ACM Transactions on Computing for Healthcare",
  ],
  press: [
    {
      year: "2026",
      title: "Mental Health: Unpacking the AI Revolution in Therapeutic Support.",
      outlet: "Sci PaperMill",
    },
  ],
  news: [
    {
      date: "Fall 2026",
      titlePrefix: "I'm a teaching assistant for ",
      linkText: "The Future of Personal Health Assistant",
      linkHref: "https://personal-health-agent.github.io/",
      titleSuffix: " (BINF 4070 / COMS W4995) at Columbia University.",
    },
    {
      date: "2026",
      titlePrefix: "Our PAWS project was showcased at ",
      linkText: "Columbia's 2026 AI at VP&S Showcase",
      linkHref: "https://www.dbmi.columbia.edu/aivps-2026-showcase/",
      titleSuffix: ", with Zhihan Jiang presenting the team's demo.",
    },
    {
      date: "2026",
      titlePrefix: "PAWS received the ",
      linkText: "Best Poster Award",
      linkHref: "https://zhihanjiang.com/papers/CV_zhihanjiang_public.pdf",
      titleSuffix:
        " at the Everyday Wearable for Personalized Health and Well-Being Workshop at ACM CHI 2026!",
    },
    {
      date: "3/14/2026",
      titlePrefix: "Our paper was featured in SciPaperMill's article, ",
      linkText: '"Mental Health: Unpacking the AI Revolution in Therapeutic Support."',
      linkHref:
        "https://scipapermill.com/index.php/2026/03/14/mental-health-unpacking-the-ai-revolution-in-therapeutic-support/",
      titleSuffix: "",
    },
    {
      date: "3/8/2026",
      title: "MindfulAgents received an Honorable Mention Award at ACM CHI 2026!",
    },
    {
      date: "2/26/2026",
      title:
        'Our U.S. provisional patent application for "Method for Generating a Meditation Protocol" was filed (No. 63/991,687), with Equa Health, Inc. as assignee.',
    },
    {
      date: "2/11/2026",
      title:
        "Two papers were accepted to ACM CHI 2026, and I'll be attending the conference in Barcelona in April.",
    },
  ],
  skills: {
    analysis: ["Python", "PyTorch", "MATLAB", "R"],
    methods: [
      "Qualitative methods",
      "Quantitative methods",
      "Mixed methods",
      "Longitudinal studies",
      "Interviews",
      "Participatory design",
      "Thematic analysis",
    ],
    prototyping: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "FastAPI",
      "LangChain",
      "Google Cloud",
      "Firebase",
      "Git",
    ],
    hardware: ["Wearable sensors", "EEG", "Arduino", "Microcontrollers", "Circuit prototyping"],
    design: ["Figma", "Adobe Creative Suite"],
  },
  publications: [
    {
      year: "2026",
      title:
        "Augmenting Human Performance with an XR Agent Learning from Online Behavior and BCI Evidence.",
      authors:
        "Li, Z.*, He, X.*, Chen, H.*, Zuo, J.*, Bai, S., Yang, B., Wu, Mengyuan, Ledner, J., Cheng, Y., Yamauchi, A., Turakhia, D. G., Feiner, S., Sajda, P.",
      venue: "ACM UIST 2026",
      note: "",
      links: [],
    },
    {
      year: "2026",
      title:
        "MindfulAgents: Personalizing Mindfulness Meditation via an Expert-Aligned Multi-Agent System.",
      authors:
        "Wu, Mengyuan, Jiang, Z.*, Fan, Y.*, Feng, R., Dharmavaram, S., Fallon, S., Polowitz, M., Islam, B., Benson, L., Tung, I., Creswell, J. D., Xu, X.",
      venue: "ACM CHI 2026",
      note: "Best Paper Honorable Mention Award (Top 5%)",
      links: [
        {
          label: "Preprint",
          href: "https://arxiv.org/abs/2603.06926",
          icon: "preprint",
        },
        {
          label: "Explore",
          href: "https://sea-lab.space/mindfulagents/",
          icon: "explore",
        },
      ],
    },
    {
      year: "2026",
      title:
        "SwEYEpinch: Exploring Intuitive, Efficient Text Entry for Extended Reality via Eye and Hand Tracking.",
      authors:
        "Li, Z.*, He, X.*, Wu, Mengyuan, Tong, Z., Wei, H., Yang, B., Feiner, S., Sajda, P.",
      venue: "ACM CHI 2026",
      note: "",
      links: [],
    },
    {
      year: "2026",
      title:
        "PAWS: Empowering Everyday Cannabis Use Disorder Support through a Personalized AI Digital Pet on Smartwatches.",
      authors:
        "Jiang, Z., Wu, Mengyuan, Zou, R., Xu, S., Macmaunus, E., Liao, S., Zhang, P., Wang, D., David, J. L., El-Bassel, N., Mamykina, L., Levin, F. R., Sultan, R., Xu, X.",
      venue: "ACM CHI 2026 Workshop",
      note: "Best Poster Award",
      links: [],
    },
  ],
  manuscripts: [
    {
      title:
        '"Live Your Day, Twice": A Multi-Modal Agentic Mental Rehearsal Framework for Closing the Intention-Action Gap.',
      authors:
        "Wu, Mengyuan, Guan, X.*, Nam, Y.*, Chung, R., Wang, K., Wang, Z., Xu, Z., Babbit, E., Bloom, P., Funkhouser, C., Mishra, S., Xu, X.",
      status: "Submitted to ACM CHI 2027",
    },
    {
      title:
        "Deco: Making Physical Companions Pervasive through a Dual-Embodiment Framework.",
      authors:
        "Jiang, Z.*, Wu, Mengyuan*, Zou, R., Xu, S., Xu, X.",
      status: "Submitted to ACM CHI 2027",
    },
    {
      title:
        "ExTENDS: Empowering Domain Experts to Build Personalized AI Proxies for Asynchronous Patient Care.",
      authors:
        "Chung, R., Li, M.*, Wu, Mengyuan*, Pollack, A., Pratt, W., Mamykina, L., Xu, X.",
      status: "Submitted to ACM CHI 2027",
    },
    {
      title:
        "TimeSRL: Generalizable Time-Series Behavioral Modeling via Semantic RL-Tuned LLMs — A Case Study in Mental Health.",
      authors:
        "Fan, Y., Wu, Mengyuan, Chen, Q., Liu, X., Yang, Y., Zhang, Z., Nepal, S., Nie, J., Jiang, X., Xu, X.",
      status: "Submitted to IMWUT 2026 · Under major revision",
    },
    {
      title: "Agents’ Last Exam.",
      authors: "Sun, Y., et al. (Mengyuan Wu, co-author)",
      status: "Submitted to NeurIPS 2026 Evaluations and Datasets Track",
    },
    {
      title:
        "Sharpen Before You Adapt: Data-Free Entry-State Sharpening for Test-Time Reinforcement Learning.",
      authors: "Zhang, Z.*, Selvendran, V.*, Wu, Mengyuan",
      status: "Submitted to NeurIPS 2026 Workshop",
    },
  ],
  projects: [
    {
      title: "Expert-Aligned Personalized AI Meditation",
      description:
        "A multi-agent system that generates personalized meditation experiences under an expert-aligned framework.",
      note: "Research to Product • Patent Application 63/991,687",
      image: "https://milliewu.io/wp-content/uploads/2025/10/Equa_new-1-1024x701.webp",
      link: "",
    },
    {
      title: "Law of Attraction AI Journalling",
      description:
        "A context-aware journalling assistant built to help users articulate and revisit future-oriented intentions.",
      note: "HooHacks Intel AI Track, 2nd Place",
      image: "https://milliewu.io/wp-content/uploads/2025/10/mindriver-1024x701.png",
      link: "https://devpost.com/software/mind-river",
    },
    {
      title: "EEG-Art for Mindfulness",
      description:
        "A generative art system translating EEG signals from mindfulness practice into expressive visual outputs.",
      note: "NeuReality AR/VR Competition, 1st Place",
      image: "https://milliewu.io/wp-content/uploads/2025/10/neuro_art-1024x701.png",
      link: "https://devpost.com/software/neuro-art-cjsv9k",
    },
  ],
};
