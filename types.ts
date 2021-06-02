export interface DatesRange {
  date: string;
  dayEnglish: string;
  daySpanish: string;
}

export enum DaysEnglish {
  SUNDAY = "SUNDAY",
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
}

export enum DaysSpanish {
  DOMINGO = "DOMINGO",
  LUNES = "LUNES",
  MARTES = "MARTES",
  MIERCOLES = "MIÉRCOLES",
  JUEVES = "JUEVES",
  VIERNES = "VIERNES",
  SABADO = "SÁBADO",
}

export interface WeekDayDictionary {
  english: string;
  spanish: string;
}

export interface SpecialDateParams {
  day: number;
  year: number;
  month: number;
  date: number;
  hours: number;
  minutes: number;
}

export interface SpecialDate {
  since: Partial<SpecialDateParams>;
  until: Partial<SpecialDateParams>;
  discount: {
    surgical: number;
    nonSurgical: number;
  };
  name: string;
}
