import { getYear, getMonth, getDay, getDate, getDaysInMonth } from "date-fns";
import { buildSinceDate, buildUntilDate } from "../dates";
import { numberIsBetween } from "../numbers";
import { SpecialDateParams } from "../types";
import { sinceAndUntilWithDate } from "./sinceAndUntilWithDate";
import { sinceAndUntilWithDay } from "./sinceAndUntilWithDay";

const sinceAndUntil = (
  from: Date,
  to: Date,
  since: Partial<SpecialDateParams>,
  until: Partial<SpecialDateParams>,
  date: Date
): boolean => {
  const sinceDate = buildSinceDate(from, since);
  const untilDate = buildUntilDate(to, until);

  const sinceMonthDays = getDaysInMonth(sinceDate);

  if (since.year > until.year)
    throw Error("Fecha inicial no puede ser menor que fecha final");
  else if (since.month > until.month)
    throw Error("Mes inicial no puede ser menor que mes final");
  else if (since.day > until.day)
    throw Error(
      "Día de la semana inicial no puede ser menor que día de la semana final"
    );
  else if (since.date > until.date)
    throw Error("Día del mes inicial no puede ser menor que día del mes final");

  if (numberIsBetween(since.day, 0, 6))
    return sinceAndUntilWithDay(
      sinceDate,
      untilDate,
      date,
      since.day,
      until.day
    );
  else if (numberIsBetween(since.date, 1, sinceMonthDays))
    return sinceAndUntilWithDate(sinceDate, untilDate, date);
};

export { sinceAndUntil };
