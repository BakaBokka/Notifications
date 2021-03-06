import React, { useState } from "react";
import "./Notifications.scss";
import NotificationButton from "../NotificationButton/NotificationButton";
function Notifications({ data, setData }) {
  const [coords, setCoords] = useState(null);
  const [itemId, setItemId] = useState("");
  const [pageSize, setPageSize] = useState(10);
  let shownData = data.slice(0, pageSize);
  const dataLength = data.length === shownData.length;

  //Обработчики
  const handleHoverOn = (e, id) => {
    setCoords(e.target.getBoundingClientRect());
    setItemId(id);
  };

  const handleHoverOff = () => {
    setTimeout(setCoords, 700, null);
  };

  const handleRead = (e, id = itemId) => {
    const item = data.find((item) => id === item.id);
    const itemIndex = data.findIndex((item) => id === item.id);
    const newItem = {
      ...item,
      closed: true,
    };
    setData([
      ...data.slice(0, itemIndex),
      newItem,
      ...data.slice(itemIndex + 1),
    ]);
  };

  const handleShowMore = (e) => {
    setPageSize(pageSize + 10);
  };

  //Собираем список уведомлений
  const notificationElements = shownData.map((item) => {
    return (
      <li
        className="Notifications__item"
        key={item.id}
        onClick={(e) => handleRead(e, item.id)}
      >
        <a className="Notifications__item-link" href="#s">
          <header className="Notifications__item-header">
            {!item.closed && (
              <div className="Notifications__item-indicator-wrap">
                <div
                  className="Notifications__item-indicator"
                  onPointerOver={(e) => handleHoverOn(e, item.id)}
                  onPointerOut={handleHoverOff}
                ></div>
              </div>
            )}

            <h3 className="Notifications__item-title">
              <span className="Notifications__item-order">
                {item.title.order}
              </span>
              {item.title.text}
            </h3>
          </header>
          <p className="Notifications__item-text">
            {item.message.text}
           {item.message.payDate && <span className="Notifications__item-paydate">
              {item.message.payDate}
            </span>}
          </p>
          <p className="Notifications__item-date">{item.date}</p>
        </a>
      </li>
    );
  });

  return (
    <>
      <ul className="Notifications">
        {notificationElements}

        {coords && (
          <NotificationButton
            text="Прочитано"
            handler={handleRead}
            coords={coords}
          />
        )}
      </ul>

      {/* Тут больше поставил отступ, а то в Firefox'e кнопка попадает под оверлей */}
      <div className="Notifications__button-wrap">
        {!dataLength && (
          <NotificationButton text="Показать ещё" handler={handleShowMore} />
        )}
      </div>
    </>
  );
}

export default Notifications;
