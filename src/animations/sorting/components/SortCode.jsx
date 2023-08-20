import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { BubbleSortCode, InsertionSortCode, QuickSortCode, ShellSortCode } from '../algorithms';

export const SortCode = () => {

  const codeRef = useRef(null);
  const [prevCurrentLine, setPrevCurrentLine] = useState(null);
  const { algorithm, history, stepHistory } = useSelector(state => state.sorts);

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

  const Code = (algorithm) => {
    switch (algorithm) {
      case 'Bubble Sort': return <BubbleSortCode codeRef={codeRef} />
      case 'Quick Sort': return <QuickSortCode codeRef={codeRef} />
      case 'Shell Sort': return <ShellSortCode codeRef={codeRef} />
      case 'Insertion Sort': return <InsertionSortCode codeRef={codeRef} />
      default: null;
    }
  }

  return (
    <div className='w-full md:w-80 mx-auto md:mr-4 md:mb-4'>
      <div className="bg-secondary text-white py-1 px-2">
        Comienza el ordenamiento
      </div>
      <div className="bg-primary text-white text-xs p-2">
        {Code(algorithm)}
      </div>
    </div>
  )
}
