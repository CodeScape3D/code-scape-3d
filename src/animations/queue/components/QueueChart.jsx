import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

// Convertir cola a array (head -> tail)
const queueToArray = (node, arr = []) => {
  if (!node) return arr;
  arr.push(node);
  return queueToArray(node.next, arr);
};

export const QueueChart = () => {
  const {
    head,
    isHead,
    firstSet,
    secondSet,
    highlightedNode,
    pointer,
    deletingNode,
  } = useSelector(state => state.queue);

  const nodes = queueToArray(head);
  const nodeCount = nodes.length;

  // Calcular tamaño dinámico basado en ancho disponible
  const containerWidth = 520; // valor aproximado
  const padding = 32;
  const availableWidth = containerWidth - padding;

  const getNodeStyles = () => {
    // Mantener un tamaño de fuente legible y fijo para evitar que se haga demasiado pequeño
    const fontSize = 14;

    if (nodeCount === 0) return { width: 80, gap: 12, fontSize, height: 40 };

    // Caso especial: un solo elemento debe verse más grande y centrado
    if (nodeCount === 1) return { width: 140, gap: 12, fontSize, height: 48 };

    const maxNodeWidth = 120;
    const minNodeWidth = 60;
    const maxGap = 16;
    const minGap = 6;

    const maxSpaceNeeded = nodeCount * maxNodeWidth + (nodeCount - 1) * maxGap;
    if (maxSpaceNeeded <= availableWidth) {
      return { width: maxNodeWidth, gap: maxGap, fontSize, height: 40 };
    }

    const ratio = availableWidth / maxSpaceNeeded;
    const calculatedWidth = Math.max(
      minNodeWidth,
      Math.floor(maxNodeWidth * ratio)
    );
    const calculatedGap = Math.max(minGap, Math.floor(maxGap * ratio));

    // No reducir la fuente más abajo de fontSize fijo
    return { width: calculatedWidth, gap: calculatedGap, fontSize, height: 40 };
  };

  const { width, gap, fontSize, height } = getNodeStyles();

  const getBackgroundColor = value => {
    if (firstSet.includes(value)) return 'bg-success';
    if (secondSet.includes(value)) return 'bg-danger';
    return 'bg-secondary';
  };

  const ArrowComponent = ({ arrowWidth = 32 }) => {
    return (
      <div
        className="flex flex-col items-center justify-center flex-shrink-0"
        style={{ margin: `0 ${Math.max(2, arrowWidth / 8)}px` }}
      >
        <div className="flex items-center">
          <div
            className="h-0.5 bg-gray-400"
            style={{ width: `${arrowWidth}px` }}
          ></div>
          <div className="w-0 h-0 border-l-4 border-t-2 border-b-2 border-l-gray-400 border-t-transparent border-b-transparent"></div>
        </div>
      </div>
    );
  };

  // Mostrar mensaje cuando la cola está vacía
  if (!head || nodeCount === 0) {
    return (
      <div className="w-full max-w-[520px] h-40 flex items-center justify-center p-4 rounded-md shadow-sm bg-white border-primary">
        <div className="text-gray-500 italic p-6 text-lg animate-pulse">
          🎯 Cola vacía
        </div>
      </div>
    );
  }

  /* NodeComponent (simplificado temporalmente) */

  return (
    <div className="w-full max-w-[520px] h-40 flex items-center p-4 rounded-md shadow-sm bg-white border-primary overflow-hidden">
      <div
        className="flex items-center justify-center flex-wrap"
        style={{ gap: `${gap}px` }}
      >
        {nodes.map((node, index) => {
          const isSingle = nodeCount === 1;
          const label = isSingle
            ? 'front / rear'
            : index === 0
              ? 'front'
              : index === nodes.length - 1
                ? 'rear'
                : null;
          const isDangerNode = secondSet.includes(node.value);
          const isDeleting = deletingNode === node.value;
          const isNewNode = firstSet.includes(node.value);
          const bgClass = firstSet.includes(node.value)
            ? 'bg-success'
            : isDangerNode
              ? 'bg-danger'
              : 'bg-secondary';

          // Determinar qué animación aplicar
          let animationClass = '';
          let animationDelay = '0ms';

          if (isDeleting) {
            animationClass = 'animate-fadeOutScale';
          } else if (isNewNode) {
            animationClass = 'animate-fadeInScale';
            animationDelay = `${index * 150}ms`;
          }

          return (
            <div
              key={node.value}
              className={`flex items-center flex-shrink-0 ${animationClass}`}
              style={{
                animationDelay: animationDelay,
                animationFillMode: animationClass ? 'both' : 'none',
              }}
            >
              <div
                className={`flex flex-col items-center justify-center rounded-md shadow-md font-bold text-white px-3 ${bgClass} ${isDangerNode ? 'animate-pulse-glow-danger ring-2 ring-red-400' : ''}`}
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  minHeight: `${height}px`,
                  fontSize: `${fontSize}px`,
                }}
              >
                <div className="leading-none">{node.value}</div>
                {label && (
                  <div className="text-xs font-semibold text-white mt-1 opacity-95">
                    {label}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
