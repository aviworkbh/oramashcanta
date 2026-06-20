import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "הצהרת נגישות — אורה רוזנטלר ייעוץ משכנתאות" },
      {
        name: "description",
        content:
          "הצהרת נגישות לאתר אורה רוזנטלר ייעוץ משכנתאות, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות התשע״ג-2013 ולתקן הישראלי ת״י 5568 רמה AA.",
      },
    ],
  }),
  component: AccessibilityStatement,
});

function AccessibilityStatement() {
  return (
    <div dir="rtl" className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        הצהרת נגישות
      </h1>

      <p className="text-foreground/80 leading-relaxed mb-4">
        אנו באתר <strong>אורה רוזנטלר — ייעוץ משכנתאות</strong> רואים חשיבות
        עליונה במתן שירות נגיש ושוויוני לכלל הציבור, לרבות אנשים עם מוגבלות,
        בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ״ח-1998 ולתקנות שוויון
        זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-3">
        רמת הנגישות באתר
      </h2>
      <p className="text-foreground/80 leading-relaxed mb-4">
        האתר נבנה בהתאם להנחיות תקן ישראלי ת״י 5568 לנגישות תכנים באינטרנט
        ברמה AA, המבוסס על הנחיות WCAG 2.1 של ארגון W3C.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-3">
        ההתאמות שבוצעו
      </h2>
      <ul className="list-disc pr-6 space-y-2 text-foreground/80">
        <li>תפריט נגישות הנפתח מהפינה השמאלית התחתונה של כל עמוד.</li>
        <li>שינוי גודל הטקסט (הגדלה והקטנה).</li>
        <li>שינוי ניגודיות צבעים — גבוהה, היפוך צבעים, רקע בהיר וכהה.</li>
        <li>הצגת האתר בגווני אפור.</li>
        <li>גופן קריא ומותאם לאנשים עם דיסלקציה.</li>
        <li>הדגשת קישורים וסימון מוקד הקלדה (focus) ברור.</li>
        <li>עצירת אנימציות ותנועה באתר.</li>
        <li>סמן עכבר מוגדל.</li>
        <li>ניווט מלא במקלדת.</li>
        <li>תאימות לקוראי מסך (NVDA, JAWS, VoiceOver).</li>
        <li>טקסטים חלופיים לתמונות (alt).</li>
        <li>מבנה כותרות סמנטי ותקין.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-3">
        חלקים שעלולים שלא להיות נגישים במלואם
      </h2>
      <p className="text-foreground/80 leading-relaxed mb-4">
        חרף מאמצינו, ייתכן ויימצאו באתר חלקים אשר נגישותם עדיין לא הותאמה במלואה.
        אנו ממשיכים לפעול לשיפור נגישות האתר באופן מתמיד.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-3">
        פנייה בנושא נגישות
      </h2>
      <p className="text-foreground/80 leading-relaxed mb-2">
        אם נתקלתם בבעיית נגישות באתר, או יש לכם הצעה לשיפור, נשמח שתפנו אלינו:
      </p>
      <ul className="space-y-1 text-foreground/80 mb-6">
        <li>
          <strong>רכזת נגישות:</strong> אורה רוזנטלר
        </li>
        <li>
          <strong>טלפון:</strong>{" "}
          <a href="tel:0533886710" className="text-primary underline">
            053-388-6710
          </a>
        </li>
        <li>
          <strong>דוא״ל:</strong>{" "}
          <a href="mailto:orarozen1@gmail.com" className="text-primary underline">
            orarozen1@gmail.com
          </a>
        </li>
      </ul>
      <p className="text-foreground/80 leading-relaxed mb-8">
        נשתדל לטפל בפנייתכם בהקדם האפשרי, ולא יאוחר מ-45 ימי עבודה.
      </p>

      <p className="text-sm text-muted-foreground">
        הצהרה זו עודכנה לאחרונה בתאריך{" "}
        {new Date().toLocaleDateString("he-IL")}.
      </p>

      <div className="mt-8">
        <Link to="/" className="text-primary hover:underline">
          ← חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
}