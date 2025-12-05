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
} from '../algorithms/DoubleListAlgorithm';
import { SvgIconDropdown, svgAlgo } from '../../../assets/svg/SvgConstans';
import { useTranslation } from 'react-i18next';

export const DoubleListCode = () => {
  const codeRef = useRef(null);
  const [prevCurrentLine, setPrevCurrentLine] = useState(null);
  const { funAction, history, stepHistory } = useSelector(
    state => state.doubleList
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
    <div className="w-full md:w-80 mx-auto px-2 md:px-0 md:mr-4 md:mb-4">
      {/* Header del panel de código */}
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

      {/* Contenido del código */}
      <div
        className="bg-primary text-white text-xs p-2 rounded-b overflow-auto"
        style={{ maxHeight: '400px' }}
      >
        <div className="font-mono">{renderCode(funAction)}</div>
      </div>

      {/* Panel de información */}
      {infoVisible && (
        <div className="bg-gray-900 text-white p-3 sm:p-4 rounded shadow-lg border border-gray-700 mt-2">
          <ul
            className="list-disc list-inside text-sm space-y-2 overflow-y-auto"
            style={{ maxHeight: '150px' }}
          >
            <li>
              <span className="font-semibold text-purple-300">
                {t('definition') || 'Definición'}:
              </span>
              <span className="ml-1">
                Lista doblemente enlazada donde cada nodo tiene punteros al
                siguiente y al anterior
              </span>
            </li>
            <li>
              <span className="font-semibold text-purple-300">Ventajas:</span>
              <ul className="ml-4 mt-1 space-y-1">
                <li>
                  <span className="text-green-300">
                    Navegación bidireccional
                  </span>
                  : Se puede recorrer en ambas direcciones
                </li>
                <li>
                  <span className="text-green-300">Eliminación eficiente</span>:
                  No necesita el nodo anterior
                </li>
                <li>
                  <span className="text-green-300">Inserción flexible</span>:
                  Antes o después de cualquier nodo
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-purple-300">
                Operaciones:
              </span>
              <ul className="ml-4 mt-1 space-y-1">
                <li>
                  <span className="text-green-300">Inserción</span>: Inicio,
                  final o posición
                </li>
                <li>
                  <span className="text-red-300">Eliminación</span>: Inicio,
                  final o posición
                </li>
                <li>
                  <span className="text-yellow-300">Búsqueda</span>: Recorrido
                  bidireccional
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
