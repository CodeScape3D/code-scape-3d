import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { PopCode, PushCode } from '../algorithms';

export const StackCode = () => {

  const codeRef = useRef(null);
  const [prevCurrentLine, setPrevCurrentLine] = useState(null);
  const { funAction, history, stepHistory } = useSelector(state => state.stack);

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
  }, [history, stepHistory, funAction]);

  const Code = (funAction) => {
    switch (funAction) {
      case 'push': return <PushCode codeRef={codeRef} />
      case 'pop': return <PopCode codeRef={codeRef} />
      default: null;
    }
  }

  return (
    <div className='w-full md:w-80 mx-auto md:mr-4 md:mb-4'>
      <div className="bg-gray-900 text-white font-bold py-1 px-2">
        Algoritmo
      </div>
      <div className="bg-primary text-white text-xs p-2 transition-all">
        {Code(funAction)}
      </div>
    </div>
  )
}
