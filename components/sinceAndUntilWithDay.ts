import { isWithinInterval, getDay, format } from "date-fns";

const sinceAndUntilWithDay = (
  sinceDate: Date,
  untilDate: Date,
  date: Date,
  sinceDay: number,
  untilDay: number
) => {
  const result = isWithinInterval(date, { start: sinceDate, end: untilDate });

  const min = Math.min(sinceDay, untilDay);
  const max = Math.max(sinceDay, untilDay);

  if (result) {
    const dateDay = getDay(date);

    if (dateDay >= min && dateDay <= max) return true;
    else return false;
  }
};

export { sinceAndUntilWithDay };
