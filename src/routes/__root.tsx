import { Outlet, Link, createRootRoute, HeadContent } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle, Mail } from "lucide-react";

import logo from "@/assets/logo.png";
import { AccessibilityMenu } from "@/components/AccessibilityMenu";

const WA_URL = "https://Wa.me/972533886710?text=%D7%94%D7%99%D7%99.%0A%D7%A8%D7%90%D7%99%D7%AA%D7%99+%D7%90%D7%AA+%D7%94%D7%A4%D7%A8%D7%A1%D7%95%D7%9D+%D7%A2%D7%9C+%D7%99%D7%99%D7%A2%D7%95%D7%A5+%D7%91%D7%AA%D7%97%D7%95%D7%9D+%D7%94%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90..+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A4%D7%A8%D7%98%D7%99%D7%9D+%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D+%F0%9F%98%8C";
const PHONE = "053-388-6710";
const EMAIL = "orarozen1@gmail.com";

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
      { property: "og:title", content: "אורה רוזנטלר — ייעוץ משכנתאות מקצועי" },
      { property: "og:description", content: "אורה רוזנטלר — יועצת משכנתאות מובילה. ליווי אישי, חיסכון בעשרות אלפי שקלים והשגת תנאי המשכנתא הטובים ביותר." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "אורה רוזנטלר — ייעוץ משכנתאות מקצועי" },
      { name: "twitter:description", content: "אורה רוזנטלר — יועצת משכנתאות מובילה. ליווי אישי, חיסכון בעשרות אלפי שקלים והשגת תנאי המשכנתא הטובים ביותר." },
      { property: "og:image", content: "https://oramashcanta.lovable.app/__l5e/assets-v1/4bc49c5c-86a3-4f28-9636-53d8e65fb70a/og-image.png" },
      { property: "og:image:secure_url", content: "https://oramashcanta.lovable.app/__l5e/assets-v1/4bc49c5c-86a3-4f28-9636-53d8e65fb70a/og-image.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "אורה רוזנטלר — ייעוץ משכנתאות" },
      { name: "twitter:image", content: "https://oramashcanta.lovable.app/__l5e/assets-v1/4bc49c5c-86a3-4f28-9636-53d8e65fb70a/og-image.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeadContent />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <AccessibilityMenu />
    </div>
  );
}

function SiteHeader() {
  const links = [
    { hash: "home", label: "בית" },
    { hash: "calculator", label: "מחשבון משכנתא" },
    { hash: "reviews", label: "ביקורות" },
    { hash: "about", label: "אודות" },
    { hash: "contact", label: "צור קשר" },
  ] as const;

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between md:justify-center">
        <div className="flex items-center gap-8">
          <Link to="/" hash="home" className="flex items-center gap-3 leading-none shrink-0">
            <img src={logo} alt="לוגו אורה רוזנטלר ייעוץ משכנתאות" className="h-14 w-auto" width={56} height={56} />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.hash}
                href={`#${l.hash}`}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-primary hover:bg-accent transition-colors"
          aria-label="תפריט"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="container mx-auto px-6 py-3 flex flex-col">
            {links.map((l) => (
              <a
                key={l.hash}
                href={`#${l.hash}`}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground/85 hover:text-primary transition-colors border-b border-border/50 last:border-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="לוגו אורה רוזנטלר" className="h-12 w-auto bg-white rounded-lg p-1" width={48} height={48} />
            <h3 className="font-display text-xl">אורה רוזנטלר</h3>
          </div>
          <p className="text-primary-foreground/70">הדרך הבטוחה למשכנתא שלך — ליווי מקצועי, אישי ושקוף.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gold">צור קשר</h4>
          <ul className="space-y-2 text-primary-foreground/80">
            <li>
              <a href={`tel:${PHONE.replace(/-/g, "")}`} className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
            </li>
            <li>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                <MessageCircle className="w-4 h-4" /> וואטסאפ
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-gold transition-colors break-all">
                <Mail className="w-4 h-4" /> {EMAIL}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gold">שעות פעילות</h4>
          <p className="text-primary-foreground/70">א׳-ה׳: 8:00 – 17:30</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} אורה רוזנטלר — כל הזכויות שמורות ·{" "}
        <Link to="/accessibility" className="hover:text-gold underline">
          הצהרת נגישות
        </Link>
      </div>
    </footer>
  );
}
