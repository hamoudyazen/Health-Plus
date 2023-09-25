import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">מידע כללי</p>
        <p className="legal-description">
          ברוכים הבאים ל-Health Plus, פלטפורמת שירותי הבריאות המקוונת המהימנה שלך. שֶׁלָנוּ
          המשימה היא לספק שירותי בריאות נגישים ומותאמים אישית
          לאנשים המחפשים ייעוץ וטיפול רפואי מומחים. על ידי שימוש ב
          הפלטפורמה שלנו, אתה מסכים לתנאים המפורטים במדיניות הפרטיות שלנו
          ותנאים והגבלות.
        </p>

        <p className="legal-title">מדיניות הפרטיות</p>
        <p className="legal-description">
          הפרטיות שלך חשובה לנו ביותר. מדיניות הפרטיות שלנו מתארת ​​כיצד אנו
          לאסוף, להשתמש ולהגן על המידע האישי והרפואי שלך. אָנוּ
          להבטיח טיפול מאובטח בנתונים, ואתה יכול לסמוך על המידע שלך
          מטופל בסודיות מרבית.
        </p>

        <p className="legal-title">תנאי השירות</p>
        <p className="legal-description">
          בעת השימוש ב-Health Plus, אתה מסכים לתנאי השירות שלנו. זֶה
          כולל הנחיות לשימוש בפלטפורמה שלנו, אינטראקציה עם רופאים,
          והאחריות של שני הצדדים. זה חיוני להבין
          תנאים אלה כדי להבטיח חוויה חלקה לכל המשתמשים.
        </p>

        <p className="legal-title">התייעצויות</p>
        <p className="legal-description">
          הפלטפורמה שלנו מחברת אותך עם רופאים מומחים המספקים באינטרנט
          התייעצויות. התייעצויות אלו אינן תחליף להתייעצויות אישיות
          ביקורים רפואיים אך משמשים כאופציה נוחה לייעוץ רפואי,
          מרשמים והדרכה. זה חיוני לספק מדויק ו
          מידע מלא כדי לקבל את הטיפול הטוב ביותר האפשרי.
        </p>

        <p className="legal-title">איך זה עובד</p>
        <p className="legal-description">
          Health Plus נועד לפשט את הגישה לשירותי בריאות. אתה יכול לבחור
          מומחה, לקבוע פגישה ולעסוק בוירטואלי
          יִעוּץ. המומחים שלנו מציעים ייעוץ וטיפול בהתאמה אישית
          תוכניות המותאמות לצרכים שלך. אנא זכרו שמקרי חירום מחייבים
          טיפול רפואי מיידי ויש להפנותו למקומך
          מתקן רפואי.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Health+. All rights reserved. / Devloper - Yazen Hamoud</p>
      </div>
    </div>
  );
}

export default LegalDocs;
