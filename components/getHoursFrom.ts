const getHoursFrom = (from: number): number => {
  const fromLength = from.toString().length;

  if (fromLength < 4) return Number(from.toString().substr(0, 1));
  else return Number(from.toString().substr(0, 2));
};

export { getHoursFrom };
