export const newTraceList = (head, isHead) => {
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

export const moveInHistoryRecordList = (
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