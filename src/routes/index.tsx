import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { Check, TrendingDown, ShieldCheck, Sparkles, ArrowLeft, MessageCircle } from "lucide-react";

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
              הדרך הבטוחה למשכנתא שלך
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-primary">
              מומחיות שמייצרת חיסכון.<br />
              <span className="text-gold italic">ליווי שנותן שקט.</span>
            </h1>
            <div className="space-y-4 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
              <p>
                המשכנתא שלכם היא כנראה ההתחייבות הפיננסית הגדולה בחייכם. אל תשאירו אותה ליד המקרה.
              </p>
              <p>
                לוקחים משכנתא חדשה? שוקלים למחזר משכנתא קיימת? כיועצת משכנתאות מומחית ומנוסה, אני דואגת לאינטרסים שלכם בלבד מול הבנקים. המטרה שלי היא להפוך את התהליך המורכב הזה לפשוט, ברור, והכי חשוב – משתלם עבורכם.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
                style={{ background: "var(--gradient-gold)" }}
              >
                קביעת פגישת ייעוץ
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/972533886710"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                שלחו וואטסאפ
              </a>
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
              alt="איור של בית כתום־כחול נישא בכף יד — סמל לליווי בטוח אל המשכנתא"
              width={1280}
              height={1024}
              className="relative rounded-[2rem] shadow-[var(--shadow-elegant)] object-contain w-full aspect-square bg-card p-6"
            />
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">מה אתם מקבלים?</h2>
          <p className="text-muted-foreground text-lg">אני מלווה אתכם צעד אחר צעד, מנתחת את הצרכים הייחודיים שלכם, ובונה תמהיל פיננסי מדויק שיחסוך לכם זמן, כאב ראש, והרבה הרבה כסף.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<TrendingDown className="w-7 h-7" />}
            title="חיסכון מקסימלי"
            text="ניהול משא ומתן נחוש מול הבנקים להשגת הריביות והתנאים הטובים ביותר עבורכם."
          />
          <FeatureCard
            icon={<ShieldCheck className="w-7 h-7" />}
            title="שקט נפשי"
            text="בירוקרטיה? תורים? טפסים? תשאירו את זה לי. אתם מתפנים לחלום על הבית החדש."
          />
          <FeatureCard
            icon={<Sparkles className="w-7 h-7" />}
            title="התאמה אישית"
            text="בניית מסלול שמתאים במדויק ליכולות ההחזר שלכם, היום ובעתיד — בלי הפתעות."
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
