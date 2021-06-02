import { getMonth, getYear, getDate } from "date-fns";

const sinceWithDate = (date: Date, since: any): void => {
  const { year: sinceYear, month: sinceMonth, date: sinceDate } = since;

  const blockYear = getYear(new Date(date));
  const blockMonth = getMonth(new Date(date));
  const blockDate = getDate(new Date(date));

  console.log("[sinceYear]", sinceYear);
  console.log("[sinceMonth]", sinceMonth);
  console.log("[sinceDate]", sinceDate);
  console.log("\n");

  if (
    typeof sinceYear === "number" &&
    typeof sinceMonth !== "number" &&
    typeof sinceDate !== "number"
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
    typeof sinceDate !== "number"
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
    typeof sinceDate === "number"
  ) {
    if (blockDate >= sinceDate) {
      console.log("[date 3]", date);
      console.log(
        `día ${blockDate} está dentro del rango de since.day ${sinceDate}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockDay: ${blockDate} >= sinceDate: ${sinceDate}`
      );
      console.log("\n");
      console.log("\n");
    }
  } else if (
    typeof sinceYear === "number" &&
    typeof sinceMonth === "number" &&
    typeof sinceDate !== "number"
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
    typeof sinceDate === "number"
  ) {
    if (blockYear >= sinceYear && blockDate >= sinceDate) {
      console.log("[date 5]", date);
      console.log(
        `año ${blockYear} está dentro del rango de since.year ${sinceYear}`
      );
      console.log(
        `día ${blockDate} está dentro del rango de since.day ${sinceDate}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockYear: ${blockYear} >= sinceYear: ${sinceYear}`
      );
      console.log(
        `La fecha ${date} no cumple con el requisito blockDay: ${blockDate} >= sinceDate: ${sinceDate}`
      );
      console.log("\n");
      console.log("\n");
    }
  } else if (
    typeof sinceYear !== "number" &&
    typeof sinceMonth === "number" &&
    typeof sinceDate === "number"
  ) {
    if (blockMonth >= sinceMonth && blockDate >= sinceDate) {
      console.log("[date 6]", date);
      console.log(
        `mes ${blockMonth} está dentro del rango de since.month ${sinceMonth}`
      );
      console.log(
        `día ${blockDate} está dentro del rango de since.day ${sinceDate}`
      );
      console.log("\n");
    } else {
      console.log(
        `La fecha ${date} no cumple con el requisito blockMonth: ${blockMonth} >= sinceMonth: ${sinceMonth}`
      );
      console.log(
        `La fecha ${date} no cumple con el requisito blockDate: ${blockDate} >= sinceDate: ${sinceDate}`
      );
      console.log("\n");
      console.log("\n");
    }
  } else if (
    typeof sinceYear === "number" &&
    typeof sinceMonth === "number" &&
    typeof sinceDate === "number"
  ) {
    if (
      blockYear >= sinceYear &&
      blockMonth >= sinceMonth &&
      blockDate >= sinceDate
    ) {
      console.log("[date 7]", date);
      console.log(
        `año ${blockYear} está dentro del rango de since.year ${sinceYear}`
      );
      console.log(
        `mes ${blockMonth} está dentro del rango de since.month ${sinceMonth}`
      );
      console.log(
        `día ${blockDate} está dentro del rango de since.day ${sinceDate}`
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
        `La fecha ${date} no cumple con el requisito blockDate: ${blockDate} >= sinceDate: ${sinceDate}`
      );
      console.log("\n");
      console.log("\n");
    }
  }
};

export { sinceWithDate };
