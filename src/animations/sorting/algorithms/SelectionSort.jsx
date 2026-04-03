import { useTranslation } from 'react-i18next';
import {
  swap,
  newTrace,
  moveInHistoryRecord,
  lastSorted,
  createKey,
} from './helpers';

export const SelectionSort = nums => {
  const stepHistory = newTrace(nums);

  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    moveInHistoryRecord(
      stepHistory,
      nums,
      lastSorted(stepHistory),
      [],
      [],
      [],
      [],
      0
    );

    for (let j = i + 1; j < nums.length; j++) {
      moveInHistoryRecord(
        stepHistory,
        nums,
        lastSorted(stepHistory),
        [minIndex, j],
        [],
        [],
        [],
        1
      );

      if (nums[j] < nums[minIndex]) {
        moveInHistoryRecord(
          stepHistory,
          nums,
          lastSorted(stepHistory),
          [minIndex],
          [j],
          [],
          [],
          2
        );
        minIndex = j;
        moveInHistoryRecord(
          stepHistory,
          nums,
          lastSorted(stepHistory),
          [minIndex],
          [j],
          [],
          [],
          2
        );
      }
    }

    moveInHistoryRecord(
      stepHistory,
      nums,
      lastSorted(stepHistory),
      [],
      [i, minIndex],
      [],
      [],
      3
    );

    swap(nums, i, minIndex);

    moveInHistoryRecord(
      stepHistory,
      nums,
      [...lastSorted(stepHistory), i],
      [],
      [],
      [],
      [],
      3
    );
  }

  moveInHistoryRecord(stepHistory, nums, [
    ...lastSorted(stepHistory),
    nums.length - 1,
  ]);

  return stepHistory;
};

export const SelectionSortLegend = createKey('Comparing', 'Swapping');

/*


	  

		  

	swap minimum with first unsorted position
*/

export const SelectionSortCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`public static void selectionSort(int[] arr) {`}</pre>
      <pre>{`    int n = arr.length;`}</pre>
      <pre>{`    for (int i = 0; i < n - 1; i++) {`}</pre>
      <pre>{`        int minIdx = i;`}</pre>
      <pre>{`        for (int j = i + 1; j < n; j++) {`}</pre>
      <pre>{`            if (arr[j] < arr[minIdx]) minIdx = j;`}</pre>
      <pre>{`        }`}</pre>
      <pre>{`        int temp = arr[i];`}</pre>
      <pre>{`        arr[i] = arr[minIdx];`}</pre>
      <pre>{`        arr[minIdx] = temp;`}</pre>
      <pre>{`    }`}</pre>
      <pre>{`}`}</pre>
    </code>
  );
};

export const SelectionSortInfo = () => {
  const { t } = useTranslation();

  return (
    <ul className="list-disc list-inside text-sm">
      <li className="mb-2">
        <span className="font-semibold">{t('howWorks')}:</span>{' '}
        {t('selectionSortLogic')}
      </li>
      <li className="mb-2">
        <span className="font-semibold">{t('advantages')}:</span>{' '}
        {t('selectionSortAdvantages')}
      </li>
      <li className="mb-2">
        <span className="font-semibold">{t('disadvantages')}:</span>{' '}
        {t('selectionSortDisadvantages')}
      </li>
      <li className="mb-2">
        <span className="font-semibold">{t('complexity')}:</span>{' '}
        {t('selectionSortComplexity')}
      </li>
    </ul>
  );
};
