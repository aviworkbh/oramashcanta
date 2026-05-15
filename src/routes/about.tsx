import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Heart, Users, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "אודות אורה רוזנטלר — יועצת משכנתאות" },
      { name: "description", content: "הכירו את אורה רוזנטלר — יועצת משכנתאות מוסמכת, חברה בהתאחדות יועצי המשכנתאות, עם ניסיון עשיר בשיווק וייעוץ נדל\"ן." },
      { property: "og:title", content: "אודות אורה רוזנטלר" },
      { property: "og:description", content: "ייעוץ משכנתאות מתוך אכפתיות, מקצועיות ושקיפות מלאה." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container mx-auto px-6 pt-16 pb-10 lg:pt-24 max-w-4xl text-center">
        <span className="inline-block text-xs tracking-[0.3em] text-gold uppercase mb-4">אודות</span>
        <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
          הסיפור <span className="italic text-gold">שלי</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          שמי אורה רוזנטלר. יועצת משכנתאות מוסמכת
        </p>
      </section>

      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
            <p>
              לאחר עיסוק מושך בתחום שיווק וייעוץ נדל"ן, הבנתי שהתחום בו אוכל לקבל גם סיפוק ותחושת שליחות, הוא תחום המשכנתאות.
            </p>
            <p>
              המטרה שלי היא לתת ערך מוסף לעבודה ולרווח שלי, על ידי שאוכל לעזור לאנשים לחסוך את כספם, להיזהר מסיכונים ולהגיע למינימום ההוצאות האפשרי בלקיחת משכנתא.
            </p>
            <p>
              <strong className="text-primary">חברה בהתאחדות יועצי המשכנתאות</strong>, מתמחה במשכנתאות מורכבות, מחזור משכנתא, בתהליכים מול בנקים ועוד.
            </p>
            <p>
              אני כאן לקחת עבורכם את העול בכל תהליך המשכנתא, ולהשאיר עבורכם את החיסכון, את השקט הנפשי ויכולת להתמקד בשאר הדברים החשובים לכם.
            </p>
          </div>
          <div
            className="aspect-square rounded-3xl shadow-[var(--shadow-elegant)] flex items-center justify-center"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div className="text-center text-primary-foreground p-10">
              <div className="text-7xl font-display italic text-gold mb-3">״</div>
              <p className="text-xl font-display italic leading-relaxed">
                משכנתא זה לא כמו עניבה בה אתם בוחרים צבע שמתאים לכם. משכנתא היא כמו נעליים. היא צריכה להתאים בדיוק למידה שלכם.
              </p>
              <div className="mt-6 text-gold font-semibold">— אורה רוזנטלר</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">הערכים שמנחים אותי</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ValueCard icon={<Heart className="w-7 h-7" />} title="אכפתיות" text="כל לקוח מקבל יחס אישי, סבלני וקשוב — כי החלטות גדולות דורשות ליווי אמיתי." />
            <ValueCard icon={<Award className="w-7 h-7" />} title="מקצועיות" text="ידע מעמיק בכל המסלולים, הבנקים והרגולציה — כדי להבטיח לכם את התנאים הטובים ביותר." />
            <ValueCard icon={<Users className="w-7 h-7" />} title="שותפות" text="אני לצידכם מהפגישה הראשונה ועד החתימה — ובכל שאלה שתעלה גם אחרי." />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">בואו נכיר</h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
          style={{ background: "var(--gradient-gold)" }}
        >
          לקביעת פגישה <ArrowLeft className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}

function ValueCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="bg-card p-8 rounded-2xl border border-border">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-gold-foreground mb-5"
        style={{ background: "var(--gradient-gold)" }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}
