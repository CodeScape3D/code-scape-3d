import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { BusquedaLinealCode } from '../algorithms';
import { SvgIconDropdown, svgAlgo } from '../../../assets/svg/SvgConstans';
import { useTranslation } from 'react-i18next';

// Componente de código para renderizar
const BusquedaLinealCodeComponent = ({ codeRef }) => {
  const code = BusquedaLinealCode();
  const lines = code.split('\n');

  return (
    <pre
      ref={codeRef}
      className="text-xs sm:text-sm overflow-x-auto max-h-48 sm:max-h-64"
    >
      {lines.map((line, index) => (
        <div
          key={index}
          className="hover:bg-gray-600 px-1 transition-colors duration-200"
        >
          <code className="text-white">{line}</code>
        </div>
      ))}
    </pre>
  );
};

export const LinearSearchCode = () => {
  const codeRef = useRef(null);
  const [prevCurrentLine, setPrevCurrentLine] = useState(null);
  const { history, stepHistory } = useSelector(state => state.linearSearch);
  const [infoVisible, setInfoVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Si no hay historial o estamos en -1, limpiar
    if (history === -1 || !stepHistory || stepHistory.length === 0) {
      if (
        prevCurrentLine !== null &&
        codeRef.current?.childNodes[prevCurrentLine]
      ) {
        codeRef.current.childNodes[prevCurrentLine].classList.remove(
          'bg-secondary'
        );
      }
      setPrevCurrentLine(null);
      return;
    }

    // Obtener el paso actual
    const currentStep = stepHistory[history];
    if (!currentStep || currentStep.currentLine === undefined) return;

    const currentLine = currentStep.currentLine;
    const currentElement = codeRef.current?.childNodes[currentLine];
    const prevElement =
      prevCurrentLine !== null
        ? codeRef.current?.childNodes[prevCurrentLine]
        : null;

    // Quitar highlight de línea anterior
    if (prevElement && prevCurrentLine !== currentLine) {
      prevElement.classList.remove('bg-secondary');
    }

    // Agregar highlight a línea actual
    if (currentElement && currentLine !== prevCurrentLine) {
      currentElement.classList.add('bg-secondary');
    }

    setPrevCurrentLine(currentLine);
  }, [history, stepHistory, prevCurrentLine]);

  return (
    <div className="w-full md:w-80 mx-auto px-2 md:px-0 md:mr-4 md:mb-4">
      {/* Header del panel de código */}
      <div className="bg-gray-900 text-white font-bold py-2 px-4 flex justify-between items-center rounded-t border-b border-gray-700">
        <div className="flex items-center">
          {svgAlgo}
          <span className="ml-2">{t('algorithm') || 'Algoritmo'}</span>
        </div>
        <button
          className="inline-flex items-center ml-2 px-3 py-1 bg-primary text-white rounded-lg cursor-pointer hover:bg-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary"
          onClick={() => setInfoVisible(!infoVisible)}
          aria-label={
            infoVisible ? 'Ocultar información' : 'Mostrar información'
          }
        >
          <span>{infoVisible ? 'Ocultar' : 'Explicación'}</span>
          <SvgIconDropdown isOpen={infoVisible} className="ml-1" />
        </button>
      </div>

      {/* Contenido del código */}
      <div
        className="bg-primary text-white text-xs p-2 rounded-b overflow-auto"
        style={{ maxHeight: '400px' }}
      >
        <div className="font-mono">
          <BusquedaLinealCodeComponent codeRef={codeRef} />
        </div>
      </div>

      {/* Panel de información */}
      {infoVisible && (
        <div className="bg-gray-900 text-white p-3 sm:p-4 rounded shadow-lg border border-gray-700 mt-2">
          <ul
            className="list-disc list-inside text-sm space-y-2 overflow-y-auto"
            style={{ maxHeight: '150px' }}
          >
            <li>
              <span className="font-semibold text-cyan-300">Definición:</span>
              <span className="ml-1">
                Algoritmo de búsqueda secuencial que recorre el array elemento
                por elemento
              </span>
            </li>
            <li>
              <span className="font-semibold text-cyan-300">Complejidad:</span>
              <ul className="ml-4 mt-1 space-y-1">
                <li>
                  <span className="text-green-300">Tiempo:</span> O(n) - Lineal
                </li>
                <li>
                  <span className="text-yellow-300">Espacio:</span> O(1) -
                  Constante
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-green-300">Ventajas:</span>
              <ul className="ml-4 mt-1 space-y-1">
                <li>Funciona en arrays desordenados</li>
                <li>Simple de implementar</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-red-300">Desventajas:</span>
              <ul className="ml-4 mt-1 space-y-1">
                <li>Lento para arrays grandes</li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LinearSearchCode;
