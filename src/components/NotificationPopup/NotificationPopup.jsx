import React from "react";
import "./NotificationPopup.scss";
import bell from "../../img/bell_empty.svg";
import close from "../../img/close.svg";
import Notifications from "../Notifications/Notifications";

function NotificationPopup({ data, setData, handleShown }) {
  const handleReadAlL = () => {
    const newData = data.map((item) => {
      const newItem = {
        ...item,
        closed: true,
      };
      return newItem;
    });
    setData(newData);
  };
  return (
    <div
      className={
        data ? "NotificationPopup" : "NotificationPopup NotificationPopup_empty"
      }
    >
      <header className="NotificationPopup__header">
        <div className="NotificationPopup__header-content">
          <h2 className="NotificationPopup__title">Уведомления</h2>

          {data && (
            <button
              className="NotificationPopup__button"
              onClick={handleReadAlL}
            >
              Прочитать все
            </button>
          )}
        </div>

        <img
          className="NotificationPopup__closeIcon"
          src={close}
          alt="Иконка закрыть"
          onClick={handleShown}
        />
      </header>
      <div className="NotificationPopup__content">
        {data ? (
          <Notifications data={data} setData={setData} />
        ) : (
          <div className="NotificationPopup__emptyPlug">
            <img
              className="NotificationPopup__emptyPlug-icon"
              src={bell}
              alt="Иконка колокольчик-заглушка"
            />
            <p className="NotificationPopup__text">
              Здесь будут уведомления по вашим заказам, акциям.
            </p>
          </div>
        )}
      </div>
      <div className="NotificationPopup__overlay"></div>
    </div>
  );
}

export default NotificationPopup;
