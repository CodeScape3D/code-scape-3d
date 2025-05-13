import { useNavigate } from 'react-router-dom';
import { BasicButton } from './BasicButton';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-grow items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-primary mb-4">Oops!</h1>
        <p className="text-lg text-gray-800 mb-4">
          Disculpa, ha ocurrido un error
        </p>
        <p className="text-gray-900 italic text-2xl mb-4">Not Found 404</p>
        <BasicButton
          children="Volver al inicio"
          onClick={() => navigate('/')}
          backgroundColor="bg-prymary"
        />
      </div>
    </div>
  );
};
