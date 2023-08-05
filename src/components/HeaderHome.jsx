import Logo from '../assets/logo.png'

const HeaderHome = () => {
  return (
    <>
      <div className="flex gap-4 justify-center items-center">
        <h2 className="self-center text-4xl font-bold">CodeScape3D</h2>
        <img width={70.67} height={64.78} src={Logo} alt="icon" />
      </div>
      <p className="mt-1 text-lg text-center">Aprende Programación de forma interactiva</p>
    </>
  );
};

export default HeaderHome;
