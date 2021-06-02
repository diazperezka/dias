import { isWithinInterval, getDay, format } from "date-fns";

const sinceAndUntilWithDay = (
  sinceDate: Date,
  untilDate: Date,
  date: Date,
  sinceDay: number,
  untilDay: number
) => {
  console.log("[date]", date);
  console.log("[sinceDay]", sinceDay);
  console.log("[untilDay]", untilDay);
  console.log("\n");
  const result = isWithinInterval(date, { start: sinceDate, end: untilDate });

  const min = Math.min(sinceDay, untilDay);
  const max = Math.max(sinceDay, untilDay);

  if (result) {
    const dateDay = getDay(date);

    if (dateDay >= min && dateDay <= max) {
      console.log(
        `La fecha ${format(
          date,
          "yyyy-MM-dd"
        )}, día ${dateDay}, está en el rango entre ${min} y ${max}`
      );
    } else {
      console.log(
        `La fecha ${format(
          date,
          "yyyy-MM-dd"
        )}, día ${dateDay}, no está en el rango entre ${min} y ${max}`
      );
    }
  }
};

export { sinceAndUntilWithDay };
