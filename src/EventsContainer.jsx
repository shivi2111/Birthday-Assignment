import React from "react";
import { useSelector } from "react-redux";
import Event from "./Event";

export default function EventsContainer() {
  const events = useSelector((state) => state.events.events);
  return (
    <div>
      {events.map((event, index) => {
        return (
          <div>
            <hr />
            <Event key={`event_${index}`} event={event} index={index} />
          </div>
        );
      })}
    </div>
  );
}
