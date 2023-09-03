import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { PopCode, PushCode } from '../algorithms';
import { SvgIconDropdown, svgAlgo } from '../../../assets/svg/SvgConstans';

export const StackCode = () => {

  const codeRef = useRef(null);
  const [prevCurrentLine, setPrevCurrentLine] = useState(null);
  const { funAction, history, stepHistory } = useSelector(state => state.stack);
  const [infoVisible, setInfoVisible] = useState(false);

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

  const toggleInfoPanel = () => {
    setInfoVisible(!infoVisible);
  }

  return (
    <div className='w-full md:w-80 mx-auto md:mr-4 md:mb-4'>
      <div className="relative">
        {/* Panel de información */}
        {infoVisible && (
          <div className="bg-gray-900 text-white p-4 rounded absolute bottom-14 w-full md:w-80" style={{ zIndex: "100" }}>
            <ul className="list-disc list-inside text-sm">
              <li className="mb-2">
                <span className="font-semibold">Definición:</span> Una pila es una estructura de datos lineal que sigue el principio "último en entrar, primero en salir".
              </li>
              <li className="mb-2">
                <span className="font-semibold">Operaciones principales:</span>
                <ul className="text-sm">
                  <li className="mb-1">Push: Agrega un elemento en la parte superior de la pila.</li>
                  <li className="mb-1">Pop: Elimina y devuelve el elemento superior de la pila.</li>
                </ul>
              </li>
              <li className="mb-2">
                <span className="font-semibold">Utilidad:</span> Las pilas son útiles para rastrear operaciones reversibles, y en muchos otros problemas donde se necesita acceso LIFO.
              </li>
              <li className='mb-2'>
                <span className="font-semibold">Implementaciones:</span> Las pilas se pueden implementar utilizando arreglos (arrays) o listas enlazadas, dependiendo de las necesidades y requisitos del problema.
              </li>
            </ul>
          </div>
        )}

        {/* Div header */}
        <div className="bg-gray-900 text-white font-bold py-2 px-4 flex justify-between items-center rounded-t">
          <div className="flex items-center">
            {svgAlgo}
            <span className="ml-2">Algoritmo</span>
          </div>
          <div className="flex items-center">
            <span
              className="inline-flex items-center ml-2 px-3 py-1 bg-primary text-white rounded-lg cursor-pointer hover:bg-secondary transition"
              onClick={toggleInfoPanel}>
              Explicacion
              <SvgIconDropdown isOpen={infoVisible} className="ml-1" />
            </span>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white text-xs p-2 transition-all">
        {Code(funAction)}
      </div>
    </div>
  )
}
