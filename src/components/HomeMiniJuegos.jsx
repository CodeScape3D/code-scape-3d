import { useNavigate } from 'react-router-dom';
import { BasicButton } from './BasicButton';

export const HomeMiniJuegos = () => {

  const navigate = useNavigate();

  return (
    <div className="h-full flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-black text-primary mb-4 md:text-5xl">Proximamente...</h1>
        <BasicButton children="Volver al inicio" onClick={() => navigate("/")} backgroundColor='bg-prymary' />
      </div>
    </div>
  );
}
