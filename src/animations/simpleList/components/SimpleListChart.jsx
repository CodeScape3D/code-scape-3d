import { useSelector } from 'react-redux';
import { useState, useEffect, useMemo } from 'react';

// Función para contar nodos
const countNodes = node => {
  if (!node) return 0;
  return 1 + countNodes(node.next);
};

// Función para convertir lista a array
const listToArray = (node, arr = []) => {
  if (!node) return arr;
  arr.push(node);
  return listToArray(node.next, arr);
};

export const SimpleListChart = () => {
  const {
    head,
    isHead,
    firstSet,
    secondSet,
    thirdSet,
    highlightedNode,
    pointer,
  } = useSelector(state => state.simpleList);

  const nodes = useMemo(() => listToArray(head), [head]);
  const nodeCount = nodes.length;

  // Calcular tamaño dinámico basado en cantidad de nodos
  const getNodeSize = () => {
    if (nodeCount <= 4)
      return {
        size: 'normal',
        nodeWidth: 64,
        fontSize: 18,
        arrowWidth: 32,
        padding: 16,
      };
    if (nodeCount <= 6)
      return {
        size: 'medium',
        nodeWidth: 52,
        fontSize: 14,
        arrowWidth: 24,
        padding: 12,
      };
    if (nodeCount <= 8)
      return {
        size: 'small',
        nodeWidth: 44,
        fontSize: 12,
        arrowWidth: 16,
        padding: 8,
      };
    return {
      size: 'tiny',
      nodeWidth: 36,
      fontSize: 10,
      arrowWidth: 12,
      padding: 6,
    };
  };

  const nodeStyles = getNodeSize();

  if (!head) {
    return (
      <div className="w-full max-w-full overflow-hidden px-2">
        <div className="flex justify-center items-center p-6 min-h-48">
          <div className="text-gray-500 italic p-6 text-lg animate-pulse">
            📋 Lista vacía
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full overflow-x-auto overflow-y-hidden px-2">
      <div className="flex justify-start sm:justify-center items-center py-4 min-h-48">
        <div className="flex flex-nowrap items-center">
          {nodes.map((node, index) => (
            <div
              key={node.value}
              className="flex items-center animate-fadeInScale flex-shrink-0"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both',
              }}
            >
              {/* Nodo */}
              <NodeComponent
                value={node.value}
                firstSet={firstSet}
                secondSet={secondSet}
                thirdSet={thirdSet}
                isHighlighted={highlightedNode === node.value}
                isPointed={pointer === node.value}
                nodeStyles={nodeStyles}
                isHead={index === 0}
              />

              {/* Flecha conectora */}
              {node.getNext() && (
                <ArrowComponent arrowWidth={nodeStyles.arrowWidth} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const NodeComponent = ({
  value,
  firstSet,
  secondSet,
  thirdSet,
  isHighlighted,
  isPointed,
  nodeStyles,
  isHead = false,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const getBackgroundColor = () => {
    if (firstSet.includes(value))
      return 'bg-gradient-to-br from-green-400 to-green-600';
    if (secondSet.includes(value))
      return 'bg-gradient-to-br from-red-400 to-red-600';
    if (thirdSet.includes(value))
      return 'bg-gradient-to-br from-yellow-400 to-yellow-600';
    return 'bg-gradient-to-br from-blue-400 to-blue-600';
  };

  useEffect(() => {
    if (isHighlighted) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isHighlighted]);

  const isDangerNode = secondSet.includes(value);

  return (
    <div className="relative flex-shrink-0">
      {/* Indicador HEAD - solo para el primer nodo */}
      {isHead && (
        <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 z-10">
          <div
            className="bg-purple-500 text-white px-1 sm:px-2 py-0.5 rounded-full font-bold shadow-lg whitespace-nowrap"
            style={{ fontSize: `${Math.max(8, nodeStyles.fontSize - 4)}px` }}
          >
            HEAD
          </div>
        </div>
      )}

      {/* Puntero */}
      {isPointed && (
        <div className="absolute -top-14 sm:-top-16 left-1/2 transform -translate-x-1/2 animate-bounceIn z-20">
          <div
            className="bg-indigo-600 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded-full font-bold shadow-lg relative whitespace-nowrap"
            style={{ fontSize: `${Math.max(8, nodeStyles.fontSize - 4)}px` }}
          >
            🎯 <span className="hidden sm:inline">Puntero</span>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-indigo-600"></div>
          </div>
        </div>
      )}

      {/* Nodo principal */}
      <div
        className={`
          relative rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center
          transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl
          ${getBackgroundColor()}
          ${isHighlighted ? 'ring-2 sm:ring-4 ring-blue-400 ring-opacity-75 animate-pulse scale-105' : ''}
          ${isAnimating ? 'animate-wiggle' : ''}
          ${isDangerNode ? 'animate-pulse-glow-danger ring-2 ring-red-400' : ''}
          cursor-pointer
        `}
        style={{
          width: `${nodeStyles.nodeWidth}px`,
          height: `${nodeStyles.nodeWidth}px`,
          padding: `${nodeStyles.padding}px`,
          minWidth: `${nodeStyles.nodeWidth}px`,
        }}
      >
        {/* Efecto de brillo */}
        <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-white opacity-20 transform -skew-x-12"></div>

        {/* Valor del nodo */}
        <div
          className="relative text-white font-bold drop-shadow-md z-10 truncate"
          style={{ fontSize: `${nodeStyles.fontSize}px` }}
        >
          {value}
        </div>

        {/* Efecto de resaltado */}
        {isHighlighted && (
          <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-blue-300 opacity-30 animate-ping"></div>
        )}
      </div>
    </div>
  );
};

const ArrowComponent = ({ arrowWidth }) => {
  return (
    <div
      className="flex items-center flex-shrink-0"
      style={{ margin: `0 ${Math.max(2, arrowWidth / 8)}px` }}
    >
      <div className="flex items-center animate-slideRight">
        {/* Línea de la flecha */}
        <div
          className="h-0.5 bg-gray-400"
          style={{ width: `${arrowWidth}px` }}
        ></div>

        {/* Punta de la flecha */}
        <div className="relative ml-0.5">
          <div className="w-0 h-0 border-l-4 border-t-2 border-b-2 border-l-gray-400 border-t-transparent border-b-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
