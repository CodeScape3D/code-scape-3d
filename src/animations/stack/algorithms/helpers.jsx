export const newTraceStack = head => {
  return [
    {
      head: head,
      firstSet: [],
      secondSet: [],
      isHead: head ? head.getValue() : -1,
      currentIndex: null,
    },
  ];
};

export const moveInHistoryRecordStack = (
  stepHistory,
  head,
  firstSet = [],
  secondSet = [],
  currentIndex = null
) => {
  stepHistory.push({
    head: head,
    firstSet: [...firstSet],
    secondSet: [...secondSet],
    isHead: head ? head.getValue() : -1,
    currentIndex: currentIndex,
  });
};
