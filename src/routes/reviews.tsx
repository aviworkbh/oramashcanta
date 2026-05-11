import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ExternalLink, ArrowLeft } from "lucide-react";

const GOOGLE_URL = "https://maps.app.goo.gl/xkN3J7B5BqFZ2RNq6";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "ביקורות לקוחות — אורה רוזנטלר" },
      { name: "description", content: "מה לקוחות שלי מספרים? קראו ביקורות אמיתיות בעמוד הגוגל של אורה רוזנטלר ייעוץ משכנתאות." },
      { property: "og:title", content: "ביקורות לקוחות — אורה רוזנטלר" },
      { property: "og:description", content: "ביקורות אמיתיות מלקוחות מרוצים." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  {
    name: "משפחת לוי",
    text: "אורה ליוותה אותנו ברכישת הדירה הראשונה. מקצועית, סבלנית ובעיקר חסכה לנו עשרות אלפי שקלים. ממליצים בחום!",
  },
  {
    name: "דנה כהן",
    text: "מיחזרנו את המשכנתא בעזרת אורה והיא השיגה לנו תנאים שלא חשבנו שאפשריים. שירות אישי ויחס יוצא דופן.",
  },
  {
    name: "יוסי ומיכל",
    text: "אורה הפכה תהליך מורכב ומפחיד למשהו פשוט וברור. תמיד זמינה, תמיד עם תשובה. תודה ענקית!",
  },
];

function ReviewsPage() {
  return (
    <section className="container mx-auto px-6 pt-16 pb-20 lg:pt-24 max-w-6xl">
      <div className="text-center mb-14">
        <span className="inline-block text-xs tracking-[0.3em] text-gold uppercase mb-4">ביקורות לקוחות</span>
        <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-4">
          לקוחות <span className="italic text-gold">מספרים</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          הסיפוק האמיתי שלי הוא לקוחות מרוצים. הנה כמה מהדברים שהם מספרים.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card p-7 rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
            <div className="flex gap-1 mb-3 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-foreground/85 leading-relaxed mb-5">{r.text}</p>
            <div className="font-semibold text-primary">— {r.name}</div>
          </div>
        ))}
      </div>

      <div
        className="rounded-3xl p-10 lg:p-14 text-center shadow-[var(--shadow-elegant)]"
        style={{ background: "var(--gradient-hero)" }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
          קראו עוד ביקורות בגוגל
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          כל הביקורות הזמינות, ישירות מעמוד הגוגל של העסק.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
            style={{ background: "var(--gradient-gold)" }}
          >
            לעמוד הגוגל <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition"
          >
            לקביעת פגישה <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}