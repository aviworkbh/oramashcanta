import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { Check, TrendingDown, ShieldCheck, Sparkles, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "אורה רוזנטלר — ייעוץ משכנתאות מקצועי ואישי" },
      { name: "description", content: "יועצת משכנתאות מובילה. חוסכת לכם עשרות אלפי שקלים בעזרת ליווי אישי ומקצועי." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              ליווי אישי לאורך כל הדרך
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] text-primary">
              המשכנתא שלכם.<br />
              <span className="text-gold italic">בתנאים שלכם.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              אורה רוזנטלר — יועצת משכנתאות מנוסה. אני כאן כדי שתקבלו את ההחלטה הפיננסית הגדולה בחייכם בראש שקט, עם ביטחון מלא ובתנאים הטובים בשוק.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
                style={{ background: "var(--gradient-gold)" }}
              >
                קביעת פגישת ייעוץ
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                to="/calculator"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                למחשבון משכנתא
              </Link>
            </div>
            <div className="flex items-center gap-8 pt-6">
              <Stat value="+15" label="שנות ניסיון" />
              <div className="w-px h-10 bg-border" />
              <Stat value="2,000+" label="לקוחות מרוצים" />
              <div className="w-px h-10 bg-border" />
              <Stat value="₪50K" label="חיסכון ממוצע" />
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl"
              style={{ background: "var(--gradient-gold)" }}
            />
            <img
              src={heroImg}
              alt="בית מודרני בשעת שקיעה — סמל לרכישת בית באמצעות משכנתא חכמה"
              width={1536}
              height={1024}
              className="relative rounded-[2rem] shadow-[var(--shadow-elegant)] object-cover w-full aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">למה לבחור בי?</h2>
          <p className="text-muted-foreground text-lg">אני לא עובדת בשביל הבנקים. אני עובדת בשבילכם.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<TrendingDown className="w-7 h-7" />}
            title="חיסכון של עשרות אלפי שקלים"
            text="ניתוח מעמיק והשוואה בין כל הבנקים כדי להשיג עבורכם את הריבית הנמוכה ביותר."
          />
          <FeatureCard
            icon={<ShieldCheck className="w-7 h-7" />}
            title="שקיפות מלאה"
            text="ללא אותיות קטנות. תקבלו הסברים ברורים על כל מסלול וכל החלטה לאורך התהליך."
          />
          <FeatureCard
            icon={<Sparkles className="w-7 h-7" />}
            title="ליווי אישי מהיום הראשון"
            text="מהפגישה הראשונה ועד החתימה — אני זמינה לכל שאלה, בלי בירוקרטיה ובלי הפתעות."
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">השירותים <span className="text-gold italic">שלי</span></h2>
              <p className="text-primary-foreground/70 text-lg mb-8">מגוון פתרונות פיננסיים המותאמים בדיוק לצרכים ולמטרות שלכם.</p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all"
              >
                קראו עוד עליי <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
            <ul className="space-y-4">
              {[
                "משכנתא לרכישת דירה ראשונה",
                "מיחזור משכנתא קיימת וחיסכון בריבית",
                "משכנתא למשפרי דיור",
                "ייעוץ למשקיעי נדל״ן",
                "ליווי בקבלת אישור עקרוני",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div
          className="rounded-3xl p-12 lg:p-16 text-center shadow-[var(--shadow-elegant)]"
          style={{ background: "var(--gradient-hero)" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            מוכנים להתחיל?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            פגישת ייעוץ ראשונית ללא עלות וללא התחייבות. בואו נדבר.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
            style={{ background: "var(--gradient-gold)" }}
          >
            דברו איתי <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-primary font-display">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="group p-8 rounded-2xl bg-card border border-border hover:border-gold transition-all hover:shadow-[var(--shadow-elegant)]">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-gold-foreground mb-5 group-hover:scale-110 transition-transform"
        style={{ background: "var(--gradient-gold)" }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}
