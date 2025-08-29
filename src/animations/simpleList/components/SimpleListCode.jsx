import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  InsertarAlInicioCode,
  InsertarAlFinalCode,
  InsertarEnPosicionCode,
  EliminarDelInicioCode,
  EliminarDelFinalCode,
  EliminarEnPosicionCode,
  BuscarCode,
} from '../algorithms/SimpleListAlgorithm';
import { SvgIconDropdown, svgAlgo } from '../../../assets/svg/SvgConstans';
import { useTranslation } from 'react-i18next';

export const SimpleListCode = () => {
  const codeRef = useRef(null);
  const [prevCurrentLine, setPrevCurrentLine] = useState(null);
  const { funAction, history, stepHistory } = useSelector(
    state => state.simpleList
  );
  const [infoVisible, setInfoVisible] = useState(false);
  const { t } = useTranslation();

  // Efecto para resaltar línea de código actual
  useEffect(() => {
    if (history === -1 || !stepHistory || history >= stepHistory.length) {
      if (
        prevCurrentLine !== null &&
        codeRef.current?.childNodes[prevCurrentLine]
      ) {
        codeRef.current.childNodes[prevCurrentLine].classList.remove(
          'bg-secondary'
        );
        setPrevCurrentLine(null);
      }
      return;
    }

    const currentStep = stepHistory[history];
    if (!currentStep) return;

    const currentLine = currentStep.currentIndex;
    const currentElement = codeRef.current?.childNodes[currentLine];
    const prevElement =
      prevCurrentLine !== null
        ? codeRef.current?.childNodes[prevCurrentLine]
        : null;

    if (prevElement && prevCurrentLine !== currentLine) {
      prevElement.classList.remove('bg-secondary');
    }

    if (currentElement && currentLine !== prevCurrentLine) {
      currentElement.classList.add('bg-secondary');
    }

    setPrevCurrentLine(currentLine);
  }, [history, stepHistory, funAction, prevCurrentLine]);

  // Renderizar código según la operación
  const renderCode = funAction => {
    switch (funAction) {
      case 'insertarAlInicio':
        return <InsertarAlInicioCode codeRef={codeRef} />;
      case 'insertarAlFinal':
        return <InsertarAlFinalCode codeRef={codeRef} />;
      case 'insertarEnPosicion':
        return <InsertarEnPosicionCode codeRef={codeRef} />;
      case 'eliminarDelInicio':
        return <EliminarDelInicioCode codeRef={codeRef} />;
      case 'eliminarDelFinal':
        return <EliminarDelFinalCode codeRef={codeRef} />;
      case 'eliminarEnPosicion':
        return <EliminarEnPosicionCode codeRef={codeRef} />;
      case 'buscar':
        return <BuscarCode codeRef={codeRef} />;
      default:
        return (
          <div className="text-center p-4">
            <p className="text-gray-300">
              {t('selectOperation') ||
                'Selecciona una operación para ver su algoritmo'}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="w-full md:w-80 mx-auto md:mr-4 md:mb-4">
      <div className="relative">
        {infoVisible && (
          <div className="bg-gray-900 text-white p-4 rounded absolute bottom-14 w-full md:w-80 shadow-lg border border-gray-700 z-100">
            <div className="max-h-96 overflow-y-auto">
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>
                  <span className="font-semibold text-blue-300">
                    {t('definition') || 'Definición'}:
                  </span>
                  <span className="ml-1">
                    Estructura lineal donde cada nodo contiene datos y un
                    puntero al siguiente nodo
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-blue-300">
                    Operaciones:
                  </span>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>
                      <span className="text-green-300">Inserción</span>: Al
                      inicio, final o posición específica
                    </li>
                    <li>
                      <span className="text-red-300">Eliminación</span>: Del
                      inicio, final o posición específica
                    </li>
                    <li>
                      <span className="text-yellow-300">Búsqueda</span>:
                      Recorrido secuencial
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        )}

        <div className="bg-gray-900 text-white font-bold py-2 px-4 flex justify-between items-center rounded-t border-b border-gray-700">
          <div className="flex items-center">
            {svgAlgo}
            <span className="ml-2">{t('algorithm') || 'Algoritmo'}</span>
          </div>
          <button
            className="inline-flex items-center px-3 py-1 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setInfoVisible(!infoVisible)}
          >
            <span>{t('explanation') || 'Explicación'}</span>
            <SvgIconDropdown isOpen={infoVisible} className="ml-1" />
          </button>
        </div>
      </div>

      <div className="bg-primary text-white text-xs p-2 rounded-b overflow-auto max-h-400">
        <div className="font-mono">{renderCode(funAction)}</div>
      </div>
    </div>
  );
};
