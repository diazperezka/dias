import { getYear } from "date-fns";
import { buildSinceDate, buildUntilDate } from "../dates";
import { SpecialDateParams } from "../types";
import { sinceAndUntilWithDate } from "./sinceAndUntilWithDate";
import { sinceAndUntilWithDay } from "./sinceAndUntilWithDay";

const sinceAndUntil = (
  from: Date,
  to: Date,
  since: Partial<SpecialDateParams>,
  until: Partial<SpecialDateParams>,
  date: Date
): void => {
  const sinceDate = buildSinceDate(from, since);
  const untilDate = buildUntilDate(to, until);

  const sinceYear = getYear(new Date(sinceDate));
  const untilYear = getYear(new Date(untilDate));

  if (sinceYear > untilYear)
    throw Error("Fecha inicial no puede ser menor que fecha final");

  if (since.day >= 0 && since.day <= 6)
    sinceAndUntilWithDay(sinceDate, untilDate, date, since.day, until.day);
  else if (since.date >= 1 && since.date <= 31)
    sinceAndUntilWithDate(sinceDate, untilDate, date);
};

export { sinceAndUntil };
