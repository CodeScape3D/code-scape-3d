export const newTraceStack = (head, isHead) => {
  return [
    {
      head: head,
      firstSet: [],
      secondSet: [],
      isHead: isHead,
      currentIndex: null,
    }
  ];
};

export const moveInHistoryRecordStack = (
  stepHistory,
  head,
  firstSet = [],
  secondSet = [],
  isHead = -1,
  currentIndex = null,
) => {
  stepHistory.push({
    head: head,
    firstSet: [...firstSet],
    secondSet: [...secondSet],
    isHead: isHead,
    currentIndex: currentIndex,
  });
};