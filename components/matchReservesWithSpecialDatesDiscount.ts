import { zonedTimeToUtc } from "date-fns-tz";
import { sinceAndUntil } from "./sinceAndUntil";
import { specialDates } from "../stubs";
import { SpecialDate } from "../types";

const matchReservesWithSpecialDatesDiscount = (
  from: Date,
  to: Date,
  blocksWithDate: any
) => {
  blocksWithDate.map((item) => {
    let date = zonedTimeToUtc(item.date, "America/Santiago");

    for (const specialDate of specialDates) {
      const { since, until }: SpecialDate = specialDate;

      const result = sinceAndUntil(from, to, since, until, date);

      if (result) {
        console.log("[item]", item);
        console.log("\n");
      }
    }
  });
};

export { matchReservesWithSpecialDatesDiscount };
