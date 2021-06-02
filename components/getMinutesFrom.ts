const getMinutesFrom = (from: number): number => {
  const fromLength = from.toString().length;

  if (fromLength < 4) return Number(from.toString().substr(1, 2));
  else return Number(from.toString().substr(2, 3));
};

export { getMinutesFrom };
