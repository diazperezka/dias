import { blocks } from "../stubs";
import { DatesRange } from "../types";

const matchReservesWithDates = (datesRange: DatesRange[]) => {
  const blocksWithDate = [];

  for (const dateRange of datesRange) {
    const { date, dayEnglish }: DatesRange = dateRange;

    blocks.forEach((item) => {
      const { weekDay } = item;

      weekDay === dayEnglish && blocksWithDate.push({ ...item, date });
    });
  }

  return blocksWithDate;
};

export { matchReservesWithDates };
