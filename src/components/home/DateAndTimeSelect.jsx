import React, { useState } from "react";
import { CalendarOutlined, CloseOutlined } from "@ant-design/icons";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";

const DateAndTimeSelect = (props) => {
  const [validFrom, setValidFrom] = useState("");
  const [validTill, setValidTill] = useState("");
  const [
    validFromDateForComparision,
    setValidFromDateForComparision,
  ] = useState("");
  const [validTillMinimumDate, setValidTillMinimumDate] = useState("");
  const [validTillForComparision, setValidTillForComparision] = useState("");
  const [isValidTillDisabled, setIsValidTillDisabled] = useState(true);
  const today = new Date(Date.now());

  const onValidFromChange = (date) => {
    //console.log("date", date);

    if (date === "" || date === undefined || date === null) {
      setIsValidTillDisabled(true);
      setValidTill("");
      return;
    }

    let momented_date = moment(date).format(`YYYY-MM-DDTHH:mm:ss`);

    //console.log("momented_date", momented_date);

    /**concept for +1 day for valid from starts  */

    let final_day = date.getDate() + 1;
    let final_month = date.getMonth();
    let final_year = date.getFullYear();
    let final_minimum_date = new Date(final_year, final_month, final_day);

    //  console.log("final_minimum_date in function", final_minimum_date);

    /**concept for +1 day for valid from ends  */

    setValidFromDateForComparision(date);
    setValidTillMinimumDate(final_minimum_date);
    setValidFrom(momented_date);
    props.setSelectedFromTime(momented_date);
    setIsValidTillDisabled(false);
    setValidTillForComparision("");
    setValidTill("");
  };

  const onValidTillChange = (date) => {
    //  console.log("validTill", date);

    if (date === "" || date === undefined || date === null) {
      setValidTill("");
      return;
    }
    // let tempDate = date.toLocaleDateString();
    let momented_date = moment(date).format(`YYYY-MM-DDTHH:mm:ss`);
    setValidTill(momented_date);
    props.setSelectedToTime(momented_date);
    setValidTillForComparision(date);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "auto 20px auto 0px" }}>
          <span style={{ padding: "6px" }}>From</span>
          <DateTimePicker
            calendarIcon={<CalendarOutlined style={{ color: "#B8EFF1" }} />}
            clearIcon={<CloseOutlined />}
            className="dateTime"
            onChange={onValidFromChange}
            value={validFromDateForComparision}
            // minDate={today}
          />
        </div>
        <div style={{ margin: "auto 20px auto 0px" }}>
          <span style={{ padding: "6px" }}>To</span>
          <DateTimePicker
            calendarIcon={<CalendarOutlined style={{ color: "#B8EFF1" }} />}
            clearIcon={<CloseOutlined />}
            className="dateTime"
            onChange={onValidTillChange}
            value={validTillForComparision}
            minDate={validTillMinimumDate}
            disabled={isValidTillDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default DateAndTimeSelect;
