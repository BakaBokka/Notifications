import React, { useState } from "react";
import "./App.scss";
import Notification from "./components/Notification/Notification";
import NotificationPopup from "./components/NotificationPopup/NotificationPopup";
import { store } from "./db";

function App() {
  const [shown, setShown] = useState(false);
  const data = store.notifications;

  const handleShown = () => {
    setShown(!shown);
  };

  return (
    <div className="App">
      <Notification
        shown={shown}
        handleShown={handleShown}
        data={data.length}
      />
      {shown && <NotificationPopup data={data} />}
    </div>
  );
}

export default App;
