import { svgProgramacion1 } from "../assets/svg/SvgConstans";
const Curso = () => {
  return (
    <>
      <div className="bg-primary cursor-pointer hover:bg-secondary transition-colors rounded-lg w-28 h-28 md:h-44 md:w-44 h-33 flex flex-col justify-center items-center
      shadow-xl animate__bounceIn
      ">
        <div className="flex justify-center w-10 h-10 md:w-auto">
          {svgProgramacion1}
        </div>
        <p className="text-white text-center mt-4 text-xs px-2 md:text-lg mb-2">
          Programacion l
        </p>
      </div>

      <div className="bg-primary cursor-pointer hover:bg-secondary transition-colors rounded-lg w-28 h-28 md:h-44 md:w-44 h-33 flex flex-col justify-center items-center
      shadow-xl animate__bounceIn
      ">
        <div className="flex justify-center w-10 h-10 md:w-auto">
          {svgProgramacion1}
        </div>
        <p className="text-white text-center mt-4 text-xs px-2 md:text-lg mb-2">
          Programacion ll
        </p>
      </div>

      <div className="bg-primary cursor-pointer hover:bg-secondary transition-colors rounded-lg w-28 h-28 md:h-44 md:w-44 h-33 flex flex-col justify-center items-center
      shadow-xl animate__bounceIn
      ">
        <div className="flex justify-center w-10 h-10 md:w-auto">
          {svgProgramacion1}
        </div>
        <p className="text-white text-center mt-4 text-xs px-2 md:text-lg mb-2">
          Programacion lll
        </p>
      </div>

    </>
  );
};

export default Curso;
