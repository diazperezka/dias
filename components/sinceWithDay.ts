import { getMonth, getYear, getDay } from "date-fns";

const sinceWithDay = (date: Date, since: any): void => {
  const {
    year: sinceYear,
    month: sinceMonth,
    day: sinceDay,
    date: sinceDate,
  } = since;

  const blockYear = getYear(new Date(date));
  const blockMonth = getMonth(new Date(date));
  const blockDay = getDay(new Date(date));

  console.log("[sinceDay]", sinceDay);

  if (
    typeof sinceYear === "number" &&
    typeof sinceMonth !== "number" &&
    typeof sinceDay !== "number"
  ) {
    if (blockYear >= sinceYear) {
      console.log("[date 1]", date);
      console.log(
        `año ${blockYear} está dentro del rango de since.year ${sinceYear}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockYear: ${blockYear} >= sinceYear: ${sinceYear}`
      );
    }
  } else if (
    typeof sinceYear !== "number" &&
    typeof sinceMonth === "number" &&
    typeof sinceDay !== "number"
  ) {
    if (blockMonth >= sinceMonth) {
      console.log("[date 2]", date);
      console.log(
        `mes ${blockMonth} está dentro del rango de since.month ${sinceMonth}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockMonth: ${blockMonth} >= sinceMonth: ${sinceMonth}`
      );
      console.log("\n");
      console.log("\n");
    }
  } else if (
    typeof sinceYear !== "number" &&
    typeof sinceMonth !== "number" &&
    typeof sinceDay === "number"
  ) {
    if (blockDay === sinceDay) {
      console.log("[date 3]", date);
      console.log(
        `día ${blockDay} está dentro del rango de since.day ${sinceDay}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockDay: ${blockDay} === sinceDay: ${sinceDay}`
      );
      console.log("\n");
      console.log("\n");
    }
  } else if (
    typeof sinceYear === "number" &&
    typeof sinceMonth === "number" &&
    typeof sinceDay !== "number"
  ) {
    if (blockYear >= sinceYear && blockMonth >= sinceMonth) {
      console.log("[date 4]", date);
      console.log(
        `año ${blockYear} está dentro del rango de since.year ${sinceYear}`
      );
      console.log(
        `mes ${blockMonth} está dentro del rango de since.month ${sinceMonth}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockYear: ${blockYear} >= sinceYear: ${sinceYear}`
      );
      console.log(
        `La fecha ${date} no cumple con el requisito blockMonth: ${blockMonth} >= sinceMonth: ${sinceMonth}`
      );
      console.log("\n");
      console.log("\n");
    }
  } else if (
    typeof sinceYear === "number" &&
    typeof sinceMonth !== "number" &&
    typeof sinceDay === "number"
  ) {
    if (blockYear >= sinceYear && blockDay === sinceDay) {
      console.log("[date 5]", date);
      console.log(
        `año ${blockYear} está dentro del rango de since.year ${sinceYear}`
      );
      console.log(
        `día ${blockDay} está dentro del rango de since.day ${sinceDay}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockYear: ${blockYear} >= sinceYear: ${sinceYear}`
      );
      console.log(
        `La fecha ${date} no cumple con el requisito blockDay: ${blockDay} === sinceDay: ${sinceDay}`
      );
      console.log("\n");
      console.log("\n");
    }
  } else if (
    typeof sinceYear !== "number" &&
    typeof sinceMonth === "number" &&
    typeof sinceDay === "number"
  ) {
    if (blockMonth >= sinceMonth && blockDay === sinceDay) {
      console.log("[date 6]", date);
      console.log(
        `mes ${blockMonth} está dentro del rango de since.month ${sinceMonth}`
      );
      console.log(
        `día ${blockDay} está dentro del rango de since.day ${sinceDay}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockMonth: ${blockMonth} >= sinceMonth: ${sinceMonth}`
      );
      console.log(
        `La fecha ${date} no cumple con el requisito blockDay: ${blockDay} === sinceDay: ${sinceDay}`
      );
      console.log("\n");
      console.log("\n");
    }
  } else if (
    typeof sinceYear === "number" &&
    typeof sinceMonth === "number" &&
    typeof sinceDay === "number"
  ) {
    if (
      blockYear >= sinceYear &&
      blockMonth >= sinceMonth &&
      blockDay === sinceDay
    ) {
      console.log("[date 7]", date);
      console.log(
        `año ${blockYear} está dentro del rango de since.year ${sinceYear}`
      );
      console.log(
        `mes ${blockMonth} está dentro del rango de since.month ${sinceMonth}`
      );
      console.log(
        `día ${blockDay} está dentro del rango de since.day ${sinceDay}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockYear: ${blockYear} >= sinceYear: ${sinceYear}`
      );
      console.log(
        `La fecha ${date} no cumple con el requisito blockMonth: ${blockMonth} >= sinceMonth: ${sinceMonth}`
      );
      console.log(
        `La fecha ${date} no cumple con el requisito blockDay: ${blockDay} === sinceDay: ${sinceDay}`
      );
      console.log("\n");
      console.log("\n");
    }
  }
};

export { sinceWithDay };
