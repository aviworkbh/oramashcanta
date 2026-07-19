import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Check, TrendingDown, ShieldCheck, Sparkles, ArrowLeft, ArrowRight, MessageCircle, Calculator, Star, ExternalLink, Mail, Heart, Award, Users, Loader2, User } from "lucide-react";
import { cn } from "@/lib/utils";
import logoIcon from "@/assets/logo-icon.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "אורה רוזנטלר — ייעוץ משכנתאות מקצועי ואישי" },
      { name: "description", content: "יועצת משכנתאות מובילה. חוסכת לכם עשרות אלפי שקלים בעזרת ליווי אישי ומקצועי." },
    ],
  }),
  component: Index,
});

const GOOGLE_URL = "https://www.google.com/search?q=%D7%90%D7%95%D7%A8%D7%94+%D7%A8%D7%95%D7%96%D7%A0%D7%98%D7%9C%D7%A8+%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA+%D7%97%D7%99%D7%A4%D7%94&client=ms-android-google&hs=hXo&sca_esv=7269236fd9f7d28b&sxsrf=APpeQnsQ_ZH3eaTEPPX6RRM6KxzRs9xqnA%3A1782472617048&ei=qV8-avnCApuoxc8Pqq2RiAI&biw=411&bih=771&oq=%D7%90%D7%95%D7%A8%D7%94+%D7%A8%D7%95%D7%96%D7%A0%D7%98%D7%9C%D7%A8+%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA+%D7%97%D7%99%D7%A4%D7%94&gs_lp=EhNtb2JpbGUtZ3dzLXdpei1zZXJwIjHXkNeV16jXlCDXqNeV15bXoNeY15zXqCDXntep15vXoNeq15DXldeqINeX15nXpNeUMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAEyBBAhGBUyBRAAGO8FSNNOUMEVWOZLcAN4AJABAJgBpwSgAf4-qgEMMC4xLjEzLjQuNS4yuAEDyAEA-AEBmAIcoAKJQKgCD8ICEBAAGAMYtAIY6gIYjwHYAQHCAhAQLhgDGLQCGOoCGI8B2AEBwgIIEC4YgAQYsQPCAg4QLhiABBixAxjRAxjHAcICCxAuGIAEGNEDGMcBwgIEEC4YA8ICBBAAGAPCAhQQLhiABBixAxjRAxiDARjHARiKBcICBRAAGIAEwgIFEC4YgATCAgsQLhiABBjHARivAcICBxAAGIAEGBPCAggQABgTGBYYHsICBhAAGBYYHsICBxAhGKABGArCAggQABiABBiiBJgDB_EFR0zfWVk3D1a6BgQIARgKkgcKMy4wLjE0LjQuN6AH9IIBsgcIMi0xNC40Lje4B_s_wgcIMC4zLjIzLjLIB4UBgAgA&sclient=mobile-gws-wiz-serp#sv=CAESzQEKuQEStgEKd0FKaVQ0dEtPcWNYNmk3LVFQNnlncHlZZTRHSTJtel9yT0NlVFFRdWpEQXdXeVItYVRaZkdQZVdDUDdVckl2d3JuZU1uNE1YZ050ekRMd0JGQXpWampFYkJUek9COWpXZjQxRG53djZRa1l5cWQzSlVLc2FLRFJFEhd4RjgtYXB1MkJjeUxoYklQbzlMQXlBYxoiQURzcjlmUnhjWklLUFB0MzdBRmNuMFRqWGJwV2tpQUY0dxIEODA1MRoBMyoAMAA4AUAAGAAg2KvAyARKAhAC";
const WA_URL = "https://Wa.me/972533886710?text=%D7%94%D7%99%D7%99.%0A%D7%A8%D7%90%D7%99%D7%AA%D7%99+%D7%90%D7%AA+%D7%94%D7%A4%D7%A8%D7%A1%D7%95%D7%9D+%D7%A2%D7%9C+%D7%99%D7%99%D7%A2%D7%95%D7%A5+%D7%91%D7%AA%D7%97%D7%95%D7%9D+%D7%94%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90..+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A4%D7%A8%D7%98%D7%99%D7%9D+%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D+%F0%9F%98%8C";
const REVIEWS_API_URL = "https://oram-backend.aviworkbh.workers.dev/api/reviews";

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
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-accent-foreground text-xs font-semibold tracking-wider" style={{ background: "oklch(0.97 0.045 55)" }}>
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

interface Review {
  author: string;
  authorImage?: string;
  rating: number;
  text: string;
  date: string;
}

interface ReviewsResponse {
  success: boolean;
  rating: number;
  reviewCount: number;
  reviews: Review[];
}

function formatReviewDate(dateStr: string): string {
  try {
    const [datePart] = dateStr.split(" ");
    const [month, day, year] = datePart.split("/");
    return `${day}/${month}/${year}`;
  } catch {
    return dateStr;
  }
}

function GoogleGIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.3 0-9.7-3.4-11.3-8l-6.5 5C9.6 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C41 35.5 44 30.2 44 24c0-1.3-.1-2.3-.4-3.5z" />
    </svg>
  );
}

