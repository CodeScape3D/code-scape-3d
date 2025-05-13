export const formatCountToPercentage = (count, total = 5) => {
  return `${((count / total) * 100).toFixed(2)}%`;
};
