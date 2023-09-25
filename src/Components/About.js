import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>עלינו</span>
        </h3>
        <p className="about-description">
          ברוכים הבאים ל-Health Plus, השותף המהימן שלך לטיפול רפואי נגיש ומותאם אישית. הרופאים המומחים שלנו מציעים ייעוץ מקוון ושירותים מיוחדים, תוך עדיפות לרווחתך. הצטרפו אלינו למסע הזה לקראת אותך בריא יותר..
        </p>

        <h4 className="about-text-title">הפתרונות שלך</h4>

        <SolutionStep
          title="בחר מומחה"
          description="מצא את המומחה המושלם שלך והזמן בקלות ב-Health Plus. רופאים מומחים נותנים עדיפות לבריאות שלך, ומציעים טיפול מותאם."
        />

        <SolutionStep
          title="ערכו לוח זמנים"
          description="בחר את התאריך והשעה המתאימים לך ביותר, ואפשר לצוות המסור שלנו של אנשי מקצוע רפואיים להבטיח את שלומך עם טיפול מותאם אישית."
        />

        <SolutionStep
          title="קבל את הפתרונות שלך"
          description="הרופאים והמומחים המנוסים שלנו נמצאים כאן כדי לספק ייעוץ מומחה ותוכניות טיפול מותאמות אישית, כדי לעזור לך להשיג את הבריאות הטובה ביותר שלך."
        />
      </div>
    </div>
  );
}

export default About;
