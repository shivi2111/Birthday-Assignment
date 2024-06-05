import { toggleLoading } from "./configReducer";
import { setEvents } from "./eventSlice";

const buildUrl = (day, month) => {
  return `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;
};

export const onDateSelected = async (date, dispatch) => {
  const day = date.date() < 10 ? "0" + date.date() : date.date();
  const month = date.month() < 10 ? "0" + date.month() : date.month();
  const url = buildUrl(day, month);
  
  // Start loading
  dispatch(toggleLoading());

  try {
    // Make a fetch call
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const births = (await response.json()).births;
    dispatch(setEvents(births));
  } catch (error) {
    console.error("Failed to fetch events:", error);
  } finally {
    // Stop loading
    dispatch(toggleLoading());
  }
};