function ReviewCard({ review, onOpen }: { review: Review; onOpen: () => void }) {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const [isClamped, setIsClamped] = useState(false);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const check = () => setIsClamped(el.scrollHeight - el.clientHeight > 4);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [review.text]);

  return (
    <div className="group relative h-[380px] bg-card rounded-3xl border border-border/60 p-7 flex flex-col shadow-[0_10px_40px_-20px_oklch(0.28_0.08_260/0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_oklch(0.28_0.08_260/0.35)]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-0.5 text-gold" aria-label={`דירוג ${review.rating} מתוך 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={cn("w-4 h-4", i < review.rating ? "fill-current" : "text-muted-foreground/40")} />
          ))}
        </div>
        <GoogleGIcon className="w-5 h-5 opacity-80" />
      </div>

      <div className="relative flex-1 overflow-hidden">
        <p
          ref={textRef}
          className="text-foreground/85 leading-relaxed whitespace-pre-line overflow-hidden"
          style={{ display: "-webkit-box", WebkitLineClamp: 6, WebkitBoxOrient: "vertical" as const }}
        >
          {review.text}
        </p>
        {isClamped && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-card via-card/90 to-transparent"
          />
        )}
      </div>

      {isClamped && (
        <button
          type="button"
          onClick={onOpen}
          className="self-start mt-2 text-sm font-semibold text-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
        >
          קרא עוד
        </button>
      )}

      <div className="flex items-center gap-3 mt-5 pt-5 border-t border-border/60">
        <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center overflow-hidden shrink-0 ring-2 ring-gold/20">
          {review.authorImage ? (
            <img src={review.authorImage} alt={review.author} className="w-full h-full object-cover" />
          ) : (
            <User className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-primary truncate">{review.author}</div>
          <div className="text-xs text-muted-foreground">{formatReviewDate(review.date)}</div>
        </div>
      </div>
    </div>
  );
}

function ReviewsSection() {
  const [reviewsData, setReviewsData] = useState<ReviewsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [openReview, setOpenReview] = useState<Review | null>(null);

  useEffect(() => {
    let cancelled = false;
    const fetchReviews = async () => {
      try {
        const response = await fetch(REVIEWS_API_URL);
        if (!response.ok) throw new Error("Failed to fetch reviews");
        const data: ReviewsResponse = await response.json();
        if (!cancelled) {
          if (data.success) {
            setReviewsData(data);
          } else {
            setError(true);
          }
        }
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchReviews();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    setScrollSnaps(api.scrollSnapList());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", () => {
      setScrollSnaps(api.scrollSnapList());
      onSelect();
    });
  }, [api]);

  return (
    <section id="reviews" className="bg-secondary py-20 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block text-xs tracking-[0.3em] text-gold uppercase mb-4">ביקורות לקוחות</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">לקוחות <span className="italic text-gold">מספרים</span></h2>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
            <Loader2 className="w-8 h-8 animate-spin text-gold mb-3" />
            <span className="text-sm">טוען ביקורות...</span>
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-12 text-foreground/85">
            <p>Unable to load reviews at the moment.</p>
          </div>
        )}

        {!loading && !error && reviewsData && (
          <>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-card border border-border text-primary shadow-[var(--shadow-elegant)]">
                <Star className="w-5 h-5 fill-current text-gold" />
                <span className="font-bold text-lg">{reviewsData.rating.toFixed(1)}</span>
                <span className="text-muted-foreground text-sm">({reviewsData.reviewCount} ביקורות)</span>
              </div>
            </div>

            <div className="relative mb-8">
              <Carousel
                setApi={setApi}
                opts={{ align: "start", loop: true, direction: "rtl" }}
                className="w-full"
                aria-label="ביקורות לקוחות"
              >
                <CarouselContent className="-ml-4 py-2">
                  {reviewsData.reviews.map((review, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <ReviewCard review={review} onOpen={() => setOpenReview(review)} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => api?.scrollPrev()}
                  aria-label="הביקורת הקודמת"
                  className="w-11 h-11 rounded-full bg-card border border-border text-primary flex items-center justify-center shadow-sm hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2" role="tablist" aria-label="ניווט ביקורות">
                  {scrollSnaps.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={i === selectedIndex}
                      aria-label={`עבור לביקורת ${i + 1}`}
                      onClick={() => api?.scrollTo(i)}
                      className={cn(
                        "h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                        i === selectedIndex ? "w-6 bg-gold" : "w-2 bg-primary/25 hover:bg-primary/50",
                      )}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => api?.scrollNext()}
                  aria-label="הביקורת הבאה"
                  className="w-11 h-11 rounded-full bg-card border border-border text-primary flex items-center justify-center shadow-sm hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}

        <div className="text-center">
          <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105" style={{ background: "var(--gradient-gold)" }}>
            לעמוד הגוגל <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <Dialog open={!!openReview} onOpenChange={(o) => !o && setOpenReview(null)}>
        <DialogContent className="max-w-lg" dir="rtl">
          {openReview && (
            <>
              <DialogHeader>
                <DialogTitle className="text-right flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden shrink-0 ring-2 ring-gold/20">
                    {openReview.authorImage ? (
                      <img src={openReview.authorImage} alt={openReview.author} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <span className="text-primary">{openReview.author}</span>
                </DialogTitle>
              </DialogHeader>
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={cn("w-4 h-4", i < openReview.rating ? "fill-current" : "text-muted-foreground/40")} />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{formatReviewDate(openReview.date)}</span>
              </div>
              <div className="max-h-[60vh] overflow-y-auto text-foreground/85 leading-relaxed whitespace-pre-line pr-1">
                {openReview.text}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
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
          <p>שמי <strong className="text-primary">אורה רוזנטלר</strong>. יועצת משכנתאות מוסמכת.</p>
          <p>לאחר עיסוק מושך בתחום שיווק וייעוץ נדל״ן, הבנתי שהתחום בו אוכל לקבל גם סיפוק ותחושת שליחות, הוא תחום המשכנתאות. המטרה שלי היא לתת ערך מוסף לעבודה ולרווח שלי — על ידי שאוכל לעזור לאנשים לחסוך את כספם, להיזהר מסיכונים ולהגיע למינימום ההוצאות האפשרי בלקיחת משכנתא.</p>
          <p>חברה בהתאחדות יועצי המשכנתאות, מתמחה במשכנתאות מורכבות, מחזור משכנתא, בתהליכים מול בנקים ועוד.</p>
          <p>אני כאן לקחת עבורכם את העול בכל תהליך המשכנתא, ולהשאיר עבורכם את החיסכון, את השקט הנפשי ויכולת להתמקד בשאר הדברים החשובים לכם.</p>
        </div>
        <div className="aspect-square rounded-3xl shadow-[var(--shadow-elegant)] flex items-center justify-center" style={{ background: "var(--gradient-hero)" }}>
          <div className="text-center text-primary-foreground p-10">
            <div className="text-7xl font-display italic text-gold mb-3">״</div>
            <p className="text-xl font-display italic leading-relaxed">משכנתא היא לא כמו עניבה בה אתם בוחרים צבע שמתאים לכם. משכנתא היא כמו נעליים — היא צריכה להתאים בדיוק למידה שלכם.</p>
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
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(digits);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setErrorMsg(null);

    if (!name.trim()) {
      setErrorMsg("יש להזין שם מלא");
      return;
    }
    if (!phone.trim()) {
      setErrorMsg("יש להזין מספר טלפון");
      return;
    }
    if (!/^\d+$/.test(phone)) {
      setErrorMsg("מספר הטלפון חייב לכלול ספרות בלבד");
      return;
    }
    if (phone.length !== 9 && phone.length !== 10) {
      setErrorMsg("מספר הטלפון חייב להכיל 9 או 10 ספרות");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("https://oram-backend.aviworkbh.workers.dev/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });
      const data = await res.json().catch(() => null);
      if (data && data.success === true) {
        setSent(true);
        setName(""); setPhone(""); setEmail(""); setMessage("");
      } else {
        setErrorMsg("אירעה שגיאה בשליחת הטופס. נסה שוב מאוחר יותר");
      }
    } catch {
      setErrorMsg("אירעה שגיאה בשליחת הטופס. נסה שוב מאוחר יותר");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-primary text-primary-foreground py-20 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block text-xs tracking-[0.3em] text-gold uppercase mb-4">צור קשר</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">בואו <span className="italic text-gold">נדבר</span></h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">פגישת ייעוץ ראשונית ללא עלות וללא התחייבות.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 hidden lg:flex items-center justify-center h-full w-full">
            <img
              src={logoIcon}
              alt="לוגו אורה רוזנטלר"
              className="w-full h-full max-h-[600px] object-contain drop-shadow-2xl"
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
              <form onSubmit={handleSubmit} className="space-y-5">
                <ContactField label="שם מלא" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
                <ContactField label="טלפון" name="phone" type="tel" required value={phone} onChange={handlePhoneChange} inputMode="numeric" pattern="\d*" />
                <ContactField label="דוא״ל" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">איך אוכל לעזור?</label>
                  <textarea rows={4} required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold transition" placeholder="ספרו לי בקצרה על המשכנתא שאתם מחפשים..." />
                </div>
                {errorMsg && (
                  <p className="text-sm text-destructive text-center">{errorMsg}</p>
                )}
                <button type="submit" disabled={submitting} className="w-full rounded-full px-7 py-4 text-base font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed" style={{ background: "var(--gradient-gold)" }}>
                  {submitting ? "שולח..." : "שליחת הודעה"}
                </button>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  שלחו וואטסאפ
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactField({ label, name, type = "text", required, value, onChange, inputMode, pattern }: { label: string; name: string; type?: string; required?: boolean; value?: string; onChange?: (e: ChangeEvent<HTMLInputElement>) => void; inputMode?: "numeric" | "text" | "email" | "tel"; pattern?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-primary mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input id={name} name={name} type={type} required={required} value={value} onChange={onChange} inputMode={inputMode} pattern={pattern} className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold transition" />
    </div>
  );
}
