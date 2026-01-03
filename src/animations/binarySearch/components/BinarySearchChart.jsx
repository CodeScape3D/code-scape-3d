import { useSelector } from 'react-redux';

export const BinarySearchChart = () => {
  const {
    array,
    leftIndex,
    rightIndex,
    midIndex,
    foundIndex,
    description,
    searchValue,
  } = useSelector(state => state.binarySearch);

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
          <div className="text-gray-400 italic p-6 text-base">
            🎯 Carga un arreglo para comenzar
          </div>
        </div>
      </div>
    );
  }

  const getIndicator = index => {
    const indicators = [];
    if (leftIndex === index) indicators.push('L');
    if (rightIndex === index) indicators.push('R');
    if (midIndex === index) indicators.push('M');
    return indicators.join(' | ');
  };

  const getIndicatorColor = index => {
    if (midIndex === index) return 'text-white font-bold text-xs';
    if (leftIndex === index) return 'text-white font-bold text-xs';
    if (rightIndex === index) return 'text-white font-bold text-xs';
    return 'text-gray-400 text-xs';
  };

  const getBackgroundColor = index => {
    // Nodo encontrado - verde brillante
    if (foundIndex === index) {
      return 'bg-gradient-to-br from-green-400 to-green-600 border-2 border-green-300 shadow-2xl shadow-green-500/70 scale-110';
    }

    // No encontrado - rojo
    if (foundIndex === -2) {
      return 'bg-gradient-to-br from-red-400/70 to-red-600/70 border-2 border-red-400 shadow-lg shadow-red-500/50';
    }

    // Nodo del medio - verde con borde negro
    if (midIndex === index) {
      return 'bg-green-500 border-2 border-black shadow-xl shadow-green-400/60 scale-110 transition-all duration-300';
    }

    // Nodo izquierdo - verde con borde morado
    if (leftIndex === index) {
      return 'bg-green-500 border-2 border-purple-500 shadow-lg shadow-green-400/50 scale-105 transition-all duration-300';
    }

    // Nodo derecho - verde con borde rojo
    if (rightIndex === index) {
      return 'bg-green-500 border-2 border-red-500 shadow-lg shadow-green-400/50 scale-105 transition-all duration-300';
    }

    // Dentro del rango activo - verde normal
    if (
      leftIndex !== -1 &&
      rightIndex !== -1 &&
      index >= leftIndex &&
      index <= rightIndex
    ) {
      return 'bg-green-500 border-2 border-green-400 shadow-lg shadow-green-400/50 transition-all duration-300';
    }

    // Fuera del rango - gris oscuro
    return 'bg-gray-600 border-2 border-gray-700 opacity-40 transition-all duration-300';
  };

  return (
    <div className="w-full max-w-full overflow-x-auto overflow-y-hidden px-2">
      {/* Descripción minimalista */}
      {description && (
        <div className="flex justify-center mb-4">
          <div className="p-2 bg-gray-800/60 rounded border border-gray-700">
            <p className="text-white text-center text-sm">{description}</p>
          </div>
        </div>
      )}

      {/* Visualización del arreglo */}
      <div className="flex justify-start sm:justify-center items-center py-4 min-h-40">
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
              {/* Indicador superior */}
              <div className="h-8 flex items-center justify-center mb-1">
                {midIndex === index && (
                  <span className="text-green-400 font-bold text-sm animate-pulse">
                    ↓
                  </span>
                )}
              </div>

              {/* Nodo */}
              <div
                className={`
                  flex items-center justify-center rounded-lg border-2
                  transition-all duration-200 transform hover:scale-110
                  ${getBackgroundColor(index)}
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

              {/* Índice */}
              <span
                className="text-gray-400 mt-1"
                style={{
                  fontSize: `${Math.max(nodeStyles.fontSize - 4, 9)}px`,
                }}
              >
                [{index}]
              </span>

              {/* Etiquetas L, M, R debajo */}
              <div className="h-6 flex items-center justify-center mt-1">
                {leftIndex === index && (
                  <span className="text-purple-400 text-xs font-bold">L</span>
                )}
                {midIndex === index && (
                  <span className="text-gray-300 text-xs font-bold">M</span>
                )}
                {rightIndex === index && (
                  <span className="text-red-400 text-xs font-bold">R</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leyenda */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded border-2 border-purple-500"></div>
          <span className="text-gray-300">Izquierda (L)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded border-2 border-black"></div>
          <span className="text-gray-300">Medio (M)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded border-2 border-red-500"></div>
          <span className="text-gray-300">Derecha (R)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-400 rounded border border-green-200"></div>
          <span className="text-gray-300">Encontrado</span>
        </div>
      </div>
    </div>
  );
};

export default BinarySearchChart;
