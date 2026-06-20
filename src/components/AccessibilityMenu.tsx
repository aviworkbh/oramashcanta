import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Accessibility,
  X,
  Plus,
  Minus,
  Type,
  Contrast,
  Sun,
  Moon,
  Link2,
  PauseCircle,
  Image as ImageIcon,
  RotateCcw,
  MousePointer2,
} from "lucide-react";

type Settings = {
  fontScale: number; // 1 = 100%
  contrast: "normal" | "high" | "inverted";
  theme: "default" | "light" | "dark";
  grayscale: boolean;
  highlightLinks: boolean;
  readableFont: boolean;
  stopAnimations: boolean;
  hideImages: boolean;
  bigCursor: boolean;
};

const DEFAULTS: Settings = {
  fontScale: 1,
  contrast: "normal",
  theme: "default",
  grayscale: false,
  highlightLinks: false,
  readableFont: false,
  stopAnimations: false,
  hideImages: false,
  bigCursor: false,
};

const STORAGE_KEY = "a11y-settings-v1";

function applySettings(s: Settings) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const body = document.body;

  root.style.fontSize = `${Math.round(s.fontScale * 100)}%`;

  body.classList.toggle("a11y-grayscale", s.grayscale);
  body.classList.toggle("a11y-high-contrast", s.contrast === "high");
  body.classList.toggle("a11y-inverted", s.contrast === "inverted");
  body.classList.toggle("a11y-light", s.theme === "light");
  body.classList.toggle("a11y-dark", s.theme === "dark");
  body.classList.toggle("a11y-highlight-links", s.highlightLinks);
  body.classList.toggle("a11y-readable-font", s.readableFont);
  body.classList.toggle("a11y-stop-animations", s.stopAnimations);
  body.classList.toggle("a11y-hide-images", s.hideImages);
  body.classList.toggle("a11y-big-cursor", s.bigCursor);
}

function loadSettings(): Settings {
  if (typeof window === "undefined") return DEFAULTS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return DEFAULTS;
  }
}

