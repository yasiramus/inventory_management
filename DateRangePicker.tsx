import {  useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";


const DateRangePicker = ({
   start_date, end_date, onChange 
}: { start_date: Date, end_date: Date, onChange: ([start, end]: [number, number]) => void }) => {
  
  // state are being defined here 
  const [startDate, setStartDate] = useState(start_date ?? null);

    const [endDate, setEndDate] = useState(end_date ?? null);
  
  // function 
    const onDateChange = (dates: [Date, Date]) => {
      const [start, end] = dates;
  
      setStartDate(start);

      setEndDate(end);

      onChange([moment(start).valueOf(), moment(end).valueOf()]);

  };
  
  return (
        <div className="tw-w-full">
          <DatePicker
            dateFormat="MMM d, yyyy"
            selected={startDate}
            onChange={onDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            // isClearable={true}
          />
        </div>
      );

}

export default DateRangePicker;
