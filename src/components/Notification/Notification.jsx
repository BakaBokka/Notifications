import React, { useState } from "react";
import "./Notification.scss";
import bell from "../../img/bell.svg";
import blueBell from "../../img/bell_blue.svg";

function Notification({ shown, handleShown, counter, siteMode }) {
  const [hovered, setHovered] = useState(false);
  const handleHover = () => {
    setHovered(!hovered);
  };

  const styles =
    siteMode === "person"
      ? "Notification Notification_type_person"
      : "Notification Notification_type_company";

  return (
    <div
      className={hovered || shown ? styles : "Notification"}
      onClick={handleShown}
      onMouseOver={handleHover}
      onMouseOut={handleHover}
    >
      <img
        className="Notification__icon"
        src={siteMode === "person" ? bell : blueBell}
        alt="Иконка колокольчи-уведомление"
      />
      {counter ? (
        <div className="Notification__counter-wrap">
          <span className="Notification__counter">{counter}</span>
        </div>
      ): null}
    </div>
  );
}

export default Notification;
