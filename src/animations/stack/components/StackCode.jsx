import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  PopCode,
  PushCode,
  SumergirCode,
  InsertarCode,
  ExtraerCode,
} from '../algorithms';
import { SvgIconDropdown, svgAlgo } from '../../../assets/svg/SvgConstans';
import { useTranslation } from 'react-i18next';

export const StackCode = () => {
  const codeRef = useRef(null);
  const [prevCurrentLine, setPrevCurrentLine] = useState(null);
  const { funAction, history, stepHistory } = useSelector(state => state.stack);
  const [infoVisible, setInfoVisible] = useState(false);
  const { t } = useTranslation();

  // Efecto para actualizar la línea destacada en el código
  useEffect(() => {
    // Validar que tenemos elementos válidos
    if (history === -1 || !stepHistory || history >= stepHistory.length) {
      // Limpiar cualquier línea previamente destacada
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

    // Obtener elementos del DOM
    const currentElement = codeRef.current?.childNodes[currentLine];
    const prevElement =
      prevCurrentLine !== null
        ? codeRef.current?.childNodes[prevCurrentLine]
        : null;

    // Remover clase de la línea anterior si existe
    if (prevElement && prevCurrentLine !== currentLine) {
      prevElement.classList.remove('bg-secondary');
    }

    // Añadir clase a la línea actual si existe y es diferente a la anterior
    if (currentElement && currentLine !== prevCurrentLine) {
      currentElement.classList.add('bg-secondary');
    }

    // Actualizar la línea anterior
    setPrevCurrentLine(currentLine);
  }, [history, stepHistory, funAction, prevCurrentLine]);

  // Función para renderizar el código específico de cada operación
  const renderCode = funAction => {
    switch (funAction) {
      case 'push':
        return <PushCode codeRef={codeRef} />;
      case 'pop':
        return <PopCode codeRef={codeRef} />;
      case 'sumergir':
        return <SumergirCode codeRef={codeRef} />;
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
                'Push, Pop, Insertar, Extraer o Sumergir'}
            </p>
          </div>
        );
    }
  };

  // Función para alternar la visibilidad del panel de información
  const toggleInfoPanel = () => {
    setInfoVisible(!infoVisible);
  };

  // Limpiar las clases CSS cuando el componente se desmonta
  useEffect(() => {
    return () => {
      if (codeRef.current && prevCurrentLine !== null) {
        const element = codeRef.current.childNodes[prevCurrentLine];
        if (element) {
          element.classList.remove('bg-secondary');
        }
      }
    };
  }, [prevCurrentLine]);

  return (
    <div className="w-full md:w-80 mx-auto md:mr-4 md:mb-4">
      <div className="relative">
        {/* Panel de información */}
        {infoVisible && (
          <div
            className="bg-gray-900 text-white p-4 rounded absolute bottom-14 w-full md:w-80 shadow-lg border border-gray-700"
            style={{ zIndex: '100' }}
          >
            <div className="max-h-96 overflow-y-auto">
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>
                  <span className="font-semibold text-blue-300">
                    {t('definition') || 'Definición'}:
                  </span>
                  <span className="ml-1">
                    {t('stackDefinition') ||
                      'Una pila es una estructura de datos LIFO (Last In, First Out)'}
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-blue-300">
                    {t('principalOperations') || 'Operaciones principales'}:
                  </span>
                  <ul className="text-sm ml-4 mt-1 space-y-1">
                    <li>
                      <span className="font-semibold text-green-300">
                        Push:
                      </span>
                      <span className="ml-1">
                        {t('pushExplanation') ||
                          'Añade un elemento al tope de la pila'}
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-red-300">Pop:</span>
                      <span className="ml-1">
                        {t('popExplanation') ||
                          'Elimina el elemento del tope de la pila'}
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-yellow-300">
                        Sumergir:
                      </span>
                      <span className="ml-1">
                        Mueve el elemento del tope de la pila al final
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-purple-300">
                        Insertar:
                      </span>
                      <span className="ml-1">
                        Agrega un elemento en una posición específica de la pila
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-orange-300">
                        Extraer:
                      </span>
                      <span className="ml-1">
                        Elimina un elemento en una posición específica de la
                        pila
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold text-blue-300">
                    {t('utility') || 'Utilidad'}:
                  </span>
                  <span className="ml-1">
                    {t('stackUsageExplanation') ||
                      'Útil para operaciones de deshacer, navegación, etc.'}
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-blue-300">
                    {t('implementations') || 'Implementaciones'}:
                  </span>
                  <span className="ml-1">
                    {t('stackImplementations') ||
                      'Arrays, listas enlazadas, etc.'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Header del panel de código */}
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
      </div>

      {/* Contenido del código */}
      <div
        className="bg-primary text-white text-xs p-2 rounded-b overflow-auto"
        style={{ maxHeight: '400px' }}
      >
        <div className="font-mono">{renderCode(funAction)}</div>
      </div>
    </div>
  );
};
