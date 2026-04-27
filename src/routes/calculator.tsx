import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calculator, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "מחשבון משכנתא — אורה רוזנטלר" },
      { name: "description", content: "מחשבון משכנתא חינמי. חשבו את ההחזר החודשי, סך הריבית והעלות הכוללת של המשכנתא." },
      { property: "og:title", content: "מחשבון משכנתא חינמי" },
      { property: "og:description", content: "כלי חישוב מהיר לבדיקת ההחזר החודשי על המשכנתא שלכם." },
    ],
  }),
  component: CalculatorPage,
});

function CalculatorPage() {
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
    <section className="container mx-auto px-6 pt-16 pb-20 lg:pt-24 max-w-6xl">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-gold uppercase mb-4">
          <Calculator className="w-4 h-4" /> מחשבון משכנתא
        </span>
        <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-4">
          חשבו את <span className="italic text-gold">המשכנתא</span> שלכם
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          הזינו את פרטי ההלוואה וקבלו תחזית מיידית של ההחזר החודשי והעלות הכוללת.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="bg-card p-8 rounded-3xl border border-border shadow-[var(--shadow-elegant)] space-y-8">
          <SliderField
            label="סכום המשכנתא"
            value={amount}
            onChange={setAmount}
            min={100_000}
            max={5_000_000}
            step={50_000}
            display={fmt(amount)}
          />
          <SliderField
            label="תקופת ההלוואה"
            value={years}
            onChange={setYears}
            min={5}
            max={30}
            step={1}
            display={`${years} שנים`}
          />
          <SliderField
            label="ריבית שנתית"
            value={rate}
            onChange={setRate}
            min={1}
            max={10}
            step={0.1}
            display={`${rate.toFixed(1)}%`}
          />
        </div>

        {/* Results */}
        <div
          className="rounded-3xl p-10 text-primary-foreground shadow-[var(--shadow-elegant)] flex flex-col justify-between"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="space-y-8">
            <div>
              <div className="text-sm text-gold uppercase tracking-widest mb-2">החזר חודשי משוער</div>
              <div className="text-5xl lg:text-6xl font-display font-bold">{fmt(monthly)}</div>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-primary-foreground/20">
              <ResultItem label="סך החזר כולל" value={fmt(total)} />
              <ResultItem label="סך הריבית" value={fmt(interest)} />
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/70 mb-4">
              * החישוב הוא הערכה כללית בלבד. רוצים תכנון מדויק וריבית טובה יותר?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-105 transition-transform"
              style={{ background: "var(--gradient-gold)" }}
            >
              דברו איתי לייעוץ אישי <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  display,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  display: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <label className="text-sm font-semibold text-primary">{label}</label>
        <span className="text-lg font-bold text-gold font-display">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-[oklch(0.72_0.13_75)]"
      />
      <div className="flex justify-between text-xs text-muted-foreground mt-2">
        <span>{typeof min === "number" && min >= 1000 ? "₪ " + min.toLocaleString("he-IL") : min}</span>
        <span>{typeof max === "number" && max >= 1000 ? "₪ " + max.toLocaleString("he-IL") : max}</span>
      </div>
    </div>
  );
}

function ResultItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-primary-foreground/60 uppercase tracking-wider mb-1">{label}</div>
      <div className="text-2xl font-bold font-display text-gold">{value}</div>
    </div>
  );
}