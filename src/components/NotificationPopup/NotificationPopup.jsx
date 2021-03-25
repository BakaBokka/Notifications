import React from "react";
import "./NotificationPopup.scss";
import bell from "../../img/bell_empty.png";
import close from "../../img/close.png";

function NotificationPopup({ data }) {
  return (
    <div className="NotificationPopup">
      <header className="NotificationPopup__header">
        <h2 className="NotificationPopup__title">Уведомления</h2>

        {data && <button className="NotificationPopup__button">Прочитать все</button>}

        <img
          className="NotificationPopup__closeIcon"
          src={close}
          alt="Иконка закрыть"
        />
      </header>
      <div className="NotificationPopup__content">
        {data ? (
          "Данные"
        ) : (
          <div className="NotificationPopup__emptyPlug">
            <img
              className="NotificationPopup__emptyPlug-icon"
              src={bell}
              alt="Картинка колокольчик-уведомление"
            />
            <p className="NotificationPopup__text">
              Здесь будут уведомления по вашим заказам, акциям.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationPopup;
