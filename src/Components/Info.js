import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>מה אנחנו עושים</span>
        </h3>
        <p className="info-description">
          אנו מביאים שירותי בריאות לנוחיותך, ומציעים טיפול מקיף
          מגוון שירותים רפואיים לפי דרישה המותאמים לצרכים שלך. שֶׁלָנוּ
          הפלטפורמה מאפשרת לך להתחבר לרופאים מקוונים מנוסים אשר
          לספק ייעוץ רפואי מומחה, להנפיק מרשמים מקוונים ולהציע
          מילוי מהיר בכל פעם שאתה צריך אותם.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="טיפול דחוף"
          description="שירות החירום שלנו נועד להיות התמיכה האמינה שלך
          במצבים קריטיים. בין אם זו מחלה פתאומית, פציעה או
          כל דאגה רפואית הדורשת טיפול מיידי, הצוות שלנו של
          אנשי מקצוע ייעודיים בתחום הבריאות זמינים לספק 24/7
          טיפול מהיר ויעיל"
          icon={faTruckMedical}
        />

        <InformationCard
          title="מחלת לב"
          description="צוות הקרדיולוגים והמומחים הרפואיים המנוסים שלנו משתמש
        טכנולוגיה חדישה להערכת בריאות הלב וכלי הדם שלך
        עיצוב תוכניות טיפול מותאמות אישית. מתוך הקרנות מקיפות
        להתערבויות מתקדמות, אנו מחויבים לעזור לך לשמור
        לב בריא ולנהל חיים מספקים"
          icon={faHeartPulse}
        />

        <InformationCard
          title="טיפול שיניים"
          description="חייך בביטחון שכן שירותי טיפול השיניים שלנו מספקים את כל צרכי בריאות הפה שלך. רופאי השיניים המיומנים שלנו מספקים מגוון רחב של טיפולים, החל מבדיקות וניקויים שגרתיים ועד להליכים קוסמטיים וטיפולים משקמים."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
