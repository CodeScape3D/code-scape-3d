import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  EnqueueCode,
  DequeueCode,
  EliminarFinalCode,
  InsertarCode,
  ExtraerCode,
} from '../algorithms/QueueAlgorithm';
import { SvgIconDropdown, svgAlgo } from '../../../assets/svg/SvgConstans';
import { useTranslation } from 'react-i18next';

export const QueueCode = () => {
  const codeRef = useRef(null);
  const [prevCurrentLine, setPrevCurrentLine] = useState(null);
  const { funAction, history, stepHistory } = useSelector(state => state.queue);
  const [infoVisible, setInfoVisible] = useState(false);
  const { t } = useTranslation();

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

  useEffect(() => {
    return () => {
      if (codeRef.current && prevCurrentLine !== null) {
        const element = codeRef.current.childNodes[prevCurrentLine];
        if (element) element.classList.remove('bg-secondary');
      }
    };
  }, [prevCurrentLine]);

  const toggleInfoPanel = () => {
    setInfoVisible(!infoVisible);
  };

  const renderCode = funAction => {
    switch (funAction) {
      case 'enqueue':
        return <EnqueueCode codeRef={codeRef} />;
      case 'dequeue':
        return <DequeueCode codeRef={codeRef} />;
      case 'eliminarFinal':
        return <EliminarFinalCode codeRef={codeRef} />;
      case 'insertar':
        return <InsertarCode codeRef={codeRef} />;
      case 'extraer':
        return <ExtraerCode codeRef={codeRef} />;
      default:
        return (
          <div className="text-center p-4">
            <p className="text-gray-300">
              {t('selectOperation') ||
                'Selecciona una operación para ver su algoritmo'}
            </p>
            <p className="mt-2 text-sm text-gray-400">
              {t('availableOperations') ||
                'Enqueue, Dequeue, Eliminar Final, Insertar, Extraer'}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="w-full md:w-80 mx-auto px-2 md:px-0 md:mr-4 md:mb-4">
      <div className="bg-gray-900 text-white font-bold py-2 px-4 flex justify-between items-center rounded-t border-b border-gray-700">
        <div className="flex items-center">
          {svgAlgo}
          <span className="ml-2">{t('algorithm') || 'Algoritmo'}</span>
        </div>

        <div className="flex items-center">
          <button
            className="inline-flex items-center ml-2 px-3 py-1 bg-primary text-white rounded-lg cursor-pointer hover:bg-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary"
            onClick={toggleInfoPanel}
            aria-label={
              infoVisible ? 'Ocultar información' : 'Mostrar información'
            }
          >
            <span>{t('explanation') || 'Explicación'}</span>
            <SvgIconDropdown isOpen={infoVisible} className="ml-1" />
          </button>
        </div>
      </div>

      <div
        className="bg-primary text-white text-xs p-2 rounded-b overflow-auto"
        style={{ maxHeight: '400px' }}
      >
        <div className="font-mono">{renderCode(funAction)}</div>
      </div>

      {infoVisible && (
        <div className="bg-gray-900 text-white p-3 sm:p-4 rounded shadow-lg border border-gray-700 mt-2">
          <ul
            className="list-disc list-inside text-sm space-y-2 overflow-y-auto"
            style={{ maxHeight: '150px' }}
          >
            <li>
              <span className="font-semibold text-blue-300">
                {t('definition') || 'Definición'}:
              </span>
              <span className="ml-1">
                {t('queueDefinition') ||
                  'Una cola es una estructura FIFO (First In, First Out).'}
              </span>
            </li>
            <li>
              <span className="font-semibold text-blue-300">
                {t('principalOperations') || 'Operaciones principales'}:
              </span>
              <ul className="text-sm ml-4 mt-1 space-y-1">
                <li>
                  <span className="font-semibold text-green-300">Enqueue:</span>
                  <span className="ml-1">
                    Añade un elemento al final de la cola
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-red-300">Dequeue:</span>
                  <span className="ml-1">
                    Elimina el elemento del frente de la cola
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-pink-300">
                    Eliminar Final:
                  </span>
                  <span className="ml-1">
                    Elimina el último elemento de la cola
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-purple-300">
                    Insertar:
                  </span>
                  <span className="ml-1">
                    Inserta un elemento en una posición específica
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-orange-300">
                    Extraer:
                  </span>
                  <span className="ml-1">
                    Elimina un elemento en una posición específica
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-blue-300">
                {t('utility') || 'Utilidad'}:
              </span>
              <span className="ml-1">
                {t('queueUsage') ||
                  'Útil para manejar tareas en orden temporal, colas de mensajes y procesos.'}
              </span>
            </li>
            <li>
              <span className="font-semibold text-blue-300">
                {t('implementations') || 'Implementaciones'}:
              </span>
              <span className="ml-1">
                {t('queueImplementations') || 'Arrays, listas enlazadas, etc.'}
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default QueueCode;
