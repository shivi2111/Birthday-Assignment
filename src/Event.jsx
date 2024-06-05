import React from "react";
import { useDispatch } from "react-redux";
import { setFav } from "./eventSlice";

export default function Event({ event, index, FavBirthDayList }) {
  const dispatch = useDispatch();
  return !FavBirthDayList ? (
    <div className={event.isFav ? "fav-event" : ""}>
      <button onClick={() => dispatch(setFav(index))}>Set Favourite</button>
      {event.text}
    </div>
  ) : (
    <div>{event.text}</div>
  );
}
