import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

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

  if (!head) {
    return (
      <div className="flex flex-wrap justify-center items-center p-6 min-h-96">
        <div className="text-gray-500 italic p-6 text-lg animate-pulse">
          📋 Lista vacía
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center items-center p-6 min-h-96">
      <div className="flex flex-wrap justify-center items-center">
        {renderList(
          head,
          isHead,
          firstSet,
          secondSet,
          thirdSet,
          highlightedNode,
          pointer
        )}
      </div>
    </div>
  );
};

const renderList = (
  node,
  isHead,
  firstSet,
  secondSet,
  thirdSet,
  highlightedNode,
  pointer,
  index = 0
) => {
  if (!node) {
    return null;
  }

  const getBackgroundColor = value => {
    if (firstSet.includes(value))
      return 'bg-gradient-to-br from-green-400 to-green-600';
    if (secondSet.includes(value))
      return 'bg-gradient-to-br from-red-400 to-red-600';
    if (thirdSet.includes(value))
      return 'bg-gradient-to-br from-yellow-400 to-yellow-600';
    return 'bg-gradient-to-br from-blue-400 to-blue-600';
  };

  const isHighlighted = value => highlightedNode === value;
  const isPointed = value => pointer === value;
  const nodeIsHead = node.value === isHead;

  return (
    <div
      className="flex items-center animate-fadeInScale"
      style={{
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'both',
      }}
    >
      {/* Indicador Head */}
      {nodeIsHead && (
        <div className="flex flex-col items-center mr-3 animate-bounceIn">
          <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold mb-1 shadow-lg">
            HEAD
          </div>
          <div className="text-purple-500 text-xl animate-bounce">⬇️</div>
        </div>
      )}

      {/* Nodo */}
      <div className={`flex items-center ${node.getNext() ? 'mr-6' : ''}`}>
        <NodeComponent
          value={node.value}
          backgroundColor={getBackgroundColor(node.value)}
          isHighlighted={isHighlighted(node.value)}
          isPointed={isPointed(node.value)}
        />

        {/* Flecha conectora */}
        {node.getNext() && <ArrowComponent />}
      </div>

      {/* Recursión para siguiente nodo */}
      {renderList(
        node.next,
        isHead,
        firstSet,
        secondSet,
        thirdSet,
        highlightedNode,
        pointer,
        index + 1
      )}
    </div>
  );
};

const NodeComponent = ({
  value,
  backgroundColor,
  isHighlighted,
  isPointed,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isHighlighted) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isHighlighted]);

  return (
    <div className="relative">
      {/* Puntero */}
      {isPointed && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 animate-bounceIn">
          <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg relative">
            🎯 Puntero
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-indigo-600"></div>
          </div>
        </div>
      )}

      {/* Nodo principal */}
      <div
        className={`
          relative rounded-xl shadow-lg p-4 min-w-16 min-h-16 flex items-center justify-center
          transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl
          ${backgroundColor}
          ${isHighlighted ? 'ring-4 ring-blue-400 ring-opacity-75 animate-pulse scale-110' : ''}
          ${isAnimating ? 'animate-wiggle' : ''}
          cursor-pointer
        `}
      >
        {/* Efecto de brillo */}
        <div className="absolute inset-0 rounded-xl bg-white opacity-20 transform -skew-x-12"></div>

        {/* Valor del nodo */}
        <div className="relative text-white font-bold text-lg drop-shadow-md z-10">
          {value}
        </div>

        {/* Efecto de resaltado */}
        {isHighlighted && (
          <div className="absolute inset-0 rounded-xl bg-blue-300 opacity-30 animate-ping"></div>
        )}
      </div>
    </div>
  );
};

const ArrowComponent = () => {
  return (
    <div className="mx-3 flex items-center">
      <div className="flex items-center animate-slideRight">
        {/* Línea de la flecha */}
        <div className="w-8 h-0.5 bg-gray-400"></div>

        {/* Punta de la flecha */}
        <div className="relative ml-1">
          <div className="w-0 h-0 border-l-4 border-t-2 border-b-2 border-l-gray-400 border-t-transparent border-b-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
