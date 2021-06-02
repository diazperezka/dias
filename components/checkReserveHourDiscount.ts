import { getHoursFrom } from "./getHoursFrom";
import { getMinutesFrom } from "./getMinutesFrom";

const checkReserveHourDiscount = (reservePeriod: string): boolean => {
  interface SpecialDateParams {
    day: number;
    year: number;
    month: number;
    date: number;
    hours: number;
    minutes: number;
  }

  const periods = [
    {
      configuration: [
        {
          name: "M1",
          from: 830,
          to: 1030,
        },
        {
          name: "M2",
          from: 1100,
          to: 1300,
        },
        {
          name: "T1",
          from: 1400,
          to: 1630,
        },
        {
          name: "T2",
          from: 1700,
          to: 2000,
        },
      ],
    },
  ];

  const dbPeriod = periods[0].configuration.find(
    (configuration) => configuration.name === reservePeriod
  );

  const { from } = dbPeriod;
  const hoursFrom = getHoursFrom(from);
  const minutesFrom = getMinutesFrom(from);

  const since: Partial<SpecialDateParams> = { hours: 14 };
  const until: Partial<SpecialDateParams> = {};

  const hoursSince = since.hours ? String(since.hours) : "00";
  const minutesSince = since.minutes ? String(since.minutes) : "00";
  const hoursUntil = until.hours ? String(until.hours) : "23";
  const minutesUntil = until.minutes ? String(until.minutes) : "00";

  if (
    Number(hoursFrom) >= Number(hoursSince) &&
    Number(hoursFrom) <= Number(hoursUntil)
  ) {
    if (
      Number(minutesFrom) >= Number(minutesSince) &&
      Number(minutesFrom) <= Number(minutesUntil)
    ) {
      return true;
    }
  } else {
    return false;
  }
};

export { checkReserveHourDiscount };
