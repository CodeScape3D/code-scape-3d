import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-purple-900 mb-4">Oops!</h1>
        <p className="text-lg text-gray-800 mb-4">Disculpa, ha ocurrido un error</p>
        <p className="text-gray-500 italic text-2xl mb-4">Not Found 404</p>
        <Link to="/" className="p-2 bg-primary text-white hover:underline rounded-md">Volver al inicio</Link>
      </div>
    </div>
  );
}

export default NotFound;
