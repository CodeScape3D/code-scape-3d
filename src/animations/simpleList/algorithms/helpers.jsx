export const newTraceSimpleList = head => {
  return [
    {
      head: head,
      firstSet: [],
      secondSet: [],
      thirdSet: [],
      isHead: head ? head.getValue() : -1,
      currentIndex: null,
      highlightedNode: null,
      pointer: null,
    },
  ];
};

export const moveInHistoryRecordSimpleList = (
  stepHistory,
  head,
  firstSet = [],
  secondSet = [],
  thirdSet = [],
  currentIndex = null,
  highlightedNode = null,
  pointer = null
) => {
  stepHistory.push({
    head: head,
    firstSet: [...firstSet],
    secondSet: [...secondSet],
    thirdSet: [...thirdSet],
    isHead: head ? head.getValue() : -1,
    currentIndex: currentIndex,
    highlightedNode: highlightedNode,
    pointer: pointer,
  });
};
