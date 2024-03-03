import { minDate, maxDate } from "../../utils/utils";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import styles from "./styles.module.css";

export function DateInput({ selectedDate, onChange, currentEvent }) {

  return (
    <>
      <label htmlFor="data">Data do evento</label>
      {!currentEvent.id ? (
        <input
          required
          min={minDate.toISOString().split('T')[0]}
          max={maxDate.toISOString().split("T")[0]}
          value={selectedDate}
          className={styles.input_data}
          type="date"
          name="data"
          id=""
          onChange={onChange}
          onKeyDown={(e) => e.preventDefault()}
        />
      ) : (
        <div>
          <p>{new Date(currentEvent.data).toLocaleDateString()}</p>
          <CalendarMonthOutlinedIcon />
        </div>
      )}
    </>
  );
}
