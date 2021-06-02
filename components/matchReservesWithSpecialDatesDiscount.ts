import { getDay, getMonth, getYear } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";
import { sinceWithDay } from "./sinceWithDay";
import { sinceWithDate } from "./sinceWithDate";
import { sinceAndUntil } from "./sinceAndUntil";
import { blocks, specialDates } from "../stubs";
import { SpecialDate } from "../types";
import { untilWithDay } from "./untilWithDay";
import { untilWithDate } from "./untilWithDate";

const matchReservesWithSpecialDatesDiscount = (
  from: Date,
  to: Date,
  blocksWithDate: any
) => {
  blocksWithDate.map((item) => {
    const { weekDay } = item;
    let date = zonedTimeToUtc(item.date, "America/Santiago");

    for (const specialDate of specialDates) {
      const { since, until, name, discount }: SpecialDate = specialDate;

      let {
        year: sinceYear,
        month: sinceMonth,
        day: sinceDay,
        date: sinceDate,
      } = since;
      let {
        year: untilYear,
        month: untilMonth,
        day: untilDay,
        date: untilDate,
      } = until;

      const untilValues = Object.values(until);
      const sinceValues = Object.values(since);

      if (untilValues.length > 0 && sinceValues.length === 0) {
        if (untilDay >= 0 && untilDay <= 6) {
          untilWithDay(new Date(date), until);
        } else if (untilDate >= 1 && untilDate <= 31) {
          untilWithDate(new Date(date), until);
        }
      } else if (sinceValues.length > 0 && untilValues.length === 0) {
        if (sinceDay >= 0 && sinceDay <= 6) {
          sinceWithDay(new Date(date), since);
        } else if (sinceDate >= 1 && sinceDate <= 31) {
          sinceWithDate(new Date(date), since);
        }
      } else if (sinceValues.length > 0 && untilValues.length > 0) {
        sinceAndUntil(from, to, since, until, date);
      }
    }
  });
};

export { matchReservesWithSpecialDatesDiscount };
