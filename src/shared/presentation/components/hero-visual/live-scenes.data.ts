import type { LiveCategory } from "./architecture.types";

// Fuente única del editor live: 4 categorías en orden fijo,
// 10 fragmentos distintos por categoría (40 en total).
// Ejemplos ilustrativos breves: no son código ejecutable ni servicios reales.
export const LIVE_CATEGORIES: LiveCategory[] = [
  {
    id: "frontend",
    index: "01",
    title: { es: "Frontend", en: "Frontend" },
    short: "Frontend",
    techs: { es: ["React", "Next.js", "TypeScript"], en: ["React", "Next.js", "TypeScript"] },
    snippets: [
      {
        id: "fe-dashboard",
        file: "components/dashboard.tsx",
        language: "tsx",
        languageLabel: "React · TypeScript",
        code: [
          [
            { text: "export default ", tone: "kw" },
            { text: "function ", tone: "kw" },
            { text: "Dashboard", tone: "fn" },
            { text: "() {", tone: "plain" },
          ],
          [
            { text: "  const [quotes] = ", tone: "plain" },
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
        id: "fe-search",
        file: "components/search.tsx",
        language: "tsx",
        languageLabel: "React · TypeScript",
        code: [
          [
            { text: "export function ", tone: "kw" },
            { text: "Search", tone: "fn" },
            { text: "({ onQuery }: Props) {", tone: "plain" },
          ],
          [
            { text: "  return ", tone: "kw" },
            { text: "<input", tone: "plain" },
          ],
          [
            { text: "    placeholder", tone: "plain" },
            { text: '="Buscar…"', tone: "str" },
          ],
          [
            { text: "    onChange", tone: "plain" },
            { text: "={(e) => onQuery(e.target.value)}", tone: "plain" },
          ],
          [{ text: "  />", tone: "plain" }],
          [{ text: "}", tone: "plain" }],
        ],
      },
      {
        id: "fe-pagination",
        file: "components/pagination.tsx",
        language: "tsx",
        languageLabel: "React · TypeScript",
        code: [
          [
            { text: "const [page, setPage] = ", tone: "plain" },
            { text: "useState", tone: "fn" },
            { text: "(1)", tone: "plain" },
          ],
          [{ text: "const total = Math.ceil(count / LIMIT)", tone: "plain" }],
          [
            { text: "return ", tone: "kw" },
            { text: "<Pager", tone: "plain" },
          ],
          [
            { text: "  page", tone: "plain" },
            { text: "={page}", tone: "str" },
            { text: " total", tone: "plain" },
            { text: "={total}", tone: "str" },
          ],
          [
            { text: "  onChange", tone: "plain" },
            { text: "={setPage}", tone: "str" },
            { text: " />", tone: "plain" },
          ],
        ],
      },
      {
        id: "fe-modal",
        file: "components/modal.tsx",
        language: "tsx",
        languageLabel: "React · TypeScript",
        code: [
          [
            { text: "export function ", tone: "kw" },
            { text: "Modal", tone: "fn" },
            { text: "({ open, onClose, children }: Props) {", tone: "plain" },
          ],
          [
            { text: "  if ", tone: "kw" },
            { text: "(!open) ", tone: "plain" },
            { text: "return ", tone: "kw" },
            { text: "null", tone: "plain" },
          ],
          [
            { text: "  return ", tone: "kw" },
            { text: "<Overlay onClick", tone: "plain" },
            { text: "={onClose}", tone: "str" },
            { text: ">", tone: "plain" },
          ],
          [{ text: "    {children}", tone: "plain" }],
          [{ text: "  </Overlay>", tone: "plain" }],
          [{ text: "}", tone: "plain" }],
        ],
      },
      {
        id: "fe-form",
        file: "components/quote-form.tsx",
        language: "tsx",
        languageLabel: "React · TypeScript",
        code: [
          [
            { text: "async function ", tone: "kw" },
            { text: "onSubmit", tone: "fn" },
            { text: "(e: FormEvent) {", tone: "plain" },
          ],
          [{ text: "  e.preventDefault()", tone: "plain" }],
          [
            { text: "  await ", tone: "kw" },
            { text: "api.post(", tone: "plain" },
            { text: '"/quotes"', tone: "str" },
            { text: ", form)", tone: "plain" },
          ],
          [{ text: "  reset()", tone: "plain" }],
          [{ text: "}", tone: "plain" }],
        ],
      },
      {
        id: "fe-cards",
        file: "components/quote-cards.tsx",
        language: "tsx",
        languageLabel: "React · TypeScript",
        code: [
          [
            { text: "return ", tone: "kw" },
            { text: "<Grid>", tone: "plain" },
          ],
          [
            { text: "  {quotes.map((q) => (", tone: "plain" },
          ],
          [
            { text: "    <Card key", tone: "plain" },
            { text: "={q.id}", tone: "str" },
            { text: " quote", tone: "plain" },
            { text: "={q}", tone: "str" },
            { text: " />", tone: "plain" },
          ],
          [{ text: "  ))}", tone: "plain" }],
          [{ text: "</Grid>", tone: "plain" }],
        ],
      },
      {
        id: "fe-empty",
        file: "components/empty-state.tsx",
        language: "tsx",
        languageLabel: "React · TypeScript",
        code: [
          [
            { text: "export function ", tone: "kw" },
            { text: "Empty", tone: "fn" },
            { text: "() {", tone: "plain" },
          ],
          [
            { text: "  return ", tone: "kw" },
            { text: "<div>", tone: "plain" },
          ],
          [
            { text: "    <p>", tone: "plain" },
            { text: "Sin resultados", tone: "str" },
            { text: "</p>", tone: "plain" },
          ],
          [
            { text: "    <Button to", tone: "plain" },
            { text: '="/new"', tone: "str" },
            { text: ">Crear</Button>", tone: "plain" },
          ],
          [{ text: "  </div>", tone: "plain" }],
          [{ text: "}", tone: "plain" }],
        ],
      },
      {
        id: "fe-skeleton",
        file: "components/skeleton.tsx",
        language: "tsx",
        languageLabel: "React · TypeScript",
        code: [
          [
            { text: "export function ", tone: "kw" },
            { text: "Skeleton", tone: "fn" },
            { text: "() {", tone: "plain" },
          ],
          [
            { text: "  return ", tone: "kw" },
            { text: "<div aria-busy", tone: "plain" },
            { text: "={true}", tone: "str" },
            { text: ">", tone: "plain" },
          ],
          [
            { text: "    {[1, 2, 3].map((i) => (", tone: "plain" },
          ],
          [
            { text: '      <span key={i} className="pulse" />', tone: "muted" },
          ],
          [{ text: "    ))}", tone: "plain" }],
          [{ text: "  </div>", tone: "plain" }],
          [{ text: "}", tone: "plain" }],
        ],
      },
      {
        id: "fe-fetch",
        file: "hooks/use-quotes.ts",
        language: "tsx",
        languageLabel: "React · TypeScript",
        code: [
          [
            { text: "export function ", tone: "kw" },
            { text: "useQuotes", tone: "fn" },
            { text: "() {", tone: "plain" },
          ],
          [
            { text: "  const [data, setData] = ", tone: "plain" },
            { text: "useState", tone: "fn" },
            { text: "<Quote[] | null>(null)", tone: "plain" },
          ],
          [
            { text: "  useEffect", tone: "fn" },
            { text: "(() => {", tone: "plain" },
          ],
          [
            { text: "    api.get", tone: "plain" },
            { text: '("/quotes")', tone: "str" },
            { text: ".then(setData)", tone: "plain" },
          ],
          [{ text: "  }, [])", tone: "plain" }],
          [{ text: "  return data", tone: "plain" }],
          [{ text: "}", tone: "plain" }],
        ],
      },
      {
        id: "fe-filter",
        file: "hooks/use-filter.ts",
        language: "tsx",
        languageLabel: "React · TypeScript",
        code: [
          [
            { text: "export function ", tone: "kw" },
            { text: "useFilter", tone: "fn" },
            { text: "(items: Quote[], q: string) {", tone: "plain" },
          ],
          [
            { text: "  return ", tone: "kw" },
            { text: "useMemo", tone: "fn" },
            { text: "(() => {", tone: "plain" },
          ],
          [
            { text: "    return ", tone: "kw" },
            { text: "items.filter((i) =>", tone: "plain" },
          ],
          [
            { text: '      i.client.toLowerCase().includes(q.toLowerCase())', tone: "muted" },
          ],
          [{ text: "    )", tone: "plain" }],
          [{ text: "  }, [items, q])", tone: "plain" }],
          [{ text: "}", tone: "plain" }],
        ],
      },
    ],
  },
  {
    id: "backend",
    index: "02",
    title: { es: "Backend y API", en: "Backend & API" },
    short: "Backend",
    techs: { es: ["Python", "FastAPI", "SQLAlchemy", "Go"], en: ["Python", "FastAPI", "SQLAlchemy", "Go"] },
    snippets: [
      {
        id: "be-list",
        file: "api/routes.py",
        language: "python",
        languageLabel: "Python · FastAPI",
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
        id: "be-create",
        file: "api/quotes.py",
        language: "python",
        languageLabel: "Python · FastAPI",
        code: [
          [
            { text: "@router.post", tone: "kw" },
            { text: "(", tone: "plain" },
            { text: '"/quotes"', tone: "str" },
            { text: ", status_code=201)", tone: "plain" },
          ],
          [
            { text: "async def ", tone: "kw" },
            { text: "create_quote", tone: "fn" },
            { text: "(payload: QuoteIn):", tone: "plain" },
          ],
          [
            { text: "    quote = ", tone: "plain" },
            { text: "await ", tone: "kw" },
            { text: "service.create(payload)", tone: "plain" },
          ],
          [
            { text: "    return ", tone: "kw" },
            { text: "quote", tone: "plain" },
          ],
        ],
      },
      {
        id: "be-detail",
        file: "api/clients.py",
        language: "python",
        languageLabel: "Python · FastAPI",
        code: [
          [
            { text: "@router.get", tone: "kw" },
            { text: "(", tone: "plain" },
            { text: '"/clients/{client_id}"', tone: "str" },
            { text: ")", tone: "plain" },
          ],
          [
            { text: "async def ", tone: "kw" },
            { text: "get_client", tone: "fn" },
            { text: "(client_id: int):", tone: "plain" },
          ],
          [
            { text: "    client = ", tone: "plain" },
            { text: "await ", tone: "kw" },
            { text: "repo.find(client_id)", tone: "plain" },
          ],
          [
            { text: "    if ", tone: "kw" },
            { text: "client ", tone: "plain" },
            { text: "is ", tone: "kw" },
            { text: "None: ", tone: "plain" },
            { text: "raise ", tone: "kw" },
            { text: "NotFound()", tone: "plain" },
          ],
          [
            { text: "    return ", tone: "kw" },
            { text: "client", tone: "plain" },
          ],
        ],
      },
      {
        id: "be-health",
        file: "api/health.py",
        language: "python",
        languageLabel: "Python · FastAPI",
        code: [
          [
            { text: "@router.get", tone: "kw" },
            { text: "(", tone: "plain" },
            { text: '"/health"', tone: "str" },
            { text: ")", tone: "plain" },
          ],
          [
            { text: "async def ", tone: "kw" },
            { text: "health", tone: "fn" },
            { text: "(db=Depends(ping_db)): ", tone: "plain" },
            { text: "return ", tone: "kw" },
            { text: '{"ok": True}', tone: "plain" },
          ],
        ],
      },
      {
        id: "be-paged",
        file: "api/pagination.py",
        language: "python",
        languageLabel: "Python · FastAPI",
        code: [
          [
            { text: "async def ", tone: "kw" },
            { text: "list_paged", tone: "fn" },
            { text: "(page: int = 1, limit: int = 20):", tone: "plain" },
          ],
          [
            { text: "    stmt = ", tone: "plain" },
            { text: "select", tone: "fn" },
            { text: "(Quote).offset((page - 1) * limit)", tone: "plain" },
          ],
          [
            { text: "    rows = ", tone: "plain" },
            { text: "await ", tone: "kw" },
            { text: "db.execute(stmt.limit(limit))", tone: "plain" },
          ],
          [
            { text: "    return ", tone: "kw" },
            { text: '{"items": rows.scalars().all()}', tone: "plain" },
          ],
        ],
      },
      {
        id: "be-auth",
        file: "api/auth.py",
        language: "python",
        languageLabel: "Python · FastAPI",
        code: [
          [
            { text: "async def ", tone: "kw" },
            { text: "get_current_user", tone: "fn" },
            { text: "(token=Depends(bearer)): ", tone: "plain" },
            { text: "return ", tone: "kw" },
            { text: "decode(token)", tone: "plain" },
          ],
          [
            { text: "@router.get", tone: "kw" },
            { text: "(", tone: "plain" },
            { text: '"/me"', tone: "str" },
            { text: ")", tone: "plain" },
          ],
          [
            { text: "async def ", tone: "kw" },
            { text: "me", tone: "fn" },
            { text: "(user=Depends(get_current_user)):", tone: "plain" },
          ],
          [
            { text: "    return ", tone: "kw" },
            { text: "user", tone: "plain" },
          ],
        ],
      },
      {
        id: "be-task",
        file: "api/tasks.py",
        language: "python",
        languageLabel: "Python · FastAPI",
        code: [
          [
            { text: "@router.post", tone: "kw" },
            { text: "(", tone: "plain" },
            { text: '"/quotes/{qid}/pdf"', tone: "str" },
            { text: ")", tone: "plain" },
          ],
          [
            { text: "async def ", tone: "kw" },
            { text: "render_pdf", tone: "fn" },
            { text: "(qid: int, bg: BackgroundTasks):", tone: "plain" },
          ],
          [
            { text: "    bg.add_task", tone: "plain" },
            { text: "(build_pdf, qid)", tone: "plain" },
          ],
          [
            { text: "    return ", tone: "kw" },
            { text: '{"queued": True}', tone: "plain" },
          ],
        ],
      },
      {
        id: "be-update",
        file: "api/products.py",
        language: "python",
        languageLabel: "Python · FastAPI",
        code: [
          [
            { text: "@router.put", tone: "kw" },
            { text: "(", tone: "plain" },
            { text: '"/products/{sku}"', tone: "str" },
            { text: ")", tone: "plain" },
          ],
          [
            { text: "async def ", tone: "kw" },
            { text: "update_price", tone: "fn" },
            { text: "(sku: str, price: float):", tone: "plain" },
          ],
          [
            { text: "    return ", tone: "kw" },
            { text: "await ", tone: "kw" },
            { text: "catalog.set_price(sku, price)", tone: "plain" },
          ],
        ],
      },
      {
        id: "be-validate",
        file: "services/validate.go",
        language: "go",
        languageLabel: "Go",
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
      {
        id: "be-fanout",
        file: "services/fanout.go",
        language: "go",
        languageLabel: "Go",
        code: [
          [
            { text: "func ", tone: "kw" },
            { text: "Fanout", tone: "fn" },
            { text: "(in <-chan Proxy, n int) <-chan Result {", tone: "plain" },
          ],
          [{ text: "    out := make(chan Result)", tone: "plain" }],
          [
            { text: "    for ", tone: "kw" },
            { text: "i := 0; i < n; i++ { ", tone: "plain" },
            { text: "go ", tone: "kw" },
            { text: "worker(in, out) }", tone: "plain" },
          ],
          [
            { text: "    return ", tone: "kw" },
            { text: "out", tone: "plain" },
          ],
          [{ text: "}", tone: "plain" }],
        ],
      },
    ],
  },
  {
    id: "data",
    index: "03",
    title: { es: "Datos y almacenamiento", en: "Data & Storage" },
    short: "Data",
    techs: { es: ["PostgreSQL", "Redis", "MongoDB", "Polars"], en: ["PostgreSQL", "Redis", "MongoDB", "Polars"] },
    snippets: [
      {
        id: "da-recent",
        file: "database/query.sql",
        language: "sql",
        languageLabel: "PostgreSQL",
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
        id: "da-totals",
        file: "database/totals.sql",
        language: "sql",
        languageLabel: "PostgreSQL",
        code: [
          [
            { text: "SELECT ", tone: "kw" },
            { text: "status, ", tone: "plain" },
            { text: "COUNT", tone: "fn" },
            { text: "(*), ", tone: "plain" },
            { text: "SUM", tone: "fn" },
            { text: "(total)", tone: "plain" },
          ],
          [
            { text: "FROM ", tone: "kw" },
            { text: "quotes ", tone: "plain" },
            { text: "GROUP BY ", tone: "kw" },
            { text: "status;", tone: "plain" },
          ],
        ],
      },
      {
        id: "da-index",
        file: "database/index.sql",
        language: "sql",
        languageLabel: "PostgreSQL",
        code: [
          [
            { text: "CREATE INDEX ", tone: "kw" },
            { text: "IF NOT EXISTS idx_quotes_status ", tone: "plain" },
          ],
          [
            { text: "ON ", tone: "kw" },
            { text: "quotes (status, created_at DESC);", tone: "plain" },
          ],
        ],
      },
      {
        id: "da-join",
        file: "database/report.sql",
        language: "sql",
        languageLabel: "PostgreSQL",
        code: [
          [
            { text: "SELECT ", tone: "kw" },
            { text: "c.name, q.total ", tone: "plain" },
            { text: "FROM ", tone: "kw" },
            { text: "quotes q", tone: "plain" },
          ],
          [
            { text: "JOIN ", tone: "kw" },
            { text: "clients c ON c.id = q.client_id", tone: "plain" },
          ],
          [
            { text: "WHERE ", tone: "kw" },
            { text: "q.total > 1000;", tone: "plain" },
          ],
        ],
      },
      {
        id: "da-status",
        file: "database/update.sql",
        language: "sql",
        languageLabel: "PostgreSQL",
        code: [
          [
            { text: "UPDATE ", tone: "kw" },
            { text: "quotes ", tone: "plain" },
            { text: "SET ", tone: "kw" },
            { text: "status = ", tone: "plain" },
            { text: "'approved'", tone: "str" },
          ],
          [
            { text: "WHERE ", tone: "kw" },
            { text: "id = $1 ", tone: "plain" },
            { text: "AND ", tone: "kw" },
            { text: "status = ", tone: "plain" },
            { text: "'sent'", tone: "str" },
            { text: ";", tone: "plain" },
          ],
        ],
      },
      {
        id: "da-cache",
        file: "cache/service.py",
        language: "python",
        languageLabel: "Redis",
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
            { text: "await ", tone: "kw" },
            { text: "db.fetch_recent()", tone: "plain" },
          ],
        ],
      },
      {
        id: "da-invalidate",
        file: "cache/invalidate.py",
        language: "python",
        languageLabel: "Redis",
        code: [
          [
            { text: "async def ", tone: "kw" },
            { text: "invalidate_quotes", tone: "fn" },
            { text: "(redis):", tone: "plain" },
          ],
          [
            { text: "    n = ", tone: "plain" },
            { text: "await ", tone: "kw" },
            { text: "redis.delete(", tone: "plain" },
            { text: '"quotes:*"', tone: "str" },
            { text: ")", tone: "plain" },
          ],
          [
            { text: "    return ", tone: "kw" },
            { text: '{"invalidated": n}', tone: "plain" },
          ],
        ],
      },
      {
        id: "da-frame",
        file: "analysis/frame.py",
        language: "python",
        languageLabel: "Polars",
        code: [
          [
            { text: "import ", tone: "kw" },
            { text: "polars as pl", tone: "plain" },
          ],
          [
            { text: 'df = pl.read_parquet("events.parquet")', tone: "plain" },
          ],
          [
            { text: "recent = df.filter", tone: "plain" },
            { text: "(pl.col(", tone: "plain" },
            { text: '"total"', tone: "str" },
            { text: ") > 500)", tone: "plain" },
          ],
        ],
      },
      {
        id: "da-stats",
        file: "analysis/stats.py",
        language: "python",
        languageLabel: "Polars",
        code: [
          [
            { text: "stats = df.group_by", tone: "plain" },
            { text: '("status")', tone: "str" },
            { text: ".agg(", tone: "plain" },
          ],
          [
            { text: '    pl.col("total").mean().alias("avg"),', tone: "muted" },
          ],
          [
            { text: '    pl.len().alias("n"),', tone: "muted" },
          ],
          [{ text: ")", tone: "plain" }],
        ],
      },
      {
        id: "da-ttl",
        file: "cache/ttl.py",
        language: "python",
        languageLabel: "Redis",
        code: [
          [
            { text: "await ", tone: "kw" },
            { text: "redis.setex(", tone: "plain" },
          ],
          [
            { text: '    f"quote:{qid}",', tone: "str" },
          ],
          [{ text: "    300,", tone: "plain" }],
          [{ text: "    payload.json(),", tone: "muted" }],
          [{ text: ")", tone: "plain" }],
        ],
      },
    ],
  },
  {
    id: "infra",
    index: "04",
    title: { es: "Infraestructura y automatización", en: "Infrastructure & Automation" },
    short: "Infra",
    techs: { es: ["Docker", "Linux", "Nginx", "CI/CD"], en: ["Docker", "Linux", "Nginx", "CI/CD"] },
    snippets: [
      {
        id: "in-api",
        file: "Dockerfile",
        language: "dockerfile",
        languageLabel: "Docker",
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
        id: "in-worker",
        file: "Dockerfile.worker",
        language: "dockerfile",
        languageLabel: "Docker",
        code: [
          [
            { text: "FROM ", tone: "kw" },
            { text: "golang:1.23-alpine ", tone: "str" },
            { text: "AS build", tone: "plain" },
          ],
          [{ text: "WORKDIR /src", tone: "plain" }],
          [
            { text: "COPY ", tone: "kw" },
            { text: "go.mod .", tone: "plain" },
          ],
          [
            { text: "RUN ", tone: "kw" },
            { text: "go build -o /worker ./cmd/worker", tone: "muted" },
          ],
          [
            { text: "CMD ", tone: "kw" },
            { text: '["/worker"]', tone: "str" },
          ],
        ],
      },
      {
        id: "in-compose",
        file: "compose.yaml",
        language: "yaml",
        languageLabel: "Docker Compose",
        code: [
          [{ text: "services:", tone: "kw" }],
          [{ text: "  api:", tone: "plain" }],
          [
            { text: "    build", tone: "plain" },
            { text: ": .", tone: "muted" },
          ],
          [
            { text: "    depends_on", tone: "plain" },
            { text: ":", tone: "muted" },
          ],
          [{ text: "      - db", tone: "muted" }],
          [{ text: "      - redis", tone: "muted" }],
        ],
      },
      {
        id: "in-nginx",
        file: "infrastructure/nginx.conf",
        language: "nginx",
        languageLabel: "Nginx · Linux",
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
        id: "in-ci",
        file: ".github/workflows/ci.yml",
        language: "yaml",
        languageLabel: "CI/CD",
        code: [
          [{ text: "jobs:", tone: "kw" }],
          [{ text: "  build:", tone: "plain" }],
          [
            { text: "    steps:", tone: "plain" },
          ],
          [
            { text: "      - uses", tone: "plain" },
            { text: ": actions/checkout@v4", tone: "str" },
          ],
          [
            { text: "      - run", tone: "plain" },
            { text: ": npm ci && npm run build", tone: "str" },
          ],
        ],
      },
      {
        id: "in-deploy",
        file: "scripts/deploy.sh",
        language: "shell",
        languageLabel: "Linux",
        code: [
          [{ text: "#!/usr/bin/env bash", tone: "muted" }],
          [
            { text: "set ", tone: "kw" },
            { text: "-euo pipefail", tone: "plain" },
          ],
          [
            { text: "docker build ", tone: "plain" },
            { text: "-t registry/app:$TAG .", tone: "str" },
          ],
          [
            { text: "docker push ", tone: "plain" },
            { text: "registry/app:$TAG", tone: "str" },
          ],
        ],
      },
      {
        id: "in-make",
        file: "Makefile",
        language: "shell",
        languageLabel: "Linux",
        code: [
          [{ text: "test:", tone: "plain" }],
          [
            { text: "	pytest -q", tone: "muted" },
          ],
          [{ text: "lint:", tone: "plain" }],
          [
            { text: "	ruff check .", tone: "muted" },
          ],
          [{ text: "up:", tone: "plain" }],
          [
            { text: "	docker compose up -d", tone: "muted" },
          ],
        ],
      },
      {
        id: "in-backup",
        file: "scripts/backup.sh",
        language: "shell",
        languageLabel: "Linux",
        code: [
          [{ text: "#!/usr/bin/env bash", tone: "muted" }],
          [
            { text: "pg_dump ", tone: "plain" },
            { text: "$DATABASE_URL ", tone: "str" },
          ],
          [
            { text: "| gzip > /backups/$(date +%F).sql.gz", tone: "muted" },
          ],
        ],
      },
      {
        id: "in-ignore",
        file: ".dockerignore",
        language: "dockerfile",
        languageLabel: "Docker",
        code: [
          [{ text: "node_modules", tone: "muted" }],
          [{ text: ".next", tone: "muted" }],
          [{ text: "out", tone: "muted" }],
          [{ text: "*.log", tone: "muted" }],
        ],
      },
      {
        id: "in-redis",
        file: "infrastructure/redis.conf",
        language: "nginx",
        languageLabel: "Redis",
        code: [
          [{ text: "maxmemory 256mb", tone: "plain" }],
          [
            { text: "maxmemory-policy ", tone: "plain" },
            { text: "allkeys-lru", tone: "str" },
          ],
          [{ text: "save 60 1000", tone: "muted" }],
        ],
      },
    ],
  },
];
