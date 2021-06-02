import { DaysEnglish, SpecialDate } from "./types";

export const blocks = [
  {
    to: null,
    deletedAt: null,
    _id: {
      $oid: "5f770f9da563c40008fa08b6",
    },
    box: {
      $oid: "5f76643670c9b14f67f895c4",
    },
    period: "T1",
    status: "CONFIRMED",
    weekDay: "TUESDAY",
    clcReserveId: "117412",
  },
  {
    to: null,
    deletedAt: null,
    _id: {
      $oid: "5f770f9da563c40008fa08b7",
    },
    box: {
      $oid: "5f76643670c9b14f67f895c4",
    },
    period: "T2",
    status: "CONFIRMED",
    weekDay: "TUESDAY",
    clcReserveId: "119391",
  },
  {
    to: null,
    deletedAt: null,
    _id: {
      $oid: "5f770f9da563c40008fa08b8",
    },
    box: {
      $oid: "5f76643670c9b14f67f895c4",
    },
    period: "M1",
    status: "CONFIRMED",
    weekDay: "WEDNESDAY",
    clcReserveId: "116737",
  },
  {
    to: null,
    deletedAt: null,
    _id: {
      $oid: "5f770f9da563c40008fa08b9",
    },
    box: {
      $oid: "5f76643670c9b14f67f895c4",
    },
    period: "M2",
    status: "CONFIRMED",
    weekDay: "WEDNESDAY",
    clcReserveId: "116737",
  },
  {
    to: null,
    deletedAt: null,
    _id: {
      $oid: "5f770f9da563c40008fa08ba",
    },
    box: {
      $oid: "5f76643670c9b14f67f895c4",
    },
    period: "T1",
    status: "CONFIRMED",
    weekDay: "THURSDAY",
    clcReserveId: "116450",
  },
  {
    to: null,
    deletedAt: null,
    _id: {
      $oid: "5f770f9da563c40008fa08bb",
    },
    box: {
      $oid: "5f76643670c9b14f67f895c4",
    },
    period: "T2",
    status: "CONFIRMED",
    weekDay: "THURSDAY",
    clcReserveId: "119396",
  },
  {
    to: null,
    deletedAt: null,
    _id: {
      $oid: "5f770f9da563c40008fa08bc",
    },
    box: {
      $oid: "5f76643670c9b14f67f895c4",
    },
    period: "T1",
    status: "CONFIRMED",
    weekDay: "FRIDAY",
    clcReserveId: "116451",
  },
  {
    to: null,
    deletedAt: null,
    _id: {
      $oid: "5f770f9da563c40008fa08bd",
    },
    box: {
      $oid: "5f76643670c9b14f67f895c4",
    },
    period: "T2",
    status: "CONFIRMED",
    weekDay: "FRIDAY",
    clcReserveId: "119398",
  },
];

export const specialDates: SpecialDate[] = [
  {
    since: {
      date: 7,
      month: 6,
    },
    until: {},
    name: DaysEnglish.FRIDAY,
    discount: {
      surgical: 0.25,
      nonSurgical: 0.25,
    },
  },
];
