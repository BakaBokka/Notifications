import React from "react";
import "./Notifications.scss";
function Notifications({ data }) {
  const notificationElement = data.map((item) => {
    return (
      <li className="Notifications__item" key={item.id}>
        <header className="Notifications__item-header">
          <div className="Notifications__item-indicator-wrap"><div className="Notifications__item-indicator"></div></div>

        <h3 className="Notifications__item-title" >
          <span className="Notifications__item-order">{item.title.order}</span>
          {item.title.text}
        </h3>
        </header>
        <p className="Notifications__item-text">
          {item.message.text}
          <span className="Notifications__item-paydate" >{item.message.date}</span>
        </p>
        <p className="Notifications__item-date">{item.date}</p>
      </li>
    );
  });

  return <ul className="Notifications">{notificationElement}</ul>;
}

export default Notifications;
