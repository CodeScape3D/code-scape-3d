import { useSelector } from 'react-redux';

export const StackChart = () => {
  const { head, isHead, firstSet, secondSet } = useSelector(
    state => state.stack
  );

  return (
    <div className="sm:w-2/6 w-2/4 h-72 sm:h-60 flex flex-col justify-end p-2 border-b-4 border-r-4 border-l-4 border-primary">
      <div className="flex flex-col">
        {renderStack(head, isHead, firstSet, secondSet)}
      </div>
    </div>
  );
};

const renderStack = (node, isHead, firstSet, secondSet) => {
  if (!node) {
    return null;
  }

  const getBackgroundColor = () => {
    if (firstSet.includes(node.value)) return 'bg-success';
    if (secondSet.includes(node.value)) return 'bg-danger';
    return 'bg-secondary';
  };

  const nodoClassName = `w-full h-8 mt-2 flex justify-center items-center 
  relative text-black font-bold transition duration-200 ease-in-out rounded-md shadow-md ${getBackgroundColor()}`;

  return (
    <>
      <div className={nodoClassName}>
        {node.value === isHead && (
          <div className="absolute ml-2 left-48 sm:left-80 md:left-80 flex items-center">
            <span className="mr-1">⬅️</span>
            <span>head</span>
          </div>
        )}
        {node.value}
      </div>

      {renderStack(node.next, isHead, firstSet, secondSet)}
    </>
  );
};
