import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const deployedURL = window.location.href;
  const location = useLocation();

  return (
    <div>
      <h1>הדף לא נמצא</h1>
      <p>כתובת האתר המבוקשת {deployedURL} לא נמצאה בשרת זה.</p>
      <p>כתובת האתר המבוקשת {location.pathname} לא נמצאה בשרת זה.</p>
    </div>
  );
}

export default NotFound;
