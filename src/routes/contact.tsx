import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "יצירת קשר — אורה רוזנטלר ייעוץ משכנתאות" },
      { name: "description", content: "צרו קשר עם אורה רוזנטלר לקבלת פגישת ייעוץ ראשונית ללא עלות וללא התחייבות." },
      { property: "og:title", content: "יצירת קשר — אורה רוזנטלר" },
      { property: "og:description", content: "פגישת ייעוץ ראשונית ללא עלות. דברו איתי." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="container mx-auto px-6 pt-16 pb-20 lg:pt-24 max-w-6xl">
      <div className="text-center mb-14">
        <span className="inline-block text-xs tracking-[0.3em] text-gold uppercase mb-4">יצירת קשר</span>
        <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-4">
          בואו <span className="italic text-gold">נדבר</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          פגישת ייעוץ ראשונית ללא עלות וללא התחייבות. אשמח לשמוע על הצרכים שלכם.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <div className="lg:col-span-3 bg-card p-8 lg:p-10 rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
          {sent ? (
            <div className="text-center py-16">
              <div
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-gold-foreground text-3xl"
                style={{ background: "var(--gradient-gold)" }}
              >
                ✓
              </div>
              <h2 className="text-2xl font-bold text-primary mb-2">תודה רבה!</h2>
              <p className="text-muted-foreground">קיבלתי את פנייתכם ואחזור אליכם בהקדם.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5"
            >
              <Field label="שם מלא" name="name" required />
              <Field label="טלפון" name="phone" type="tel" required />
              <Field label="דוא״ל" name="email" type="email" />
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">איך אוכל לעזור?</label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold transition"
                  placeholder="ספרו לי בקצרה על המשכנתא שאתם מחפשים..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full px-7 py-4 text-base font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
                style={{ background: "var(--gradient-gold)" }}
              >
                שליחת הודעה
              </button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="lg:col-span-2 space-y-4">
          <InfoCard icon={<Phone className="w-5 h-5" />} title="טלפון" value="053-388-6710" href="tel:0533886710" />
          <InfoCard icon={<MessageCircle className="w-5 h-5" />} title="וואטסאפ" value="שלחו הודעה ישירה" href="https://wa.me/972533886710" external />
          <InfoCard icon={<Mail className="w-5 h-5" />} title="דוא״ל" value="orarozen1@gmail.com" href="mailto:orarozen1@gmail.com" />
          <InfoCard icon={<Clock className="w-5 h-5" />} title="שעות פעילות" value="א׳-ה׳ 09:00-19:00 | ו׳ 09:00-13:00" />
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-primary mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold transition"
      />
    </div>
  );
}

function InfoCard({ icon, title, value, href, external }: { icon: React.ReactNode; title: string; value: string; href?: string; external?: boolean }) {
  const content = (
    <>
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-gold-foreground shrink-0"
        style={{ background: "var(--gradient-gold)" }}
      >
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">{title}</div>
        <div className="font-semibold text-primary">{value}</div>
      </div>
    </>
  );
  const cls = "flex items-start gap-4 p-5 rounded-2xl bg-secondary border border-border transition hover:border-gold";
  if (href) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }
  return <div className={cls}>{content}</div>;
}