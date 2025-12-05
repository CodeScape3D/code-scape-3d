import { useSelector } from 'react-redux';

// Función para contar nodos en la pila
const countNodes = node => {
  if (!node) return 0;
  return 1 + countNodes(node.next);
};

// Función para convertir la pila a array
const stackToArray = (node, arr = []) => {
  if (!node) return arr;
  arr.push(node);
  return stackToArray(node.next, arr);
};

export const StackChart = () => {
  const { head, isHead, firstSet, secondSet } = useSelector(
    state => state.stack
  );

  const nodeCount = countNodes(head);
  const nodes = stackToArray(head);

  // Calcular tamaño dinámico basado en cantidad de elementos
  // Altura del contenedor: ~224px (h-56), con padding ~8px
  // Espacio disponible: ~216px
  const containerHeight = 224;
  const padding = 16;
  const availableHeight = containerHeight - padding;

  // Calcular altura y gap óptimos
  const getNodeStyles = () => {
    if (nodeCount === 0) return { height: 32, gap: 8, fontSize: 14 };

    // Altura mínima por nodo: 20px, máxima: 32px
    // Gap mínimo: 2px, máximo: 8px
    const maxNodeHeight = 32;
    const minNodeHeight = 20;
    const maxGap = 8;
    const minGap = 2;

    // Espacio necesario con tamaño máximo
    const maxSpaceNeeded = nodeCount * maxNodeHeight + (nodeCount - 1) * maxGap;

    if (maxSpaceNeeded <= availableHeight) {
      return { height: maxNodeHeight, gap: maxGap, fontSize: 14 };
    }

    // Calcular proporcionalmente
    const ratio = availableHeight / maxSpaceNeeded;
    const calculatedHeight = Math.max(
      minNodeHeight,
      Math.floor(maxNodeHeight * ratio)
    );
    const calculatedGap = Math.max(minGap, Math.floor(maxGap * ratio));
    const calculatedFontSize = Math.max(10, Math.floor(14 * ratio));

    return {
      height: calculatedHeight,
      gap: calculatedGap,
      fontSize: calculatedFontSize,
    };
  };

  const { height, gap, fontSize } = getNodeStyles();

  return (
    <div className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-56 flex flex-col justify-end p-2 mx-2 border-b-4 border-r-4 border-l-4 border-primary overflow-hidden">
      <div
        className="flex flex-col overflow-hidden"
        style={{ gap: `${gap}px` }}
      >
        {nodes.map((node, index) => (
          <StackNode
            key={node.value}
            node={node}
            isHead={isHead}
            firstSet={firstSet}
            secondSet={secondSet}
            height={height}
            fontSize={fontSize}
          />
        ))}
      </div>
    </div>
  );
};

const StackNode = ({ node, isHead, firstSet, secondSet, height, fontSize }) => {
  const getBackgroundColor = () => {
    if (firstSet.includes(node.value)) return 'bg-success';
    if (secondSet.includes(node.value)) return 'bg-danger';
    return 'bg-secondary';
  };

  return (
    <div
      className={`w-full flex justify-center items-center relative text-black font-bold transition-all duration-200 ease-in-out rounded-md shadow-md ${getBackgroundColor()}`}
      style={{
        height: `${height}px`,
        fontSize: `${fontSize}px`,
        minHeight: `${height}px`,
        flexShrink: 0,
      }}
    >
      {node.value === isHead && (
        <div
          className="absolute left-full ml-1 sm:ml-2 flex items-center whitespace-nowrap text-white"
          style={{ fontSize: `${Math.max(10, fontSize - 2)}px` }}
        >
          <span className="mr-1">⬅️</span>
          <span className="hidden sm:inline">head</span>
        </div>
      )}
      {node.value}
    </div>
  );
};
