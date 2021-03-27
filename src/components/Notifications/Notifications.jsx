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
  const notificationElement = shownData.map((item) => {
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
                  onMouseOver={(e) => handleHoverOn(e, item.id)}
                  onMouseOut={handleHoverOff}
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
            <span className="Notifications__item-paydate">
              {item.message.date}
            </span>
          </p>
          <p className="Notifications__item-date">{item.date}</p>
        </a>
      </li>
    );
  });

  return (
    <>
      <ul className="Notifications">
        {notificationElement}

        {coords && <NotificationButton handler={handleRead} coords={coords} />}
      </ul>

      <div className="Notifications__button-wrap">
        {!dataLength && <NotificationButton handler={handleShowMore} />}
      </div>
    </>
  );
}

export default Notifications;
