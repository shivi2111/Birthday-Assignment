import React, { useState } from "react";
import { useSelector } from "react-redux";
import Event from "./Event";

export default function FavBirthDayList() {
  const events = useSelector((state) => state.events.events);
  function onInputChange(e) {
    const value = e.tar;
  }
  const [query, setQuery] = useState("");
  return (
    <div>
      <input
        type="search"
        autocomplete
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search user"
      ></input>
      {events
        ?.filter(
          (event) =>
            event.isFav &&
            event.text.toLowerCase().includes(`${query}`.toLowerCase())
        )
        .map((event, index) => {
          return (
            <div>
              <hr />
              <Event
                key={`event_${index}`}
                event={event}
                index={index}
                FavBirthDayList
              />
            </div>
          );
        })}
    </div>
  );
}
