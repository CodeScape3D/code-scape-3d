import { useSelector } from "react-redux";
export const LinkedlistChart = () => {

  const { head, isHead, isTail, firstSet, secondSet } = useSelector((state) => state.linkedList);

  return (
    <div className="flex flex-col h-32 pr-12 justify-end overflow-x-auto md:overflow-x-hidden">
      <div className="flex flex-row gap-2">
        {renderList(head, isHead, isTail, firstSet, secondSet)}
      </div>
    </div>
  );
};

const renderList = (node, isHead, isTail, firstSet, secondSet) => {
  if (!node) {
    return null;
  }

  const getBackgroundColor = () => {
    if (firstSet.includes(node.value)) return "bg-success";
    if (secondSet.includes(node.value)) return "bg-danger";
    return "bg-secondary";
  };

  const nodoClassName = `h-8 p-6 flex justify-center items-center 
  relative text-black font-bold transition duration-200 ease-in-out border-2 border-black rounded-s-md ${getBackgroundColor()}`

  return (
    <>
      <div className="relative flex flex-row shadow-md">
        {node.value === isHead && (
          <div className="absolute left-4 bottom-14 flex flex-col items-center text-black font-bold">
            <span>head</span>
            <span>⬆️</span>
          </div>
        )}
        <div className={nodoClassName}>
          {node.value}
        </div>
        <div className="relative w-3 border-t-2 border-e-2 border-b-2 border-black rounded-e-md">
          <div className="absolute left-1 bottom-3">
            {node.value === isTail ? (
              <span className="font-bold w-5" >➡️tail</span>
            ) : (
              <span>➝</span>
            )}
          </div>
        </div>
      </div>
      {renderList(node.next, isHead, isTail, firstSet, secondSet)}
    </>
  );
}