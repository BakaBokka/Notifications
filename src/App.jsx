import React, { useState } from "react";
import "./App.scss";
import Notification from "./components/Notification/Notification";
import NotificationPopup from "./components/NotificationPopup/NotificationPopup";

import { store } from "./db";

function App() {
  const [shown, setShown] = useState(false);
  const [data, setData] = useState(store.notifications);

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
      {shown && <NotificationPopup data={data.slice(0, 10)} setData={setData} />}
    </div>
  );
}

export default App;
