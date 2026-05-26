import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  Sparkles,
  Trophy,
} from "lucide-react";

const profile = {
  name: "Tanishqa Sehgal",
  tagline: "Economics · Data Analytics · Research",
  location: "New Delhi, India",
  email: "sehgaltanishqa2007@gmail.com",
  phone: "+91 84477 14253",
  linkedin: "https://www.linkedin.com/in/tanishqa-sehgal-768233205",
};

const logos = {
  dtu: "/logos/dtu_logo.png",
  mcs: "/logos/mcs_logo.png",
  cbse: "/logos/cbse_logo.png",
  bcg: "/logos/bcg_logo.png",
  goldman: "/logos/goldman_logo.png",
  mck: "/logos/mck_logo.svg",
  python: "/logos/python_logo.png",
  sql: "/logos/sql_logo.jpg",
  research: "/logos/union_logo.jpg",
};

const snapshot = [
  {
    value: "9.0",
    label: "SGPA in Semester 1 at Delhi Technological University",
  },
  {
    value: "95.3%",
    label: "Class X CBSE academic performance",
  },
  {
    value: "2025–29",
    label: "B.A. (Hons) Economics at DTU",
  },
  {
    value: "18",
    label: "published research co-author in economics",
  },
];

const featuredWork = [
  {
    title: "Quick Commerce in India — Published Research",
    eyebrow: "Research · Economics · Consumer Markets",
    logo: logos.research,
    description:
      "Co-authored published research on India’s ultra-fast delivery ecosystem, studying demand-supply dynamics, gig labour economics, consumer behaviour, digital payments, and the Indian exception in quick commerce.",
    impact:
      "Combined economic reasoning, comparative market analysis, SWOC thinking, and policy recommendations into a structured research article.",
    tags: ["Research Writing", "Market Analysis", "Gig Economy", "SWOC", "Policy"],
  },
  {
    title: "Python Financial Analysis Tool",
    eyebrow: "Python · CSV · Decision Support",
    logo: logos.python,
    description:
      "Designed a Python-based program to analyse structured financial inputs and generate logical outputs from CSV files for decision support.",
    impact:
      "Built early hands-on experience in Python workflows, structured data handling, and automated analytical output generation.",
    tags: ["Python", "CSV", "Automation", "Finance", "Data Workflows"],
  },
  {
    title: "UK & Eurozone Macroeconomic Slowdown",
    eyebrow: "Macroeconomics · Policy · Global Markets",
    logo: null,
    description:
      "Analysed the effects of Brexit, inflation, post-pandemic recovery challenges, energy shocks, geopolitical risk, and monetary policy constraints on growth, employment, consumer confidence, and financial markets.",
    impact:
      "Compared global recovery strategies, fiscal responses, digital transformation, and green transition models for long-term sustainable growth.",
    tags: ["Macroeconomics", "Policy Analysis", "Inflation", "GDP", "Markets"],
  },
];

const projects = [
  {
    code: "QC",
    title: "India’s Quick Commerce Growth",
    description:
      "Studied why quick commerce scaled differently in India compared with Western markets, linking consumer behaviour, gig labour, digital payments, and dense urban demand.",
    tags: ["Research", "Consumer Economics", "Digital Economy"],
  },
  {
    code: "PY",
    title: "Python Financial Input Analyzer",
    description:
      "Built a Python workflow for reading structured inputs, applying logical conditions, and generating decision-support outputs from financial data.",
    tags: ["Python", "CSV", "Financial Logic"],
  },
  {
    code: "UK",
    title: "UK & Eurozone Macroeconomic Analysis",
    description:
      "Assessed inflation, Brexit, energy shocks, consumer confidence, employment, and fiscal policy responses across the UK and Eurozone.",
    tags: ["Macroeconomics", "Policy", "Global Economy"],
  },
  {
    code: "IN",
    title: "India’s Informal Economy Resilience",
    description:
      "Examined demonetisation, GST, digital payments, financial inclusion, labour vulnerability, and formalization costs in India’s informal sector.",
    tags: ["Indian Economy", "Policy", "Financial Inclusion"],
  },
  {
    code: "BD",
    title: "Union Budget 2026–27 Analysis",
    description:
      "Evaluated taxation reforms, public expenditure, infrastructure investment, MSME support, agriculture, technology, employment, and long-term growth implications.",
    tags: ["Budget", "Fiscal Policy", "Sector Analysis"],
  },
  {
    code: "DS",
    title: "BCG X Data Science Virtual Experience",
    description:
      "Currently pursuing a business-facing data science program focused on customer churn analysis, retention insights, and structured problem-solving.",
    tags: ["Churn", "Data Science", "Forage"],
  },
];

