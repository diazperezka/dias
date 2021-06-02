import { getMonth, getYear, getDay } from "date-fns";

const untilWithDay = (date: Date, until: any): void => {
  const {
    year: untilYear,
    month: untilMonth,
    day: untilDay,
    date: untilDate,
  } = until;

  const blockYear = getYear(new Date(date));
  const blockMonth = getMonth(new Date(date));
  const blockDay = getDay(new Date(date));

  if (
    typeof untilYear === "number" &&
    typeof untilMonth !== "number" &&
    typeof untilDay !== "number"
  ) {
    if (blockYear <= untilYear) {
      console.log("[date 1]", date);
      console.log(
        `año ${blockYear} está dentro del rango de until.year ${untilYear}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockYear: ${blockYear} <= untilYear: ${untilYear}`
      );
    }
  } else if (
    typeof untilYear !== "number" &&
    typeof untilMonth === "number" &&
    typeof untilDay !== "number"
  ) {
    if (blockMonth <= untilMonth) {
      console.log("[date 2]", date);
      console.log(
        `mes ${blockMonth} está dentro del rango de until.month ${untilMonth}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockMonth: ${blockMonth} <= untilMonth: ${untilMonth}`
      );
      console.log("\n");
      console.log("\n");
    }
  } else if (
    typeof untilYear !== "number" &&
    typeof untilMonth !== "number" &&
    typeof untilDay === "number"
  ) {
    if (blockDay === untilDay) {
      console.log("[date 3]", date);
      console.log(
        `día ${blockDay} está dentro del rango de until.day ${untilDay}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockDay: ${blockDay} === untilDay: ${untilDay}`
      );
      console.log("\n");
      console.log("\n");
    }
  } else if (
    typeof untilYear === "number" &&
    typeof untilMonth === "number" &&
    typeof untilDay !== "number"
  ) {
    if (blockYear <= untilYear && blockMonth <= untilMonth) {
      console.log("[date 4]", date);
      console.log(
        `año ${blockYear} está dentro del rango de until.year ${untilYear}`
      );
      console.log(
        `mes ${blockMonth} está dentro del rango de until.month ${untilMonth}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockYear: ${blockYear} <= untilYear: ${untilYear}`
      );
      console.log(
        `La fecha ${date} no cumple con el requisito blockMonth: ${blockMonth} <= untilMonth: ${untilMonth}`
      );
      console.log("\n");
      console.log("\n");
    }
  } else if (
    typeof untilYear === "number" &&
    typeof untilMonth !== "number" &&
    typeof untilDay === "number"
  ) {
    if (blockYear <= untilYear && blockDay === untilDay) {
      console.log("[date 5]", date);
      console.log(
        `año ${blockYear} está dentro del rango de until.year ${untilYear}`
      );
      console.log(
        `día ${blockDay} está dentro del rango de until.day ${untilDay}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockYear: ${blockYear} <= untilYear: ${untilYear}`
      );
      console.log(
        `La fecha ${date} no cumple con el requisito blockDay: ${blockDay} === untilDay: ${untilDay}`
      );
      console.log("\n");
      console.log("\n");
    }
  } else if (
    typeof untilYear !== "number" &&
    typeof untilMonth === "number" &&
    typeof untilDay === "number"
  ) {
    if (blockMonth <= untilMonth && blockDay === untilDay) {
      console.log("[date 6]", date);
      console.log(
        `mes ${blockMonth} está dentro del rango de until.month ${untilMonth}`
      );
      console.log(
        `día ${blockDay} está dentro del rango de until.day ${untilDay}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockMonth: ${blockMonth} === untilDay: ${untilDay}`
      );
      console.log("\n");
      console.log("\n");
    }
  } else if (
    typeof untilYear === "number" &&
    typeof untilMonth === "number" &&
    typeof untilDay === "number"
  ) {
    if (
      blockYear <= untilYear &&
      blockMonth <= untilMonth &&
      blockDay === untilDay
    ) {
      console.log("[date 7]", date);
      console.log(
        `año ${blockYear} está dentro del rango de until.year ${untilYear}`
      );
      console.log(
        `mes ${blockMonth} está dentro del rango de until.month ${untilMonth}`
      );
      console.log(
        `día ${blockDay} está dentro del rango de until.day ${untilDay}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockYear: ${blockYear} <= untilYear: ${untilYear}`
      );
      console.log(
        `La fecha ${date} no cumple con el requisito blockMonth: ${blockMonth} <= untilMonth: ${untilMonth}`
      );
      console.log(
        `La fecha ${date} no cumple con el requisito blockDay: ${blockDay} === untilDay: ${untilDay}`
      );
      console.log("\n");
      console.log("\n");
    }
  }
};

export { untilWithDay };
