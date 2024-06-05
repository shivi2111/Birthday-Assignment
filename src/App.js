import logo from "./logo.svg";
import "./App.css";
import BasicDatePicker from "./Calender";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import EventsContainer from "./EventsContainer";
import FavBirthDayList from "./FavBirthdayList";
import { flushSync } from "react-dom";

function App() {
  const isLoading = useSelector((state) => state.configs.isLoading);
  return (
    <div className="App">
      <header className="App-header">
        <BasicDatePicker />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "400px", height: "400px", overflow: "auto" }}>
            {isLoading ? "loading" : <EventsContainer />}
          </div>
          <div style={{ width: "400px", height: "400px", overflow: "auto" }}>
            {isLoading ? "loading" : <FavBirthDayList />}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
