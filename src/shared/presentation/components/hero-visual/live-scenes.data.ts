import type { LiveScene } from "./architecture.types";

// Fuente única de las siete escenas del editor live del Hero.
// Ejemplos ilustrativos breves: no son código ejecutable ni servicios reales.
export const LIVE_SCENES: LiveScene[] = [
  {
    id: "dashboard",
    index: "01",
    file: "components/dashboard.tsx",
    language: "tsx",
    languageLabel: "React · TypeScript",
    techs: { es: ["React", "Next.js", "TypeScript"], en: ["React", "Next.js", "TypeScript"] },
    code: [
      [
        { text: "export default ", tone: "kw" },
        { text: "function ", tone: "kw" },
        { text: "Dashboard", tone: "fn" },
        { text: "() {", tone: "plain" },
      ],
      [
        { text: "  const [quotes, setQuotes] = ", tone: "plain" },
        { text: "useState", tone: "fn" },
        { text: "<Quote[]>([])", tone: "plain" },
      ],
      [
        { text: "  return ", tone: "kw" },
        { text: "<QuotesList", tone: "plain" },
        { text: " items", tone: "plain" },
        { text: "={quotes}", tone: "str" },
        { text: " />", tone: "plain" },
      ],
      [{ text: "}", tone: "plain" }],
    ],
  },
  {
    id: "routes",
    index: "02",
    file: "api/routes.py",
    language: "python",
    languageLabel: "Python · FastAPI",
    techs: { es: ["Python", "FastAPI", "SQLAlchemy"], en: ["Python", "FastAPI", "SQLAlchemy"] },
    code: [
      [
        { text: "from fastapi ", tone: "kw" },
        { text: "import ", tone: "kw" },
        { text: "APIRouter", tone: "fn" },
      ],
      [{ text: "router = APIRouter()", tone: "plain" }],
      [
        { text: "@router.get", tone: "kw" },
        { text: "(", tone: "plain" },
        { text: '"/projects"', tone: "str" },
        { text: ")", tone: "plain" },
      ],
      [
        { text: "async def ", tone: "kw" },
        { text: "get_projects", tone: "fn" },
        { text: "():", tone: "plain" },
      ],
      [
        { text: "    return ", tone: "kw" },
        { text: "await project_service.list()", tone: "plain" },
      ],
    ],
  },
  {
    id: "query",
    index: "03",
    file: "database/query.sql",
    language: "sql",
    languageLabel: "PostgreSQL",
    techs: { es: ["PostgreSQL", "SQL", "Índices"], en: ["PostgreSQL", "SQL", "Indexes"] },
    code: [
      [
        { text: "SELECT ", tone: "kw" },
        { text: "id, total ", tone: "plain" },
        { text: "FROM ", tone: "kw" },
        { text: "quotes", tone: "plain" },
      ],
      [
        { text: "WHERE ", tone: "kw" },
        { text: "status = ", tone: "plain" },
        { text: "'sent'", tone: "str" },
      ],
      [{ text: "ORDER BY created_at DESC;", tone: "plain" }],
      [{ text: "LIMIT 50;", tone: "muted" }],
    ],
  },
  {
    id: "cache",
    index: "04",
    file: "cache/service.py",
    language: "python",
    languageLabel: "Redis",
    techs: { es: ["Redis", "Python", "Caché"], en: ["Redis", "Python", "Cache"] },
    code: [
      [
        { text: "async def ", tone: "kw" },
        { text: "get_cached_quotes", tone: "fn" },
        { text: "(db, redis):", tone: "plain" },
      ],
      [
        { text: "    cached = ", tone: "plain" },
        { text: "await ", tone: "kw" },
        { text: "redis.get(", tone: "plain" },
        { text: '"quotes:recent"', tone: "str" },
        { text: ")", tone: "plain" },
      ],
      [
        { text: "    if ", tone: "kw" },
        { text: "cached: ", tone: "plain" },
        { text: "return ", tone: "kw" },
        { text: "cached", tone: "plain" },
      ],
      [
        { text: "    return ", tone: "kw" },
        { text: "await db.fetch_recent()", tone: "plain" },
      ],
    ],
  },
  {
    id: "docker",
    index: "05",
    file: "Dockerfile",
    language: "dockerfile",
    languageLabel: "Docker",
    techs: { es: ["Docker", "Linux", "CI/CD"], en: ["Docker", "Linux", "CI/CD"] },
    code: [
      [
        { text: "FROM ", tone: "kw" },
        { text: "python:3.12-slim", tone: "str" },
      ],
      [{ text: "WORKDIR /app", tone: "plain" }],
      [
        { text: "COPY ", tone: "kw" },
        { text: "requirements.txt .", tone: "plain" },
      ],
      [
        { text: "RUN ", tone: "kw" },
        { text: "pip install -r requirements.txt", tone: "muted" },
      ],
      [
        { text: "CMD ", tone: "kw" },
        { text: '["uvicorn", "app:api"]', tone: "str" },
      ],
    ],
  },
  {
    id: "nginx",
    index: "06",
    file: "infrastructure/nginx.conf",
    language: "nginx",
    languageLabel: "Nginx · Linux",
    techs: { es: ["Nginx", "Linux", "Infraestructura"], en: ["Nginx", "Linux", "Infrastructure"] },
    code: [
      [{ text: "server {", tone: "plain" }],
      [
        { text: "    listen ", tone: "kw" },
        { text: "443 ssl;", tone: "plain" },
      ],
      [
        { text: "    location ", tone: "kw" },
        { text: "/api/ {", tone: "plain" },
      ],
      [{ text: "        proxy_pass http://api:8000;", tone: "muted" }],
      [{ text: "    }", tone: "plain" }],
      [{ text: "}", tone: "plain" }],
    ],
  },
  {
    id: "worker",
    index: "07",
    file: "services/worker.go",
    language: "go",
    languageLabel: "Go",
    techs: { es: ["Go", "Concurrencia", "Servicios"], en: ["Go", "Concurrency", "Services"] },
    code: [
      [
        { text: "func ", tone: "kw" },
        { text: "Validate", tone: "fn" },
        { text: "(jobs <-chan Job) {", tone: "plain" },
      ],
      [
        { text: "    for ", tone: "kw" },
        { text: "job := ", tone: "plain" },
        { text: "range ", tone: "kw" },
        { text: "jobs {", tone: "plain" },
      ],
      [{ text: "        go check(job)", tone: "plain" }],
      [{ text: "    }", tone: "plain" }],
      [{ text: "}", tone: "plain" }],
    ],
  },
];
