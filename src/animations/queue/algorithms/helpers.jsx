export const newTraceQueue = head => {
  return [
    {
      head: head,
      firstSet: [],
      secondSet: [],
      isHead: head ? head.getValue() : -1,
      currentIndex: null,
      highlightedNode: null,
      pointer: null,
    },
  ];
};

export const moveInHistoryRecordQueue = (
  stepHistory,
  head,
  firstSet = [],
  secondSet = [],
  currentIndex = null,
  highlightedNode = null,
  pointer = null
) => {
  stepHistory.push({
    head: head,
    firstSet: [...firstSet],
    secondSet: [...secondSet],
    isHead: head ? head.getValue() : -1,
    currentIndex: currentIndex,
    highlightedNode: highlightedNode,
    pointer: pointer,
  });
};
