import { useSelector } from 'react-redux';
import { useState } from 'react';

export const LinearSearchChart = () => {
  const { array, currentIndex, foundIndex, description } = useSelector(
    state => state.linearSearch
  );

  // Calcular tamaño dinámico basado en cantidad de elementos
  const getNodeSize = () => {
    const count = array.length;
    if (count <= 5) return { nodeWidth: 64, fontSize: 18, gap: 8 };
    if (count <= 8) return { nodeWidth: 52, fontSize: 14, gap: 6 };
    if (count <= 12) return { nodeWidth: 44, fontSize: 12, gap: 4 };
    if (count <= 16) return { nodeWidth: 36, fontSize: 11, gap: 3 };
    return { nodeWidth: 30, fontSize: 10, gap: 2 };
  };

  const nodeStyles = getNodeSize();

  if (array.length === 0) {
    return (
      <div className="w-full max-w-full overflow-hidden px-2">
        <div className="flex flex-col justify-center items-center p-6 min-h-48">
          <div className="text-gray-500 italic p-6 text-lg animate-pulse">
            🔍 Arreglo vacío
          </div>
          <p className="text-gray-400 text-sm">
            Ingresa valores separados por comas
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full overflow-x-auto overflow-y-hidden px-2">
      {/* Descripción del paso actual */}
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-gray-800/80 rounded-lg border border-gray-600 max-w-lg">
          <p className="text-white text-center text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>

      {/* Visualización del arreglo */}
      <div className="flex justify-start sm:justify-center items-center py-4 min-h-32">
        <div
          className="flex flex-nowrap items-center"
          style={{ gap: `${nodeStyles.gap}px` }}
        >
          {array.map((value, index) => (
            <div
              key={`${value}-${index}`}
              className="flex flex-col items-center animate-fadeInScale flex-shrink-0"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both',
              }}
            >
              {/* Indicador de posición actual */}
              <div className="h-6 flex items-center justify-center min-h-6">
                {currentIndex === index && (
                  <span className="text-blue-400 font-bold text-sm animate-pulse">
                    ↓
                  </span>
                )}
              </div>

              {/* Nodo */}
              <NodeComponent
                value={value}
                index={index}
                currentIndex={currentIndex}
                foundIndex={foundIndex}
                nodeStyles={nodeStyles}
              />

              {/* Índice */}
              <span
                className="text-gray-400 mt-1"
                style={{
                  fontSize: `${Math.max(nodeStyles.fontSize - 4, 9)}px`,
                }}
              >
                [{index}]
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Leyenda */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded border border-blue-300"></div>
          <span className="text-gray-300">Actual</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded border border-green-300"></div>
          <span className="text-gray-300">Encontrado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500/50 rounded border border-red-400"></div>
          <span className="text-gray-300">No encontrado</span>
        </div>
      </div>
    </div>
  );
};

const NodeComponent = ({
  value,
  index,
  currentIndex,
  foundIndex,
  nodeStyles,
}) => {
  const getBackgroundColor = () => {
    if (foundIndex === index) {
      return 'bg-gradient-to-br from-green-400 to-green-600 border-2 border-green-300 shadow-2xl shadow-green-500/70 scale-110';
    }
    if (foundIndex === -2) {
      return 'bg-gradient-to-br from-red-400/70 to-red-600/70 border-2 border-red-400 shadow-lg shadow-red-500/50';
    }
    if (currentIndex === index) {
      return 'bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-blue-300 shadow-2xl shadow-blue-500/70 scale-105';
    }
    return 'bg-gradient-to-br from-indigo-500 to-indigo-700 border-2 border-indigo-400 shadow-lg shadow-indigo-500/50';
  };

  return (
    <div
      className={`
        flex items-center justify-center rounded-lg border-2
        transition-all duration-200 transform hover:scale-110
        ${getBackgroundColor()}
      `}
      style={{
        width: `${nodeStyles.nodeWidth}px`,
        height: `${nodeStyles.nodeWidth}px`,
      }}
    >
      <span
        className="text-white font-bold drop-shadow-md"
        style={{ fontSize: `${nodeStyles.fontSize}px` }}
      >
        {value}
      </span>
    </div>
  );
};

export default LinearSearchChart;
