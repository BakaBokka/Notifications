import React, { useState } from "react";
import "./Notification.scss";
import bell from "../../img/bell.svg";

function Notification({ shown, handleShown, data }) {
  const [hovered, setHovered] = useState(false);
  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      className={
        hovered || shown ? "Notification Notification_active" : "Notification"
      }
      onClick={handleShown}
      onMouseOver={handleHover}
      onMouseOut={handleHover}
    >
      <img
        className="Notification__icon"
        src={bell}
        alt="Иконка колокольчи-уведомление"
      />
      {data && (
        <div className="Notification__counter-wrap">
          <span className="Notification__counter">{data}</span>
        </div>
      )}
    </div>
  );
}

export default Notification;
