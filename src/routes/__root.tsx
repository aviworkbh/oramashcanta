import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4" dir="rtl">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">העמוד לא נמצא</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          העמוד שאתם מחפשים לא קיים או הוסר.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "אורה רוזנטלר — ייעוץ משכנתאות מקצועי" },
      { name: "description", content: "אורה רוזנטלר — יועצת משכנתאות מובילה. ליווי אישי, חיסכון בעשרות אלפי שקלים והשגת תנאי המשכנתא הטובים ביותר." },
      { name: "author", content: "אורה רוזנטלר" },
      { property: "og:title", content: "אורה רוזנטלר — ייעוץ משכנתאות" },
      { property: "og:description", content: "ליווי אישי לקבלת המשכנתא המשתלמת ביותר עבורכם." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const links = [
    { to: "/", label: "בית" },
    { to: "/about", label: "אודות" },
    { to: "/calculator", label: "מחשבון משכנתא" },
    { to: "/contact", label: "יצירת קשר" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-bold text-primary">אורה רוזנטלר</span>
          <span className="text-[11px] tracking-[0.25em] text-gold uppercase mt-1">ייעוץ משכנתאות</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors data-[status=active]:text-primary data-[status=active]:font-semibold"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
          style={{ background: "var(--gradient-gold)" }}
        >
          קביעת פגישה
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-display text-xl mb-2">אורה רוזנטלר</h3>
          <p className="text-primary-foreground/70">יועצת משכנתאות בכירה — ליווי מקצועי, אישי ושקוף לאורך כל הדרך.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gold">צרו קשר</h4>
          <p className="text-primary-foreground/70">טלפון: 050-000-0000</p>
          <p className="text-primary-foreground/70">דוא״ל: ora@mortgage.co.il</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gold">שעות פעילות</h4>
          <p className="text-primary-foreground/70">א׳-ה׳: 09:00 – 19:00</p>
          <p className="text-primary-foreground/70">ו׳: 09:00 – 13:00</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} אורה רוזנטלר — כל הזכויות שמורות
      </div>
    </footer>
  );
}
