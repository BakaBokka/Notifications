import React, { useState } from "react";
import "./App.scss";
import Notification from "./components/Notification/Notification";
import NotificationPopup from "./components/NotificationPopup/NotificationPopup";

import { store } from "./db";

function App() {
  const [shown, setShown] = useState(false);
  const [data, setData] = useState(store.notifications);
  const counter = data.filter((item) => item.closed === false);

  const handleShown = () => {
    setShown(!shown);
  };

  return (
    <div className="App">
      <Notification
        shown={shown}
        handleShown={handleShown}
        counter={counter.length}
        siteMode={store.siteMode}
      />
      {shown && (
        <NotificationPopup
          data={data}
          setData={setData}
          handleShown={handleShown}
        />
      )}
     {shown && <div className="App__underlay"/>}
    </div>
  );
}

export default App;