const learningStack = [
  {
    title: "Economics & Policy",
    items: [
      "Microeconomics",
      "Macroeconomics",
      "Public policy",
      "Development economics",
      "Banking & investment basics",
    ],
  },
  {
    title: "Quantitative Methods",
    items: [
      "Statistics",
      "Econometrics",
      "Regression",
      "Hypothesis testing",
      "Data interpretation",
    ],
  },
  {
    title: "Data & Programming",
    items: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "CSV workflows",
      "SPSS",
    ],
  },
  {
    title: "Business Skills",
    items: [
      "Research writing",
      "Case analysis",
      "Public speaking",
      "Canva",
      "MUN",
      "Presentation design",
    ],
  },
];

const experiencePrograms = [
  {
    title: "BCG X Data Science Program",
    org: "Boston Consulting Group · Forage",
    date: "In progress",
    logo: logos.bcg,
    description:
      "Working on customer churn analysis and retention modelling using real-world business datasets.",
  },
  {
    title: "Goldman Sachs Operations Simulation",
    org: "Goldman Sachs · Forage",
    date: "2025",
    logo: logos.goldman,
    description:
      "Practised operations workflows and high-value client transaction handling in a structured finance environment.",
  },
  {
    title: "McKinsey.org Forward Program",
    org: "McKinsey.org",
    date: "2024–25",
    logo: logos.mck,
    description:
      "Selected for a workplace-readiness program focused on professional skills, structured thinking, and business exposure.",
  },
];

const achievements = [
  "Honourable Mention — Arth Saga 2.0, Questus’26 economic reasoning competition.",
  "1st Place — Empectia, Kaleidoscope 2022–23, a PAN India interschool competition.",
  "Qualified Level 1 — Franklin Templeton Mutual Funds Olympiad.",
  "Published research in ARSD College annual magazine on India’s ultra-fast delivery ecosystem.",
  "Recognized for public speaking, debating, analytical thinking, and academic participation.",
];

const leadership = [
  "Corporate member, Ecotech — The Economics Society of DTU.",
  "Design member, SPIC MACAY — Indian classical arts promotion.",
  "College badminton team member.",
  "Active participant in Model United Nations, debates, case competitions, and academic events.",
];

