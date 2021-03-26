import React from "react";
import "./NotificationButton.scss";

function NotificationButton({ handler, coords }) {
  //Координаты для кнопки
  const buttonCoords = coords
    ? {
        top: `${coords.y - 67}px`,
        left: `${coords.x - 18}px`,
      }
    : {};

  return (
    <button
      className={
        coords
          ? "NotificationButton NotificationButton_type_read"
          : "NotificationButton NotificationButton_type_more"
      }
      style={buttonCoords}
      onClick={(e) => handler(e)}
    >
      {coords ? "Прочитать" : "Показать еще"}
    </button>
  );
}

export default NotificationButton;