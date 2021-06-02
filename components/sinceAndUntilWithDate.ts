import { isWithinInterval, format } from "date-fns";

const sinceAndUntilWithDate = (
  sinceDate: Date,
  untilDate: Date,
  date: Date
) => {
  const result = isWithinInterval(new Date(date), {
    start: new Date(sinceDate),
    end: new Date(untilDate),
  });

  if (result) return true;
  else return false;
};

export { sinceAndUntilWithDate };