export function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULTS);

  // Load once on mount (client-side only)
  useEffect(() => {
    const s = loadSettings();
    setSettings(s);
    applySettings(s);
  }, []);

  const update = (patch: Partial<Settings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      applySettings(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const reset = () => {
    applySettings(DEFAULTS);
    setSettings(DEFAULTS);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="פתיחת תפריט נגישות"
        aria-haspopup="dialog"
        className="fixed bottom-4 left-4 z-[60] inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/40"
      >
        <Accessibility className="w-6 h-6" aria-hidden="true" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-stretch"
          role="dialog"
          aria-modal="true"
          aria-labelledby="a11y-title"
          dir="rtl"
        >
          <button
            type="button"
            aria-label="סגירת תפריט נגישות"
            className="flex-1 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <aside className="w-[320px] max-w-[92vw] bg-background text-foreground shadow-2xl overflow-y-auto border-r border-border">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-primary text-primary-foreground">
              <h2 id="a11y-title" className="text-lg font-bold">
                תפריט נגישות
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="סגירה"
                className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-white/10"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-4 space-y-5 text-sm">
              <section aria-labelledby="a11y-text">
                <h3 id="a11y-text" className="font-semibold mb-2">
                  גודל טקסט
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => update({ fontScale: Math.max(0.8, +(settings.fontScale - 0.1).toFixed(2)) })}
                    aria-label="הקטנת טקסט"
                    className="flex-1 inline-flex items-center justify-center gap-1 h-10 rounded-md border border-border hover:bg-accent"
                  >
                    <Minus className="w-4 h-4" aria-hidden="true" /> הקטן
                  </button>
                  <span className="min-w-[3rem] text-center font-medium" aria-live="polite">
                    {Math.round(settings.fontScale * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() => update({ fontScale: Math.min(1.6, +(settings.fontScale + 0.1).toFixed(2)) })}
                    aria-label="הגדלת טקסט"
                    className="flex-1 inline-flex items-center justify-center gap-1 h-10 rounded-md border border-border hover:bg-accent"
                  >
                    <Plus className="w-4 h-4" aria-hidden="true" /> הגדל
                  </button>
                </div>
              </section>

              <section aria-labelledby="a11y-contrast">
                <h3 id="a11y-contrast" className="font-semibold mb-2">
                  ניגודיות וצבעים
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <ToggleBtn
                    active={settings.contrast === "high"}
                    onClick={() => update({ contrast: settings.contrast === "high" ? "normal" : "high" })}
                    icon={<Contrast className="w-4 h-4" aria-hidden="true" />}
                    label="ניגודיות גבוהה"
                  />
                  <ToggleBtn
                    active={settings.contrast === "inverted"}
                    onClick={() => update({ contrast: settings.contrast === "inverted" ? "normal" : "inverted" })}
                    icon={<Contrast className="w-4 h-4" aria-hidden="true" />}
                    label="היפוך צבעים"
                  />
                  <ToggleBtn
                    active={settings.theme === "light"}
                    onClick={() => update({ theme: settings.theme === "light" ? "default" : "light" })}
                    icon={<Sun className="w-4 h-4" aria-hidden="true" />}
                    label="רקע בהיר"
                  />
                  <ToggleBtn
                    active={settings.theme === "dark"}
                    onClick={() => update({ theme: settings.theme === "dark" ? "default" : "dark" })}
                    icon={<Moon className="w-4 h-4" aria-hidden="true" />}
                    label="רקע כהה"
                  />
                  <ToggleBtn
                    active={settings.grayscale}
                    onClick={() => update({ grayscale: !settings.grayscale })}
                    icon={<Contrast className="w-4 h-4" aria-hidden="true" />}
                    label="גווני אפור"
                  />
                </div>
              </section>

              <section aria-labelledby="a11y-content">
                <h3 id="a11y-content" className="font-semibold mb-2">
                  התאמות תוכן
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <ToggleBtn
                    active={settings.readableFont}
                    onClick={() => update({ readableFont: !settings.readableFont })}
                    icon={<Type className="w-4 h-4" aria-hidden="true" />}
                    label="גופן קריא"
                  />
                  <ToggleBtn
                    active={settings.highlightLinks}
                    onClick={() => update({ highlightLinks: !settings.highlightLinks })}
                    icon={<Link2 className="w-4 h-4" aria-hidden="true" />}
                    label="הדגשת קישורים"
                  />
                  <ToggleBtn
                    active={settings.stopAnimations}
                    onClick={() => update({ stopAnimations: !settings.stopAnimations })}
                    icon={<PauseCircle className="w-4 h-4" aria-hidden="true" />}
                    label="עצירת אנימציות"
                  />
                  <ToggleBtn
                    active={settings.hideImages}
                    onClick={() => update({ hideImages: !settings.hideImages })}
                    icon={<ImageIcon className="w-4 h-4" aria-hidden="true" />}
                    label="הסתרת תמונות"
                  />
                  <ToggleBtn
                    active={settings.bigCursor}
                    onClick={() => update({ bigCursor: !settings.bigCursor })}
                    icon={<MousePointer2 className="w-4 h-4" aria-hidden="true" />}
                    label="סמן מוגדל"
                  />
                </div>
              </section>

              <div className="pt-2 border-t border-border space-y-2">
                <button
                  type="button"
                  onClick={reset}
                  className="w-full inline-flex items-center justify-center gap-2 h-10 rounded-md bg-destructive text-white hover:opacity-90"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" /> איפוס הגדרות
                </button>
                <Link
                  to="/accessibility"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center h-10 leading-10 rounded-md border border-border hover:bg-accent"
                >
                  הצהרת נגישות
                </Link>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                האתר עומד בתקן הנגישות הישראלי ת״י 5568 ברמה AA, בהתאם לתקנות שוויון
                זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013.
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

function ToggleBtn({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        "inline-flex flex-col items-center justify-center gap-1 h-16 rounded-md border text-xs font-medium transition-colors " +
        (active
          ? "bg-primary text-primary-foreground border-primary"
          : "border-border hover:bg-accent")
      }
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}