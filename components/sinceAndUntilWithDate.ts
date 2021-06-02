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

  if (result) {
    console.log(
      `La fecha ${format(date, "yyyy-MM-dd")} está en el rango entre ${format(
        sinceDate,
        "yyyy-MM-dd"
      )} y ${format(untilDate, "yyyy-MM-dd")}`
    );
  } else {
    console.log(
      `La fecha ${format(
        date,
        "yyyy-MM-dd"
      )} no está en el rango entre ${format(
        sinceDate,
        "yyyy-MM-dd"
      )} y ${format(untilDate, "yyyy-MM-dd")}`
    );
  }
};

export { sinceAndUntilWithDate };
