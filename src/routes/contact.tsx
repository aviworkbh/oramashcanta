import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoIcon from "@/assets/logo-icon.png";

const WA_URL = "https://Wa.me/972533886710?text=%D7%94%D7%99%D7%99.%0A%D7%A8%D7%90%D7%99%D7%AA%D7%99+%D7%90%D7%AA+%D7%94%D7%A4%D7%A8%D7%A1%D7%95%D7%9D+%D7%A2%D7%9C+%D7%99%D7%99%D7%A2%D7%95%D7%A5+%D7%91%D7%AA%D7%97%D7%95%D7%9D+%D7%94%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90..+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A4%D7%A8%D7%98%D7%99%D7%9D+%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D+%F0%9F%98%8C";

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

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Logo - left on desktop */}
        <div className="order-2 lg:order-1 hidden lg:flex items-center justify-center">
          <img
            src={logoIcon}
            alt="לוגו אורה רוזנטלר"
            className="w-full max-w-md h-auto drop-shadow-2xl"
            width={512}
            height={512}
          />
        </div>
        {/* Form - right on desktop */}
        <div className="order-1 lg:order-2 bg-card p-8 lg:p-10 rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
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
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-full px-7 py-4 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                שליחת וואטסאפ
              </a>
            </form>
          )}
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

