import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, TrendingDown, ShieldCheck, Sparkles, ArrowLeft, MessageCircle, Calculator, Star, ExternalLink, Mail, Heart, Award, Users } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "אורה רוזנטלר — ייעוץ משכנתאות מקצועי ואישי" },
      { name: "description", content: "יועצת משכנתאות מובילה. חוסכת לכם עשרות אלפי שקלים בעזרת ליווי אישי ומקצועי." },
    ],
  }),
  component: Index,
});

const GOOGLE_URL = "https://www.google.com/maps/place//data=!4m3!3m2!1s0x99edd4cee130209:0x5f648033306c2c6c!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2";
const WA_URL = "https://Wa.me/972533886710?text=%D7%94%D7%99%D7%99.%0A%D7%A8%D7%90%D7%99%D7%AA%D7%99+%D7%90%D7%AA+%D7%94%D7%A4%D7%A8%D7%A1%D7%95%D7%9D+%D7%A2%D7%9C+%D7%99%D7%99%D7%A2%D7%95%D7%A5+%D7%91%D7%AA%D7%97%D7%95%D7%9D+%D7%94%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90..+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A4%D7%A8%D7%98%D7%99%D7%9D+%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D+%F0%9F%98%8C";

function Index() {
  return (
    <>
      {/* HERO with logo as soft background */}
      <section id="home" className="relative overflow-hidden scroll-mt-24">
        <div
          aria-hidden
          className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-10 pointer-events-none"
          style={{ backgroundImage: `url(${logoIcon})` }}
        />
        <div className="relative container mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 max-w-4xl">
          <div className="text-center space-y-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              הדרך הבטוחה למשכנתא שלך
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-primary">
              מומחיות שמייצרת חיסכון.<br />
              <span className="text-gold italic">ליווי שנותן שקט.</span>
            </h1>
            <div className="space-y-4 text-base lg:text-lg text-foreground/85 leading-relaxed max-w-2xl mx-auto">
              <p>המשכנתא שלכם היא כנראה ההתחייבות הפיננסית הגדולה בחייכם. אל תשאירו אותה ליד המקרה.</p>
              <p>
                לוקחים משכנתא חדשה? שוקלים למחזר משכנתא קיימת? כיועצת משכנתאות מומחית ומנוסה, אני דואגת לאינטרסים שלכם בלבד מול הבנקים. המטרה שלי היא להפוך את התהליך המורכב הזה לפשוט, ברור, והכי חשוב – משתלם עבורכם.
              </p>
              <p>
                אני מלווה אתכם צעד אחר צעד, מנתחת את הצרכים הייחודיים שלכם ביחד איתכם, ובונה תמהיל פיננסי מדויק שיחסוך לכם המון זמן, כאב ראש, ובעיקר הרבה הרבה כסף.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
                style={{ background: "var(--gradient-gold)" }}
              >
                קביעת פגישת ייעוץ
                <ArrowLeft className="w-4 h-4" />
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                שלחו וואטסאפ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section id="services" className="container mx-auto px-6 py-20 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">מה אתם מקבלים?</h2>
          <p className="text-muted-foreground text-lg">ליווי מלא מהשלב הראשון ועד החתימה — בלי הפתעות.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={<TrendingDown className="w-7 h-7" />} title="חיסכון מקסימלי" text="ניהול משא ומתן נחוש מול הבנקים להשגת הריביות והתנאים הטובים ביותר." />
          <FeatureCard icon={<ShieldCheck className="w-7 h-7" />} title="שקט נפשי" text="בירוקרטיה? תורים? טפסים? תשאירו את זה לי." />
          <FeatureCard icon={<Sparkles className="w-7 h-7" />} title="התאמה אישית" text="בניית מסלול שמתאים במדויק ליכולות ההחזר שלכם, היום ובעתיד." />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">השירותים <span className="text-gold italic">שלי</span></h2>
              <p className="text-primary-foreground/70 text-lg mb-8">מגוון פתרונות פיננסיים המותאמים בדיוק לצרכים ולמטרות שלכם.</p>
              <a href="#about" className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all">
                קראו עוד עליי <ArrowLeft className="w-4 h-4" />
              </a>
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

      {/* CALCULATOR */}
      <CalculatorSection />

      {/* REVIEWS */}
      <ReviewsSection />

      {/* ABOUT */}
      <AboutSection />

      {/* CONTACT */}
      <ContactSection />
    </>
  );
}

function FeatureCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="group p-8 rounded-2xl bg-card border border-border hover:border-gold transition-all hover:shadow-[var(--shadow-elegant)]">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-gold-foreground mb-5 group-hover:scale-110 transition-transform" style={{ background: "var(--gradient-gold)" }}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}

function CalculatorSection() {
  const [amount, setAmount] = useState(1_500_000);
  const [years, setYears] = useState(25);
  const [rate, setRate] = useState(4.5);
  const { monthly, total, interest } = useMemo(() => {
    const n = years * 12;
    const r = rate / 100 / 12;
    const m = r === 0 ? amount / n : (amount * r) / (1 - Math.pow(1 + r, -n));
    const t = m * n;
    return { monthly: m, total: t, interest: t - amount };
  }, [amount, years, rate]);
  const fmt = (n: number) => "₪ " + Math.round(n).toLocaleString("he-IL");

  return (
    <section id="calculator" className="container mx-auto px-6 py-20 max-w-6xl scroll-mt-24">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-gold uppercase mb-4">
          <Calculator className="w-4 h-4" /> מחשבון משכנתא
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">חשבו את <span className="italic text-gold">המשכנתא</span> שלכם</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">הזינו את פרטי ההלוואה וקבלו תחזית מיידית של ההחזר החודשי.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-card p-8 rounded-3xl border border-border shadow-[var(--shadow-elegant)] space-y-8">
          <Slider label="סכום המשכנתא" value={amount} onChange={setAmount} min={100_000} max={5_000_000} step={50_000} display={fmt(amount)} />
          <Slider label="תקופת ההלוואה" value={years} onChange={setYears} min={5} max={30} step={1} display={`${years} שנים`} />
          <Slider label="ריבית שנתית" value={rate} onChange={setRate} min={1} max={10} step={0.1} display={`${rate.toFixed(1)}%`} />
        </div>
        <div className="rounded-3xl p-10 text-primary-foreground shadow-[var(--shadow-elegant)] flex flex-col justify-between" style={{ background: "var(--gradient-hero)" }}>
          <div className="space-y-8">
            <div>
              <div className="text-sm text-gold uppercase tracking-widest mb-2">החזר חודשי משוער</div>
              <div className="text-5xl lg:text-6xl font-display font-bold">{fmt(monthly)}</div>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-primary-foreground/20">
              <div>
                <div className="text-xs text-primary-foreground/60 uppercase tracking-wider mb-1">סך החזר כולל</div>
                <div className="text-2xl font-bold font-display text-gold">{fmt(total)}</div>
              </div>
              <div>
                <div className="text-xs text-primary-foreground/60 uppercase tracking-wider mb-1">סך הריבית</div>
                <div className="text-2xl font-bold font-display text-gold">{fmt(interest)}</div>
              </div>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/70 mb-4">* החישוב הוא הערכה כללית בלבד. רוצים תכנון מדויק וריבית טובה יותר?</p>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-105 transition-transform" style={{ background: "var(--gradient-gold)" }}>
              דברו איתי לייעוץ אישי <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, value, onChange, min, max, step, display }: { label: string; value: number; onChange: (n: number) => void; min: number; max: number; step: number; display: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <label className="text-sm font-semibold text-primary">{label}</label>
        <span className="text-lg font-bold text-gold font-display">{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-[oklch(0.72_0.13_75)]" />
    </div>
  );
}

const reviewsList = [
  { name: "משפחת לוי", text: "אורה ליוותה אותנו ברכישת הדירה הראשונה. מקצועית, סבלנית ובעיקר חסכה לנו עשרות אלפי שקלים. ממליצים בחום!" },
  { name: "דנה כהן", text: "מיחזרנו את המשכנתא בעזרת אורה והיא השיגה לנו תנאים שלא חשבנו שאפשריים. שירות אישי ויחס יוצא דופן." },
  { name: "יוסי ומיכל", text: "אורה הפכה תהליך מורכב ומפחיד למשהו פשוט וברור. תמיד זמינה, תמיד עם תשובה. תודה ענקית!" },
];

function ReviewsSection() {
  return (
    <section id="reviews" className="bg-secondary py-20 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block text-xs tracking-[0.3em] text-gold uppercase mb-4">ביקורות לקוחות</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">לקוחות <span className="italic text-gold">מספרים</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {reviewsList.map((r) => (
            <div key={r.name} className="bg-card p-7 rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
              <div className="flex gap-1 mb-3 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-foreground/85 leading-relaxed mb-5">{r.text}</p>
              <div className="font-semibold text-primary">— {r.name}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105" style={{ background: "var(--gradient-gold)" }}>
            לעמוד הגוגל <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-6 py-20 max-w-5xl scroll-mt-24">
      <div className="text-center mb-12">
        <span className="inline-block text-xs tracking-[0.3em] text-gold uppercase mb-4">אודות</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">הסיפור <span className="italic text-gold">שלי</span></h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
          <p>שמי <strong className="text-primary">אורה רוזנטלר</strong>, יועצת משכנתאות מוסמכת בעלת ותק רב בעולמות הבנקאות והמשכנתאות.</p>
          <p>במהלך הקריירה שלי ליוויתי משפחות רבות בדרך לבית שלהן — מזוגות צעירים שרוכשים דירה ראשונה, דרך משפרי דיור, ועד למשקיעי נדל״ן.</p>
          <p>אני מאמינה שמשכנתא נבונה לא נמדדת רק בריבית הנמוכה ביותר, אלא בהתאמה מדויקת ליכולות, לתוכניות ולחלומות שלכם.</p>
        </div>
        <div className="aspect-square rounded-3xl shadow-[var(--shadow-elegant)] flex items-center justify-center" style={{ background: "var(--gradient-hero)" }}>
          <div className="text-center text-primary-foreground p-10">
            <div className="text-7xl font-display italic text-gold mb-3">״</div>
            <p className="text-xl font-display italic leading-relaxed">כל לקוח הוא עולם ומלואו. אין משכנתא אחת שמתאימה לכולם — יש את המשכנתא הנכונה לכם.</p>
            <div className="mt-6 text-gold font-semibold">— אורה רוזנטלר</div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Value icon={<Heart className="w-7 h-7" />} title="אכפתיות" text="כל לקוח מקבל יחס אישי, סבלני וקשוב." />
        <Value icon={<Award className="w-7 h-7" />} title="מקצועיות" text="ידע מעמיק בכל המסלולים, הבנקים והרגולציה." />
        <Value icon={<Users className="w-7 h-7" />} title="שותפות" text="אני לצידכם מהפגישה הראשונה ועד החתימה — וגם אחרי." />
      </div>
    </section>
  );
}

function Value({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="bg-card p-8 rounded-2xl border border-border">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-gold-foreground mb-5" style={{ background: "var(--gradient-gold)" }}>{icon}</div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-primary text-primary-foreground py-20 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block text-xs tracking-[0.3em] text-gold uppercase mb-4">צור קשר</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">בואו <span className="italic text-gold">נדבר</span></h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">פגישת ייעוץ ראשונית ללא עלות וללא התחייבות.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 hidden lg:flex items-center justify-center">
            <img
              src={logoIcon}
              alt="לוגו אורה רוזנטלר"
              className="w-full max-w-md h-auto drop-shadow-2xl"
              width={512}
              height={512}
            />
          </div>
          <div className="order-1 lg:order-2 bg-card text-foreground p-8 lg:p-10 rounded-3xl shadow-[var(--shadow-elegant)]">
            {sent ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-gold-foreground text-3xl" style={{ background: "var(--gradient-gold)" }}>✓</div>
                <h3 className="text-2xl font-bold text-primary mb-2">תודה רבה!</h3>
                <p className="text-muted-foreground">קיבלתי את פנייתכם ואחזור אליכם בהקדם.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                <ContactField label="שם מלא" name="name" required />
                <ContactField label="טלפון" name="phone" type="tel" required />
                <ContactField label="דוא״ל" name="email" type="email" />
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">איך אוכל לעזור?</label>
                  <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold transition" placeholder="ספרו לי בקצרה על המשכנתא שאתם מחפשים..." />
                </div>
                <button type="submit" className="w-full rounded-full px-7 py-4 text-base font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]" style={{ background: "var(--gradient-gold)" }}>
                  שליחת הודעה
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactField({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-primary mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input id={name} name={name} type={type} required={required} className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold transition" />
    </div>
  );
}

