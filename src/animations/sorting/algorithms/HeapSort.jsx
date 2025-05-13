import { useTranslation } from 'react-i18next';
import {
  swap,
  newTrace,
  moveInHistoryRecord,
  lastSorted,
  createRange,
  createKey,
} from './helpers';

export const HeapSort = nums => {
  const stepHistory = newTrace(nums);

  const left = i => 2 * i + 1;
  const right = i => 2 * i + 2;

  const maxHeapify = (array, i, heapsize) => {
    const leftChild = left(i);
    const rightChild = right(i);

    moveInHistoryRecord(
      stepHistory,
      array,
      lastSorted(stepHistory),
      [i, leftChild],
      [],
      [],
      [],
      4
    );

    let largest =
      leftChild < heapsize && array[leftChild] > array[i] ? leftChild : i;

    moveInHistoryRecord(
      stepHistory,
      array,
      lastSorted(stepHistory),
      [largest, rightChild],
      [],
      [],
      [],
      4
    );

    if (rightChild < heapsize && array[rightChild] > array[largest])
      largest = rightChild;

    if (largest !== i) {
      moveInHistoryRecord(
        stepHistory,
        array,
        lastSorted(stepHistory),
        [],
        [i, largest],
        [],
        [],
        4
      );

      swap(array, i, largest);

      moveInHistoryRecord(
        stepHistory,
        array,
        lastSorted(stepHistory),
        [],
        [i, largest],
        [],
        [],
        4
      );

      maxHeapify(array, largest, heapsize);
    }
  };

  const buildMaxHeapify = (array, i, heapsize) => {
    const leftChild = left(i);
    const rightChild = right(i);

    moveInHistoryRecord(
      stepHistory,
      array,
      lastSorted(stepHistory),
      [i, leftChild],
      [],
      [],
      [],
      0
    );

    let largest =
      leftChild < heapsize && array[leftChild] > array[i] ? leftChild : i;

    moveInHistoryRecord(
      stepHistory,
      array,
      lastSorted(stepHistory),
      [largest, rightChild],
      [],
      [],
      [],
      0
    );

    if (rightChild < heapsize && array[rightChild] > array[largest])
      largest = rightChild;

    if (largest !== i) {
      moveInHistoryRecord(
        stepHistory,
        array,
        lastSorted(stepHistory),
        [],
        [i, largest],
        [],
        [],
        0
      );

      swap(array, i, largest);

      moveInHistoryRecord(
        stepHistory,
        array,
        lastSorted(stepHistory),
        [],
        [i, largest],
        [],
        [],
        0
      );

      buildMaxHeapify(array, largest, heapsize);
    }
  };

  const BuildMaxHeap = array => {
    const start = Math.floor(array.length / 2);
    const heapsize = array.length;
    for (let i = start; i >= 0; i--) {
      buildMaxHeapify(array, i, heapsize);
    }

    moveInHistoryRecord(
      stepHistory,
      array,
      lastSorted(stepHistory),
      [],
      [],
      [],
      createRange(0, array.length),
      0
    );
  };

  const heapSort = array => {
    BuildMaxHeap(array);

    moveInHistoryRecord(
      stepHistory,
      array,
      lastSorted(stepHistory),
      [],
      [],
      [],
      createRange(0, array.length),
      1
    );
    let heapsize = array.length;

    moveInHistoryRecord(
      stepHistory,
      array,
      lastSorted(stepHistory),
      [],
      [],
      [],
      [],
      2
    );
    for (let i = array.length - 1; i > 0; i--) {
      moveInHistoryRecord(
        stepHistory,
        array,
        lastSorted(stepHistory),
        [],
        [0, i],
        [],
        [],
        3
      );

      swap(array, 0, i);
      heapsize -= 1;

      moveInHistoryRecord(
        stepHistory,
        array,
        [...lastSorted(stepHistory), i],
        [],
        [0, i],
        [],
        [],
        3
      );

      maxHeapify(array, 0, heapsize);

      moveInHistoryRecord(
        stepHistory,
        array,
        lastSorted(stepHistory),
        [],
        [],
        [],
        createRange(0, heapsize),
        4
      );
    }
    moveInHistoryRecord(stepHistory, array, [...lastSorted(stepHistory), 0]);
  };

  heapSort(nums);
  return stepHistory;
};

export const HeapSortLegend = createKey('Comparing', 'Swapping', null, 'Heap');

export const HeapSortCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`BuildMaxHeap(arr)`}</pre>
      <pre>{`n = length(arr)`}</pre>
      <pre>{`// Extract elements from the heap one by one
for i from n - 1 down to 1:`}</pre>
      <pre>{`	Swap(arr[0], arr[i])`}</pre>
      <pre>{`	MaxHeapify(arr, 0, i)`}</pre>
    </code>
  );
};

export const HeapSortInfo = () => {
  const { t } = useTranslation();

  return (
    <ul className="list-disc list-inside text-sm">
      <li className="mb-2">
        <span className="font-semibold">{t('howWorks')}:</span>{' '}
        {t('heapSortLogic')}
      </li>
      <li className="mb-2">
        <span className="font-semibold">{t('advantages')}:</span>{' '}
        {t('heapSortAdvantages')}
      </li>
      <li className="mb-2">
        <span className="font-semibold">{t('disadvantages')}:</span>{' '}
        {t('heapSortDisadvantages')}
      </li>
      <li className="mb-2">
        <span className="font-semibold">{t('complexity')}:</span>{' '}
        {t('heapSortComplexity')}
      </li>
    </ul>
  );
};
