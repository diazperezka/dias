import { zonedTimeToUtc } from "date-fns-tz";
import { add, isAfter, format } from "date-fns";
import { getDayOfWeek, GetSpecialDateResponse } from "./dates";
import { matchReservesWithDates } from "./components/matchReservesWithDates";
import { DatesRange } from "./types";
import { matchReservesWithSpecialDatesDiscount } from "./components/matchReservesWithSpecialDatesDiscount";

const initFrom = zonedTimeToUtc("2021-05-01", "America/Santiago");
const initTo = zonedTimeToUtc("2021-05-31", "America/Santiago");

let from = zonedTimeToUtc("2021-05-01", "America/Santiago");
let to = zonedTimeToUtc("2021-05-31", "America/Santiago");

const datesRange: DatesRange[] = [];

while (!isAfter(from, to)) {
  const { english, spanish }: GetSpecialDateResponse = getDayOfWeek(from);

  const formatedDate = format(from, "yyyy-MM-dd");
  const data = {
    date: formatedDate,
    dayEnglish: english,
    daySpanish: spanish,
  };
  datesRange.push(data);

  from = add(from, { days: 1 });
}

const blocksWithDate = matchReservesWithDates(datesRange);
const blocksWithSpecialDatesDiscount = matchReservesWithSpecialDatesDiscount(
  initFrom,
  initTo,
  blocksWithDate
);
