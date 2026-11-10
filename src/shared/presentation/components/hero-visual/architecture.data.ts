import type { ArchitectureStage } from "./architecture.types";

// Fuente única de las etapas del panel interactivo.
// Ejemplos ilustrativos: no son código ejecutable ni servicios reales.
export const ARCHITECTURE_STAGES: ArchitectureStage[] = [
  {
    id: "frontend",
    index: "01",
    title: "Frontend",
    techs: ["React", "Next.js", "TypeScript"],
    language: "tsx",
    code: [
      [
        { text: "export default ", tone: "kw" },
        { text: "function ", tone: "kw" },
        { text: "Quotes", tone: "fn" },
        { text: "() {", tone: "plain" },
      ],
      [
        { text: "  const { data } = ", tone: "plain" },
        { text: "useQuotes", tone: "fn" },
        { text: "()", tone: "plain" },
      ],
      [
        { text: "  return ", tone: "kw" },
        { text: "<List", tone: "plain" },
        { text: " items", tone: "plain" },
        { text: "={data}", tone: "str" },
        { text: " />", tone: "plain" },
      ],
      [{ text: "}", tone: "plain" }],
    ],
  },
  {
    id: "backend",
    index: "02",
    title: "Backend & API",
    techs: ["Python", "FastAPI", "SQLAlchemy", "Go"],
    language: "python",
    code: [
      [
        { text: "@app.get", tone: "kw" },
        { text: "(", tone: "plain" },
        { text: '"/quotes"', tone: "str" },
        { text: ")", tone: "plain" },
      ],
      [
        { text: "async def ", tone: "kw" },
        { text: "list_quotes", tone: "fn" },
        { text: "(db=Depends(get_db)):", tone: "plain" },
      ],
      [
        { text: "    result = ", tone: "plain" },
        { text: "await ", tone: "kw" },
        { text: "db.execute(select(Quote))", tone: "plain" },
      ],
      [
        { text: "    return ", tone: "kw" },
        { text: "result.scalars().all()", tone: "plain" },
      ],
    ],
  },
  {
    id: "data",
    index: "03",
    title: "Data & Storage",
    techs: ["PostgreSQL", "Redis", "MongoDB", "Polars"],
    language: "sql",
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
    ],
  },
  {
    id: "infra",
    index: "04",
    title: "Infrastructure & Automation",
    techs: ["Docker", "Linux", "Nginx", "CI/CD"],
    language: "yaml",
    code: [
      [{ text: "services:", tone: "kw" }],
      [
        { text: "  api:", tone: "plain" },
      ],
      [
        { text: "    build", tone: "plain" },
        { text: ": .", tone: "muted" },
      ],
      [
        { text: "    command", tone: "plain" },
        { text: ": uvicorn app:api", tone: "muted" },
      ],
    ],
  },
];
