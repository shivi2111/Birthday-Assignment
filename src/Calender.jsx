import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";
import { onDateSelected } from "./helpers";
import { getIsLoading } from "./configReducer";

export default function BasicDatePicker() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state=>state.configs.isLoading)
  console.log(isLoading , getIsLoading , "######")
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <StaticDatePicker
        onChange={date=>onDateSelected(date,dispatch)}
      />
    </LocalizationProvider>
  );
}
