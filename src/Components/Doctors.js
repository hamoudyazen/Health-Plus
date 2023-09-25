import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>הכירו את הרופאים שלנו</span>
        </h3>

        <p className="dt-description">
          הכירו את צוות הרופאים המומחים היוצא דופן שלנו, המוקדש ל
          מתן שירותי בריאות מהשורה הראשונה ב-Health Plus. בטח בהם
          ידע וניסיון שיובילו אותך לעבר בריא ומאושר יותר
          חַיִים.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="דר. קתרין מרפי"
          title="מנתחים כלליים"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="דר. ג'ייקוב ג'ונס"
          title="המטולוגים"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="דר. ג'ני ווילסון"
          title="אנדוקרינולוגים"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="דר. אלברט פלורס"
          title="המטולוגים"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;
