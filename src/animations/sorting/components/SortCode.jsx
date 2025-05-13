import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BubbleSortCode,
  BubbleSortInfo,
  HeapSortCode,
  HeapSortInfo,
  InsertionSortCode,
  InsertionSortInfo,
  QuickSortCode,
  QuickSortInfo,
  SelectionSortCode,
  SelectionSortInfo,
  ShellSortCode,
  ShellSortInfo,
} from '../algorithms';
import { SvgIconDropdown, svgAlgo } from '../../../assets/svg/SvgConstans';
import { useTranslation } from 'react-i18next';

export const SortCode = () => {
  const codeRef = useRef(null);
  const [prevCurrentLine, setPrevCurrentLine] = useState(null);
  const { algorithm, history, stepHistory } = useSelector(state => state.sorts);
  const [infoVisible, setInfoVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (history === -1 || history >= stepHistory.length) return;
    const currentLine = stepHistory[history].currentIndex;

    const currentElement = codeRef.current.childNodes[currentLine];
    const prevElement = codeRef.current.childNodes[prevCurrentLine];

    if (prevElement) {
      prevElement.classList.remove('bg-secondary');
    }

    if (currentElement) {
      currentElement.classList.add('bg-secondary');
    }

    setPrevCurrentLine(currentLine);
  }, [history, stepHistory, algorithm]);

  const Code = algorithm => {
    switch (algorithm) {
      case 'Bubble Sort':
        return <BubbleSortCode codeRef={codeRef} />;
      case 'Quick Sort':
        return <QuickSortCode codeRef={codeRef} />;
      case 'Shell Sort':
        return <ShellSortCode codeRef={codeRef} />;
      case 'Insertion Sort':
        return <InsertionSortCode codeRef={codeRef} />;
      case 'Selection Sort':
        return <SelectionSortCode codeRef={codeRef} />;
      case 'Heap Sort':
        return <HeapSortCode codeRef={codeRef} />;

      default:
        null;
    }
  };

  const Info = algorithm => {
    switch (algorithm) {
      case 'Bubble Sort':
        return <BubbleSortInfo />;
      case 'Quick Sort':
        return <QuickSortInfo />;
      case 'Shell Sort':
        return <ShellSortInfo />;
      case 'Insertion Sort':
        return <InsertionSortInfo />;
      case 'Selection Sort':
        return <SelectionSortInfo />;
      case 'Heap Sort':
        return <HeapSortInfo />;
      default:
        null;
    }
  };

  const toggleInfoPanel = () => {
    setInfoVisible(!infoVisible);
  };

  return (
    <div className="w-full md:w-80 mx-auto md:mr-4 md:mb-4">
      <div className="relative">
        {/* Panel de información */}
        {infoVisible && (
          <div
            className="bg-gray-900 text-white p-4 rounded absolute bottom-14 w-full md:w-80"
            style={{ zIndex: '100' }}
          >
            {Info(algorithm)}
          </div>
        )}

        {/* Div header */}
        <div className="bg-gray-900 text-white font-bold py-2 px-4 flex justify-between items-center rounded-t">
          <div className="flex items-center">
            {svgAlgo}
            <span className="ml-2"> {t('algorithm')} </span>
          </div>
          <div className="flex items-center">
            <span
              className="inline-flex items-center ml-2 px-3 py-1 bg-primary text-white rounded-lg cursor-pointer hover:bg-secondary transition"
              onClick={toggleInfoPanel}
            >
              {t('explanation')}
              <SvgIconDropdown isOpen={infoVisible} className="ml-1" />
            </span>
          </div>
        </div>
      </div>

      {/* Div del algoritmo */}
      <div className="bg-primary text-white text-xs p-2">{Code(algorithm)}</div>
    </div>
  );
};