function LogoBox({
  src,
  alt,
  className = "h-14 w-24",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-2xl border border-stone-200 bg-white p-3 shadow-sm ${className}`}
    >
      <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#fbfaf6]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-serif text-2xl tracking-wide text-stone-950">
          Tanishqa Sehgal
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-stone-700 lg:flex">
          <a href="#work" className="hover:text-amber-700">
            Work
          </a>
          <a href="#experience" className="hover:text-amber-700">
            Experience
          </a>
          <a href="#projects" className="hover:text-amber-700">
            Projects
          </a>
          <a href="#learning" className="hover:text-amber-700">
            Skills
          </a>
          <a href="#contact" className="hover:text-amber-700">
            Contact
          </a>
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-stone-950 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-stone-300/40 transition hover:-translate-y-0.5 hover:bg-amber-800"
        >
          Contact
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#fbfaf6] px-6 py-20 md:py-24"
    >
      <div className="absolute left-[-10%] top-[-20%] h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-10%] h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm">
            <Sparkles className="h-4 w-4" />
            {profile.tagline}
          </div>

          <h1 className="mt-7 max-w-5xl font-serif text-5xl leading-[1.03] tracking-tight text-stone-950 md:text-7xl">
            Exploring economics through data, policy, and structured research.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-600">
            First-year Economics Honours student at Delhi Technological University
            building a foundation in quantitative methods, Python-based analysis,
            financial reasoning, and research-led problem solving.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center rounded-full bg-stone-950 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-stone-300/40 transition hover:-translate-y-1 hover:bg-amber-800"
            >
              View Work <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-6 py-4 text-sm font-bold text-stone-950 shadow-sm transition hover:-translate-y-1 hover:bg-stone-50"
            >
              LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-stone-600">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-700" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 hover:text-amber-800"
            >
              <Mail className="h-4 w-4 text-amber-700" />
              {profile.email}
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-2xl shadow-stone-200/70 backdrop-blur">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-700">
            Portfolio Snapshot
          </p>
          <h2 className="mt-4 font-serif text-3xl text-stone-950">
            Early-career profile with academic depth and analytical momentum.
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {snapshot.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-amber-100 bg-gradient-to-br from-white to-amber-50 p-5"
              >
                <div className="text-3xl font-black text-amber-700">{item.value}</div>
                <p className="mt-2 text-sm leading-6 text-stone-600">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="flex gap-3 text-sm leading-7 text-stone-700">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
              Core direction: economics, data analytics, finance, policy research, and
              business problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedWorkSection() {
  return (
    <section id="work" className="bg-white px-6 py-18 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-700">
            Featured Work
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-stone-950 md:text-5xl">
            Academic research, data projects, and economic analysis.
          </h2>
          <p className="mt-4 leading-7 text-stone-600">
            A focused view of work that combines economics, structured reasoning,
            financial analysis, and early data analytics practice.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredWork.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-stone-200 bg-[#fbfaf6] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">
                  {project.eyebrow}
                </p>

                {project.logo && (
                  <LogoBox src={project.logo} alt={project.title} className="h-14 w-20" />
                )}
              </div>

              <h3 className="font-serif text-2xl leading-snug text-stone-950">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {project.description}
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-700">
                <span className="font-bold text-stone-950">What it shows: </span>
                {project.impact}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-semibold text-amber-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceProgramsSection() {
  return (
    <section id="experience" className="bg-[#fbfaf6] px-6 py-18 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-700">
            Virtual Experience Programs
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-stone-950 md:text-5xl">
            Early exposure to business, consulting, and data science.
          </h2>
          <p className="mt-4 leading-7 text-stone-600">
            Business-facing programs that show internship readiness across data science,
            operations, consulting, and structured workplace problem-solving.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {experiencePrograms.map((program) => (
            <article
              key={program.title}
              className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <LogoBox src={program.logo} alt={program.org} className="h-16 w-28" />

                <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-bold text-stone-600">
                  {program.date}
                </span>
              </div>

              <div className="mb-3 flex items-center gap-2 text-amber-700">
                <BriefcaseBusiness className="h-5 w-5" />
                <span className="text-xs font-black uppercase tracking-[0.2em]">
                  Program
                </span>
              </div>

              <h3 className="font-serif text-2xl text-stone-950">{program.title}</h3>
              <p className="mt-1 text-sm font-semibold text-amber-800">{program.org}</p>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {program.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#f4f1ea] px-6 py-18 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-700">
            Projects & Analytical Exposure
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-stone-950 md:text-5xl">
            Building range across economics, finance, and data.
          </h2>
          <p className="mt-4 leading-7 text-stone-600">
            These projects show a student profile developing across research writing,
            economic modelling, policy analysis, and practical data workflows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-2 bg-gradient-to-r from-amber-400 via-rose-300 to-stone-900" />
              <div className="p-6">
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-stone-950 text-sm font-black text-white">
                    {project.code}
                  </div>
                  <h3 className="font-serif text-2xl leading-snug text-stone-950">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-stone-600">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningSection() {
  return (
    <section id="learning" className="bg-white px-6 py-18 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-700">
            Skills & Academic Foundation
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-stone-950 md:text-5xl">
            The foundation behind the work.
          </h2>
          <p className="mt-4 leading-7 text-stone-600">
            Coursework and self-driven exposure across economics, statistics,
            programming, databases, finance, and business communication.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {learningStack.map((group) => (
            <div
              key={group.title}
              className="rounded-[2rem] border border-stone-200 bg-[#fbfaf6] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-2xl text-stone-950">{group.title}</h3>

                {group.title === "Data & Programming" && (
                  <div className="flex items-center gap-2">
                    <LogoBox src={logos.python} alt="Python" className="h-10 w-10 p-1.5" />
                    <LogoBox src={logos.sql} alt="SQL" className="h-10 w-10 p-1.5" />
                  </div>
                )}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-semibold text-stone-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-stone-200 bg-gradient-to-br from-stone-950 to-stone-800 p-7 text-white shadow-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">
                Direction
              </p>
              <h3 className="mt-3 font-serif text-3xl">
                Economics student with growing data and finance depth.
              </h3>
              <p className="mt-3 max-w-4xl leading-7 text-stone-300">
                Best-fit opportunities: research internships, data analytics internships,
                finance/business analyst internships, policy research, and strategy-facing
                student roles.
              </p>
            </div>
            <BookOpen className="h-16 w-16 shrink-0 text-amber-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" className="bg-white px-6 py-18 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-700">
            Achievements & Education
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-stone-950 md:text-5xl">
            Academic initiative beyond the classroom.
          </h2>
          <p className="mt-4 leading-7 text-stone-600">
            A mix of competitions, published research, societies, public speaking, and
            extracurricular responsibility.
          </p>

          <div className="mt-8 rounded-[2rem] border border-stone-200 bg-[#fbfaf6] p-6">
            <div className="flex items-center gap-4">
              <LogoBox
                src={logos.dtu}
                alt="Delhi Technological University"
                className="h-16 w-16"
              />
              <div>
                <h3 className="font-serif text-2xl text-stone-950">
                  Delhi Technological University
                </h3>
                <p className="text-sm leading-6 text-stone-600">
                  B.A. (Hons) Economics · 2025–2029 · 9.0 SGPA Sem 1
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-stone-200 pt-5">
              <div className="flex items-start gap-4">
                <LogoBox src={logos.mcs} alt="Mount Carmel School" className="h-16 w-16" />

                <div className="space-y-3 text-sm leading-7 text-stone-600">
                  <p>
                    <span className="font-bold text-stone-950">Mount Carmel School</span>
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2">
                      <img src={logos.cbse} alt="CBSE" className="h-6 w-6 object-contain" />
                      Class XII CBSE Science PCM — 86%
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2">
                      <img src={logos.cbse} alt="CBSE" className="h-6 w-6 object-contain" />
                      Class X CBSE — 95.3%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-stone-200 bg-[#fbfaf6] p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Trophy className="h-7 w-7 text-amber-700" />
              <h3 className="font-serif text-2xl text-stone-950">Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-6 text-stone-600">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-[#fbfaf6] p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Sparkles className="h-7 w-7 text-amber-700" />
              <h3 className="font-serif text-2xl text-stone-950">Leadership</h3>
            </div>
            <div className="space-y-4">
              {leadership.map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-6 text-stone-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#f4f1ea] px-6 py-18 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">
                Open to internships
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                Research · Data Analytics · Finance · Policy
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-stone-300">
                Seeking internships and student opportunities where economics, analytics,
                research writing, and business problem-solving come together.
              </p>

              <div className="mt-6 flex flex-wrap gap-5 text-sm text-stone-300">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 hover:text-amber-200"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-w-[180px] items-center justify-center gap-3 rounded-2xl bg-white px-5 py-4 text-sm font-black text-stone-950 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-amber-50"
              >
                <Mail className="h-5 w-5 text-amber-700" />
                Email
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[180px] items-center justify-center gap-3 rounded-2xl bg-white px-5 py-4 text-sm font-black text-stone-950 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-amber-50"
              >
                <ExternalLink className="h-5 w-5 text-amber-700" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-stone-500">
          © 2026 Tanishqa Sehgal. Built as an academic and early-career portfolio.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-stone-900">
      <Header />
      <HeroSection />
      <FeaturedWorkSection />
      <ExperienceProgramsSection />
      <ProjectsSection />
      <LearningSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}