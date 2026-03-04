import { useTranslation } from 'react-i18next';
import {
  swap,
  newTrace,
  moveInHistoryRecord,
  createRange,
  createKey,
} from './helpers';

export const ShellSort = nums => {
  const stepHistory = newTrace(nums);

  moveInHistoryRecord(stepHistory, nums, [], [], [], [], [], 0);
  for (
    let gap = Math.floor(nums.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let j = gap; j < nums.length; j++) {
      for (let i = j - gap; i >= 0; i -= gap) {
        moveInHistoryRecord(stepHistory, nums, [], [i, i + gap], [], [], [], 1);
        if (nums[i + gap] < nums[i]) {
          moveInHistoryRecord(
            stepHistory,
            nums,
            [],
            [],
            [i, i + gap],
            [],
            [],
            2
          );
          swap(nums, i, i + gap);
          moveInHistoryRecord(
            stepHistory,
            nums,
            [],
            [],
            [i, i + gap],
            [],
            [],
            2
          );
        } else {
          moveInHistoryRecord(stepHistory, nums, [], [], [], [], [], 3);
          break;
        }
      }
    }
  }

  moveInHistoryRecord(stepHistory, nums, createRange(0, nums.length));
  return stepHistory;
};

export const ShellSortLegend = createKey('Comparing', 'Swapping');

export const ShellSortCode = ({ codeRef }) => {
  return (
    <code ref={codeRef}>
      <pre>{`public static void shellSort(int[] arr) {`}</pre>
      <pre>{`    int n = arr.length;`}</pre>
      <pre>{`    for (int gap = n / 2; gap > 0; gap /= 2) {`}</pre>
      <pre>{`        for (int i = gap; i < n; i++) {`}</pre>
      <pre>{`            int temp = arr[i];`}</pre>
      <pre>{`            int j = i;`}</pre>
      <pre>{`            while (j >= gap && arr[j - gap] > temp) {`}</pre>
      <pre>{`                arr[j] = arr[j - gap];`}</pre>
      <pre>{`                j -= gap;`}</pre>
      <pre>{`            }`}</pre>
      <pre>{`            arr[j] = temp;`}</pre>
      <pre>{`        }`}</pre>
      <pre>{`    }`}</pre>
      <pre>{`}`}</pre>
    </code>
  );
};

export const ShellSortInfo = () => {
  const { t } = useTranslation();

  return (
    <ul className="list-disc list-inside text-sm">
      <li className="mb-2">
        <span className="font-semibold">{t('howWorks')}:</span>{' '}
        {t('shellSortLogic')}
      </li>
      <li className="mb-2">
        <span className="font-semibold">{t('advantages')}:</span>{' '}
        {t('shellSortAdvantages')}
      </li>
      <li className="mb-2">
        <span className="font-semibold">{t('disadvantages')}:</span>{' '}
        {t('shellSortDisadvantages')}
      </li>
      <li className="mb-2">
        <span className="font-semibold">{t('complexity')}:</span>{' '}
        {t('shellSortComplexity')}
      </li>
    </ul>
  );
};
