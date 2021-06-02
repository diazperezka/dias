import {
  getDay,
  getYear,
  getMonth,
  getDate,
  getHours,
  getMinutes,
  getDaysInMonth,
  setMonth,
} from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";
import { DaysEnglish, DaysSpanish, WeekDayDictionary } from "./types";

const daysDictionary: WeekDayDictionary[] = [
  {
    english: DaysEnglish.SUNDAY,
    spanish: DaysSpanish.DOMINGO,
  },
  {
    english: DaysEnglish.MONDAY,
    spanish: DaysSpanish.LUNES,
  },
  {
    english: DaysEnglish.TUESDAY,
    spanish: DaysSpanish.MARTES,
  },
  {
    english: DaysEnglish.WEDNESDAY,
    spanish: DaysSpanish.MIERCOLES,
  },
  {
    english: DaysEnglish.THURSDAY,
    spanish: DaysSpanish.JUEVES,
  },
  {
    english: DaysEnglish.FRIDAY,
    spanish: DaysSpanish.VIERNES,
  },
  {
    english: DaysEnglish.SATURDAY,
    spanish: DaysSpanish.SABADO,
  },
];

export interface GetSpecialDateResponse {
  english: string;
  spanish: string;
}

export const getDayOfWeek = (date: Date): GetSpecialDateResponse => {
  const days = Object.values(DaysEnglish);
  const weekDayNumber = getDay(date);
  const weekDayEnglish = days[weekDayNumber];
  const { english, spanish } = daysDictionary.find(
    (item: WeekDayDictionary) => item.english === weekDayEnglish
  );

  return {
    english,
    spanish,
  };
};

export const getWeekDay = (weekDayNumber: number): string => {
  const days = Object.values(DaysEnglish);

  return days[weekDayNumber];
};

export const buildSinceDate = (from: Date, since: any): Date => {
  from = zonedTimeToUtc(from, "America/Santiago");
  let year = getYear(from);
  let month = getMonth(from) + 1;
  let dateDay = getDate(from);
  let hours = getHours(from);
  let minutes = getMinutes(from);

  from = Number(since.month) ? setMonth(from, since.month + 1) : from;

  if (since.hasOwnProperty("year")) year = since.year;
  if (since.hasOwnProperty("month")) month = since.month + 1;

  if (since.hasOwnProperty("day")) dateDay = 1;
  else if (since.hasOwnProperty("date")) dateDay = since.date;

  if (since.hasOwnProperty("hours")) hours = since.hours;
  if (since.hasOwnProperty("minutes")) minutes = since.minutes;

  return new Date(`${year}-${month}-${dateDay}`);
};

export const buildUntilDate = (to: Date, until: any): Date => {
  to = Number(until.month) ? setMonth(to, until.month + 1) : to;

  let year = until.hasOwnProperty("year") ? until.year : getYear(to);
  let month = until.hasOwnProperty("month")
    ? until.month + 1
    : getMonth(to) + 1;
  let dateDay = getDate(to);
  let hours = until.hasOwnProperty("hours") ? until.hours : getHours(to);
  let minutes = until.hasOwnProperty("minutes")
    ? until.minutes
    : getMinutes(to);

  if (until.hasOwnProperty("day")) dateDay = getDaysInMonth(to);
  else if (until.hasOwnProperty("date")) dateDay = until.date;

  return new Date(`${year}-${month}-${dateDay}`);
};
