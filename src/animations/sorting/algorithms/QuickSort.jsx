import { useTranslation } from 'react-i18next';
import {
  swap,
  newTrace,
  moveInHistoryRecord,
  lastSorted,
  createRange,
  createKey,
} from './helpers';

export const QuickSort = nums => {
  const stepHistory = newTrace(nums);

  function choosePivot(array, start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
  }

  function partition(array, start, end) {
    let i = start + 1;
    let j = start + 1;

    moveInHistoryRecord(stepHistory, array, lastSorted(stepHistory), [start]);

    while (j <= end) {
      if (array[j] < array[start]) {
        moveInHistoryRecord(
          stepHistory,
          array,
          lastSorted(stepHistory),
          [start],
          [j],
          [],
          createRange(start + 1, i)
        );

        swap(array, i, j);

        moveInHistoryRecord(
          stepHistory,
          array,
          lastSorted(stepHistory),
          [start],
          [i],
          [],
          createRange(start + 1, i)
        );
        i += 1;
      }
      j += 1;
    }

    moveInHistoryRecord(
      stepHistory,
      array,
      lastSorted(stepHistory),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    );
    swap(array, start, i - 1);

    moveInHistoryRecord(
      stepHistory,
      array,
      lastSorted(stepHistory),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    );
    return i - 1;
  }

  function recursiveQuickSort(array, start, end) {
    if (start >= end) {
      if (start === end) {
        moveInHistoryRecord(stepHistory, array, [
          ...lastSorted(stepHistory),
          start,
        ]);
      }
      return null;
    }

    let pivot = choosePivot(array, start, end);

    moveInHistoryRecord(stepHistory, array, lastSorted(stepHistory), [pivot]);

    swap(array, start, pivot);

    moveInHistoryRecord(stepHistory, array, lastSorted(stepHistory), [pivot]);

    pivot = partition(array, start, end);

    moveInHistoryRecord(stepHistory, array, [
      ...lastSorted(stepHistory),
      pivot,
    ]);

    recursiveQuickSort(array, start, pivot - 1);
    recursiveQuickSort(array, pivot + 1, end);
  }

  recursiveQuickSort(nums, 0, nums.length - 1);

  return stepHistory;
};

export const QuickSortLegend = createKey(
  'Comparing',
  'Swapping',
  null,
  'Strictly less than Pivot'
);

export const QuickSortCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`public static void quickSort(int[] arr, int low, int high) {`}</pre>
      <pre>{`    if (low < high) {`}</pre>
      <pre>{`        int pi = partition(arr, low, high);`}</pre>
      <pre>{`        quickSort(arr, low, pi - 1);`}</pre>
      <pre>{`        quickSort(arr, pi + 1, high);`}</pre>
      <pre>{`    }`}</pre>
      <pre>{`}`}</pre>
    </code>
  );
};

export const QuickSortInfo = () => {
  const { t } = useTranslation();

  return (
    <ul className="list-disc list-inside text-sm">
      <li className="mb-2">
        <span className="font-semibold">{t('howWorks')}:</span>{' '}
        {t('quickSortLogic')}.
      </li>
      <li className="mb-2">
        <span className="font-semibold">{t('advantages')}:</span>{' '}
        {t('quickSortAdvantages')}
      </li>
      <li className="mb-2">
        <span className="font-semibold"> {t('disadvantages')}:</span>{' '}
        {t('quickSortDisadvantages')}
      </li>
      <li className="mb-2">
        <span className="font-semibold"> {t('complexity')}:</span>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-1">
            <span className="font-semibold">{t('worstCase')} :</span>{' '}
            {t('quickSortWorstCase')}
          </li>
          <li className="mb-1">
            <span className="font-semibold"> {t('bestCase')}:</span>{' '}
            {t('quickSortBestCase')}
          </li>
        </ul>
      </li>
    </ul>
  );
};
